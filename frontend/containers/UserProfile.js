import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import Link from 'next/link';
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
                <Link href='/profile'  prefetch  key='twit'>
                    <a>
                       <div key="twit">포스트<br/> {me.Posts && me.Posts.length}</div>
                    </a>
                </Link>,
                <Link href='profile' prefetch  key='following'>
                    <a>
                        <div key="followings">팔로잉<br/> { me.Followings && me.Followings.length}</div>
                    </a>
                </Link>,
                <Link href='/profile' prefetch  key='follower'>
                    <a>
                        <div key="followers">팔로워<br/> {me.Followings && me.Followers.length}</div>
                    </a>
                </Link>,
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