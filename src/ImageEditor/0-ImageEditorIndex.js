import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Style.css';

class ImageEditor extends Component {
  render() {
    return (
        <div className="ImageEditor">
          <h2>Image Editor</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageEditor);
