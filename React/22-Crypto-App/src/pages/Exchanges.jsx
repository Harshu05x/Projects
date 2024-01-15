import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
// import HTMLReactParser from 'html-react-parser';


import Loader from '../components/Loader';
import { useGetExchangesQuery } from '../services/cryptoAPI';
import { CheckCircleOutlined, CheckCircleTwoTone, CloseCircleOutlined, CloseCircleTwoTone } from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
//   console.log(exchangesList);
//   console.log(exchangesList[0].recommended);
 // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

return (
    <>
        <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Price</Col>
        </Row>
        <Row>
            {
                exchangesList?.map((exchange) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={exchange.uuid}
                                showArrow={false}
                                header={(
                                <Row key={exchange.uuid}>
                                    <Col span={6}>
                                        <Text><strong>{exchange.rank}.</strong></Text>
                                        <Avatar className="exchange-image" src={exchange.iconUrl} />
                                        <Text><strong>{exchange.name}</strong></Text>
                                    </Col>
                                    <Col span={6}>${exchange && millify(Number(exchange['24hVolume']))}</Col>
                                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                    <Col span={6}>{millify(exchange.price)}</Col>
                                </Row>
                                )}
                            >
                                <div className=' flex flex-col text-base'>
                                    <p>
                                        BTC Price: {exchange.btcPrice}
                                    </p>
                                    <p>
                                        Recommended: {exchange.recommended ? <CheckCircleTwoTone twoToneColor="#008000"/> : <CloseCircleTwoTone twoToneColor="#FF0000" />}
                                    </p>
                                    <p>
                                        Verified: {exchange.verified ? <CheckCircleTwoTone twoToneColor="#008000"/> : <CloseCircleTwoTone twoToneColor="#FF0000"/>}
                                    </p>
                                    <p>
                                        More Details: <a href={exchange.coinrankingUrl} target='_blank'
                                                    className=' underline text-blue-700 hover:underline hover:text-blue-200'>
                                                        {exchange.name} Exchange
                                                    </a>
                                    </p>
                                </div>
                            </Panel>
                            
                        </Collapse>
                    </Col>
                ))
            }
        </Row>
    </>
);
};

export default Exchanges;