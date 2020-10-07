import React from 'react'
import ReactDOM from 'react-dom'
class PortalModal extends React.Component {
    

    render () {

      if (!this.props.visible) {
          return null;
      }

        return ReactDOM.createPortal((
          <div>
            <h1>{this.props.children}</h1>
          </div>
        ), document.getElementById('modal-root'))
      }
}

export default PortalModal