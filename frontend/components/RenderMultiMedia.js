import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import ReactPlayer from 'react-player';

const RenderMultiMedia = ( mediaFile ) => {

   // console.log(" mediaFile : ", mediaFile)
    return (
        <>
        { checkImageFileType(mediaFile.fileType) ? <img src={mediaFile.src} width={"30%"}/> 
            : checkVideoAudioFileType(mediaFile.fileType) ? <ReactPlayer
                // config={{ file: {
                //     attributes: {
                //         crossOrigin: 'true',            // CORS  설정
                //     }}}}  
                //  crossOrigin='anonymous' 
                // width={dimensions.width}
                url={mediaFile.src} playing={false} controls={true} loop={true} /> : []
        }
        </>
    );
};


RenderMultiMedia.propTypes = {
    // mediaFile: PropTypes.arrayOf(PropTypes.shape({
    //     src: PropTypes.string,

    // })).isRequired,
}

export default RenderMultiMedia;
