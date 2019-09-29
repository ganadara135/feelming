import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    
    const dispatch = useDispatch();
    const { me } = useSelector( state => state.user );

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

     console.log(" UserProfile me : ", me)
 
    return (
        <Card 
            actions={[
                 <div key="twit">포스트<br/> {me.Posts && me.Posts.length}</div>,
                 <div key="followings">팔로잉<br/> { me.Followings && me.Followings.length}</div>,
                 <div key="followers">팔로워<br/> {me.Followings && me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                 avatar={<Avatar>{me.nickname && me.nickname[0]}</Avatar>}
                 title={me.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;