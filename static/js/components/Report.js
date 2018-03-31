import React from 'react'
import Header from './layout/Header'
import Plot from './layout/Plot'
import ResultTable from './layout/ResultTable'
import Return from './layout/Return'
import Footer from './layout/Footer'


class Report extends React.Component {
  render() {
    return (
      <div className="container">
      <Header />
        <div className="inner-container">
          <Plot />
          <hr className="horizontal-line" />
          <ResultTable />
          <hr className="horizontal-line" />
          <Return />
        </div>
      {/*<Footer /> */}
      </div>
    )
  }
}


export default Report
