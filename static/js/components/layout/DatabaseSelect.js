import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/InputActions'
import  MultiSelectReact  from 'multi-select-react';



class DatabaseSelect extends React.Component {
  render () {

    const selectedOptionsStyles = {
      color: "#3c763d",
      backgroundColor: "#dff0d8"
    }

    const optionsListStyles = {
        backgroundColor: "#dff0d8",
        color: "#3c763d"
    }

    return (
      <div className="database-select">
        <h1>Select Database</h1>
        <MultiSelectReact
          className="multi-select"
          options={this.props.databases}
          optionClicked={this.props.addDatabase}
          selectedBadgeClicked={this.props.addDatabase}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles} />
      </div>
    )
  }
}


const stateToProps = (state) => {
    const newStore = state.inputs
    return {
        databases: newStore.databases
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addDatabase: (params) => dispatch(actions.addDatabase(params))
    }
}

export default connect(stateToProps, dispatchToProps)(DatabaseSelect)
