import { Space, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='text-white text-center'>
            <Typography.Title level={5} 
            style={
                {
                    color:"white",
                    textAlign:"center"
                }
            }>
                CryptoVerse <br />
                All rights reserverd.
            </Typography.Title>
            <Space>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/exchanges'}>Exchanges</NavLink>
                <NavLink to={'/news'}>News</NavLink>
            </Space>
        </div>
    );
}

export default Footer;