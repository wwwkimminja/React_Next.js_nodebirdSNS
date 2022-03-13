import { PlusSquareOutlined } from '@ant-design/icons';
import PropsType from 'prop-types';
import {useState,useCallback} from 'react';
import ImagesZoom from './ImagesZoom';

const PostImages =({images})=>{

    const [showImagesZoom,setShowImagesZoom]=useState(false);
    const onZoom= useCallback(()=>{
        setShowImagesZoom(true);
    },[]);

    const onClose=useCallback(()=>{
        setShowImagesZoom(false);

    },[]);


    if(images.length ===1){
        return(
            <>
            <img role="presentation" src={images[0].src} alt={images[0].src }onClick={onZoom}/>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        )
    }
    if(images.length === 2){
        return(
            <>
            <img role="presentation" width ="50%" src={images[0].src} alt={images[0].src }onClick={onZoom}/>
            <img role="presentation" width ="50%"src={images[1].src} alt={images[0].src }onClick={onZoom}/>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        )
    }
    return (
        <>
        <div>
        <img role="presentation" style={{width :'50%'}}src={images[1].src} alt={images[0].src }onClick={onZoom}/>
        <div 
        role="presentation" 
        style={{ display:'inline-block',width:'50%',textAlign:'center',verticalAlign:'middle'}}
        onClick={onZoom}
        >
            <PlusSquareOutlined/>
            <br/>
            {images.length -1}pictures more..

        </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
        </>
    )

};

PostImages.propsType = {
    images : PropsType.arrayOf(PropsType.object),
}

export default PostImages;