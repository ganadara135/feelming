import React, { useEffect, useCallback, useState, useRef } from 'react';
//import PropTypes from 'prop-types';
import { Card, Row, Col, Tag, Input, Empty} from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_HASHTAG_POSTS_REQUEST, LOAD_MY_KEYWORD_REQUEST, LOAD_MY_KEYWORD_SECOND_REQUEST} from '../reducers/post';

import Slick from 'react-slick';
import RenderMultiMedia from '../components/RenderMultiMedia'; 

//const mainPosts = [];
const Keyword = ({ tag, searchCondition }) => {
   // console.log("tag : ", tag);
    const dispatch = useDispatch();
    const {mainPosts, hasMorePost, myKeyword, myKeywordSecond } = useSelector( state => state.post );
    const [fixedMainPosts, setFixedMainPosts ] = useState(mainPosts);
    const refSlick1 = useRef();
    const refSlick2 = useRef();
    

    // console.log("myKeyword  : ", myKeyword)
    // console.log("myKeywordSecond  : ", myKeywordSecond)
    // console.log("mainPosts : ", mainPosts);
    // console.log("fixedMainPosts : ", fixedMainPosts)

    const onScroll = useCallback( () => {
        if (window.scrollY + document.documentElement.clientHeight 
            > document.documentElement.scrollHeight - 300 ) {
                if (hasMorePost) {
                    dispatch({
                        type: LOAD_HASHTAG_POSTS_REQUEST,
                        lastId: mainPosts[mainPosts.length - 1 ] && mainPosts[mainPosts.length - 1 ].id,
                        data: tag
                    })
                }
            };
    }, [hasMorePost, mainPosts.length]);

    useEffect( () => {
        window.addEventListener('scroll', onScroll);
        return () => {  // 이렇게 해야 호출될때 아래가 실행됨, 본 컴포넌트 나갈때 실행됨
            window.removeEventListener('scroll', onScroll);
        }
    }, [mainPosts.length]); //  빈 deps [], 는 처음 로딩될때 한 번만 호출됨

    useEffect( () => {
        setFixedMainPosts(mainPosts.filter( v => !searchCondition.includes(v.UserAssets[0].dataType)))
    }, [searchCondition]);

    useEffect( () => {
        setFixedMainPosts(mainPosts);
    }, [mainPosts])


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
        const { className, style, onClick, index } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
            />
        );
    }

    const onChangeSlide = (current, next) => {

        const currentSlide = current;
        //const currentSlide = currentIndexmyKeyword;
        const pageSize = 5;  // limit
        const pageCurrent = myKeyword[currentSlide] && myKeyword[currentSlide].RNUM;
        const pagePrev = pageCurrent - 1;
        const pageNext = pageCurrent + 1;
        const pageTotal = myKeyword[currentSlide] && myKeyword[currentSlide].total;
        const pageTotalBlock = myKeyword[currentSlide] && Math.ceil(pageTotal / pageSize);
        const pageCurrentBlock = myKeyword[currentSlide] && Math.ceil(myKeyword[currentSlide].RNUM / pageSize);

        // console.log("next : ", next)
        // console.log("current : ", current)
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
                type: LOAD_MY_KEYWORD_REQUEST,
                lastId: pageCurrent,
            });
            dispatch({
                type: LOAD_MY_KEYWORD_SECOND_REQUEST,
                lastId: pageCurrent,
            })
        } 
        else if(pageCurrentBlock > 1 && pageCurrent % pageSize === 1 && current === 0 && next !== 1){
            console.log(" 오른쪽 경계 들어옴")
            dispatch({
                type: LOAD_MY_KEYWORD_REQUEST,
                lastId: pagePrev-pageSize
            });
            dispatch({
                type: LOAD_MY_KEYWORD_SECOND_REQUEST,
                lastId: pagePrev-pageSize,
            });
        }
    };

    const onSearchKeyword = (value) => {
     //  alert("It is under construction")
     //  console.log(" onSearchKeyword() ", value)
       // setTagValue("etc");
      //  e.preventDefault();
        dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            data: value,
            lastId: 0,
        })
    }

    return (
        <div >
            <Row type={"flex"} gutter={8} align={"top"}>
            <Col span={16}>
            <Slick
                ref={refSlick1}
                asNavFor={refSlick2.current}
                key={1}
                initialSlide={0}
                beforeChange={ (current, next) =>  onChangeSlide(current, next)}
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
                        color: "green",
                        border: "1px green solid"
                    }}
                    >
                    {myKeyword[i].RNUM}
                    </div>
                )}
                onLazyLoad={ () => <div>{"Loading Data..."}</div>}
                style={{margin: 20, marginBottom:30  }}
            >
            {
                myKeyword.length === 0 ? <Empty /> : 
                    myKeyword.map( v => {
                    return ( <RenderMultiMedia key={v.id} fileInfo={v}  /> )
                })
            }
        </Slick>
        </Col>
        <Col span={8} ><h1 style={{ textAlign: 'center', color:'gray'}}>마이 키워드</h1>
        <Slick
            ref={refSlick2}
            asNavFor={refSlick1.current}
            key={2}
            slidesToShow={1}
            //slidesToScroll={1}
            lazyLoad={true}
            onLazyLoad={ () => <div>{"Loading Data..."}</div>}
        >
            {
                myKeywordSecond.length === 0 ? <Empty /> : 
                myKeywordSecond.map( v => {
                    return ( <div>{v.KeywordTags.map( v2 => 
                        <Tag color="gray"> {v2.keyword} </Tag>)}
                    </div> )
                })
            }
        </Slick>
        </Col>

        <Input.Search 
            enterButton 
            style={{ verticalAlign: 'middle', margin: 10}}
            onSearch={onSearchKeyword} 
            placeholder={"검색할 키워드를 입력해 주세요"}
        />
        </Row>

            {fixedMainPosts.length === 0 ? <Empty /> : 
            fixedMainPosts.map( c => (
                // <p>{console.log("c => ", c) }</p>
                <Row type={"flex"} gutter={10} align={"middle"}>
                    <Col span={16}>
                        {/* <Card style={{width: 330}} */}
                        <Card 
                            cover={ //<div> aaaa</div>
                                <RenderMultiMedia fileInfo={c.UserAssets[0]}  />
                            }
                        >
                            <Card.Meta 
                                description={c.description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card > 
                            <Card.Meta 
                                description={"dataType : " + c.UserAssets[0].dataType + " / " + 
                                            " 관련키워드: " + c.KeywordTags.map(v => v.keyword + ", ")
                                            + " / 관련설명: " + c.KeywordTags.description
                            }
                            />
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    );
};

Keyword.propTypes = {
    //tag: PropTypes.string.isRequired,
};

Keyword.getInitialProps = async (context) => {
    const tag = context.query.tag;
  //  console.log('hashtag getInitialProps', context.query.tag);
    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: tag,
    });
    context.store.dispatch({
        type: LOAD_MY_KEYWORD_REQUEST,
        data: tag,
    });
    context.store.dispatch({
        type: LOAD_MY_KEYWORD_SECOND_REQUEST,
        data: tag,
    });
    return { tag };
}

export default Keyword;