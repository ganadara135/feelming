import React, { useEffect, useState } from 'react';
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
    console.log("children.type.name : ", children.type.name)
    //console.log("children : ", children)
    console.log("firstInit : ", firstInit );
    const { isLoggedIn, me } = useSelector( state => state.user );
    const [searchCondition, setSearchCondition] = useState(firstInit); 
    console.log("searchCondition : ", searchCondition);
 //   const dispatch = useDispatch();

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
                    <a target="_blank">사용 안하는 공간</a>
                </Col>
            </Row>
            <Affix offsetBottom={10}>
                <Button
                    type={searchCondition==="all" || searchCondition==="file-pdf" ? "primary" : "link"}
                    icon="file-pdf"
                    //loading={true}
                    onClick={() => {
                        setSearchCondition("file-pdf") || console.log("searchCondition : ", searchCondition)
                    }}
                >
                    글
                </Button>
                <Button
                    type={searchCondition==="all" || searchCondition==="sound" ? "primary" : "link"}
                    icon="sound"
                    onClick={() => {setSearchCondition("sound") || console.log("searchCondition : ", searchCondition)
                    }}
                >
                    사운드
                </Button>
                <Button
                    type={searchCondition==="all" || searchCondition==="video-camera" ? "primary" : "link"}
                    icon="video-camera"
                    onClick={() => {setSearchCondition("video-camera") || console.log("searchCondition : ", searchCondition)
                    }}
                >
                    영상
                </Button>
                <Button
                    type={searchCondition==="all" || searchCondition==="picture" ? "primary" : "link"}
                    icon="picture"
                    onClick={() => {setSearchCondition("picture") || console.log("searchCondition : ", searchCondition)
                    }}
                >
                    사진
                </Button>
                <Button
                    type={searchCondition==="all" || searchCondition==="file-image" ? "primary" : "link"}
                    icon="file-image"
                    onClick={() => {setSearchCondition("file-image") || console.log("searchCondition : ", searchCondition)
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