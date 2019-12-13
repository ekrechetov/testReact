import React, {Component} from 'react';
import MyButton from "../MyButton/MyButton";
import './PopUp.css';

class PopUp extends Component {
  render() {
    return(
      <div id="popup" className="container">
        <div className="popup">
          <div className="popup-content">
            <h2 className="popup-title">Awesome!</h2>
            <p className="popup-body">You just found my pastel gradient button.</p>
            <p className="popup-body"> Now, let's see what else it does. :P </p>
            <MyButton />
          </div>  
        </div>
      </div>
    )
  }
}
export default PopUp;