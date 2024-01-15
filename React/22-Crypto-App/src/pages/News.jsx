import React, { useState } from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';
import Loader from '../components/Loader';
import { Card, Col, Row, Typography, Avatar, Select } from 'antd';
const { Text, Title } = Typography;
const { Option } = Select;
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoAPI';
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function News({simplified}) {
    const count = simplified ? 6 : 100;
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data: newsdata,isFetching} = useGetCryptoNewsQuery(newsCategory);
    const {data} = useGetCryptosQuery(100);
    // console.log(newsdata?.data);
    // const newsdata = [];

    // if(isFetching){
    //     return <Loader />
    // }

    return (
        <div>
            <Row gutter={[24,24]}>
            {
                !simplified && 
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                        </Select>
                    </Col>
            }
            {
                newsdata?.data?.slice(0,100)
                    .sort((a,b) => moment(b.published_datetime_utc) - moment( a.published_datetime_utc))
                    .slice(0,count)
                    .map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                            <a href={news.link} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>
                                        {news.title.length >= 50 ? news.title.substring(0,50) + "..." : news.title}
                                    </Title>
                                    <img src={news?.photo_url|| demoImage} alt="" 
                                    className=' max-w-[150px] max-h-[100px]'/>
                                </div>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news?.source_favicon_url || demoImage} alt="" />
                                    </div>
                                    <Text>{moment(news.published_datetime_utc).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
            </Row>
        </div>
    );
}

export default News;