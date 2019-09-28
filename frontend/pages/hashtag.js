import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostCard from '../components/PostCard'
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_HASHTAG_POSTS_REQUEST} from '../reducers/post';


 
const Hashtag = ({ tag }) => {
    console.log("tag : ", tag);
    const dispatch = useDispatch();
    const {mainPosts } = useSelector( state => state.post );

    console.log('mainPosts in Hashtag : ', mainPosts);

    // useEffect( () => {
    //     dispatch({
    //         type: LOAD_HASHTAG_POSTS_REQUEST,
    //         data: tag,
    //     });
    // }, []);
    return (
        <div>
            {mainPosts.map(c => (
                <PostCard key={c.id} post={c} />
            ))}
        </div>
    );
};

Hashtag.propTypes = {
    tag: PropTypes.string.isRequired,
};

Hashtag.getInitialProps = async (context) => {
    const tag = context.query.tag;
    //console.log('hashtag getInitialProps', context.query.tag);
    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: tag,
    })
    return { tag };
}

export default Hashtag;