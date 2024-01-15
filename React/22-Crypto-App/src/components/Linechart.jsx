import React from 'react';
import { Line } from 'react-chartjs-2';
// import { CategoryScale, Chart , LinearScale, PointElement} from "chart.js";
// Chart.register(CategoryScale);
// Chart.register(LinearScale);
// Chart.register(PointElement);
import 'chart.js/auto'
import { Col, Row, Typography } from 'antd';
import millify from 'millify';

const { Title } = Typography;

function Linechart({ coinHistory, currentPrice, coinName }) {

    console.log(coinHistory);
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length && i <= 100; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }
    
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            }
        ],
    };

    const options = {
        scales: {
            yAxis: [{
                ticks: {
                    beginAtZero: true,
                },
            },],
            xAxis: [{
                ticks: {
                    beginAtZero: true,
                },
            },],
    }};

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data}  options={options}/>
        </>
    );
}

export default Linechart;