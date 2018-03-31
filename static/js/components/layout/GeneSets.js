import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/InputActions'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import  MultiSelectReact  from 'multi-select-react'


class GeneSets extends React.Component {

  render () {
    const style = {
      iconSize: 25,
      iconInnerSize: 15,
      roolColor: 'white',
      pointColor: '#C40000',
    }

    const selectedOptionsStyles = {
      color: "black",
      backgroundColor: "#C40000"
    }

    const optionsListStyles = {
        backgroundColor: "#C40000",
        color: "black"
    }

    return (
      <div className="gene-sets-select">
        <h1>Gene Sets</h1>
        <section className="radio-genes">
        <RadioGroup onChange={ this.props.changeGeneMode} horizontal>
          <RadioButton value="all" {...style}>
            All
          </RadioButton>
          <RadioButton value="custom"  {...style}>
            Custom
          </RadioButton>
          </RadioGroup>
        </section>
        { this.props.mode == 'custom' &&
        <section className="gene-set-input">
          <h2>Gene Sets Input</h2>
          <MultiSelectReact
            className="multi-select"
            options={this.props.geneSets}
            optionClicked={this.props.addGeneSet}
            selectedBadgeClicked={this.props.addGeneSet}
            selectedOptionsStyles={selectedOptionsStyles}
            optionsListStyles={optionsListStyles} />
        </section>
        }
      </div>
    )
  }
}


const stateToProps = (state) => {
    const newStore = state.inputs
    return {
        mode: newStore.geneSetsMode,
        geneSets: newStore.geneSets
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeGeneMode: (params) => dispatch(actions.changeGeneMode(params)),
        addGeneSet: (params) => dispatch(actions.addGeneSet(params))
    }
}

export default connect(stateToProps, dispatchToProps)(GeneSets)
