import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PostCard from '../containers/PostCard';
import PostImages from '../components/PostImages';
import { Pagination, Carousel } from 'antd';
import {useDispatch, useSelector } from 'react-redux';
import {LOAD_MY_MEDIA_REQUEST} from '../reducers/post';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';
import styled from 'styled-components';
 
const Gallery = ({ tag }) => {
    const [currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const {myMedia, hasMorePost } = useSelector( state => state.post );

    function onChange(selected) {
        console.log(selected);
        setCurrentPage(selected);
        console.log("chk currentPage : ", currentPage);
    }

    function onChangePagination(tmp) {
        console.log("onChangePagination : ", tmp)
    }
   
    console.log("myMedia : ", myMedia);
    console.log("myMedia.length : ", myMedia.length);

    
    return (
        <StyleCarousel>
            <Carousel afterChange={onChange} dots={true}>
                { myMedia.map( c => <StyleDiv key={c.id}>
                <h3>{ (checkImageFileType(c.fileType)  ? <span><img src={`${c.src}`} /></span> : c.fileType) }
                </h3></StyleDiv> ) }
            </Carousel>
            {/* <Pagination defaultCurrent={1} total={myMedia.length} onChange={onChangePagination} pageSize={5} /> */}
        </StyleCarousel>
    );
};

Gallery.propTypes = {
    //tag: PropTypes.string.isRequired,
};

Gallery.getInitialProps = async (context) => {
    const tag = context.query.tag;

    console.log("context.query.tag : ", tag)
    context.store.dispatch({
        type: LOAD_MY_MEDIA_REQUEST,
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