import React, { useState, useCallback } from 'react';
import { Row, Col, Form, Select, Upload, Icon, Button, Cascader } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';


const Workplace = () => {

    const { Option } = Select;
    //const { form } = useSelector( props => props );
 //   console.log("form : ", form)
   // const { getFieldDecorator } = this.props.form;

    function onChange(value) {
        console.log(`selected ${value}`);
    }
    
    function onBlur() {
    console.log('blur');
    }
    
    function onFocus() {
    console.log('focus');
    }
    
    function onSearch(val) {
    console.log('search:', val);
    }

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };

    const residences = [
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
    
    function onChangeCategory(value, selectedOptions) {
    console.log(value, selectedOptions);
    }
    
    function filterOnCategory(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }


    const remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    const add = props => {
         const { form } = this.props;
        // // can use data-binding to get
        // const keys = form.getFieldValue('keys');
        // const nextKeys = keys.concat(id++);
        // // can use data-binding to set
        // // important! notify form to detect changes
        // form.setFieldsValue({
        //     keys: nextKeys,
        // });
    };

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
                {/* {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [
                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                    ],
                })( */}
                <Cascader 
                    options={residences}
                    onChange={onChangeCategory}
                    placeholder="Please select"
                    showSearch={{ filterOnCategory }}
                 />
                {/* )} */}
            </Form.Item>

            <Form.Item label="검색 키워드 등록">
                <Button type="dashed" onClick={() => add(Form)} style={{ width: '60%' }}>
                    <Icon type="plus" /> Add field
                </Button>
            </Form.Item>
    



            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button> 
            </Form.Item>

        </Form>
        /*
        <div className="gutter-example">
            <Row>
                <Col span={12}>
                    <div>카테고리(음악장르노출)</div>
                    <Row><div>카테고리 여기서작업</div></Row>
                </Col>
                <Col>
                    <div>키워드 입력</div>
                    <Row><div>키워드 여기서작업</div></Row>
                </Col>
            </Row>
            <Row><Col offset={9}><div>작품설명</div></Col></Row>
            <Row>

            </Row>
        </div>
        */
    );
};

// .gutter-example .ant-row > div {
//     background: transparent;
//     border: 0;
//   }
//   .gutter-box {
//     background: #00a0e9;
//     padding: 5px 0;
//   }
  

export default Workplace;