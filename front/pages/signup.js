
import {useState,useCallback} from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import {Form,Input,Checkbox,Button} from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
color:red;
`

const SignUp = () => {
    const [id,onChangeId]= useInput('');
    const [nickname,onChangeNickname]=useInput('');
    const [password,onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck]= useState('');
    const [passwordError,setPasswordError]=useState(false);
    const [term, setTerm] = useState(false);
    const [termError,setTermError]=useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);

    },[]);


    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        console.log(password );
        console.log(passwordCheck );
        
        setPasswordError(e.target.value !== password);
    },[password]);

    const onSubmit=useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
if(!term){
    return setTermError(true);
}
    })
    return (
       <AppLayout>
        <Head>
        <title>Sign up |NodeBird</title>
    </Head>
       <Form onFinish={onSubmit}>
           <div>
               <label htmlFor="user-id">ID</label><br/>
           </div>
           <div>
               <input name="user-id" value={id} required onChange={onChangeId}></input>
           </div>
           <div>
               <label htmlFor="user-nick">Nick name</label><br/>
           </div>
           <div>
               <input name="user-nick" value={nickname} required onChange={onChangeNickname}></input>
           </div>
           <div>
               <label htmlFor="user-password">PASSWORD</label><br/>
           </div>
           <div>
               <input name="user-password" type="password" value={password} required onChange={onChangePassword}></input>
           </div>

           <div>
               <label htmlFor="user-password-check">PASSWORD CHECK</label><br/>
           </div>
           <div>
               <input 
               name="user-password-check" 
               type="password" 
               value={passwordCheck} 
               required 
               onChange={onChangePasswordCheck}/>
               {passwordError && <ErrorMessage>The password is wrong!!</ErrorMessage>}
           </div>
           <div>
               <Checkbox name="user-term" checked={term} onChange={onChangeTerm} >I agree to these terms</Checkbox> 
               {termError && <ErrorMessage> You have to agree to the terms</ErrorMessage>}
           </div>
           <div style={{ marginTop:10}}>
               <Button type="primary" htmlType="submit">submit</Button>
           </div>
           </Form>
        </AppLayout>
    )
}

export default SignUp;