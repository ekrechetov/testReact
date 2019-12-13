import React, {Component} from 'react';
import StartButton from './components/StartButton/StartButton';
import PopUp from './components/PopUp/PopUp';
import './App.css';

class App extends Component {
  state = {isVisible: false}; 
  tooglePopup() {
    this.setState({isVisible: !this.state.isVisible});
  }
  hidePopup(e) {
    if (this.state.isVisible && e.target.tagName !== 'A') {
      this.setState({isVisible: false});
    }
  }
  componentDidMount() {
    let elem = document.getElementsByTagName('body');
    elem[0].addEventListener('click', this.hidePopup.bind(this));
  }
  render() { 
    return(
      <>
        <div onClick={this.tooglePopup.bind(this)}>
          <StartButton />
        </div>
        {this.state.isVisible ?
        <PopUp /> :
        null}
      </>
    )
  }
}
export default App;