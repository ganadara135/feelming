import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Avatar, Card } from 'antd';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';


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
    const onSearch = (value) => {
        console.log('search Value : ', value);
                       // 내부 주소                                      // 외부  주소
        Router.push({ pathname: '/hashtag', query: { tag: value }}, `/hashtag/${value}`);
    }

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key='home'><Link href="/"><a>Feelming</a></Link></Menu.Item>
                <Menu.Item key='profile'><Link href="/profile"  prefetch  ><a>프로필</a></Link></Menu.Item>
                <Menu.Item key='mail'>
                    <Input.Search 
                        enterButton 
                        style={{ verticalAlign: 'middle'}}
                        onSearch={onSearch} 
                    />
                </Menu.Item>
            </Menu>
            <Row gutter={8} >
                <Col xs={24} md={6}>
                    {me   // isLoggedIn 
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
        </div>
    )
}

AppLayout.protTypes = {
    children: PropTypes.node,
};

export default AppLayout;