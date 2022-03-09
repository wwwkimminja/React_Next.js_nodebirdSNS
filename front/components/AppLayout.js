import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';




const AppLayout = ({ children }) => {
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
                    <Input.Search enterButton style={{ verticalAlign: "middle" }} />
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup">sign up</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    Left
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