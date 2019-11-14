import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_MY_MEDIA_REQUEST, LOAD_MY_RELATED_MEDIA_REQUEST} from '../reducers/post';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import styled from 'styled-components';
//import RenderMultiMedia from '../components/RenderMultiMedia'; 
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf';
import Slick from 'react-slick';

const Gallery = ({ tag }) => {
    //const [currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const {myMedia, hasMorePost, myRelatedMedia } = useSelector( state => state.post );
    const targetRef = useRef();
    const [pdfTotalPages, setPdfTotalPages ] = useState(null);
    const [pdfPageNumber, setPdfPageNumber ] = useState(1);
    const [dimensions, setDimensions ] = useState({ width:0, height: 0 });

    // function next() {
    //     targetRef.current.next();
    // }

    // function previous() {
    //     targetRef.current.prev();
    // }

    // function onChange(selected) {
    //     console.log(selected);
    //     setCurrentPage(selected);
    //     console.log("chk currentPage : ", currentPage);
    // }
   
     console.log("myMedia : ", myMedia);
     console.log("myRelatedMedia : ", myRelatedMedia);

   
    const onPDFDocumentLoadSuccess = useCallback( (pdf)  => {
        setPdfTotalPages(pdf._pdfInfo.numPages);
    },[]);

    const changePdfPage =  (offset) => setPdfPageNumber(
        pdfPageNumber + offset
    );
    const previousPage = () => changePdfPage(-1);
    const nextPage = () => changePdfPage(1);


    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetWidth
            });
        }
    },[myMedia]);

    console.log("dimensions : ", dimensions)
    console.log("targetRef.current : ", targetRef.current)
    console.log("targetRef.current.offsetWidth : ", targetRef.current && targetRef.current.offsetWidth)

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }

    return (
        <div>
            <StyleH2>내작품만</StyleH2>
            <StyleDiv>
        <Slick
            initialSlide={4}
            afterChange={slide => setCurrentSlide(slide)  || setDimensions({
               width: targetRef.current && targetRef.current.offsetWidth,
               height: targetRef.current &&  targetRef.current.offsetHeight
            }) }
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            dots={true}
            accessibility
            arrows
            lazyLoad={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            customPaging={ i => (
                <div
                  style={{
                    width: "30px",
                    color: "blue",
                    border: "1px blue solid"
                  }}
                >
                  {i + 1}
                </div>
              )}
          >
            {myMedia.map((v) => {
              return (
                checkImageFileType(v.fileType) ? <img src={v.src} /> : 
                (checkVideoAudioFileType(v.fileType) ? <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> : 
                (checkPDFFileType(v.fileType) ? 
                    <div ref={targetRef}>
                        <Document
                            file={v.src}
                            onLoadSuccess={onPDFDocumentLoadSuccess}
                        >
                            <Page 
                            pageNumber={pdfPageNumber || 1} 
                            width={dimensions.width}
                            /> 
                        </Document>

                        <Button type="default" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</Button>
                        <Button type="default" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</Button>

                        <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
            
                    </div> : []  ))
                     ) } )}
        </Slick>
        </StyleDiv>
        <div>
            <StyleH2>관심 작품들</StyleH2>
            <Slick
            initialSlide={4}
            afterChange={slide => setCurrentSlide(slide)  || setDimensions({
               width: targetRef.current && targetRef.current.offsetWidth,
               height: targetRef.current &&  targetRef.current.offsetHeight
            }) }
            infinite={true}
            slidesToShow={2}
            slidesToScroll={1}
            accessibility
            arrows
            lazyLoad={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
           // cssEase={"linear"}
          >
            {myRelatedMedia.map((v) => {
              return (
                checkImageFileType(v.fileType) ? <img src={v.src} /> : 
                (checkVideoAudioFileType(v.fileType) ? <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> : 
                (checkPDFFileType(v.fileType) ? 
                    <div ref={targetRef}>
                        <Document
                            file={v.src}
                            onLoadSuccess={onPDFDocumentLoadSuccess}
                        >
                            <Page 
                            pageNumber={pdfPageNumber || 1} 
                            width={dimensions.width}
                            /> 
                        </Document>

                        <Button type="default" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</Button>
                        <Button type="default" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</Button>

                        <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
            
                    </div> : []  ))
                     ) } )}
            </Slick>
        </div>
        </div>
    )

};

Gallery.propTypes = {
    //tag: PropTypes.string.isRequired,
};


Gallery.getInitialProps = async (context) => {
    const tag = context.query.tag;

    console.log("context.query.tag : ", tag)
    context.store.dispatch({
        type: LOAD_MY_MEDIA_REQUEST,
        data: tag,
    })
    context.store.dispatch({
        type: LOAD_MY_RELATED_MEDIA_REQUEST,
        data: tag,
    })
    return { tag };
}


const StyleH2 = styled.h2`
    text-align: center;
    margin-top: 20px;
`;
const StyleDiv = styled.div`
    display: block;
`;

export default Gallery;

