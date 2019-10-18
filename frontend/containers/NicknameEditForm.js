import React, { useState, useCallback, useEffect } from 'react'
import { Button, Form, Input }  from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import { EDIT_NICKNAME_REQUEST, EDIT_CURRENT_CAREER_REQUEST, EDIT_PAST_CAREER_REQUEST } from '../reducers/user';

const NicknameEditForm = () => {
    const [editedName, setEditedName] = useState('');
    const [editedCurrentCareer, setEditedCurrentCareer] = useState('');
    const [editedPastCareer, setEditedPastCareer] = useState('');
    const dispatch = useDispatch();
    const { me, isEditingNickname } = useSelector( state => state.user);
 //   const { career } = useSelector( state => state.user.me);

    // useEffect( () => {
    //     console.log(" career useEffect : ", career);
    //      console.log(" career useEffect : ", career[0].career);
    //      console.log(" career useEffect : ", career[1].career);

    //     if(career) {
    //         setEditedCurrentCareer(career[0].career);
        
    //         setEditedPastCareer(career[1].career);
    //     }
    //    // console.log('post useEffect : ', postMemory.current,  post,  postMemory.current === post);
    // }, [career]);

    const onChangeNickname = useCallback( (e) => {
        setEditedName(e.target.value);
    }, []);

    const onChangeCurrentCareer = useCallback( (e) => {
        setEditedCurrentCareer(e.target.value);
    }, []);

    const onChangePastCareer = useCallback( (e) => {
        setEditedPastCareer(e.target.value);
    }, []);

    const onFormEditNickname = useCallback( (e) => {
        e.preventDefault();
        dispatch({
            type: EDIT_NICKNAME_REQUEST,
            data: editedName,
        });
    },[editedName]);

    const onFormEditCurrentCareer = useCallback( (e) => {
        e.preventDefault();
      //  console.log("/////// current   onFormEditCurrentCareer ()   ///// ")
        dispatch({
            type: EDIT_CURRENT_CAREER_REQUEST,
            data: editedCurrentCareer,
        });
    },[editedCurrentCareer]);

    const onFormEditPastCareer = useCallback( (e) => {
        e.preventDefault();
     //   console.log("/////// past   onFormEditPastCareer ()   ///// ")
        dispatch({
            type: EDIT_PAST_CAREER_REQUEST,
            data: editedPastCareer,
        });
    },[editedPastCareer]);

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}}>
        <Form  layout='inline' onSubmit={onFormEditNickname}>
            <Form.Item>
                <Input addonBefore="필명" value={editedName || (me && me.nickname)} onChange={onChangeNickname}/> 
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isEditingNickname}>수정</Button>
            </Form.Item>
        </Form>
        <Form  layout='inline' onSubmit={onFormEditCurrentCareer}>
            <Form.Item>
                <Input addonBefore="현 소속" value={editedCurrentCareer || (me && me.career && me.career[0].career)} onChange={onChangeCurrentCareer}/> 
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isEditingNickname}>수정</Button>
            </Form.Item>
        </Form>
        <Form  layout='inline' onSubmit={onFormEditPastCareer}>
            <Form.Item>
                <Input addonBefore="과거 소속" value={editedPastCareer || (me && me.career && me.career.length > 1 && me.career[1].career)} onChange={onChangePastCareer}/> 
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isEditingNickname}>수정</Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default NicknameEditForm;
