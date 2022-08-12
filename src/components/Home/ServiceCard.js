import React from 'react';
import './ServiceCard.css'


const ServiceCard = ({card,setModal}) => {
    const {scholarImage,scholarName, city,phone} = card;
    // const url =`/view/${_id}`
    return (
        <div className='cards contener  '>
            <img class="center" src={scholarImage ?? 'https://i.ibb.co/L1kHbkD/bellhop.png'}></img> 

         <h6>  {scholarName}</h6>
         <p >  {city}</p>
         <p >  {phone}</p>


       <button
      
        onClick={() => setModal(card)}
        type="button"
        className="btn btn-primary card-buttos "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{alignItems:'center'}}
       
       > BOOKING</button>
         {/* <Link style={{color:'wheat',textDecoration:'none'}} to='/'> Booing </Link> */}
         
        </div>
    );
};

export default ServiceCard;