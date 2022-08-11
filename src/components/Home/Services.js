import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './service.css'
import View from './View';

const Services = () => {

        const [services, setService] = useState([])
        const[modal, setModal] = useState(null)
        useEffect(()=>{
            fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
            .then(responce => responce.json())
            .then(data => setService(data))
        },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}> 🅸🆂🅻🅰🅼🅸🅲 🆂🅲🅷🅾🅻🅰🆁🆂</h1>
            <div className='mainCard container'>
                        
            {
                services.map(card => <ServiceCard
                
                key={card._id}
                setModal={setModal}
                card ={card}
             
                ></ServiceCard>)
            }
        </div>
        {modal && <View modal={modal}
        
        ></View>

        }
        </div>
    );
};

export default Services;