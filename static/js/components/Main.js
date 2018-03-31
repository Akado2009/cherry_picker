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
    let filenameChosen = false
    let databaseChosen = false
    let geneSetsChosen = false

    for(let db of this.props.databases) {
      if (db.value == true) {
        databaseChosen = true
      }
    }

    for(let set of this.props.geneSets) {
      if (set.value == true) {
        geneSetsChosen = true
      }
    }

    if (this.props.geneMode == 'all') {
      geneSetsChosen = true
    }

    return(
      <div className="container">
        <Header />
        <div className="inner-container">
        <FileUploader />
        <hr className="horizontal-line" />
        {
        this.props.filename &&
        <div>
          <DatabaseSelect />
          <hr className="horizontal-line" />
        </div>
        }
        {
        databaseChosen &&
        <div>
          <GeneSets />
          <hr className="horizontal-line" />
        </div>
        }

        {
        geneSetsChosen &&
        <div>
          <TestType />
          <hr className="horizontal-line" />
        </div>
        }
        <Submit />
        </div>
        {/*<Footer /> */}
      </div>
    )
  }
}

const stateToProps = (state) => {
    const newStore = state.inputs
    return {
        databases: newStore.databases,
        filename: newStore.filename,
        geneSets: newStore.geneSets,
        geneMode: newStore.geneSetsMode
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addDatabase: (params) => dispatch(actions.addDatabase(params))
    }
}

export default connect(stateToProps, dispatchToProps)(App)
