import React, { useCallback, useState, useEffect, useRef} from 'react';
import { Form, Input, Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import { backUrl } from '../config/config';


const PostForm = () => {
    //const { imagePaths } = useSelector( state => state.post);
    const dispatch = useDispatch();
    const [ text, setText ] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector( state => state.post );
    const imageInput = useRef();        // useRef()는 지금처럼, Dom 에 접근 기능 이외에
                                        // 값을 기억하지만 rendering 이 안되는 기능도 있다. chkVal = useRef(id);

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

        const formData = new FormData();
        imagePaths.forEach((i) => {
            formData.append('image', i);
        });
        formData.append('content', text);
        dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    //const [id, setId ] = useState('');
    const onChangeText = useCallback( (e) => {
       // e.preventDefault();
        setText(e.target.value);
    }, []);

    const onChangeImages = useCallback( (e) => {
       // console.log(e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append( 'image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });
    }, []);

    const onClickImageUpload = useCallback(() => {
        console.log("imageInput.current : ", imageInput.current);
        imageInput.current.click();
    }, [imageInput.current]);

    const onRemoveImage = useCallback( (index) => () => {
        dispatch({
            type : REMOVE_IMAGE,
            index,
        });
    }, []);

    return (
        <Form style={{ margin: '10px 0 20px'  }} encType="multipart/form-data" onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText}/>
            <div>
                <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}> 이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right'}} htmlType="submit" isloading={isAddingPost}>색색</Button>
            </div>
            <div>
                {imagePaths.map( (v, i) => (
                        <div key={v} style={{ display: 'inline-block'}}>
                            <img src={`${backUrl}/${v}` } style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button onClick={onRemoveImage(i)}>제거</Button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </Form>
    );
};

export default PostForm;