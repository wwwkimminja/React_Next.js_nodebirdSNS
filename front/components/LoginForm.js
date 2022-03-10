import { useCallback, useState } from 'react';
import { Form , Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

{/* div component */}
const ButtonWrapper = styled.div`
margin-top:10px;
`;
{/* Form component */}
const FormWrapper = styled(Form)`
padding:10px
`;
const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, [])
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm =useCallback((e)=>{
        console.log(id,password);
        setIsLoggedIn(true);
    },[id,password]);
    return (

        <FormWrapper onFinish ={onSubmitForm}>
            <div>
                <label htmlFor ="user-id">ID</label>
            </div>
            <div>
                <Input name ="user-id" value ={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password" >Password</label>
            </div>
            <div >
                <Input name ="user-password"
                    type ="password"
                    value ={password}
                    onChange ={onChangePassword}
                    required />

            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType='submit' loading={false}>Log in</Button>
                <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );

};

export default LoginForm;