export const ACTION_TYPE = "ACTION"

export const ActionTypes = {
  ACTION_TYPE
}


const ActionCreater = (data) => {

  return {
    type: ACTION_TYPE
  }

}

export const actionDispachConnector = (data) => (dispatch, getState) => {

  return dispatch(ActionCreater(data))
}
