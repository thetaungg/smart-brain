import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box,imageUrl})=> {
    return(
        <div className='center'>
            <div className="absolute mt2">
                <img id='inputImage' alt='inputPic' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, left: box.leftCol, right: box.rightCol, bottom: box.bottomRow}}/>
            </div>

        </div>
    )
};
export default FaceRecognition;