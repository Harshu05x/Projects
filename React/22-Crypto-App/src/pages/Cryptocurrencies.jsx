import React, { useEffect, useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import { Col, Row , Card} from 'antd';
import { NavLink } from 'react-router-dom';
import millify from 'millify';
import Loader from '../components/Loader';

function Cryptocurrencies({simplified}) {
    const count = simplified ? 10 : 100;
    const {data: cryptoList, isFetching} = useGetCryptosQuery(count);
    const [cryptoData,setCryptoData] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");

    useEffect(() => {
        const data = cryptoList?.data?.coins;
        const filteredData = data?.filter(
            (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCryptoData(filteredData);
    },[cryptoList,searchTerm]);

    if(isFetching)
        return (
                <Loader />
            )

    return (
        <div>
            {
                !simplified && 
                <div className='search-crypto'>
                    <input placeholder='Search Cryptocurrency' className=' px-2 py-1'
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)}/>
                </div>
            }
            <Row gutter={[32,32]} className='crypto-card-container'>
                {
                    cryptoData?.map((currency) => (
                        <Col className=' crypto-card' key={currency.uuid}
                        xs={24} sm={12} lg={6}>
                            <NavLink to={`/crypto/${currency.uuid}`}>
                                <Card title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                                    hoverable>
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {currency.change}%</p>
                                </Card>
                            </NavLink>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default Cryptocurrencies;