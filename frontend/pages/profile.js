import React, { useEffect, useCallback, useState } from 'react';
import PostCard from '../containers/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import NicknameEditForm from '../containers/NicknameEditForm';
import ProfileImg from '../containers/ProfileImg';
import SelfIntroductionEditForm from '../containers/SelfIntroductionEditForm';
import FollowList from '../components/FollowList';

import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, UNFOLLOW_USER_REQUEST, 
    REMOVE_FOLLOWER_REQUEST, LOAD_PROFILE_IMAGE_REQUEST, LOAD_PROFILE_CAREER_REQUEST,
    LOAD_SELFINTRODUCTION_REQUEST } from '../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';


const Profile = () => {
    //const dispatch = useDispatch();
    const { me, followerList, followingList, hasMoreFollower, hasMoreFollowing } = useSelector( state => state.user );
    // const { mainPosts,  } = useSelector ( state => state.post );
    // // useEffect ( () => {
    // //     if (me) {
    // //     }
    // // }, [me && me.id ]);

    // const onUnfollow = useCallback(userId => () => {
    //     dispatch({
    //         type: UNFOLLOW_USER_REQUEST,
    //         data: userId,
    //     });
    // }, []);

    // const onRemoveFollower = useCallback( userId => () => {
    //     dispatch({
    //         type: REMOVE_FOLLOWER_REQUEST,
    //         data: userId,
    //     });
    // }, []);

    // const loadMoreFollowings = useCallback( () => {
    //     dispatch({
    //         type: LOAD_FOLLOWINGS_REQUEST,
    //         offset: followingList.length,
    //     });
    // }, [followingList.length])

    // const loadMoreFollowers = useCallback( () => {
    //     dispatch({
    //         type: LOAD_FOLLOWERS_REQUEST,
    //         offset: followerList.length,
    //     });
    // }, [followerList.length]);

    return (
    <div>
        {me && <ProfileImg /> }
        {me && <NicknameEditForm /> }
        {me && <SelfIntroductionEditForm /> }
        
        {/* <FollowList
            header="팔로잉 목록"
            hasMore={hasMoreFollowing}
            onClickMore={loadMoreFollowings}
            data={followingList}
            onClickStop={onUnfollow}
        />
        <FollowList
            header="팔로워 목록"
            hasMore={hasMoreFollower}
            onClickMore={loadMoreFollowers}
            data={followerList}
            onClickStop={onRemoveFollower}
        />
        <div>
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div> */}
    </div>
    );
};

Profile.getInitialProps = async (context) => {
    const state = context.store.getState();
    // 이 직전에 LOAD_USERS_REQUEST  가 완료돼야함
    // 따라서 me = null 이면 나로 인식하게 아래 reducer 를 처리하다
    if(state.user.me) {
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
        context.store.dispatch({
            type: LOAD_PROFILE_IMAGE_REQUEST,
            data: state.user.me && state.user.me.id,
        });
        context.store.dispatch({
            type: LOAD_PROFILE_CAREER_REQUEST,
            data: state.user.me && state.user.me.id,
        });
        context.store.dispatch({
            type: LOAD_SELFINTRODUCTION_REQUEST,
            data: state.user.me && state.user.me.id,
        });
    }
}
export default Profile;