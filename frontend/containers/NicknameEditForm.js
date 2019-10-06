import React, { useState, useCallback } from 'react'
import { Button, Form, Input }  from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import { EDIT_NICKNAME_REQUEST } from '../reducers/user';

const NicknameEditForm = () => {
    const [editedName, setEditedName] = useState('');
    const [editedCurrentCareer, setEditedCurrentCareer] = useState('');
    const [editedPastCareer, setEditedPastCareer] = useState('');
    const dispatch = useDispatch();
    const { me, isEditingNickname } = useSelector( state => state.user);

    const onChangeNickname = useCallback( (e) => {
        setEditedName(e.target.value);
    }, []);

    const onEditNickname = useCallback( (e) => {
        e.preventDefault();
        dispatch({
            type: EDIT_NICKNAME_REQUEST,
            data: editedName,
        });
    },[editedName]);

    return (
        <Form style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}} layout='inline' onSubmit={onEditNickname}>
            <Form.Item>
                <Input addonBefore="필명" value={editedName || (me && me.nickname)} onChange={onChangeNickname}/> 
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isEditingNickname}>수정</Button>
            </Form.Item>
            <Form.Item>
                <Input addonBefore="현 소속" value={editedCurrentCareer || (me && me.career && me.career.length > 0 && me.career[0])} onChange={onChangeNickname}/> 
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isEditingNickname}>수정</Button>
            </Form.Item>
            <Form.Item>
                <Input addonBefore="과거 소속" value={editedPastCareer || (me && me.career && me.career.length > 1 && me.career[1])} onChange={onChangeNickname}/> 
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isEditingNickname}>수정</Button>
            </Form.Item>
        </Form>
    )
}

export default NicknameEditForm;
