import {Form,Input,Button} from 'antd';
import { useSelector } from 'react-redux';
import {useState,useCallback,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';


const PostForm = () => {
    const { imagePaths} = useSelector((state)=>state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text,setText] = useState('');
    const onChangeText= useCallback((e)=>{
        setText(e.target.value);
    },[]);
    const onSubmit = useCallback(()=>{
dispatch(addPost);
setText('');
    },[]);
    const onClickImageUpload = useCallback(()=>{
        imageInput.current.click();

    },[imageInput.current]);

    return (
       <Form style={{ margin:'10px 0 20px'}} encType = "multipart/form-data" onFinish ={onSubmit}>
           <Input.TextArea
           value={text}
           onChange={onChangeText}
           maxLength={140}
           placeholder="What has happened you?"
        />
        <div>
            <input type ="file" multiple hidden ref={imageInput}/>
            <Button onClick={onClickImageUpload}>Image Upload</Button>
            <Button type="primary" style ={{ float: 'right'}} htmlType ="submit"> twit</Button>
        </div>
        <div>
            {imagePaths.map((v)=>(
                <div key={v} style={{ display: 'inlinge-block'}}>
                    <img src={v} style={{ width:'200px'}} alt={v}/>
                    <div>
                        <Button>Delete</Button>
                        </div>

                    </div>
            ))}
        </div>


       </Form>
    )
};

export default PostForm;