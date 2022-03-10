
import {useMemo} from 'react';
import{Form, Input} from 'antd';

const NicknameEditForm =() =>{
    const style = useMemo(()=>({ margin:'20px', border:'1px solid #d9d9d9',padding:'20px'}));

    return (
        <Form style={style}>
            <Input.Search addonBefore="Nick name" enterButton="edit"/>
        </Form>
    )
    
};

export default NicknameEditForm;