import React from 'react';
import './ServiceCard.css'


const ServiceCard = ({card,setModal}) => {
    const {scholarImage,scholarName, city,phone} = card;
    // const url =`/view/${_id}`
    return (
       <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow cards  '>
            <img class="img-fluid" src={scholarImage ?? 'https://i.ibb.co/L1kHbkD/bellhop.png'}></img> 

         <h6>  {scholarName}</h6>
         <p >  {city}</p>
         <p >  {phone}</p>


       <button
      
        onClick={() => setModal(card)}
        type="button"
        className="btn btn-primary card-buttos  mx-auto mb-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{alignItems:'center'}}
       
       > BOOKING</button>
         {/* <Link style={{color:'wheat',textDecoration:'none'}} to='/'> Booing </Link> */}
         
        </div>
       </div>
    );
};

export default ServiceCard;