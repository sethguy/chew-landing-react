
const API_ROOT = window.location.port == 3000 ? "http://localhost:8080" : ""

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, config = {}) => {

  const fullUrl = `${API_ROOT}${endpoint}`

  var responseType = "json"

  if (config && config.responseType) {

    responseType = config.responseType;

  }

  return fetch(fullUrl, config)

    .then(response => response[responseType]().then(json => {

      if (!response.ok) {
        return Promise.reject(json)
      }

      return Object.assign({}, json)
    }))
}

export const CALL_API = 'Call API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let {endpoint, config} = callAPI
  const { types} = callAPI

  var state = store.getState()
  if (!config.headers) {

    config.headers = {

    }

  }

  if (state && state.user && state.user.accessToken) {

    config.headers['x-api-access-token'] = state.user.accessToken

  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({
    type: requestType
  }))

  return callApi(endpoint, config).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}