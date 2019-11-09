import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PostCard from '../containers/PostCard'
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_BEST_LIKES_REQUEST} from '../reducers/post';

import { Carousel } from 'antd';
import styled from 'styled-components';
 
const Gallery = ({ tag }) => {
   // console.log("tag : ", tag);
    const dispatch = useDispatch();
    const {bestLikesPosts, hasMorePost } = useSelector( state => state.post );

    function onChange(a, b, c) {
        console.log(a, b, c);
    }
   
    console.log("bestLikesPosts : ", bestLikesPosts);
    
    return (
        // <div>
        //     {mainPosts.map(c => (
        //         <PostCard key={c.id} post={c} />
        //     ))}
        // </div>
        <StyleCarousel>
        <Carousel afterChange={onChange}>
            <StyleDiv>
            <h3>1</h3>
            </StyleDiv>
            <StyleDiv>
            <h3>2</h3>
            </StyleDiv>
            <StyleDiv>
            <h3>3</h3>
            </StyleDiv>
            <StyleDiv>
            <h3>4</h3>
            </StyleDiv>
        </Carousel>
        </StyleCarousel>
    );
};

Gallery.propTypes = {
    //tag: PropTypes.string.isRequired,
};

Gallery.getInitialProps = async (context) => {
    const tag = context.query.tag;
    //console.log('hashtag getInitialProps', context.query.tag);
    context.store.dispatch({
        type: LOAD_BEST_LIKES_REQUEST,
        data: tag,
    })
    return { tag };
}

const StyleCarousel = styled.div`
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
    vertical-align: middle;
    margin-top: 0px;

  $ h3 {
    color: #fff;
    top: 100px;
  }
`;

const StyleDiv = styled.div`
    display: table;
    vertical-align: middle;
   
`;

export default Gallery;