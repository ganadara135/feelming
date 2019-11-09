import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Button, Row, Col, Icon, Affix } from 'antd';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
    const { isLoggedIn, me } = useSelector( state => state.user );
    const dispatch = useDispatch();

    // useEffect( () => {
    //     if (!me) {
    //         dispatch({
    //             type: LOAD_USER_REQUEST,
    //         });
    //     }
    // }, [me]);

    // const onSearch = (value) => {
    //                    // 내부 주소                                      // 외부  주소
    //    // Router.push({ pathname: '/hashtag', query: { tag: value }}, `/hashtag/${value}`);
    //    alert("It is under construction")
    // }

    //console.log("me : ", me)
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
                    {children}            
                </Col>
                <Col xs={24} md={6}>
                    <a target="_blank">Made by kcod</a>
                </Col>
            </Row>
            <Affix offsetBottom={10}>
                <Button
                    type="link"
                    icon="file-pdf"
                    onClick={() => {
                    }}
                >
                    글
                </Button>
                <Button
                    type="link"
                    icon="sound"
                    onClick={() => {
                    }}
                >
                    사운드
                </Button>
                <Button
                    type="link"
                    icon="video-camera"
                    onClick={() => {
                    }}
                >
                    영상
                </Button>
                <Button
                    type="link"
                    icon="picture"
                    onClick={() => {
                    }}
                >
                    사진
                </Button>
                <Button
                    type="link"
                    icon="file-image"
                    onClick={() => {
                    }}
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