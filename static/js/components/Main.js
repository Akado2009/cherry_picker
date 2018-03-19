import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/InputActions'
import Header from './layout/Header'
import FileUploader from './layout/FileUploader'
import DatabaseSelect from './layout/DatabaseSelect'
import GeneSets from './layout/GeneSets'
import TestType from './layout/TestType'
import Submit from './layout/Submit'
import Footer from './layout/Footer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount () {
    this.setState({
      databases: this.props.databases
    })
  }
  testClick (e) {
    this.props.addDatabase('SHIT')

  }
  render () {
    return(
      <div className="container">
        <Header />
        <div className="inner-container">
        <FileUploader />
        <hr className="horizontal-line" />
        <DatabaseSelect />
        <hr className="horizontal-line" />
        <GeneSets />
        <hr className="horizontal-line" />
        <TestType />
        <hr className="horizontal-line" />
        <Submit />
        </div>
        <Footer />
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

export default connect(stateToProps, dispatchToProps)(App)
