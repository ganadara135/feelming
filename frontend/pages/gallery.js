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

const Gallery = ({ tag, searchCondition, firstInit }) => {
    //const [currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const [fixedMyMedia, setFixedMyMedia] = useState([]);
    const {myMedia, hasMoreMyMedia, myRelatedMedia } = useSelector( state => state.post );
    const countRef = useRef( []);
    const targetRef = useRef();
    const [pdfTotalPages, setPdfTotalPages ] = useState(null);
    const [pdfPageNumber, setPdfPageNumber ] = useState(1);
    const [dimensions, setDimensions ] = useState({ width:0, height: 0 });
 
    // console.log("tag in Gallery : ", tag)
    console.log("searchCondition in Gallery : ", searchCondition)
    // console.log("firstInit in Gallery : ", firstInit)
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
   
    //  console.log("myMedia : ", myMedia);
    //  console.log("fixedMyMedia : ", fixedMyMedia);
    //  console.log("countRef.current : ", countRef.current);
    //  console.log("myRelatedMedia : ", myRelatedMedia);

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

    const onChangeSlide = useCallback( (current, next) => {
        // 현재 이 룰대로 안짜여 있음
        // 1. fixedMyMedia 가 비여 있는 경우
        //   1.1. myMedia 를 그대로 복제
        // 2. fixedMyMedia 를 새로 채워야 하는 경우(슬라이드 경계 체크)
        //   2.1. myMedia 도 새로 채워야 하는 경우
        //      2.1.1 dispatch 해서 myMedia 및 fixedMyMedia 를 채움
        //   2.2. myMedia 가 이미 자료를 가진 경우
        //      2.2.1 슬라이드 번호가 증가하는 경우
        //      2.2.2 슬라이드 번호가 감소하는 경우
        if(myMedia[0] &&  (myMedia.length < myMedia[0].total)) {
            console.log(" 디스패치 실행")
            dispatch({
                type: LOAD_MY_MEDIA_REQUEST,
                lastId: myMedia[myMedia.length-1].id,
            });
        }

        if( fixedMyMedia.length === 0 ){
            setFixedMyMedia( myMedia.slice(0, 5).map( v => {        // slice 테스트 완료, 10 으로 해도 문제 없음
                console.log("초기 v ==> ", v.id);
                if (!countRef.current.includes(v.id)){
                    countRef.current.push(v.id);
                }
                return v;
            }));
      //  }else if( next === 0 && current === fixedMyMedia.length-1){ // 경계 체크
        }else if(next === 0  && current !== 1
            && fixedMyMedia[current].id < myMedia[current+1].id) { 
            console.log(" 2 번째 조건")
            setFixedMyMedia( myMedia.slice(fixedMyMedia[current].RNUM, fixedMyMedia[current].RNUM+5).map( v => {
                console.log("v ==> ", v.id);
                if (!countRef.current.includes(v.id)){
                    countRef.current.push(v.id);
                }
                return v;
            }));
       // }else if(next === 0 && current === 1 && fixedMyMedia[next].id !== myMedia[next].id) {  // 최소 경계
        }else if(next === 0 && fixedMyMedia[next].id !== 1
            && countRef.current.indexOf(fixedMyMedia[next].id) >= 5) {
            console.log("3 번째 조건 실행")
            setFixedMyMedia( myMedia.slice(countRef.current.indexOf(fixedMyMedia[next].RNUM)-5,
                countRef.current.indexOf(fixedMyMedia[next].RNUM)).map( v => {
                console.log("v ==> ", v.id);
                if (!countRef.current.includes(v.id)){
                    countRef.current.push(v.id);
                }
                return v;
            }));
        }
    },);

    return (
        <div>
            <StyleH2>내작품만 {" 총: "} {myMedia && myMedia[0] && myMedia[0].total}</StyleH2>
        <StyleDiv>
        <Slick
            initialSlide={0}
            afterChange={slide =>  setDimensions({
               width: targetRef.current && targetRef.current.offsetWidth,
               height: targetRef.current &&  targetRef.current.offsetHeight
            }) }
            // 초기 로딩시 자동 호출됨
            beforeChange={ (current, next) => setCurrentSlide(next) || onChangeSlide(current, next)}
            //|| fixedMyMedia[fixedMyMedia.length-1] && setLastIdOfmyMedia(fixedMyMedia[fixedMyMedia.length-1].id)}
            //infinite={true}
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
                  {/* {i + 1} */}
                  {/* {fixedMyMedia[i].id} */}
                  {fixedMyMedia[i].RNUM}
                </div>
              )}
            onLazyLoad={ () => <div>{"Loading Data..."}</div>}
          >
            {fixedMyMedia[0] !== undefined && fixedMyMedia.map((v) => {
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
            
                    </div> : <div><h1>{"파일타입이 null 입니다"}</h1></div>  ))
                     ) } )}
        </Slick>
        </StyleDiv>
        <StyleDiv>
            <StyleH2>관심 작품들</StyleH2>
            <Slick
            //initialSlide={4}
            afterChange={slide => setCurrentSlide(slide)  || setDimensions({
               width: targetRef.current && targetRef.current.offsetWidth,
               height: targetRef.current &&  targetRef.current.offsetHeight
            }) }
            //infinite={true}
            //slidesToShow={2}
            slidesToScroll={1}
            accessibility
            arrows
            lazyLoad={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            rows={2}
            slidesPerRow={2}
            dots={true}
            //focusOnSelect={true}
            // dotsClass={"slick"}
            //centerPadding={"60px"}
          >
              {myRelatedMedia.map((v) => {
              return (
                searchCondition.length === 0 ? 
                    <CustomSlide index={v.id}>
                    {checkImageFileType(v.fileType) ? <img src={v.src} width={"100%"} /> : 
                    (checkVideoAudioFileType(v.fileType) ? <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> : 
                    (checkPDFFileType(v.fileType) ? 
                        <div ref={targetRef} width={"100%"}>
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
                
                        </div> : <div><h1>{"파일타입이 null 입니다"}</h1></div>  ))
                    } </CustomSlide> 
                : searchCondition.includes("picture") && checkImageFileType(v.fileType) ?
                    <CustomSlide index={v.id}> <img src={v.src} width={"100%"} /> </CustomSlide> 
                : searchCondition.includes("file-image") && checkImageFileType(v.fileType) ?
                    <CustomSlide index={v.id}> <img src={v.src} width={"100%"} /> </CustomSlide> 
                : searchCondition.includes("file-pdf") && checkPDFFileType(v.fileType) ? 
                    <CustomSlide index={v.id}>
                    <div ref={targetRef} width={"100%"}>
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
            
                    </div> </CustomSlide>
                : searchCondition.includes("sound") && checkVideoAudioFileType(v.fileType) ? 
                    <CustomSlide index={v.id}>
                        <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> 
                    </CustomSlide>
                : searchCondition.includes("video-camera") && checkVideoAudioFileType(v.fileType) ? 
                    <CustomSlide index={v.id}>
                        <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> 
                    </CustomSlide> : []
                
                     ) } )}
                
            </Slick>
        </StyleDiv>
        </div>
    )

};

class CustomSlide extends React.Component {
//const CustomSlide = ( index) => {
    render() {
    const {index, ...props } = this.props;
        return (
            <div {...props} style={{
                    display: "inline-block",
                    border: "1px solid green",
                    width: "200px",
                    margin: "1px"
                  }} >
            </div>
        )
    }
}

Gallery.propTypes = {
    //tag: PropTypes.string.isRequired,
};


Gallery.getInitialProps = async (context) => {
    const tag = context.query.tag;
    console.log("context.query : ", context.query)
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
    width: 420px;
    border: 1px solid palevioletred;
`;

export default Gallery;

