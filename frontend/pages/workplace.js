import React, { useState, useCallback } from 'react';
import { Row, Col, Form, Select, Upload, Icon, Button, Cascader, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

let id = 0;

//const Workplace = () => {
 const  category = [
        {
          value: '인디밴드',
          label: '인디밴드',
          children: [
            {
              value: 'Rock',
              label: 'Rock',
              children: [
                {
                  value: 'Funk',
                  label: 'Funk',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];

class Workplace extends React.Component {


    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };

     

    onChangeCategory = (value, selectedOptions)  => {
        console.log(value, selectedOptions);
    }
    
    filterOnCategory(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }


    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one keyword
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });

        id--;
    };

    add = () => {

        if(id >= 5){
            return alert('최대 키워드 갯수는 5 까지 입니다.')
        }
        
         const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    render() {

        const { Option } = Select;
        //console.log("this.props.form : ", this.props.form)
        //const { getFieldDecorator, getFieldValue } = this.props;
        const { form } = this.props;
        //console.log("getFieldValue : ", form.getFieldValue);

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };

        form.getFieldDecorator('keys', { initialValue: [] });

        const keys = form.getFieldValue('keys');
        console.log("keys : ", keys);

        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? '키워드' : ''}
                required={false}
                key={k}
            >
                {form.getFieldDecorator(`names[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [
                    {
                    required: true,
                    whitespace: true,
                    message: "Please input keywords or delete this field.",
                    },
                ],
                })(<Input placeholder="검색 키워드" style={{ width: '60%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => this.remove(k)}
                />
                ) : null}
            </Form.Item>
        ));

    

        return (
            
            <Form lable="자료등록">
            <Form.Item label="형식" >
                    <Select defaultValue="movie">
                        <Option value="movie">동영상</Option>
                        <Option value="image">그림</Option>
                        <Option value="picture">사진</Option>
                        <Option value="sound">사운드</Option>
                        <Option value="text">텍스트</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="권한" >
                    <Select defaultValue="onlyMe">
                        <Option value="onlyMe">나만</Option>
                        <Option value="anyone">누구나</Option>
                        <Option value="freind">친구만</Option>
                        <Option value="requested">요청건만</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Dragger">
                    {/* {getFieldDecorator('dragger', {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                    })( */}
                        <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    {/* )} */}
                </Form.Item>
                <Form.Item label="카테고리">
                    {form.getFieldDecorator('category', {
                        initialValue: ['인디밴드',],
                        rules: [
                        { type: 'array', required: true, message: 'Please select your preferable category!' },
                        ],
                    })(
                    <Cascader 
                        options={category}
                        onChange={this.onChangeCategory}
                        placeholder="Please select"
                        showSearch={ this.filterOnCategory }
                    />
                    )}
                </Form.Item>

                <Form.Item label="검색 키워드 등록">
                    {formItems}
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add keywords
                    </Button>
                </Form.Item>
        



                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button> 
                </Form.Item>

            </Form>
        
        );
  }
}

// .gutter-example .ant-row > div {
//     background: transparent;
//     border: 0;
//   }
//   .gutter-box {
//     background: #00a0e9;
//     padding: 5px 0;
//   }
  

export default Form.create({name: 'keys' })(Workplace);