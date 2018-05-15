//CanvasElement cannot be stateless component because it relies on refs.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './CanvasElement.css';

class CanvasElement extends Component {
    constructor(props){
        super(props)

        //this.test = this.test.bind(this);
    }

    componentWillMount(){

    }

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs['somethingDynamicToo']);  
        let ctx = canvas.getContext('2d');

        canvas.width = 150;
        canvas.height = 150;
        console.log(canvas)
    }

    render() {
        return(
            <div className='CanvasElement'>
                <canvas id='somethingDynamic' ref='somethingDynamicToo'></canvas>
                <p ref='testRef'></p>
            </div>
        )
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
  
export default connect(mapStateToProps, mapDispatchToProps)(CanvasElement);