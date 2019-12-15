import React, { useRef } from 'react';
import { Form, Select, Upload, Icon, Button, Cascader, Input, message } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Router from 'next/router';
import { UPLOAD_WORKPLACE_REQUEST, CLEAR_SERVER_REACTION_DATA } from '../reducers/user';

import { backUrl } from '../config/config';


import fileType from 'file-type';
import axios from 'axios';
import { supportingFileTypeCheck } from '../config/utils.js';

const  category = [
    {
        value: 'song',
        label: '노래',
    },
    {
        value: 'dance',
        label: '춤',
    },
    {
        value: 'acting',
        label: '연기',
    },
    {
        value: 'hosting',
        label: '진행',
    },
    {
        value: 'etc',
        label: '미분류',
        // children: [
        // {
        //     value: 'nanjing',
        //     label: 'Nanjing',
        //     children: [
        //     {
        //         value: 'zhonghuamen',
        //         label: 'Zhong Hua Men',
        //     },
        //     ],
        // },
        // ],
    },
];


// 브라우저 쪽에선 작동하지 않는 코드들 , require() 등
function remoteFileTypeCheckTest () {
    // var FetchStream = require("fetch").FetchStream;

    // var fetch = new FetchStream("http://google.com");

    // fetch.on("data", function(chunk){
    //     console.log(chunk);
    // });
    // const readChunk = require('read-chunk');
    // const fileType = require('file-type');
    // const buffer = readChunk.sync('unicorn.png', 0, fileType.minimumBytes);
 
    // fileType(buffer);

    // var fetchUrl = require("fetch").fetchUrl;

    // // source file is iso-8859-15 but it is converted to utf-8 automatically
    // fetchUrl("http://google.com", function(error, meta, body){
    //     console.log(body.toString());
    // });

    // var request = require('request');
    // request('http://www.google.com', function (error, response, body) {
    //     console.log('error:', error); // Print the error if one occurred
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    // });


    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'unicorn.png');
    // xhr.responseType = 'arraybuffer';


    axios({
        method: 'get',
        //url: 'http://bit.ly/2mTM3nY',
        //url: 'https://feelming.s3.ap-northeast-2.amazonaws.com/original/1572164696578%EC%9D%B8%EB%AC%BC01.jpg',
        url: 'https://blog.yena.io/assets/post-img/171123-nachoi-300.jpg',
        //responseType: 'stream',
        responseType: 'arraybuffer',
    })
    .then(function (response) {
        //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log('response : ', response);
        console.log('fileType : ', fileType(new Uint8Array(response.data)));
    });
    
}

class Workplace extends React.Component {

    constructor(props) {
        super(props);
        //this.imageInputRef = React.createRef();
    //    let id = 0;
        this.state = {
            keyCount : 0,         // 키워드 카운트 하는 변수 값
            //serverMsgCheck: '',
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


        //remoteFileTypeCheckTest();
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            //console.log()
            if(values.keywordKey.length === 0)
                return alert("키워드를 1개 이상 입력하세요")

            this.props.upload(values);
          }
        });
    };

    // ************   이 부분이 props 와 state 의 전반적인 관계를 다 보여줌
    componentWillUpdate(nextProps, nextState) {
    //componentDidUpdate(nextProps, nextState) {  
        console.log("this.props.serverReactionData : ", this.props.serverReactionData)
        //console.log("this.state.serverMsgCheck : ", this.state.serverMsgCheck);
        // console.log("nextState : ", nextState)
        console.log("nextProps : ", nextProps)
       
        //if(nextProps.serverReactionData !== undefined && nextProps.serverReactionData !== '' && this.state.serverMsgCheck === ''){
        if(nextProps.serverReactionData === "등록완료"){
            //message.success(`${this.props.serverReactionData}  successfully.`);
            //this.state.serverMsgCheck = nextProps.serverReactionData;
            this.props.clearServerReactionData();
            message.success(`${this.state.serverMsgCheck}  successfully.`);
            Router.push('/');
        }
    }    


    render() {

        const { Option } = Select;
        const { form } = this.props;

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
            //action: 'http://localhost:3065/api/user/uploadWorkplaceUpfile/',
            action: `${backUrl}/api/user/uploadWorkplaceUpfile/`,
            beforeUpload(file) {
                console.log("file.type : ", file.type)
                if (!supportingFileTypeCheck(file.type)) {
                    message.error("지원하지 않는 파일 형식입니다.");
                    return false;
                }
                const isLt20M = file.size / 1024 / 1024 / 10 < 6;
                if (!isLt20M) {
                    message.error('File size must smaller than 60MB!');
                    return false;
                }
            },
            onChange(info) {

              const { status } = info.file;

              if (status === 'done') {
                console.log("info : ", info)
                console.log("info.fileList : ", info.fileList)
                //console.log("info.file.response[1] : ", info.file.response[1])
                //console.log("info.file.response : ", info.file.response)
                message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
        }


        return (
            
            <Form lable="자료등록" onSubmit={this.onSubmitForm} >
                <Form.Item label="제목">
                    {form.getFieldDecorator('title', {
                        rules: [{ required: true, message: "Please input title!" }],
                    })( <Input /> )}
                </Form.Item>
                <Form.Item label="형식" >
                    {form.getFieldDecorator('dataType', {
                        rules: [{ required: true, message: 'Please select Data Type!' }],
                    })(
                        <Select
                        placeholder="등록하려는 파일의 형식을 선택하세요"
                        >
                        <Option value="movie">동영상</Option>
                        <Option value="picture">그림</Option>  
                        <Option value="photo">사진</Option>
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
                        initialValue: ['song',],
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
                <Form.Item label="작품설명">
                    {form.getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input description of this content!' }],
                    })(<Input.TextArea rows={3} />)}
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

// 이 부분이 Redux store 와 현재 Component 을 연결해 주는 부분
// 매개변수는 Redux store 를 가르킴,
// A : B   부분에서  A 는  Redux store 가 현 컴포넌트에게 전달해 주는 props 명칭
// 현 컴포넌트에서 const { A } = this.props;  받아서 활용
// ******************** 이게 있어야 redux store 의 값 변경이 있을때, 현 컴포넌트를 호출해줌  **************************
const mapStateToProps = state => console.log("state in mapStateToProps : ", state) || ({
    serverReactionData: state.user.serverReactionData,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ownProps in mapDispatchToProps : ", ownProps);
    return {
        upload: formData => dispatch({type: UPLOAD_WORKPLACE_REQUEST, data: formData }),
        clearServerReactionData: () => dispatch({type: CLEAR_SERVER_REACTION_DATA}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create({name: 'workplaceForm' })(Workplace));