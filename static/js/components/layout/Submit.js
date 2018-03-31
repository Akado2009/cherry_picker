import React from 'react'


class Submit extends React.Component {

  submitToHommel (e) {
    window.location = '/report'
  }

  render () {
    return (
      <div className="submit">
        <button type="button" className="btn btn-primary btn-lg round" onClick={this.submitToHommel.bind(this)}>CALCULATE</button>
      </div>
    )
  }
}


export default Submit
