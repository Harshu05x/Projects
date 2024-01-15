import { Col, Row, Statistic, Typography } from 'antd';
import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import Loader from '../components/Loader';
import millify from 'millify';
import { NavLink } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';


const {Title} = Typography;

function Homepage(props) {

    const {data, isFetching } = useGetCryptosQuery(100);
    const globalData = data?.data?.stats;

    if(isFetching || !data)
        return (
            <Loader />
        )

    return (
        <div>
            <Title level={2} className=' heading'>
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={globalData.total}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={globalData.totalExchanges}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={millify(Number(globalData.totalMarketCap))}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h Volume' value={millify(Number(globalData.total24hVolume))}/>
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={millify(Number(globalData.totalMarkets))}/>
                </Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top 10 Cryptos In The World
                </Title>
                <Title level={4} className="show-more">
                    <NavLink to="/cryptocurrencies">Show more</NavLink>
                </Title>
            </div>
            <Cryptocurrencies simplified />
            
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest Crypto News
                </Title>
                <Title level={4} className="show-more">
                    <NavLink to="/news">Show more</NavLink>
                </Title>
            </div>
            <News simplified />
        </div>
    );
}

export default Homepage;