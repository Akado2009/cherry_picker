import React from 'react'


class Submit extends React.Component {

  submitToHommel (e) {
    console.log(e)
  }

  render () {
    return (
      <div className="submit">
        <button type="button" className="btn btn-primary btn-lg round">CALCULATE</button>
      </div>
    )
  }
}


export default Submit
