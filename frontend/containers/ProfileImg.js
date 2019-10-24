import React, { useCallback, useState, useEffect, useRef} from 'react';
import { Form, Input, Button, Card, Carousel, Upload, message, Icon, Avatar} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { UPLOAD_PROFILE_IMAGES_REQUEST, REMOVE_PROFILE_IMAGE } from '../reducers/user';
//import { backUrl } from '../config/config';


const ProfileImg = () => {

    const dispatch = useDispatch();
    const [ which, setWhich ] = useState(0);
    const imageInput = useRef();
    const { profileImg, me, profileImgErrorReason } = useSelector( state => state.user );

    
    function onChangeCarousel(which) {
       // console.log('which : ', which);
        setWhich(which);
    }

    const onChangeImages = useCallback( (e) => {
    
         const imageFormData = new FormData();
         [].forEach.call(e.target.files, (f) => {
           // console.log(" in forEach() f : ", f);
            imageFormData.append('image', f);
         });
         dispatch({
             type: UPLOAD_PROFILE_IMAGES_REQUEST,
             data: imageFormData,
             userId: me.id,
         });
    }, []);

    const onClickImageUpload = useCallback( () => {
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
            {profileImg.filter((v,i) => i === which).map( (v, i) => (
                <div key={v} style={{ display: 'inline-block'}}>
                    <div>
                        <Button onClick={onRemoveImage(i)}>제거</Button>
                    </div>
                    <img src={`${v}` } style={{ width: '200px' }} alt={v} />
                </div> 
            ))}
        <Carousel afterChange={onChangeCarousel}  style={{ width: 240, height: 73, padding: 20 }} >      
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
        {profileImgErrorReason && <div> {profileImgErrorReason} </div>   }
        
        </div>
    );
}

export default ProfileImg;