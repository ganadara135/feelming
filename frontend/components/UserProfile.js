import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me } = useSelector( state => state.user );
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    // console.log(" UserProfile me : ", me)
    // console.log(" UserProfile me.Posts.length : ", me.Posts.length)
    // console.log(" UserProfile me.Followers.length : ", me.Followers.length)
    // console.log(" UserProfile me.Followings.length : ", me.Followings.length)

    return (
        <Card 
            actions={[
                //  <div key="twit">포스트<br/> {me.Posts.length}</div>,
                //  <div key="followings">팔로잉<br/> {me.Followings.length}</div>,
                //  <div key="followers">팔로워<br/> {me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                //  avatar={<Avatar>{me.nickname[0]}</Avatar>}
                //  title={me.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;