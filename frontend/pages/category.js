import React, { useState, useCallback, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import PostCard from '../containers/PostCard'
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_CATEGORY_REQUEST } from '../reducers/post';
import { Card, Radio, Empty, Row, Col} from 'antd';
import RenderMultiMedia from '../components/RenderMultiMediaClass';

const Category = ({ tag, searchCondition }) => {

    const dispatch = useDispatch();
    const [tagValue, setTagValue] = useState(tag);
    const {myCategoryData, hasMorePost } = useSelector( state => state.post );
    const [fixedMyCategoryData, setFixedMyCategoryData] = useState([]);
    
    const onScroll = useCallback( () => {
        if (window.scrollY + document.documentElement.clientHeight 
            > document.documentElement.scrollHeight - 300 ) {
                //console.log( "check scrollling  tagValue : ", tagValue)
                if (hasMorePost) {
                    dispatch({
                        type: LOAD_CATEGORY_REQUEST,
                        lastId: myCategoryData[myCategoryData.length - 1 ] && myCategoryData[myCategoryData.length - 1 ].PostId,
                        data: tagValue
                    })
                }
            };
    }, [hasMorePost, myCategoryData.length]);

    useEffect( () => {
        window.addEventListener('scroll', onScroll);
        return () => {  // 이렇게 해야 호출될때 아래가 실행됨, 본 컴포넌트 나갈때 실행됨
            window.removeEventListener('scroll', onScroll);
        }
    }, [myCategoryData.length]); //  빈 deps [], 는 처음 로딩될때 한 번만 호출됨

    useEffect( () => {
        setFixedMyCategoryData(myCategoryData.filter( v => !searchCondition.includes(v.dataType)))
    }, [searchCondition]);

    useEffect( () => {
        setFixedMyCategoryData(myCategoryData);
    }, [myCategoryData])

    const onChangeTotal = e => {
        console.log('radio 0 checked', e.target.value);
        e.preventDefault();
        setTagValue("total");
        dispatch({
            type: LOAD_CATEGORY_REQUEST,
            lastId: 0,
            data: "total",
            limit: 10
        })
    };
    const onChangeSong = e => {
        console.log(" radio 1 checked ", e.target)
        e.preventDefault();
        setTagValue("song");
        //setTagValue("인디");
        dispatch({
            type: LOAD_CATEGORY_REQUEST,
            lastId: 0,
            data: "song",
            limit: 10
        })
    }

    const onChangeDance = e => {
        console.log(" radio 2 checked ", e.target)
        e.preventDefault();
        setTagValue("dance");
        //setTagValue("밴드");
        dispatch({
            type: LOAD_CATEGORY_REQUEST,
            lastId: 0,
            data: "dance",
            limit: 10
        })
    }
    const onChangeMovie = e => {
        console.log(" radio 3 checked ", e)
        e.preventDefault();
        setTagValue("acting");
        //setTagValue("Rock");
        dispatch({
            type: LOAD_CATEGORY_REQUEST,
            lastId: 0,
            data: "acting",
            limit: 10
        })
    }
    const onChangeHosting = e => {
        console.log(" radio 4 checked ", e)
        e.preventDefault();
        setTagValue("hosting");
        //setTagValue("funk");
        dispatch({
            type: LOAD_CATEGORY_REQUEST,
            lastId: 0,
            data: "hosting",
            limit: 10
        })
    }
    const onChangeETC = e => {
        console.log(" radio 5 checked ", e)
        e.preventDefault();
        setTagValue("etc");
        dispatch({
            type: LOAD_CATEGORY_REQUEST,
            lastId: 0,
            data: "etc",
            limit: 10
        })
    }
  
    
    // console.log("myCategoryData : ", myCategoryData)
    // console.log("hasMorePost : ", hasMorePost)
   //  console.log("fixedMyCategoryData : ", fixedMyCategoryData)

    return (
        <div>
            <Card>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a" onChange={onChangeTotal}>전체</Radio.Button>
                    <Radio.Button value="b" onChange={onChangeSong}>노래</Radio.Button>
                    <Radio.Button value="c" onChange={onChangeDance}>춤</Radio.Button>
                    <Radio.Button value="d" onChange={onChangeMovie}>연기</Radio.Button>
                    <Radio.Button value="e" onChange={onChangeHosting}>진행</Radio.Button>
                    <Radio.Button value="f" onChange={onChangeETC}>미분류</Radio.Button>
                </Radio.Group>
            </Card>
            {// myCategoryData.map( c => (
                fixedMyCategoryData.length === 0 ? <Empty/> : 
                fixedMyCategoryData.map( c => (
                <Row type={"flex"} gutter={8} align={"top"} key={c.id}>
                    <Col span={16}>
                        <Card key={c.id}
                            style={{height:400}}
                            cover={
                                <RenderMultiMedia fileInfo={c} heightOfdisplay={300} />
                            }
                        >
                            {"category: " + c.category +" / dataType: "+ c.dataType + " / fileType: "+ c.fileType }
                            <Card.Meta 
                                description={c.description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card key={c.id}> 
                            { "여기에 흥덕메시지" }
                            <Card.Meta 
                                description={"dataType : " + c.dataType + "  /  " +
                                             "tagValue(카테고리) : " + tagValue}
                            />
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

Category.getInitialProps = async (context) => {
    //const tag = context.query.tag;
    const tag = "total";
    
    context.store.dispatch({
        type: LOAD_CATEGORY_REQUEST,
        data: tag,
    })
    return { tag };
}

export default Category;