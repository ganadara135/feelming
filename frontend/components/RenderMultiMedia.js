import React, { useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import ReactPlayer from 'react-player';

//import { Document, Page, pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//pdfjs.GlobalWorkerOptions.workerSrc = require('react-pdf/dist/pdf.worker.entry')


const RenderMultiMedia = ( {fileInfo, heightOfdisplay}) => {

    const [pdfTotalPages, setPdfTotalPages ] = useState(null);
    const [pdfPageNumber, setPdfPageNumber ] = useState(1);
    const [dimensions, setDimensions ] = useState({ width:0, height: 0 });
    const targetRef = useRef();

    const onPDFDocumentLoadSuccess = useCallback( (pdf)  => {
        setPdfTotalPages(pdf._pdfInfo.numPages);
    },[fileInfo]);

    const changePdfPage =  (offset) => setPdfPageNumber(pdfPageNumber + offset);
    const previousPage = () => changePdfPage(-1);
    const nextPage = () => changePdfPage(1);

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetWidth
            });
        }
        // return () => {          // cleanUp() 부분  for blocking memory leak
        //     fileInfo = null;
        // };
    },[]);
   // },[fileInfo.id]);

    //console.log("except : ", except)
    // console.log("fileInfo : ", fileInfo)
    // console.log("fileInfo.dataType : ", fileInfo.dataType)
    // console.log("fileInfo.fileType : ", fileInfo.fileType)

    return (
        <>
        { 
        checkImageFileType(fileInfo.fileType) ? <img src={fileInfo.src} width={"100%"} height={heightOfdisplay}/> : 
        (checkVideoAudioFileType(fileInfo.fileType) ? <ReactPlayer height={heightOfdisplay} width={"100%"} url={fileInfo.src} playing={false} controls={true} loop={true} /> : 
        (checkPDFFileType(fileInfo.fileType) ? 
            <div ref={targetRef} width={"100%"} >
                <button type="default" 
                        disabled={pdfPageNumber <= 1}
                        onClick={previousPage}
                        style={{color:"green", border:"1px green solid", marginBottom:"3px"}}
                >
                    Previous
                </button>
                <button type="default" 
                    disabled={pdfPageNumber >= pdfTotalPages}
                    onClick={nextPage}
                    style={{color:"green", border:"1px green solid",  marginBottom:"3px"}} 
                >
                    Next
                </button>
                <span> Page {pdfPageNumber} of {pdfTotalPages} </span>

                <Document
                    file={fileInfo.src}
                    onLoadSuccess={onPDFDocumentLoadSuccess}
                    onLoadError={console.error} 
                >
                    <Page 
                    pageNumber={pdfPageNumber || 1} 
                    //width={dimensions.width}
                    height={dimensions.height}
                    /> 
                </Document>
    
            </div> : [] //<div><h1>{"This is not supporting type"}</h1></div>  
            ))
        } 
        </>
    );
};


RenderMultiMedia.propTypes = {
    fileInfo: PropTypes.object.isRequired,
}

export default RenderMultiMedia;
