import {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import { useSelector} from 'react-redux';

const SerchInput = styled(Input.Search)`
vertical-align : middel;
`;




const AppLayout = ({ children }) => {
    //const [isLoggedIn,setIsLoggedIn] = useState(false);
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">node bird</Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile">my profile</Link>
                </Menu.Item>
                <Menu.Item>
                    <SerchInput enterButton  />
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup">sign up</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                {isLoggedIn ? <UserProfile />:<LoginForm />}

                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6} >
                     {/* target="_blank"を使う場合、セキュリティの為rel="noreferrer noopenr" が必須　*/ }
                    <a href="https;//www.kimminja.com" target="_blank" rel="noreferrer noopener">Made by mjKim </a>
                </Col>

            </Row>
        </div>
    );
};
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AppLayout;