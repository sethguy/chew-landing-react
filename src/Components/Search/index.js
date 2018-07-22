import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../actions'


import { Route } from 'react-router-dom'

class SearchComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "Search",

      database: [

        { id: 1, name: "chinaTown" },

        { id: 2, name: "shaw" }

      ]

    }
  }

  serachDatabase = (id) => {

    var filteredlist = this.state.database.filter((item) => {

      return item.id == id;

    })
    console.log("insearch", filteredlist[0])


    this.setState({
      partner: filteredlist[0]
    })



  }


  serachDatabaseReduce = (id) => {

    var partner = this.state.database.reduce((acc, item) => {

      if (item.id == id) {

        return item

      }

      return acc

    }, null)
    console.log("insearch reduce", partner)


    this.setState({
      partner: partner
    })



  }


  componentDidMount() {

    var hash = window.location.hash

    var firstsplit = hash.split('?')

    console.log('firstsplit', firstsplit)


    var paramlist = firstsplit[1].split("&")


    var paramObject = {};
    console.log('paramlist', paramlist)

    paramlist.reduce((paramObject, item) => {


      console.log('inn reduce', item)
      var lastSPlit = item.split('=')
      console.log('lastSPlit', lastSPlit)

      var key = lastSPlit[0]
      var value = lastSPlit[1]


      return {
        ...paramObject,
        [key]:value
      }


    }, paramObject)

    /*paramlist.forEach((item, i) => {

      var lastSPlit = item.split('=')
      console.log('in loo', lastSPlit)
      var key = lastSPlit[0]
      var value = lastSPlit[1]

      paramObject[key] = value


    })

    */
    console.log('paramObject', paramObject)


    var { id, name } = paramObject;

    if (id && id.length.length != 0) {
      this.serachDatabaseReduce(id)


    }


  }


  render() {
    return (
      <div>
        <h1 onClick={(event) => { window.location.hash = "hello?bid=" + 5432454325423 }} >{this.state.title}</h1>

        <input />

        {this.state.partner && <p>{this.state.partner.name}</p>}

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const Search = connect(mapStateToProps, {
  actionDispachConnector
})(SearchComponet)

export default Search