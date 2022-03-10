
import {Card,Avatar,Button} from 'antd';
import { useCallback } from 'react';

const UserProfile=({setIsLoggedIn})=>{
    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false);
    },[]);
    
    return (
        <Card
            actions={[
            <div key="twit"> Twit<br/>0</div>,
            <div key="following"> Following<br/>0</div>,
            <div key="followers"> Followers<br/>0</div>
            ]}
            >
            <Card.Meta 
            avatar={<Avatar>Mj</Avatar>}
            title="minja"/>
            <Button onClick={onLogOut}>Log out</Button>
        </Card>
    )
}
export default UserProfile;