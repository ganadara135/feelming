import React, { useState, useCallback, useEffect } from 'react'
import { Button, Form, Input }  from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import { EDIT_NICKNAME_REQUEST } from '../reducers/user';

const SelfIntroductionEditForm = () => {
    const [editedInput, setEditedInput] = useState('');
    const dispatch = useDispatch();
    const { me, isEditingNickname } = useSelector( state => state.user);

    const onChangeInput = useCallback( (e) => {
        setEditedInput(e.target.value);
    }, []);

    const onFormSubmit = useCallback( (e) => {
        e.preventDefault();
        // dispatch({
        //     type: EDIT_NICKNAME_REQUEST,
        //     data: editedName,
        // });
    },[editedInput]);

    const buttonItemLayout = {
        wrapperCol: { span: 14, offset: 4 },
    }

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}}>
            <Form layout="vertical" onSubmit={onFormSubmit}>
                <Form.Item label="자 기 소 개">
                    <Input value={editedInput || (me && me.selfIntro)} onChange={onChangeInput}/>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary">저장</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SelfIntroductionEditForm;