import React, { useCallback, useState, useEffect, useRef} from 'react';
import { Form, Input, Button, Card, Carousel, Upload, message, Icon, Avatar} from 'antd';
import Img from 'react-image';
import { useSelector, useDispatch } from 'react-redux';
import { UPLOAD_PROFILE_IMAGES_REQUEST } from '../reducers/user';

const ProfileImg = () => {

    const dispatch = useDispatch();
    const imageInput = useRef();

    const props = {
        name: 'file',
        action: 'http://locolhost:3065/uploads',
        showUploadList: true,
        headers: {
          authorization: 'authorization-text',
        },
        accept: 'image/*',
        beforeUpload: beforeUpload,
        
    
        onChange(info) {
          console.log('info : ', info)
          console.log('info.file.status : ', info.file.status)

          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
    };      

    function beforeUpload(file) {

        console.log("beforeUpload() file : ", file);
        console.log("beforeUpload() file.name : ", file.name);
        //file.name = "profileImg_0.jpg"
        //console.log("beforeUpload() file.name : ", file.name);

        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    

    function onChange(which) {
        console.log('which : ', which);
        //console.log('a.loading : ', a.loading)
        setWhichImg(which);
    }

    const onChangeImages = useCallback( (e) => {
    
         const imageFormData = new FormData();
         [].forEach.call(e.target.files, (f) => {
             imageFormData.append( 'image', f);
         });
         dispatch({
             type: UPLOAD_PROFILE_IMAGES_REQUEST,
             data: imageFormData,
         });
    }, []);

    const onClickImageUpload = useCallback( () => {
        console.log("imageInput.current : ", imageInput.current);
        imageInput.current.click();
    }, [imageInput.current]);
    
      
    return (   
        <Carousel afterChange={onChange}  style={{ width: 240, padding: 10 }} >      
            <Img 
                src={"http://localhost:3065/profileImg_0.jpg"} 
                unloader={
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Click to Upload
                        </Button>
                    </Upload>
                }
            />
            <Img 
                src={"http://localhost:3065/profileImg_1.jpg"} 
                unloader={
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Click to Upload
                        </Button>
                    </Upload>
                }
            />
            <Img 
                src={"http://localhost:3065/profileImg_2.jpg"} 
                unloader={
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Click to Upload
                        </Button>
                    </Upload>
                }
            />
        </Carousel>
    );
}

export default ProfileImg;