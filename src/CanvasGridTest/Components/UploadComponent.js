import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../store'

import { 
    fileCatcher,
    imgCreator,
    quickFix
 } from '../Action'


let offScreenCanvas;

const uploadHandler = (event) => {
    // for(let i = 0 ; i<Object.keys(event.target.files); i++){
    //     store.dispatch(fileCatcher(event.target.files[i]))
    //     console.log('[EVENT TARGET RESULT]', event.target.files[i])
    // }
    //store.dispatch(fileCatcher(event.target.files))

    // for (let i = 0; i<event.target.files.length; i++){
        fetchImgData(event.target.files,  0)
        // const reader = new FileReader();
        // reader.readAsDataURL(event.target.files[i])
        // let img = new Image();

        // reader.onload = ((e) => {
        //     console.log('LOADED READER')
        //     let imgData = e.target.result
        //     img.src = imgData
        // })
        // img.onload = (()=>{
        //     console.log('[DRAW IMAGE]')
        //     console.log('IMG FINISHED')
        //     //store.dispatch(resetImgSrc())

        // })
    // }
    

}

const fetchImgData = (files, i) => {
    console.log('[START RECURSION AT INDEX]', i, offScreenCanvas)
    const reader = new FileReader();
    reader.readAsDataURL(files[i])
    let img = new Image();
    let exportImg = new Image();

    const ctx = offScreenCanvas.getContext('2d');
     //150 hard coded will become a grab from state
            

    reader.onload = ((e) => {
        console.log('LOADED READER')
        let imgData = e.target.result
        img.src = imgData
        console.log('[imgData]', imgData)
    })
    img.onload = (()=>{
        i++
        console.log('IMG FINISHED', i, files.length)
        console.log('[I]', i)
    // Draws img on offScreenCanvas
        ctx.drawImage(img, 0, 0, 150, 150);

        console.log('[OFF SCREEN CANVAS DATA]', offScreenCanvas.toDataURL())
    //Prepares canvas data for exporting
       exportImg.src = offScreenCanvas.toDataURL(); //this can be a png file?
    //Exports compressed data after loading it
       exportImg.onload = (()=>{
           store.dispatch(imgCreator(exportImg))
       })
        

        //exportCanvasData();
            
            //data intercept, CANVAS CANT BE ADDED HERE (try intercept after reducer is created)
            
            //ships processed img to reducer.
        //store.dispatch(imgCreator(img)) // Creates img obj with src already implemented
            //---->store.dispatch(imgCreator(newImg))
        if(i >= files.length){
            return;
        }


        fetchImgData (files, i)
            

    })
}

// const UploadComponent = (props) => {
//     return(
//         <div className='UploadComponent'>
//             <h3>Upload Emulation</h3>
//             <input type="file" name='image' multiple id='fileInput' onChange ={(event) => uploadHandler(event)} />
//             <canvas id='offScreenCanvas'></canvas>
//         </div>
//     )
// }


class UploadComponent extends Component {
    componentDidMount(){
        const canvas = ReactDOM.findDOMNode(this.refs['offScreenCanvas']);
        //const ctx = canvas.getContext('2d');
        offScreenCanvas = canvas;
        canvas.width = 150;
        canvas.height = 150;


    }
    render() {
        return(
            <div className='UploadComponent'>
                <h3>Upload Emulation</h3>
                <input type="file" name='image' multiple id='fileInput' onChange ={(event) => uploadHandler(event)} />
                <canvas ref='offScreenCanvas'></canvas>
            </div>
        )
    }
}

export default UploadComponent