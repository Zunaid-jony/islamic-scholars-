import React from 'react';
import './ServiceCard.css'
import Img from '../imgs/16275.jpg'
import { Link } from 'react-router-dom';

const ServiceCard = ({card,setModal}) => {
    const {scholarImage,scholarName,nid,status, city,phone,_id} = card;
    // const url =`/view/${_id}`
    return (
        <div className='cards contener'>
            <img class="center" src={scholarImage ?? 'https://i.ibb.co/L1kHbkD/bellhop.png'}></img> 
{/*          
         <img class="center" src={scholarImage ?? 'src="https://i.ibb.co/L1kHbkD/bellhop.png"'}></img>  */}
         <h6>  {scholarName}</h6>
         <p >  {city}</p>
         <p >  {phone}</p>
         {/* style={{textAlign: 'left', margin: '10px'}} */}
         {/* <button 
       
         
         class="btn btn-primary"> </button> */}

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