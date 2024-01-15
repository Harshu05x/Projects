import React, { useEffect, useState } from 'react';
import icon from '../img/icon.png';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu, Typography } from 'antd';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
  
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
        if (screenSize <= 1200) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
  
    return (
        <div className=' nav-container'>
            <div className=' logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title className=' logo' level={2}>
                    <NavLink to={'/'}>
                        CryptoVerse
                    </NavLink>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
                {
                    activeMenu && 
                    <Menu theme='dark'>
                        <Menu.Item icon={<HomeOutlined />}>
                            <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />}>
                            <NavLink to={'/cryptocurrencies'}>
                                Cryptocurrencies
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<MoneyCollectOutlined />}>
                            <NavLink to={'/exchanges'}>
                                Exchanges
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />}>
                            <NavLink to={'/news'}>
                                News
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                }
        </div>
    );
}

export default Navbar;