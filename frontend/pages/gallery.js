import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_MY_MEDIA_REQUEST, LOAD_MY_RELATED_MEDIA_REQUEST} from '../reducers/post';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf';
import Slick from 'react-slick';
import RenderMultiMedia from '../components/RenderMultiMedia'; 

const Gallery = ({ tag, searchCondition, firstInit }) => {
    //const [currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const [fixedMyMedia, setFixedMyMedia] = useState([]);
    const [fixedMyRelatedMedia, setFixedMyRelatedMedia] = useState([]);
    const {myMedia, hasMoreMyMedia, myRelatedMedia } = useSelector( state => state.post );
    // const countRef = useRef( []);
    const targetRef = useRef();
    // const [pdfTotalPages, setPdfTotalPages ] = useState(null);
    // const [pdfPageNumber, setPdfPageNumber ] = useState(1);
    const [dimensions, setDimensions ] = useState({ width:0, height: 0 });
 
  
    // const onPDFDocumentLoadSuccess = useCallback( (pdf)  => {
    //     setPdfTotalPages(pdf._pdfInfo.numPages);
    // },[]);

    // const changePdfPage =  (offset) => setPdfPageNumber(
    //     pdfPageNumber + offset
    // );
    // const previousPage = () => changePdfPage(-1);
    // const nextPage = () => changePdfPage(1);

    

    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     if (targetRef.current) {
    //         setDimensions({
    //             width: targetRef.current.offsetWidth,
    //             height: targetRef.current.offsetWidth
    //         });
    //     }
    // },[myMedia]);

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

    const onChangeSlide = useCallback( async (current, next) => {
    
        if(myMedia[0] &&  (myMedia.length < myMedia[0].total)) {
            console.log(" 디스패치 실행")
            dispatch({
                type: LOAD_MY_MEDIA_REQUEST,
                lastId: myMedia[myMedia.length-1].RNUM,     // 여기서는 정렬된 행번호로 넘겨줌, 백엔드에선 변경없이 등록된 행번호로 처리
            });
        }

        console.log("current : ", current)
        console.log("next : ", next)

        if( fixedMyMedia.length === 0 ){
            setFixedMyMedia( myMedia.slice(0, 5).map( v => {        // slice 테스트 완료, 10 으로 해도 문제 없음
                console.log("초기 v ==> ", v.id);
                return v;
            }));
        }else if(current === 0 && next === 4) {        // 왼쪽 경계 도달
            console.log(" 2 번째 조건")
            if(fixedMyMedia[current].RNUM === 1 ) {        // 완전 왼쪽이면 더 이상 움직이지 않음
                console.log("완전 왼쪽에 도달했음")
            }else if((fixedMyMedia[current].RNUM-1) % 5 === 0 ){   //  4/4=1+5=6, 3/4=0+5=5, 5/4=1+5=6, 6/4=1+5=6
                console.log("중간에서 왼쪽 경계 도달")              // 4%4=0, 3%4=3, 5%4=1, 6%4=2, 7%4=3, 8%4=0
                setFixedMyMedia( myMedia.slice(fixedMyMedia[current].RNUM-5-1, fixedMyMedia[current].RNUM-1).map( v => {
                    console.log("v ==> ", v.id);
                    return v;
                }));
            }
        }else if(next === 0 && current === 4) {          // 오른쪽 경계 도달
            console.log("3 번째 조건 실행")

            if(fixedMyMedia[current].RNUM >= myMedia[0].total ){    // 완전 오른쪽 경계 도달
                console.log("완전 오른쪽 경계 도달했음")
            }else if(fixedMyMedia[current].RNUM < myMedia[0].total){
                console.log("중간에서 오른쪽 경계 도달")
                setFixedMyMedia( myMedia.slice(fixedMyMedia[current].RNUM, fixedMyMedia[current].RNUM+5).map( v => {
                    console.log("v ==> ", v.id);
                    return v;
                }));
            }
        }
    },);

    useEffect(() => {
      //onChangeSlide()
      console.log(" 오직 한번만 호출 해야함")
      setFixedMyMedia( myMedia.slice(0, 5).map( v => v))
      setFixedMyRelatedMedia(myRelatedMedia.filter( v => !searchCondition.includes(v.dataType)))
    },[ ]);     // 초기 로딩시에 무조건 호출을 위해서 사용


    useEffect( () => {
        setFixedMyRelatedMedia(myRelatedMedia.filter( v => !searchCondition.includes(v.dataType)))
    }, [searchCondition]);


    console.log("myMedia : ", myMedia)
    console.log("myRelatedMedia : ", myRelatedMedia)
    console.log("fixedMyMedia : ", fixedMyMedia);
    console.log("fixedMyRelatedMedia : ", fixedMyRelatedMedia);

    return (
        <div>
            <StyleH2>내작품만 {" 총: "} {myMedia && myMedia[0] && myMedia[0].total}</StyleH2>
        <StyleDiv>
        <Slick
            initialSlide={0}
            // afterChange={slide =>  setDimensions({
            //    width: targetRef.current && targetRef.current.offsetWidth,
            //    height: targetRef.current &&  targetRef.current.offsetHeight
            // }) }
            // 초기 로딩시 자동 호출됨
            //beforeChange={ (current, next) => setCurrentSlide(next) || onChangeSlide(current, next)}
            beforeChange={ (current, next) => onChangeSlide(current, next)}
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
                  {fixedMyMedia[i].RNUM}
                </div>
              )}
            onLazyLoad={ () => <div>{"Loading Data..."}</div>}
          >
            { fixedMyMedia.map( v => {
              return ( 

                <RenderMultiMedia key={v.id} fileInfo={v} />
                
                // checkImageFileType(v.fileType) ? <img src={v.src} /> : 
                // (checkVideoAudioFileType(v.fileType) ? <ReactPlayer width={"100%"} url={v.src} playing={false} controls={true} loop={true} /> : 
                // (checkPDFFileType(v.fileType) ? 
                //     <div ref={targetRef}>
                //         <Document
                //             file={v.src}
                //             onLoadSuccess={onPDFDocumentLoadSuccess}
                //         >
                //             <Page 
                //             pageNumber={pdfPageNumber || 1} 
                //             width={dimensions.width}
                //             /> 
                //         </Document>

                //         <Button type="default" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</Button>
                //         <Button type="default" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</Button>

                //         <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
            
                //     </div> : <div><h1>{"파일타입이 null 입니다"}</h1></div>  ))
                
                //     )}) 
                
            )})}
        </Slick>
        </StyleDiv>
        <StyleDiv>
            <StyleH2>관심 작품들</StyleH2>
            <Slick
            
            slidesToScroll={1}
            accessibility
            arrows
            lazyLoad={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            rows={2}
            slidesPerRow={2}
            dots={true}
        >
              {/* {myRelatedMedia.map((v) => { */}
            {fixedMyRelatedMedia.map( v => {
              return (
                <CustomSlide index={v.id}> <RenderMultiMedia key={v.id} fileInfo={v} /> </CustomSlide>
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

