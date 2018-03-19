import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/InputActions'
import { RadioGroup, RadioButton } from 'react-radio-buttons'


class TestType extends React.Component {
  render () {
    const style = {
      iconSize: 25,
      iconInnerSize: 15,
      roolColor: 'white',
      pointColor: '#2EE59D',
    }

    return (
      <div className="test-type-select">
        <h1>Select Test Type</h1>
        <section className="radio-tests">
        <RadioGroup onChange={ this.props.changeTestType}>
          <RadioButton value="self" {...style}>
            Self-contained
          </RadioButton>
          <RadioButton value="default"  {...style}>
            Default composition
          </RadioButton>
          <RadioButton value="choose"  {...style}>
            Choose composition
          </RadioButton>
          <RadioButton value="all"  {...style}>
            All
          </RadioButton>
          </RadioGroup>
        </section>
        { this.props.mode == 'choose' &&
          <section className="test-type-input">
            idi nahooi
          </section>
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
    const newStore = state.inputs
    return {
        mode: newStore.testTypeMode,
        values: newStore.testTypeChosen
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeTestType: (params) => dispatch(actions.changeTestType(params)),
        addTestValues: (params) => dispatch(actions.addTestValues(params))
    }
}

export default connect(stateToProps, dispatchToProps)(TestType)
