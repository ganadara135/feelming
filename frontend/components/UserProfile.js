import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const { user } = useSelector( state => state.user );
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logoutAction);
    }, []);

    return (
        <Card 
            actions={[
                <div key="twit">트위<br/> {user.Post}</div>,
                <div key="followings">팔로잉<br/> {user.Followings}</div>,
                <div key="followers">팔로워<br/> {user.Followers}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{user.nickname[0]}</Avatar>}
                title={user.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;