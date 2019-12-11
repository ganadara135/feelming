import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Button, Row, Col, Affix } from 'antd';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';
import Router,{ useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
// import { LOAD_USER_REQUEST } from '../reducers/user';
// import styled from 'styled-components';


const AppLayout = ({ children, firstInit}, ) => {
    
    const { isLoggedIn, me } = useSelector( state => state.user );
    const [searchCondition, setSearchCondition] = useState([]); 
    const refButton_file_pdf = useRef();
    const refButton_sound = useRef();
    const refButton_video_camera = useRef();
    const refButton_picture = useRef();
    const refButton_file_image = useRef();

    const router = useRouter()
    // const styleRouter = {
    //     marginRight: 10,
    //     //color: router.pathname === href ? 'orange' : 'black',
    // }
   
    
    console.log("searchCondition : ", searchCondition);

    // const onSearch = (value) => {
    //                    // 내부 주소                                      // 외부  주소
    //    // Router.push({ pathname: '/hashtag', query: { tag: value }}, `/hashtag/${value}`);
    //    alert("It is under construction")
    // }


    const changeStyleButtonPressed = (buttonRefVal) => {
        if ( buttonRefVal.current.buttonNode.style.backgroundColor === 'orange' ){
            buttonRefVal.current.buttonNode.style.backgroundColor = 'white';
        }else {
            buttonRefVal.current.buttonNode.style.backgroundColor = 'orange'
        }
    }

    const handleClearSearchCondition = () => {
        setSearchCondition([]);
        refButton_file_pdf.current.buttonNode.style.backgroundColor = 'orange';
        refButton_sound.current.buttonNode.style.backgroundColor = 'orange';
        refButton_video_camera.current.buttonNode.style.backgroundColor = 'orange';
        refButton_picture.current.buttonNode.style.backgroundColor = 'orange';
        refButton_file_image.current.buttonNode.style.backgroundColor = 'orange';
    }

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key='home'><Link href="/" ><a>Feelming</a></Link></Menu.Item>
                {/* <Menu.Item key='search'>
                    <Input.Search 
                        enterButton 
                        style={{ verticalAlign: 'middle'}}
                        onSearch={onSearch} 
                    />
                </Menu.Item> */}
                {me && me.length !== 0 ? <Menu.Item key='profile'><Link href="/profile"  prefetch={false} >
                    <a >프로필</a></Link></Menu.Item> : [] }
                {me && me.length !== 0 ? <Menu.Item key='workplace'><Link href="/workplace"  prefetch={false}>
                    <a>내작업장</a></Link></Menu.Item> : [] }
                {me && me.length !== 0 ? <Menu.Item key='gallery'><Link href="/gallery" prefetch={false} >
                    <a onClick={() => handleClearSearchCondition()}>갤러리</a></Link></Menu.Item> : [] }
                {me && me.length !== 0 ? <Menu.Item key='keyword'><Link href="/keyword" prefetch={false} >
                    <a onClick={()=>handleClearSearchCondition()}>키워드</a></Link></Menu.Item> : [] }
                {me && me.length !== 0 ? <Menu.Item key='category'><Link href="/category" prefetch={false} >
                    <a onClick={()=>handleClearSearchCondition()}>카테고리</a></Link></Menu.Item> : [] }
            </Menu>
            <Row gutter={8} >
                <Col xs={24} md={6}>
                    
                    {me && me.length !== 0   // isLoggedIn 
                        ? <UserProfile />
                        : <LoginForm />
                    }
                </Col>
                <Col xs={24} md={12}>
                    {/* {children}  */}
                    {/* {withHOC({searchCondition: searchCondition})(children)} */}
                    {/* <div style={{height:'400px'}}> */}
                    <div>
                        {React.cloneElement(children, {searchCondition : searchCondition})} 
                    </div>
                   
                </Col>
                <Col xs={24} md={6}>
                    <a target="_blank">사용 안하는 공간</a>
                </Col>
            </Row>
            {console.log("router.pathname : ", router.pathname)}
            {me && me.length !== 0 && router.pathname !== '/profile' && router.pathname !== '/' && router.pathname !== '/workplace' ? 
                <Affix offsetBottom={10} align={"middle"}>
                    <Button
                        ref={refButton_file_pdf}
                        type={"link"}
                        style={{"backgroundColor": searchCondition.findIndex( v => v === "text") ? "orange" : "white" }}
                        icon="file-pdf"
                        onClick={() => {  changeStyleButtonPressed(refButton_file_pdf) || 
                        setSearchCondition(!searchCondition.includes("text") ?
                        [...searchCondition, "text" ] : (searchCondition.filter(v => 
                            v.toString() !== "text"
                        )))  }}
                    > 글 </Button>
                    <Button
                        ref={refButton_sound}
                        type={"link"}
                        style={{"backgroundColor": searchCondition.findIndex( v => v === "sound") ? "orange" : "white" }}
                        icon="sound"
                        onClick={() => { changeStyleButtonPressed(refButton_sound) || 
                            setSearchCondition(!searchCondition.includes("sound") ?
                            [...searchCondition, "sound" ] : searchCondition.filter(v => 
                        v.toString() !== "sound"
                        ))}}
                    > 소리 </Button>
                    <Button
                        ref={refButton_video_camera}
                        type={"link"}
                        style={{"backgroundColor": searchCondition.findIndex( v => v ==="movie") ? "orange" : "white" }}
                        icon="video-camera"
                        onClick={() => { changeStyleButtonPressed(refButton_video_camera) || 
                            setSearchCondition(!searchCondition.includes("movie") ?
                            [...searchCondition, "movie" ] : searchCondition.filter(v => 
                        v.toString() !== "movie"
                        ))}}
                    > 영상 </Button>
                    <Button
                        ref={refButton_picture}
                        type={"link"}
                        style={{"backgroundColor": searchCondition.findIndex( v => v ==="photo") ? "orange" : "white" }}
                        icon="picture"
                        onClick={() => { changeStyleButtonPressed(refButton_picture) || 
                            setSearchCondition(!searchCondition.includes("photo") ?
                            [...searchCondition, "photo" ] : searchCondition.filter(v => 
                        v.toString() !== "photo"
                        ))}}
                    > 사진 </Button>
                    <Button
                        ref={refButton_file_image}
                        type={"link"}
                        style={{"backgroundColor": searchCondition.findIndex( v => v ==="picture") ? "orange" : "white" }}
                        icon="file-image"
                        onClick={() => { changeStyleButtonPressed(refButton_file_image) || 
                            setSearchCondition(!searchCondition.includes("picture") ?
                            [...searchCondition, "picture" ] : searchCondition.filter(v => 
                        v.toString() !== "picture"
                        ))}}
                    > 그림 </Button>
                </Affix>
            : [] }
        </div>
    )
}


AppLayout.protTypes = {
    children: PropTypes.node,
};

export default AppLayout;