import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {Empty} from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_MY_MEDIA_REQUEST, LOAD_MY_RELATED_MEDIA_REQUEST} from '../reducers/post';
// import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import styled from 'styled-components';
// import ReactPlayer from 'react-player';
// import { Document, Page, Outline } from 'react-pdf';
import Slick from 'react-slick';
import RenderMultiMedia from '../components/RenderMultiMedia'; 

const Gallery = ({ tag, searchCondition }) => {
    const [currentIndexMyMedia, setCurrentIndexMyMedia] = useState(0);
    const dispatch = useDispatch();
    //const [fixedMyMedia, setFixedMyMedia] = useState([]);
    const [fixedMyRelatedMedia, setFixedMyRelatedMedia] = useState([]);
    const {myMedia, hasMoreMyMedia, myRelatedMedia } = useSelector( state => state.post );

    //const refSlick = useRef();

    useEffect( () => {
       // console.log("useEffect() currentIndexMyMedia : ", currentIndexMyMedia)
        setCurrentIndexMyMedia(0)
    },[myMedia])


    const onChangeSlide = (current, next) => {

        const currentSlide = current;
        //const currentSlide = currentIndexMyMedia;
        const pageSize = 5;  // limit
        const pageCurrent = myMedia[currentSlide] && myMedia[currentSlide].RNUM;
        const pagePrev = pageCurrent - 1;
        const pageNext = pageCurrent + 1;
        const pageTotal = myMedia[currentSlide] && myMedia[currentSlide].total;
        const pageTotalBlock = myMedia[currentSlide] && Math.ceil(pageTotal / pageSize);
        const pageCurrentBlock = myMedia[currentSlide] && Math.ceil(myMedia[currentSlide].RNUM / pageSize);


        // console.log("next : ", next)
        // console.log("current : ", current)
        // console.log("currentIndexMyMedia : ", currentIndexMyMedia)
        // console.log("currentSlide : ", currentSlide)
        // console.log("pageSize : ", pageSize)
        // console.log("pagePrev : ", pagePrev)
        // console.log("pageCurrent : ", pageCurrent)
        // console.log("pageNext : ", pageNext)
        // console.log("pageTotalBlock : ", pageTotalBlock)
        // console.log("pageCurrentBlock : ", pageCurrentBlock)

        
        
        if(pageCurrent % pageSize === 0 && next === 0 && current === 4 && pageCurrentBlock !== pageTotalBlock ) { 
            console.log(" 왼쪽 경계 들어옴")
            dispatch({
                type: LOAD_MY_MEDIA_REQUEST,
                lastId: pageCurrent,
            })
        } 
        else if(pageCurrentBlock > 1 && pageCurrent % pageSize === 1 && current === 0 && next !== 1){
            console.log(" 오른쪽 경계 들어옴")
            dispatch({
                type: LOAD_MY_MEDIA_REQUEST,
                lastId: pagePrev-pageSize////myMedia[pagePrev-pageSize] && myMedia[pagePrev-pageSize].PostId,
            })
        }
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
         //console.log("PrevArrow currentSlide : ", props.currentSlide)
        
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={() => onClick() 
                ||  setCurrentIndexMyMedia( ((currentIndexMyMedia-1) % 4) < 0 ? 0 : (currentIndexMyMedia-1) % 4)}
            />
        );
    }

    function NextArrow(props) {
        const { className, style, onClick, index } = props;
        
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={() => onClick() || setCurrentIndexMyMedia((currentIndexMyMedia+1) % 4)}
            />
        );
    }

    function PrevArrow2(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }

    function NextArrow2(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }

  

    useEffect(() => {
      
      console.log(" 오직 한번만 호출 해야함")
      //setFixedMyMedia( myMedia.slice(0, 5).map( v => v))
      setFixedMyRelatedMedia(myRelatedMedia.map( v => v))
    },[myRelatedMedia.length === 0]);     // 초기 로딩시에 무조건 호출을 위해서 사용


    useEffect( () => {
        setFixedMyRelatedMedia(myRelatedMedia.filter( v => !searchCondition.includes(v.dataType)))
    }, [searchCondition]);

   // console.log("myMedia : ", myMedia)

    return (
        <div>
            <StyleH2>내작품만 {" 총: "} {myMedia && myMedia[0] && myMedia[0].total}</StyleH2>
        <StyleDiv>
        <Slick
            key={1}
            //ref={c => (refSlick.current = c)}
            //ref={refSlick}
            initialSlide={0}
            beforeChange={ (current, next) =>  onChangeSlide(current, next)}
            //afterChange={ current => onChangeSlide(current)}
            //afterChange={ current => setCurrentIndexMyMedia(current) }
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
                  {myMedia[i].RNUM}
                </div>
              )}
            onLazyLoad={ () => <div>{"Loading Data..."}</div>}
          >
            { //fixedMyMedia.map( v => {
            myMedia.length === 0 ? <Empty /> : 
            myMedia.map( v => {
                //console.log("v -> ", v)

              return ( 
                <CustomSlide index={v.id} widthVal={"100%"} >
                
                    {/* <h1 style={{ textAlign: 'center'}}> {"Title : " + v.title}</h1> */}
                    
                        <RenderMultiMedia key={v.id} fileInfo={v} heightOfdisplay={420}/>
                   
                    <h1 style={{ textAlign: 'center'}}>{"dataType : " + v.dataType}</h1>
                </CustomSlide>
            )})}
        </Slick>
        </StyleDiv>
        <StyleDiv>
            <StyleH2>관심 작품들</StyleH2>
            <Slick
            key={2}
            slidesToScroll={1}
            accessibility
            arrows
            lazyLoad={true}
            prevArrow={<PrevArrow2 />}
            nextArrow={<NextArrow2 />}
            rows={2}
            slidesPerRow={2}
            dots={true}
        >
              {/* {myRelatedMedia.map((v) => { */}
            {//fixedMyRelatedMedia.map( v => {
            fixedMyRelatedMedia.length === 0 ? <Empty /> : 
            fixedMyRelatedMedia.map( v => {
              return (
                <CustomSlide index={v.id} key={v.id} widthVal={"49%"}> 
                <RenderMultiMedia key={v.id} fileInfo={v} heightOfdisplay={300} /> 
                </CustomSlide>
                ) } )}
                
            </Slick>
        </StyleDiv>
        </div>
    )
};

class CustomSlide extends React.Component {
//const CustomSlide = ( index) => {

   

    render() {
    const {index, widthVal, ...props } = this.props;
    // console.log("CustomSlide index : ", index)
    // console.log("CustomSlide props : ", this.props)
    //setCurrentIndexMyMedia(index);
        return (
            <div {...props} style={{
                    display: "inline-block",
                    border: "1px solid green",
                    width: widthVal,
                    margin: "1px"
                  }} >
                  {/* //getIndexByProps={this.onGetCurrentIndex()} > */}
            </div>
        )
    }
}

Gallery.propTypes = {
    //tag: PropTypes.string.isRequired,
};


Gallery.getInitialProps = async (context) => {
    const tag = context.query.tag;
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
    width: 100%;
    border: 1px solid palevioletred;
`;

export default Gallery;

