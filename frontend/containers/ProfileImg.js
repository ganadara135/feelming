import React, { useCallback, useState, useEffect, useRef} from 'react';
import { Form, Input, Button, Card, Carousel, Upload, message, Icon, Avatar} from 'antd';
import Img from 'react-image';
import { useSelector, useDispatch } from 'react-redux';
import { UPLOAD_PROFILE_IMAGES_REQUEST } from '../reducers/user';

const ProfileImg = () => {

    const dispatch = useDispatch();
    const [ which, setWhich ] = useState(0);
    const imageInput = useRef();
    const { profileImg } = useSelector( state => state.user );

    
    function onChangeCarousel(which) {
        console.log('which : ', which);
        setWhich(which);
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
    
    const onRemoveImage = useCallback( (index) => () => {
        dispatch({
            type : REMOVE_PROFILE_IMAGE,
            index,
        });
    }, []);
      
    return (   
        <div>
        <Carousel afterChange={onChangeCarousel}  style={{ width: 240, padding: 10 }} >      
            <div>
                <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}> 
                { profileImg && profileImg.length >= which+1 ? '이미지 바꾸기' : '이미지 업로드' }
                </Button>
            </div>
            <div>
                <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}> 
                { profileImg && profileImg.length >= which+1 ? '이미지 바꾸기' : '이미지 업로드' }
                </Button>
            </div>
            <div>
                <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}> 
                { profileImg && profileImg.length >= which+1 ? '이미지 바꾸기' : '이미지 업로드' }
                </Button>
            </div>
        </Carousel>
        {profileImg.filter((v,i) => i === which).map( (v, i) => (
           <div key={v} style={{ display: 'inline-block'}}>
                <img src={`http://localhost:3065/${v}` } style={{ width: '200px' }} alt={v} />
                <div>
                    <Button onClick={onRemoveImage(i)}>제거</Button>
                </div>
           </div> 
        ))}
        </div>
    );
}

export default ProfileImg;