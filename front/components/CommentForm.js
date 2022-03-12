import { Form,Button,Input }  from 'antd';
import {useCallback} from 'react';
import { useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';


const CommentForm =({post}) =>{
    const id = useSelector((state)=> state.user.me?.id);
                   
    const [commentText,onChangeCommentText]=useInput('');


    const onSubmitComment = useCallback(()=> {
        console.log(post.id,commentText);

    },[commentText]);
    
    return (
      <Form onFinish={onSubmitComment}>
         <Form.Item style={{position:'relative',margin:0}}>
             <Input.TextArea value={commentText} onChange={onChangeCommentText} row={4} />
             <Button style={{position:'absolute',right:0,bottom:-40}} type="primary" htmlType="submit">meow</Button>
         </Form.Item>
          </Form>

    );
};
CommentForm.propTypes={
    post:PropTypes.object.isRequired,

}
export default CommentForm;