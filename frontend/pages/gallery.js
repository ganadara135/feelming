import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PostCard from '../containers/PostCard';
import PostImages from '../components/PostImages';
import { Row, Col, Icon, Button} from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_MY_MEDIA_REQUEST} from '../reducers/post';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import styled from 'styled-components';
import RenderMultiMedia from '../components/RenderMultiMedia'; 
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf';

//import { Carousel } from 'react-responsive-carousel';
import Slick from 'react-slick';

const Gallery = ({ tag }) => {
    const [currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const {myMedia, hasMorePost } = useSelector( state => state.post );
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

    return (
        <Slick
            initialSlide={3}
            afterChange={slide => setCurrentSlide(slide)  || setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetWidth
            }) }

            infinite={true}
            arrows={true}
            slidesToShow={1}
            slidesToScroll={1}
            dots={true}
          >
            {myMedia.map((v) => {
              return (
               
                    checkImageFileType(v.fileType) ? <img src={v.src} /> : 
                    (checkVideoAudioFileType(v.fileType) ? <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> : 
                    (checkPDFFileType(v.fileType) ? <div ref={targetRef}> 
                                                        <Document
                                                            file={v.src}
                                                            onLoadSuccess={onPDFDocumentLoadSuccess}
                                                            //width={"100%"}
                                                        >
                                                            <Page 
                                                            pageNumber={pdfPageNumber || 1} 
                                                            width={dimensions.width}
                                                            //height={"100px"}
                                                            /> 
                                                        </Document>

                                                        <Button type="default" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</Button>
                                                        <Button type="default" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</Button>

                                                        <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
                                            
                                                    </div> : []  ))
                
                     ) } )}
        </Slick>
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
    return { tag };
}

const StyleCarousel = styled.div`
    text-align: center;
    height: 330px;
    line-height: 90%;
    background: #364d79;
    overflow: hidden;
    margin-top: 10px;
    vertical-align: middle;

  $ h3 {
    color: #fff;
    top: 100px;
  }
`;

const StyleDiv = styled.div`
    display: table;
    vertical-align: middle;
`;

export default Gallery;

