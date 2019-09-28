import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PostCard from '../components/PostCard'
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_HASHTAG_POSTS_REQUEST} from '../reducers/post';


 
const Hashtag = ({ tag }) => {
    console.log("tag : ", tag);
    const dispatch = useDispatch();
    const {mainPosts, hasMorePost } = useSelector( state => state.post );

    const onScroll = useCallback( () => {
        if (window.scrollY + document.documentElement.clientHeight 
            > document.documentElement.scrollHeight - 300 ) {
                if (hasMorePost) {
                    dispatch({
                        type: LOAD_HASHTAG_POSTS_REQUEST,
                        lastId: mainPosts[mainPosts.length - 1 ].id,
                        data: tag
                    })
                }
            };
    }, [hasMorePost, mainPosts.length]);

    useEffect( () => {
        window.addEventListener('scroll', onScroll);
        return () => {  // 이렇게 해야 호출될때 아래가 실행됨, 본 컴포넌트 나갈때 실행됨
            window.removeEventListener('scroll', onScroll);
        }
    }, [mainPosts.length]); //  빈 deps [], 는 처음 로딩될때 한 번만 호출됨

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