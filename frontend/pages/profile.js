import React, { useEffect, useCallback, useState } from 'react';
import { Form, Button, List, Card, Icon, Input } from 'antd';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import NicknameEditForm from '../components/NicknameEditForm';

import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, UNFOLLOW_USER_REQUEST, 
    REMOVE_FOLLOWER_REQUEST } from '../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
 

const Profile = () => {
    const dispatch = useDispatch();
    const { me, followerList, followingList } = useSelector( state => state.user );
    const { mainPosts,  } = useSelector ( state => state.post );
    //const [editedName, setEditedName ] = useState();

    // useEffect ( () => {
    //     if (me) {
    //     }
    // }, [me && me.id ]);

    const onUnfollow = useCallback(userId => () => {
        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: userId,
        });
    }, []);

    const onRemoveFollower = useCallback( userId => () => {
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: userId,
        });
    }, []);

    const loadMoreFollowings = useCallback( () => {
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            offset: followingList.length,
        });
    }, [followingList.length])

    const loadMoreFollowers = useCallback( () => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            offset: followerList.length,
        });
    }, [followerList.length]);

    return (
    <div>
        <NicknameEditForm />
        <List
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div> 팔로윙 목록 </div> }
            loadMore={<Button style={{ width: '100%' }} onClick={loadMoreFollowings}> 더 보기 </Button>}
            dataSource={followingList}
            renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<Icon key='icon' type="stop" />]} onClick={onUnfollow(item.id)}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
        <List
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div> 팔로워 목록 </div> }
            loadMore={<Button style={{ width: '100%' }} onClick={loadMoreFollowers}> 더 보기 </Button>}
            dataSource={followerList}
            renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<Icon key='icon' type="stop" />]} onClick={onRemoveFollower(item.id)}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
        <div>
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div>
    </div>
    );
};

Profile.getInitialProps = async (context) => {
    const state = context.store.getState();
    // 이 직전에 LOAD_USERS_REQUEST  가 완료돼야함
    // 따라서 me = null 이면 나로 인식하게 아래 reducer 를 처리하다
    context.store.dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            data: state.user.me && state.user.me.id,
    });
    context.store.dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            data: state.user.me && state.user.me.id,
    });
    context.store.dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: state.user.me && state.user.me.id,
    });
}
export default Profile;