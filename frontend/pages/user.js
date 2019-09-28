import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_USER_POSTS_REQUEST} from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import PostCard from '../components/PostCard';
import { Avatar, Card } from 'antd';

const User = ( { id } ) => {
  
    const dispatch = useDispatch();
    const {mainPosts } = useSelector( state => state.post );
    const {userInfo } = useSelector( state => state.user );

    return (
        <div>
            {userInfo 
            ? <Card
                action={[
                    <div key='twit'>
                        짹짹
                        <br />
                        {userInfo.Posts}
                    </div>,
                    <div key='following'>
                        팔로잉
                        <br />
                        {userInfo.Followings}
                    </div>,
                    <div key="followers">
                        팔로워
                        <br />
                        {userInfo.Followers}
                    </div>,
                ]}
                >
                    <Card.Meta 
                        avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                    />
            </Card>
            : null }
            {mainPosts.map( c => {
                <PostCard key={+c.createdAt} post={c} />
            })}
        </div>
    );
}

User.propTyps = {
    id: PropTypes.number.isRequired,
}

User.getInitialProps = async (context) => {
    const id = context.query.id;
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: id,
    });
    context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: id,
    });
    return { id: parseInt(context.query.id, 10) }
};


export default User;