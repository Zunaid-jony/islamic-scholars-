import React from 'react';
import ShowCart from './ShowCart';
import DonationApi from './DonationApi';

const DonationCart = () => {
   
    return (
        <>
        <h1 className='text-center mt-3'>All Donations</h1>
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                {DonationApi.donation.map((item, index)=>{
                    return(
                        <ShowCart
                
                        img={item.img} title={item.title} item={item} description={item.description} price={item.price}
                        key={index}
                        
                       
                        ></ShowCart>
                    )
                    
                })}
               

            </div>

        </section>
           
        </>
    );
};

export default DonationCart;