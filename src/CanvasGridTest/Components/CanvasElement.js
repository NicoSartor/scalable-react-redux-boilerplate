//CanvasElement cannot be stateless component because it relies on refs.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


import store from '../../store'

import { resetImgSrc, quickFix } from '../Action'

import './CanvasElement.css';

class CanvasElement extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){

    }

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs['canvasElement' + this.props.index]);  
        let ctx = canvas.getContext('2d');
        //let img = new Image();
        //let file = this.props.imgData;
        //const reader = new FileReader();
        // img.src = this.props.imgSrc;
        // reader.onload = ((e) => {
        //     console.log('LOADED READER')
        //     img.src = e.target.result
        // })
        console.log('[IMG SRC PROP]', this.props.srcImg)
        canvas.width = 150; //to become a state value so canvas becomes flexible and 
        canvas.height = 150;
         console.log('this.props.imgSrc')
        // //reader.readAsDataURL(file)


        if (this.props.srcImg){
            console.log('DRAAAAAAW')
            ctx.drawImage(this.props.srcImg, 0, 0);
            //console.log('DRAAAAAAW')
            //store.dispatch(quickFix())
        }


        // img.onload = (()=>{
        //     console.log('[DRAW IMAGE]', this.props.index)
        //     ctx.drawImage(img, 0, 0, 150, 150);
        //     console.log('IMG FINISHED', this.props.index)
        //     store.dispatch(resetImgSrc())
        
        // })
    }

    render() {
        console.log('test')
        return(
            <div className='CanvasElement'>
                <canvas id='canvas' className={'canvasElement' + this.props.index } ref={'canvasElement' + this.props.index }></canvas>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //imgSrcs: state.CanvasGridReducer.imgSrcs
    };
  }
  
const mapDispatchToProps = dispatch => {
    return{
  
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CanvasElement);