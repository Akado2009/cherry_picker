import React from 'react'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'


class ExitModal extends React.Component{
  render(){
    const { text, onRequestClose } = this.props

    const style = {
      overlay: {
        backgroundColor : 'rgba(0, 0, 0, 0.9)'

    },
    content: {
        width: '40%',
        backgroundColor: '#3d3d3d'
      }
    }

    return (
      <Modal
        onRequestClose={onRequestClose}
        effect={Effect.Fall}  style={style}>
        <div className="exit-modal">
          <h1>{text}</h1><br />
          <button className="yes-button" onClick={() => window.location.href = '/'}>Yes</button>
          <button className="no-button" onClick={ModalManager.close}>No</button>

        </div>
      </Modal>
      );
    }
}

class Return extends React.Component {

  submitToHommel (e) {
    console.log(e)
  }

  openModal(e) {
    let text = `Do you really want to quit?\nYour results won't be saved.`

    ModalManager.open(<ExitModal text={text} onRequestClose={() => true}/>)
  }

  render () {
    let text = `Do you really want to quit?\nYour results won't be saved.`
    return (
      <div className="return">
        <button type="button" className="btn btn-primary btn-lg round" onClick={this.openModal.bind(this)}>BACK</button>

      </div>
    )
  }
}


export default Return
