const initialState = {
    ImgFiles: [],
    fileList: [],
    imgSrcs: [],
    fix: true

}

//target.result comes from reader
export default function CanvasGridReducer (state = initialState, action){
    console.log(state.imgSrcs)
    let canvasFeed = [...state.fileList];
    let  imgSrcCopy = [...state.imgSrcs];
    switch(action.type) {
        case 'FILE_CATCHER' :
        //canvasFeed.push(action.file);
        //console.log('[Single Action]', action.file)
        // console.log('[FILE LIST]', action.targetResult);
        //     for(let i = 0; i< Object.keys(action.fileList); i++){
        //         let id = i
        //         let fileObj = {
        //             id: id,
        //             imgFile: action.fileList[i],
        //             target: action.targetResult[i]
        //         };
        //         newImgFile.push(fileObj)
        //     }
        //     console.log('[IMG FILE STATE]', newImgFile)
    //-----------------------------
        // for (let i = 0; i < action.file.length; i++){
        //     const reader = new FileReader();
        //     let imgSrc = '';
        //     reader.onload = ((e) => {
        //         imgSrc = e.target.result;
        //         imgSrcCopy.push(imgSrc);
        //     })
        //     reader.readAsDataURL(action.file[i])
        // }
            return{
                ...state,
                fileList: action.file,
                //imgSrcs: imgSrcCopy
            }
        case 'RESET_IMG_SRC' :
        console.log('[RESET CALLED]')
        return{
            ...state,
            imgSrc: []
        }
        // case 'PREP_IMG_SRC' :
        //     imgSrcCopy.push(action.src)
        //     return{
        //         ...state,
        //         imgSrcs: imgSrcCopy 
        //     }
        case 'IMG_CREATOR' :
        imgSrcCopy.push(action.data);
        console.log('[imgSrcCopy]', imgSrcCopy)
            return{
                ...state,
                imgSrcs: imgSrcCopy
            }
        case 'QUICK_FIX' :
            console.log(state.fix , '[TRIGGER]')
            return{
                ...state,
                fix: !state.fix
            }
        default:
        }
    return state
}