export const fileCatcher = ( file ) => ({
    type: 'FILE_CATCHER',
    file
})

export const uploadEmulator = (event) => {
    let fileList = event.target.files;
    
    console.log('[ FILE LIST - CanvasGridTest/Action.js ]', fileList);
}

export const prepImgSrc = (src) => ({
    type: 'PREP_IMG_SRC',
    src
})

export const imgCreator = (data) => ({
    type: 'IMG_CREATOR',
    data
})

export const quickFix = () => ({
    type: 'QUICK_FIX'
})

