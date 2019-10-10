import React, { useState, useCallback, useEffect } from 'react'
import { Button, Form, Input}  from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import { EDIT_SELFINTRODUCTION_REQUEST } from '../reducers/user';


const SelfIntroductionEditForm = () => {
    const [editedInput, setEditedInput] = useState('');
    const dispatch = useDispatch();
    const { me } = useSelector( state => state.user);

    const onChangeInput = useCallback( (e) => {
        setEditedInput(e.target.value);
    }, []);

    const onFormSubmit = useCallback( (e) => {
        console.log("onFormSubmit() e : ", e)
        e.preventDefault();
        dispatch({
            type: EDIT_SELFINTRODUCTION_REQUEST,
            data: editedInput,
        });
    },[editedInput]);

    const buttonItemLayout = {
        wrapperCol: { span: 14, offset: 4 },
    }

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}}>
            <Form layout="vertical" onSubmit={onFormSubmit} >
                <Form.Item label="자 기 소 개">
                    <Input placeholder="placeholder message" 
                     value={editedInput || (me && me.selfIntro)} onChange={onChangeInput} />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit" >저장</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SelfIntroductionEditForm;