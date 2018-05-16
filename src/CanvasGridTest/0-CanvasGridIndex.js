import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CanvasElement from './Components/CanvasElement'
import UploadComponent from './Components/UploadComponent'

import {
    prepImgSrc,
} from './Action';

import './Style.css';





class CanvasGridIndex extends PureComponent {

  render() {
    let fileList = this.props.fileList;
    let indices = Object.keys(fileList);
    let i = 0;
    const reader = new FileReader();

    console.log('[IMG SRCS FROM STATE]' ,this.props.imgSrcs)

    // if(this.props.imgSrcs != ''){
        
    // }
    const renderGrid = this.props.imgSrcs.map((file, index) => {
        console.log('[FILE IMPORTING TO CANVAS]',file)
        return <CanvasElement srcImg={file}  key={index} index = {index}/>
    })

    // const prepGrid = Object.keys(fileList).map((index) => { //How to make this one by one?
    //     let imgSrc = '';
    //     //let key = Math.floor(Math.random() * fileList[index].lastModified)
    //     reader.onload = ((e) => {
    //         console.log('LOADED READER')
    //         imgSrc = e.target.result;
    //         this.props.prepImgSrc(imgSrc)
    //     })
    //     reader.readAsDataURL(fileList[index])
    //     console.log('[EACH FILE]', imgSrc)
    //     //return <CanvasElement imgSrc={imgSrc} imgData={fileList[index]} key={index} index = {index}/>
    // });

    //const renderGrid = () => <CanvasElement imgSrc={imgSrc} imgData={fileList[index]} key={index} index = {index}/>

    // const renderGrid = Object.keys(fileList).map((index) => { //How to make this one by one?
    //     return <CanvasElement imgSrc={this.props.imgSrcs[index]} imgData={fileList[index]} key={index} index = {index}/>
    // });
    // const renderGrid = this.props.imgSrcs.map((i) => {
    //     return <CanvasElement imgSrc={this.props.imgSrcs[i]} imgData={fileList[i]} key={i} index = {i}/>
    // })
    // const testRender = for(let i = 0; i < fileList.length + 1; i++){
    //     return <CanvasElement imgSrc={this.props.imgSrcs[i]} imgData={fileList[i]} key={i} index = {i}/>
    // }

    // if(this.props.imgSrcs !== ''){
    //     return <CanvasElement imgSrc={this.props.imgSrcs} />
    // }
    console.log('[CANVAS INDEX RENDER]', this.props.imgSrcs)
    // if(this.props.imgSrcs !== ''){
        
    //         return(
    //         <div className='CanvasGridIndex'>
    //             <h2>Canvas Grid Test!</h2>
    //             <UploadComponent />
    //             <div className='GridContainer'>
    //                 <CanvasElement imgSrc={this.props.imgSrcs} />
    //             </div>
    //         </div>
    //         )
    // }
    return (
        <div className='CanvasGridIndex'>
          <h2>Canvas Grid Test</h2>
          <UploadComponent />
          <div className='GridContainer'>
            {renderGrid}
          </div>
        </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ImgFiles: state.CanvasGridReducer.ImgFiles,
    fileList: state.CanvasGridReducer.fileList,
    imgSrcs: state.CanvasGridReducer.imgSrcs //isArr
  };
}

const mapDispatchToProps = dispatch => {
  return{
    prepImgSrc: (src) => dispatch(prepImgSrc(src))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasGridIndex);
