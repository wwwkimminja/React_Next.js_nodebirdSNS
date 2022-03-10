import {useMemo} from 'react';
import PropTypes from 'prop-types';
import {List,Button, Card} from 'antd';
import { PicCenterOutlined, StopOutlined } from '@ant-design/icons'; 
import styled from 'styled-components';


const FollowList =({header,data })=>{
    console.log(data);
    const listStyle = useMemo(()=>({
        marginBottom:'28px'
    }));
    const moreStyle = useMemo(()=>({
        textAlign: 'center',
        margin:'10px'
    }));
    const itemStyle = useMemo(()=>({
        margin:'20px'

    }));
    
    return (
        <List
        style={listStyle}
        grid={{gutter: 4,xs:2, md:3}}
        size="small"
        header={<div>{header}</div>}
        loadMore={<div style={moreStyle}><Button>...More</Button></div>}
        bordered
        dataSource={data}
        renderItem={(item) =>(
            <List.Item style={itemStyle}>
                <Card actions={[<StopOutlined key="stop" />]}>
                    <Card.Meta description={item.nickname}/>
                </Card>
            </List.Item>
        )}
        />
       
    )

};

FollowList.propTypes ={
    header: PropTypes.string.isRequired,
    data:PropTypes.array.isRequired,
}

export default FollowList;