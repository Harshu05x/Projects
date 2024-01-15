import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select, Avatar } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, 
        FundOutlined, ExclamationCircleOutlined, 
        StopOutlined, TrophyOutlined, CheckOutlined, 
        NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoAPI';
import Loader from '../components/Loader';
import Linechart from "../components/Linechart"

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails(props) {
    const [timePeriod,setTimePeriod] = useState("7d");
    const {coinId} = useParams();
    const {data,isFetching} = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;
    const {data: coinHistory} = useGetCryptoHistoryQuery({coinId,timePeriod});
    console.log(coinHistory);
    console.log(cryptoDetails);
    
    const time = ['3h', '24h', '7d', '30d', '3m', '1y'];

    const stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${cryptoDetails && cryptoDetails['24hVolume'] && millify(cryptoDetails['24hVolume'])}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];

    const color = cryptoDetails?.color;
    const links = cryptoDetails?.links;

    if(isFetching)
        return <Loader />

    return (
        
        <Col className=' coin-detail-container'>
            <Col className="coin-heading-container rounded-lg"
            style={
                {
                    backgroundColor: `${color}`
                }
            }>
                <Title level={2} className="coin-name flex justify-center items-center gap-4">
                    {cryptoDetails.name} ({cryptoDetails.symbol}) Price
                    <Avatar src={cryptoDetails.iconUrl}
                    className=' bg-white rounded-full p-1 object-cover'/>
                </Title>
                <p className=' text-white'>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Col className="coin-desc-link">
                <Row className="coin-desc">
                    <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
                    <p className=' text-xl'>
                        {cryptoDetails.description}
                    </p>
                </Row>
            </Col>
            <Select
                defaultValue={'7d'}
                placeholder="Select Time Period"
                className="select-timeperiod"
                onChange={(val) => setTimePeriod(val)}>
                    {
                        time.map((time) => (
                            <Option key={time}>
                                {time}
                            </Option>
                        ))
                    }
            </Select>
            <Linechart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
            <Col className="stats-container">
                <Col className="coin-value-statistics">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">
                            {cryptoDetails.name} Value Statistics
                        </Title>
                        <p>
                            An overview showing the statistics of {cryptoDetails.name}
                        </p>
                    </Col>
                    {
                        stats.map(({title,icon,value}) => (
                            <Col className="coin-stats">
                                <Col className="coin-stats-name">
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </Col>
                                <Text className=' stats'>{value}</Text>
                            </Col>
                        ))
                    }
                </Col>

                <Col className="other-stats-info">
                    <Col className="coin-value-statistics-heading">
                        <Title level={3} className="coin-details-heading">Other Stats Info</Title>
                        <p>An overview showing the statistics of all Cryptocurrencies.</p>
                    </Col>
                    {
                        genericStats.map(({ icon, title, value }) => (
                            <Col className="coin-stats">
                                <Col className="coin-stats-name">
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </Col>
                                <Text className="stats">{value}</Text>
                            </Col>
                        ))
                    }
                </Col>
            </Col>
            
            <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
            <Row gutter={[12,12]}>
                <Col className="coin-links" >
                    {
                        links.slice(0,Math.ceil(links.length/2)).map((link) => (
                            <Row className="coin-link" key={link.name}>
                                <Title level={5} className="link-name">{link.type}</Title>
                                    <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                            </Row>
                        ))
                    }
                </Col>
                <Col className="coin-links" >
                    {/* <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title> */}
                    {
                        links.slice(Math.ceil(links.length/2)).map((link) => (
                            <Row className="coin-link" key={link.name}>
                                <Title level={5} className="link-name">{link.type}</Title>
                                    <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                            </Row>
                        ))
                    }
                </Col>
            </Row>
        </Col>
    );
}

export default CryptoDetails;