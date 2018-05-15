import React, { Component } from 'react';
import { connect } from 'react-redux';

import CanvasElement from './Components/CanvasElement'

import './Style.css';

class CanvasGridIndex extends Component {

  render() {
    // const renderGrid = userphotos || index .map((file, index) => {
    //     return <CanvasElement imgData={file} key={someId} index = {indice} selectImg = {this.selectImgHandler}/>
    // });

    return (
        <div className='CanvasGridIndex'>
          <h2>Canvas Grid Test</h2>
          <div className='GridContainer'>
            {/* {renderGrid} */}
            <CanvasElement />
          </div>
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

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasGridIndex);
