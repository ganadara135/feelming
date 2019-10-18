import React, { useRef } from 'react';
import { Form, Select, Upload, Icon, Button, Cascader, Input, message } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector, connect } from 'react-redux';
import { UPLOAD_WORKPLACE_REQUEST } from '../reducers/user';


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

    constructor(props) {
        super(props);
        //this.imageInputRef = React.createRef();
    //    let id = 0;
        this.state = {
            keyCount : 0,         // 키워드 카운트 하는 변수 값
        }
    }
    
    // normFile = e => {
    //     console.log('Upload event:', e);
    //     if (Array.isArray(e)) {
    //       return e;
    //     }
    //     return e && e.fileList;
    // };

    onChangeCategory = (value, selectedOptions)  => {
        console.log(value, selectedOptions);
    }
    
    filterOnCategory(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }


    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keywordKey = form.getFieldValue('keywordKey');
        // We need at least one keyword
        if (keywordKey.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keywordKey: keywordKey.filter(key => key !== k),
        });

        this.state.keyCount--;
    };

    add = () => {

        if(this.state.keyCount >= 5){
            return alert('최대 키워드 갯수는 5 까지 입니다.')
        }
        
        const { form } = this.props;
        // can use data-binding to get
        const keywordKey = form.getFieldValue('keywordKey');
        const nextKeys = keywordKey.concat(this.state.keyCount++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keywordKey: nextKeys,
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            //console.log()
            this.props.upload(values);
          }
        });
    };


    render() {

        //const dispatch = useDispatch();
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

        form.getFieldDecorator('keywordKey', { initialValue: [] })

        const keywordKey = form.getFieldValue('keywordKey');
        //console.log("keys : ", keys);
        // {form.getFieldDecorator('SellRight', {
        //     rules: [{ required: false, message: 'Please input sellRight of this content!' }],
        // })(<Input />)}

            const formItems = keywordKey.map((k, index) => (
                <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? '키워드' : ''}
                    required={true}
                    key={k}
                >
                    {form.getFieldDecorator(`keywords[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                        required: true,
                        whitespace: true,
                        message: "Please input keywords or delete this field.",
                        },
                    ],
                    })(<Input placeholder="검색 키워드" style={{ width: '60%', marginRight: 8 }} />)}
                    {keywordKey.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                    ) : null}
                </Form.Item>
            ));

        const upFilesProps = {
            name: 'upFiles',
            multiple: false,        // 1개의 파일 입력만 허용
            action: 'http://localhost:3065/api/user/uploadWorkplaceUpfile/',
            onChange(info) {
              const { status } = info.file;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                console.log("info : ", info)
                console.log("info.file.response[0] : ", info.file.response[0])
                message.success(`${info.file.name} file uploaded successfully.`);

                // form.getFieldDecorator(`upFileListSync[${info.file.response[0]}]`);
                // const upFileListSync = form.getFieldValue('upFileListSync');
                // console.log("mmm : ", upFileListSync);
                // console.log("all Values : ", form.getFieldsValue());

              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
        }

        return (
            
            <Form lable="자료등록" onSubmit={this.onSubmitForm} >
                <Form.Item label="형식" >
                    {form.getFieldDecorator('dataType', {
                        rules: [{ required: true, message: 'Please select Data Type!' }],
                    })(
                        <Select
                        placeholder="등록하려는 파일의 형식을 선택하세요"
                        >
                        <Option value="movie">동영상</Option>
                        <Option value="image">그림</Option>
                        <Option value="picture">사진</Option>
                        <Option value="sound">사운드</Option>
                        <Option value="text">텍스트</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="권한" >
                    {form.getFieldDecorator('publicScope', {
                        rules: [{ required: true, message: 'Please select Public Scope!' }],
                    })(
                        <Select
                        placeholder="등록하려는 파일의 공개범위를 선택하세요"
                        >
                        <Option value="onlyMe">나만</Option>
                        <Option value="anyone">누구나</Option>
                        <Option value="freind">친구만</Option>
                        <Option value="requested">요청건만</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="upFiles">
                    {form.getFieldDecorator('upFiles', {
                        rules: [{ required: true, message: 'Please upload data!' }],
                        valuePropName: 'upFiles',
                        //getValueFromEvent: this.normFile,
                    })(
                        <Upload.Dragger {...upFilesProps}>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    )}
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
                <Form.Item label="CopyRight">
                    {form.getFieldDecorator('copyRight', {
                        rules: [{ required: true, message: 'Please input copyRight of this content!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="SellRight">
                    {form.getFieldDecorator('SellRight', {
                        rules: [{ required: false, message: 'Please input sellRight of this content!' }],
                    })(<Input />)}
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
  
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ownProps in mapDispatchToProps : ", ownProps);
    return {
        upload: formData => dispatch({type: UPLOAD_WORKPLACE_REQUEST, data: formData })
    }
}

export default connect(null,mapDispatchToProps)(Form.create({name: 'workplaceForm' })(Workplace));