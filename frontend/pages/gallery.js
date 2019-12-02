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

    function PrevArrow(props) {
        const { className, style, onClick } = props;
         //console.log("PrevArrow currentSlide : ", props.currentSlide)
        setCurrentIndexMyMedia(props.currentSlide);
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }

    const onChangeSlide = (current, next) => {

        // const currentSlide = current;
        const currentSlide = currentIndexMyMedia;
        const pageSize = 5;  // limit
        const pageCurrent = myMedia[currentSlide] && myMedia[currentSlide].RNUM;
        const pagePrev = pageCurrent - 1;
        const pageNext = pageCurrent + 1;
        const pageTotal = myMedia[currentSlide] && myMedia[currentSlide].total;
        const pageTotalBlock = myMedia[currentSlide] && Math.ceil(pageTotal / pageSize);
        const pageCurrentBlock = myMedia[currentSlide] && Math.ceil(myMedia[currentSlide].RNUM / pageSize);

        console.log("next : ", next)
        console.log("current : ", current)
        console.log("currentIndexMyMedia : ", currentIndexMyMedia)
        console.log("currentSlide : ", currentSlide)
        console.log("pageSize : ", pageSize)
        console.log("pagePrev : ", pagePrev)
        console.log("pageCurrent : ", pageCurrent)
        console.log("pageNext : ", pageNext)
        console.log("pageTotalBlock : ", pageTotalBlock)
        console.log("pageCurrentBlock : ", pageCurrentBlock)

        
        
        if(pageCurrent % pageSize === 0 ) { 
            console.log(" 왼쪽 경계 들어옴")
            setCurrentIndexMyMedia(0)
            dispatch({
                type: LOAD_MY_MEDIA_REQUEST,
                lastId: pageCurrent,
                //lastId: myMedia[myMedia.length - 1 ] && myMedia[myMedia.length - 1 ].PostId,
            })
        } 
        else if(pageCurrentBlock > 1 && pagePrev % pageSize === 0 ){
            console.log(" 오른쪽 경계 들어옴")
            setCurrentIndexMyMedia(4)
            dispatch({
                type: LOAD_MY_MEDIA_REQUEST,
                lastId: pagePrev-pageSize////myMedia[pagePrev-pageSize] && myMedia[pagePrev-pageSize].PostId,
            })
        }
    };

    function NextArrow(props) {
        const { className, style, onClick, index } = props;
        setCurrentIndexMyMedia(props.currentSlide)
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick }
            />
        );
    }

    function PrevArrow2(props) {
        const { className, style, onClick } = props;
        // console.log("PrevArrow2 current index : ", props)
       // setCurrentIndexMyMedia(props.currentSlide);
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
        console.log("NextArrow2 currentSlide: ", props.currentSlide)
       // setCurrentIndexMyMedia(props.currentSlide);
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }
   // useEffect( () => {
        // window.addEventListener('scroll', onScroll);
        // return () => {  // 이렇게 해야 호출될때 아래가 실행됨, 본 컴포넌트 나갈때 실행됨
        //     window.removeEventListener('scroll', onScroll);
        // }
  //  }, [myMedia.length]); //  빈 deps [], 는 처음 로딩될때 한 번만 호출됨

    // const onChangeSlide = useCallback( async (current, next) => {
    
    //     if(myMedia[0] &&  (myMedia.length < myMedia[0].total)) {
    //         console.log(" 디스패치 실행")
    //         dispatch({
    //             type: LOAD_MY_MEDIA_REQUEST,
    //             lastId: myMedia[myMedia.length-1].RNUM,     // 여기서는 정렬된 행번호로 넘겨줌, 백엔드에선 변경없이 등록된 행번호로 처리
    //         });
    //     }

    //     console.log("current : ", current)
    //     console.log("next : ", next)

    //     if( fixedMyMedia.length === 0 ){
    //         setFixedMyMedia( myMedia.slice(0, 5).map( v => {        // slice 테스트 완료, 10 으로 해도 문제 없음
    //             console.log("초기 v ==> ", v.id);
    //             return v;
    //         }));
    //     }else if(current === 0 && next === 4) {        // 왼쪽 경계 도달
    //         console.log(" 2 번째 조건")
    //         if(fixedMyMedia[current].RNUM === 1 ) {        // 완전 왼쪽이면 더 이상 움직이지 않음
    //             console.log("완전 왼쪽에 도달했음")
    //         }else if((fixedMyMedia[current].RNUM-1) % 5 === 0 ){   //  4/4=1+5=6, 3/4=0+5=5, 5/4=1+5=6, 6/4=1+5=6
    //             console.log("중간에서 왼쪽 경계 도달")              // 4%4=0, 3%4=3, 5%4=1, 6%4=2, 7%4=3, 8%4=0
    //             setFixedMyMedia( myMedia.slice(fixedMyMedia[current].RNUM-5-1, fixedMyMedia[current].RNUM-1).map( v => {
    //                 console.log("v ==> ", v.id);
    //                 return v;
    //             }));
    //         }
    //     }else if(next === 0 && current === 4) {          // 오른쪽 경계 도달
    //         console.log("3 번째 조건 실행")

    //         if(fixedMyMedia[current].RNUM >= myMedia[0].total ){    // 완전 오른쪽 경계 도달
    //             console.log("완전 오른쪽 경계 도달했음")
    //         }else if(fixedMyMedia[current].RNUM < myMedia[0].total){
    //             console.log("중간에서 오른쪽 경계 도달")
    //             setFixedMyMedia( myMedia.slice(fixedMyMedia[current].RNUM, fixedMyMedia[current].RNUM+5).map( v => {
    //                 console.log("v ==> ", v.id);
    //                 return v;
    //             }));
    //         }
    //     }
    // },);

    useEffect(() => {
      
      console.log(" 오직 한번만 호출 해야함")
      //setFixedMyMedia( myMedia.slice(0, 5).map( v => v))
      setFixedMyRelatedMedia(myRelatedMedia.map( v => v))
    },[myRelatedMedia.length === 0]);     // 초기 로딩시에 무조건 호출을 위해서 사용


    useEffect( () => {
        setFixedMyRelatedMedia(myRelatedMedia.filter( v => !searchCondition.includes(v.dataType)))
    }, [searchCondition]);


    console.log("myMedia : ", myMedia)
    //console.log("refSlick : ", refSlick.current)
    // console.log("myRelatedMedia : ", myRelatedMedia)
    // //console.log("fixedMyMedia : ", fixedMyMedia);
    // console.log("fixedMyRelatedMedia : ", fixedMyRelatedMedia);



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
              return ( 
                <CustomSlide index={v.id} widthVal={"100%"} >
                
                    <h1 style={{ textAlign: 'center'}}> {"Title : " + v.title}</h1>
                    
                        <RenderMultiMedia key={v.id} fileInfo={v} />
                   
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
                <CustomSlide index={v.id} key={v.id} widthVal={"49%"}> <RenderMultiMedia key={v.id} fileInfo={v} /> </CustomSlide>
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
    width: 420px;
    border: 1px solid palevioletred;
`;

export default Gallery;

