import React, { Component } from 'react';

import store from '../../store'

import { 
    fileCatcher,
    imgCreator,
    quickFix
 } from '../Action'

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
    console.log('[START RECURSION AT INDEX]', i)
    const reader = new FileReader();
        reader.readAsDataURL(files[i])
        let img = new Image();

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
            store.dispatch(imgCreator(img)) // Creates img obj with src already implemented
            // store.dispatch(quickFix())
            if(i >= files.length){
                return;
            }


            fetchImgData (files, i)
            

        })
}
const UploadComponent = (props) => {
    return(
        <div className='UploadComponent'>
            <h3>Upload Emulation</h3>
            <input type="file" name='image' multiple id='fileInput' onChange ={(event) => uploadHandler(event)} />
        </div>
    )
}

export default UploadComponent