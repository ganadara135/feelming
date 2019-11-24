import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Button, Row, Col, Icon, Affix } from 'antd';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';
import styled from 'styled-components';

const AppLayout = ({ children, firstInit}, ) => {
    
    const { isLoggedIn, me } = useSelector( state => state.user );
    const [searchCondition, setSearchCondition] = useState([]); 
    const refButton_file_pdf = useRef();
    const refButton_sound = useRef();
    const refButton_video_camera = useRef();
    const refButton_picture = useRef();
    const refButton_file_image = useRef();
   
    
    console.log("searchCondition : ", searchCondition);

    // const onSearch = (value) => {
    //                    // 내부 주소                                      // 외부  주소
    //    // Router.push({ pathname: '/hashtag', query: { tag: value }}, `/hashtag/${value}`);
    //    alert("It is under construction")
    // }


    const changeStyleButtonPressed = (buttonRefVal) => {
        if ( buttonRefVal.current.buttonNode.style.backgroundColor === 'red' ){
            buttonRefVal.current.buttonNode.style.backgroundColor = 'white';
        }else {
            buttonRefVal.current.buttonNode.style.backgroundColor = 'red'
        }
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
                {me && me.length !== 0 ? <Menu.Item key='profile'><Link href="/profile"  prefetch={false} ><a>프로필</a></Link></Menu.Item> : [] }
                {me && me.length !== 0 ? <Menu.Item key='workplace'><Link href="/workplace"  prefetch={false}><a>내작업장</a></Link></Menu.Item> : [] }
                <Menu.Item key='gallery'><Link href="/gallery" prefetch={false} ><a>갤러리</a></Link></Menu.Item>
                <Menu.Item key='keyword'><Link href="/keyword" prefetch={false} ><a>키워드</a></Link></Menu.Item>
                <Menu.Item key='category'><Link href="/category" prefetch={false} ><a>카테고리</a></Link></Menu.Item>
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
                    <div>{React.cloneElement(children, {searchCondition : searchCondition})} </div>
                   
                </Col>
                <Col xs={24} md={6}>
                    <a target="_blank">사용 안하는 공간</a>
                </Col>
            </Row>
            <Affix offsetBottom={10}>
             
                <Button
                    ref={refButton_file_pdf}
                    type={"link"}
                    style={{"backgroundColor": searchCondition.findIndex( v => v === "file-pdf") ? "red" : "white" }}
                    icon="file-pdf"
                    onClick={() => {  changeStyleButtonPressed(refButton_file_pdf) || 
                     setSearchCondition(!searchCondition.includes("file-pdf") ?
                     [...searchCondition, "file-pdf" ] : (searchCondition.filter(v => 
                        v.toString() !== "file-pdf"
                    )))  }}
                >
                    글
                </Button>
                <Button
                    ref={refButton_sound}
                    type={"link"}
                    style={{"backgroundColor": searchCondition.findIndex( v => v === "sound") ? "red" : "white" }}
                    icon="sound"
                    onClick={() => { changeStyleButtonPressed(refButton_sound) || 
                        setSearchCondition(!searchCondition.includes("sound") ?
                        [...searchCondition, "sound" ] : searchCondition.filter(v => 
                       v.toString() !== "sound"
                    ))}}
                >
                    사운드
                </Button>
                <Button
                    ref={refButton_video_camera}
                    type={"link"}
                    style={{"backgroundColor": searchCondition.findIndex( v => v ==="video-camera") ? "red" : "white" }}
                    icon="video-camera"
                    onClick={() => { changeStyleButtonPressed(refButton_video_camera) || 
                        setSearchCondition(!searchCondition.includes("video-camera") ?
                        [...searchCondition, "video-camera" ] : searchCondition.filter(v => 
                       v.toString() !== "video-camera"
                    ))}}
                >
                    영상
                </Button>
                <Button
                    ref={refButton_picture}
                    type={"link"}
                    style={{"backgroundColor": searchCondition.findIndex( v => v ==="picture") ? "red" : "white" }}
                    icon="picture"
                    onClick={() => { changeStyleButtonPressed(refButton_picture) || 
                        setSearchCondition(!searchCondition.includes("picture") ?
                        [...searchCondition, "picture" ] : searchCondition.filter(v => 
                       v.toString() !== "picture"
                    ))}}
                >
                    사진
                </Button>
                <Button
                    ref={refButton_file_image}
                    type={"link"}
                    style={{"backgroundColor": searchCondition.findIndex( v => v ==="file-image") ? "red" : "white" }}
                    icon="file-image"
                    onClick={() => { changeStyleButtonPressed(refButton_file_image) || 
                        setSearchCondition(!searchCondition.includes("file-image") ?
                        [...searchCondition, "file-image" ] : searchCondition.filter(v => 
                       v.toString() !== "file-image"
                    ))}}
                >
                    그림
                </Button>
                
            </Affix>
        </div>
    )
}


AppLayout.protTypes = {
    children: PropTypes.node,
};

export default AppLayout;