import React,{useState, useCallback, useEffect, useRef, useLayoutEffect } from 'react';
import { Card, Icon, Button, Avatar, Form, Input, List, Comment, Popover} from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import PostImages from '../components/PostImages'
//import PostCardContent from '../components/PostCardContent';
import styled from 'styled-components';
import moment from 'moment';

//import FileViewer from 'react-file-viewer';      

//const LazyFileViewer = lazy(() => import('../components/LazyFileViewer')  )         
import ReactPlayer from 'react-player';
import { Document, Page, Outline } from 'react-pdf';
import {checkImageFileType, checkPDFFileType, checkVideoAudioFileType } from '../config/utils';

import CommnetForm from './CommentForm';
import FollowButton from '../components/FollowButton';
import { UNFOLLOW_USER_REQUEST, FOLLOW_USER_REQUEST } from '../reducers/user';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, COOPERATE_REQUEST, UNCOOPERATE_REQUEST,
    REMOVE_POST_REQUEST } from '../reducers/post';

//import { backUrl } from '../config/config';
//const backUrl = 'http://api.feelming.org';
moment.locale('ko');

const CardWrapper = styled.div`
    margin-bottom: 20px;
`;


const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened ] = useState(false);
    const [pdfTotalPages, setPdfTotalPages ] = useState(null);
    const [pdfPageNumber, setPdfPageNumber ] = useState(1);
    const [dimensions, setDimensions ] = useState({ width:0, height: 0 });
    const targetRef = useRef();
    const id = useSelector(state => state.user.me && state.user.me.id);

    const dispatch = useDispatch();

    const liked = id && post.Liker && post.Liker.find(v =>  v.id === id);
    const cooper = id && post.Cooperates && post.Cooperates.find(v =>  v.UserId === id);



    console.log("cooper : ", cooper)
    //console.log("post.Cooperates.length : ", post.Cooperates.length)
    if((post.Cooperates.length > 0)){
        console.log("5555")
        console.log("id : ", id)
        post.Cooperates.find( v => console.log(v.UserId))
    }
        

    console.log("post.Cooperates : ", post.Cooperates);


    // Similar to componentDidMount and componentDidUpdate, componentWillUnmount:
    // 리렌더링 되는 에러 잡는 방법  ////////////////////////   에러 잡는 방법/////////////////
    // const postMemory = useRef(post);
    // console.log("post : ", post)
    // useEffect( () => {
    //     console.log('post useEffect : ', postMemory.current,  post,  postMemory.current === post);
    // }, [post]);

    // const chk_me = useRef(me);
    // console.log("me : ", me)
    // useEffect( () => {
    //     console.log('me useEffect : ', chk_me.current,  me,  chk_me.current === me);
    // }, [me]);

    // const chk_id = useRef(id);      // Dom 에 직접 접근하기도하고, 값을 기억하지만 리렌더링하고 싶지 않을때도 사용
    // console.log("id : ", id)
    // useEffect( () => {
    //     console.log('id useEffect : ', chk_id.current,  id,  chk_id.current === id);
    // }, [id]);


    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if (!commentFormOpened) {
          dispatch({
            type: LOAD_COMMENTS_REQUEST,
            data: post.id,
          });
        }
      }, []);
    
    const onToggleLike = useCallback( () => {
        if (!id) {
            return alert('로그인이 필요합니다');
        }
        console.log("onToggleLike liked : ", liked)
        if ( liked && liked.id === id){     // 좋아요 누른 상태
            dispatch( {
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            });
        } 
        if(liked === undefined) {                                                        // 좋아요 안 누른 상태
            dispatch( {
                type: LIKE_POST_REQUEST,
                data: post.id,
            });
        }
    }, [id, post && post.id, liked && liked.id])

    const onCooperate = useCallback( () => {
        console.log("onCooperate() ")
        if (!id) {
            return alert('로그인이 필요합니다');
        }
        console.log("onCooperate cooper : ", cooper)
        if ( cooper && cooper.UserId === id){     // 좋아요 누른 상태
            dispatch( {
                type: UNCOOPERATE_REQUEST,
                data: post.id,
            });
        } 
        if(cooper === undefined) {                                                        // 좋아요 안 누른 상태
            dispatch( {
                type: COOPERATE_REQUEST,
                data: post.id,
            });
        }
    }, [id, post && post.id, cooper && cooper.UserId]);

    const onFollow = useCallback( userId => () => {
        dispatch({
            type: FOLLOW_USER_REQUEST,
            data: userId,
        });
    }, [ post && post.Followings]);

    const onUnfollow = useCallback( userId => () => {
        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: userId,
        });
    }, [ post && post.Followings]);

    const onRemovePost = useCallback( userId => () => {
        console.log("call onRemovePost() ")
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: userId,
        });
    },[]);


    const onPDFDocumentLoadSuccess = useCallback( (pdf)  => {
        setPdfTotalPages(pdf._pdfInfo.numPages);
    },[]);

    const changePdfPage =  (offset) => setPdfPageNumber(
        pdfPageNumber + offset
    );
    const previousPage = () => changePdfPage(-1);
    const nextPage = () => changePdfPage(1);

    //useLayoutEffect(() => {           // 이거로 하면 화면 깨짐, 
    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetWidth
            });
        }
    },[]);

    return (
        <CardWrapper>
        <Card
            //key={+post.createdAt}

            cover={post.UserAssets && post.UserAssets[0]  && 
                (checkImageFileType(post.UserAssets[0].fileType)  ? <PostImages images={post.UserAssets}/> : []) }
            actions={[
                id && <Icon type="usergroup-add" key="usergroup-add"  style={cooper === null || cooper === undefined ? { color: ''} : { color: '#eb2f96'}}  onClick={onCooperate} />,
                <Icon type="heart" key="heart" theme={liked !== undefined ? 'twoTone' : 'outlined'} twoToneColor={"#eb2f96"} onClick={onToggleLike} />,
                <Icon type="message" key="message" onClick={onToggleComment}/>,
                <Popover
                    key='ellipsis'
                    content={(
                        <Button.Group>
                            {id && post.UserId === id
                                ? (
                                    <>
                                        <Button> 수정 </Button>
                                        <Button type="danger" onClick={onRemovePost(post.id)} >삭제</Button>
                                    </>
                                )
                            : <Button>신고</Button>}
                        </Button.Group>
                    )}
                    >
                        <Icon type="ellipsis" />
                    </Popover>
            ]}
            title={post.RetweetId ? `${post.User.nickname}님이 리트윗했습니다` : null}
            extra={<FollowButton post={post} onUnfollow={onUnfollow} onFollow={onFollow} />}
        >

            <p>{'공개범위 : '}{post.publicScope}</p>
            <p>{'Category : '}{post.category}</p>
            <p>{'Copyright : '}{post.copyright}</p>
            <p>{'생성날짜 : '}{moment(post.createdAt).format('YYYY.MM.DD:HH.mm.ss')}</p>
            <div ref={targetRef}>  {  
                post.UserAssets && post.UserAssets[0]  //&& post.UserAssets[0].fileType !== undefined  
                &&  // <p>{'파일타입 : '}{post.UserAssets[0].fileType}</p> &&
                (checkVideoAudioFileType(post.UserAssets[0].fileType)  
                ? <ReactPlayer
                // config={{ file: {
                //     attributes: {
                //         crossOrigin: 'true',            // CORS  설정
                //     }}}}  
                //  crossOrigin='anonymous' 
                    width={dimensions.width}
                    url={post.UserAssets[0].src} playing={false} controls={true} loop={true} /> 
                : (checkPDFFileType(post.UserAssets[0].fileType)
                ?     
                <div> 
                    <Document
                        // crossOrigin='anonymous'  this is for CORS,
                        file={post.UserAssets[0].src}
                        onLoadSuccess={onPDFDocumentLoadSuccess}
                    >
                    <Page 
                        pageNumber={pdfPageNumber || 1} 
                        width={dimensions.width} /> 
                    </Document>

                    <Button type="default" disabled={pdfPageNumber <= 1} onClick={previousPage} >Previous</Button>
                    <Button type="default" disabled={pdfPageNumber >= pdfTotalPages} onClick={nextPage} >Next</Button>

                    <span >{" \t   "} Page {pdfPageNumber} of {pdfTotalPages} </span>
        
                </div>
                : [] ))                // 마지막은 이미지, 기타 파일
            }</div>
       
            
        </Card>
        { commentFormOpened && (
            <>
                <CommnetForm post={post} />
                <List
                    header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments || []}
                    renderItem={item => (
                        <li>
                            {/* {console.log("item : ", item)} */}
                            <Comment
                                author={item.User.nickname}
                                avatar={(
                                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                                    <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                    </Link>
                                )}
                                content={item.content}
                            />
                        </li>
                    )}
                />
            </>
        )}
        </CardWrapper>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.string,
    })
}

// PostCard.getInitialProps = async (context) => {
//     //const tag = context.query.tag;
//     //console.log('hashtag getInitialProps', context.query.tag);
//     // context.store.dispatch({
//     //     type: LOAD_HASHTAG_POSTS_REQUEST,
//     //     data: tag,
//     // })
//    // return { tag };

//    console.log('context PostCard : ', context)
//    return 
// }

export default PostCard;