import React, { useCallback, useState, useEffect} from 'react';
import { Form, Input, Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_SUCCESS, ADD_POST_REQUEST } from '../reducers/post';



const PostForm = () => {
    //const { imagePaths } = useSelector( state => state.post);
    const dispatch = useDispatch();
    const [ text, setText ] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector( state => state.post );

    useEffect( () => {
        if (postAdded) {
            setText('');
        }
    }, [postAdded]);

    
    const onSubmitForm = useCallback( (e) => {
        e.preventDefault();   ///  안 넣으면 새 페이지로 넘어감
        if (!text && !text.trim()) {
            return alert('게시글을 작성하세요');
        }
        dispatch({
            type: ADD_POST_REQUEST,
           
             data: {
                content: text.trim(),
            },
        });
        console.log('onSubmitForm() text : ', text);
    }, [text]);

    //const [id, setId ] = useState('');
    const onChangeText = useCallback( (e) => {
       // e.preventDefault();
        setText(e.target.value);
    }, []);

    return (
        <Form style={{ margin: '10px 0 20px'  }} encType="multipart/form-data" onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText}/>
            <div>
                <Input type="file" multiple hidden />
                <Button> 이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right'}} htmlType="submit" isLoading={isAddingPost}>색색</Button>
            </div>
            <div>
                {imagePaths.map( (v, i) => (
                    
                        <div key={v} style={{ display: 'inline-block'}}>
                            <img src={`http://localhsot:3065/${v}` } style={{ width: '100px', height: '100px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </Form>
    );
};

export default PostForm;