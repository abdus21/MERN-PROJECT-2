import React from 'react';
import { Col, Container, Row, Tooltip } from 'react-bootstrap';
import { BarChart,Legend,Bar, CartesianGrid, Line, LineChart, XAxis,YAxis } from 'recharts';


const Charts = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <>
    <Container className='my-4 p-4'>
        <Row>
            <Col md={12} className='text-center my-4 text-primary'>
                <h2>Technology Used</h2>
            </Col>
            <Col md={6}>
            <BarChart width={530} height={250} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </Col>
            <Col md={6}>
                <div className="paragrap">
                    <p style={{fontSize:"14px"}}>To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>

                    <p style={{fontSize:"14px"}}>I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>

                    <p style={{fontSize:"14px"}}>Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                </div>
            </Col>
        </Row>
    </Container>
    
    </>
  
  )
}

export default Charts