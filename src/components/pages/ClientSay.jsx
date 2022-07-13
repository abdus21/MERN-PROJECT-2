import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientSay = () => {
    const dataa = [
        {
            name : "abdus samad",
            photo : "https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q="
        },
        {
            name : "abdus samad",
            photo : "https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/client-1.png?alt=media&token=e2d88fae-6f6c-46c0-a383-a269f7d44fb6"
        },
        {
            name : "abdus samad",
            photo : "https://media.istockphoto.com/photos/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476?k=20&m=1034357476&s=612x612&w=0&h=OpiBGaVDU02LI1WVpb02Wza6AAdTGopRpf0Kx6q8V-Q="
        },
        {
            name : "abdus samad",
            photo : "https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/client-1.png?alt=media&token=e2d88fae-6f6c-46c0-a383-a269f7d44fb6"
        },
        
    ]
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        /* responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ] */
      };
  return (
    <>
    <Container>
        <Row>
            <Col md={4}></Col>
            <Slider {...settings}>
            <Col md={4} className='text-center'>
                
                {
                dataa.map(data=>
                    <div>
                        <img style={{width:"100px",height:"100px",objectFit:'cover',borderRadias:'50%'}} src={data.photo} alt="" />
                        <h3>{data.name}</h3>
                        <p></p>
                </div>
                )
       }
               
           
            </Col>
            </Slider>
            <Col md={4}></Col>
        </Row>
    </Container>
   
       
    </>
  )
}

export default ClientSay
