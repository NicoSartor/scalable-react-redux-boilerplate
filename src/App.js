import React, { PureComponent } from 'react';
import './App.css';

import { connect } from 'react-redux';

import ImageEditor from './ImageEditor/0-ImageEditorIndex'
import CanvasGridTest from './CanvasGridTest/0-CanvasGridIndex'
 
class App extends PureComponent {
  render() {
    return (
      <div className="App">
       <CanvasGridTest />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
}

const mapDispatchToProps = dispatch => {
  return{

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
