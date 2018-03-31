import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/InputActions'
import Dropzone from 'react-dropzone'
import request from 'superagent'

import * as utils from '../../utils/token.js'



class FileUploader extends React.Component {

  constructor() {
    super()

    this.state = {
      uploading: false
    }

  }

  onDrop(acceptedFiles) {

    var file = new FormData();
    var token = utils.getCookie('csrftoken')
    file.append('csrfmiddlewaretoken', token)
    file.append('file',acceptedFiles[0])
    var req = request
              .post('/cherry_picker/upload_file')
              .send(file);
    req.end(function(err,response){
        console.log("upload done!!!!!");
    });
    this.props.changeFilename(acceptedFiles[0])
  }

  render () {
    const dropzoneStyle = {
      width  : "70%",
      height : "200px",
      border : "2px dotted #C40000",
      textAlign: "center",
      margin: "0px auto",
      lineHeight: "80px",
      color: "white",
      fontSize: "24px"
    };

    return (
      <div className="file-upload-select">
        <h1>Upload File</h1>
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)} accept="image/jpeg, image/png" style={dropzoneStyle}>
              <p>Drop your table here.<br /> TSV/CSV formats will be processed only.</p>
            </Dropzone>
          </div>
          <aside>
            <h3>Uploaded file</h3>
            { this.props.filename &&
            <ul className="uploaded-files">
              {
                this.props.filename.map(f => <li key={f.name}><em>{f.name} - {f.size} bytes</em></li>)
              }
            </ul>
            }
          </aside>
        </section>
      </div>
    )
  }
}



const stateToProps = (state) => {
    const newStore = state.inputs
    return {
        filename: newStore.filename
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeFilename: (params) => dispatch(actions.changeFilename(params))
    }
}

export default connect(stateToProps, dispatchToProps)(FileUploader)
