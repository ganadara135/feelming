import React,{useState, useCallback, useEffect } from 'react';
import { Card, Icon, Button, Avatar, Form, Input, List, Comment} from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST } from '../reducers/post';
import Link from 'next/link';
import PostImages from './PostImages'



const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened ] = useState(false);
    const [commentText, setCommentText ] = useState('');
    const { me } = useSelector( state => state.user);
    const { commentAdded, isAddingComment } = useSelector( state => state.post);
    const dispatch = useDispatch();

    const liked = me && post.Likers && post.Likers.find(v => v.id === me.id);

    const onToggleComment = useCallback( () => {
        setCommentFormOpened( prev => !prev );
        if (!commentFormOpened) {
            dispatch({
                type: LOAD_COMMENTS_REQUEST,
                data: post.id,
            })
        }
    }, [ ]);

    const onSubmitComment = useCallback( (e) => {
        e.preventDefault();
        if (!me){
            return alert('로그인이 필요합니다')
        }
        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
                content: commentText,
            },
        });
    }, [me && me.id, commentText]);

    useEffect( () => {
        setCommentText('');
    }, [ commentAdded === true ]);

    const onChangeCommentText = useCallback( (e) => {
        setCommentText(e.target.value);
    }, []);

    const onToggleLike = useCallback( () => {
        if (!me) {
            return alert('로그인이 필요합니다');
        }
        if (liked){     // 좋아요 누른 상태
            dispatch( {
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            });
        } else {                                                        // 좋아요 안 누른 상태
            dispatch( {
                type: LIKE_POST_REQUEST,
                data: post.id,
            });
        }
    }, [me && me.id, post && post.id, liked])

    //console.log("post.createdAt  : ", post.createdAt)
    return (
        <div>
        <Card
            key={+post.createdAt}
            //cover={post.Images[0] && <img alt="example" src={`http://localhost:3065/${post.Images[0].src}`} />}
            cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}
            actions={[
                <Icon type="retweet" key="retweet"/>,
                <Icon type="heart" key="heart" theme={liked ? 'twoTone' : 'outlined'} twoToneColor={"#eb2f96"} onClick={onToggleLike} />,
                <Icon type="message" key="message" onClick={onToggleComment}/>,
                <Icon type="ellipsis" key="ellipsis"/>,
            ]}
            extra={<Button>팔로우</Button>} 
        >
            <Card.Meta
          avatar={(
          <Link href={{ pathname: '/user', query: { id: post.User.id }}}  as={`/user/${post.User.id}`}>
          <a><Avatar>{post.User.nickname[0]}</Avatar></a>
          </Link>
          )}
          title={post.User.nickname}
          description={(
          <div>
            {post.content.split(/(#[^\s]+)/g).map((v) => {
              if (v.match(/#[^\s]+/)) {
                return (
                  <Link
                    href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
                    as={`/hashtag/${v.slice(1)}`}
                    key={v}
                  >
                    <a>{v}</a>
                  </Link>
                );
              }
              return v;
            })}
          </div>
          )} 
        />
        </Card>
        { commentFormOpened && (
            <>
                <Form onSubmit={onSubmitComment} >
                    <Form.Item>
                        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" loading={isAddingComment}> 삐약 </Button>
                </Form>
                <List
                    header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments || []}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.User.nickname}
                                avatar={(
                                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                                    <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                    </Link>
                                )}
                                content={item.content}
                            />
                            {/* <Comment
                                author={item.User.nickname}
                                // 아래 링크는 SPA 처리 안되는 방식임
                                avatar={<Link href={`/user/${item.User.id}`} ><a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                                content={item.content}
                                //datatime={item.createdAt}
                            /> */}
                        </li>
                    )}
                />
            </>
        )}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        //createdAt: PropTypes.string,
    })
}

export default PostCard;