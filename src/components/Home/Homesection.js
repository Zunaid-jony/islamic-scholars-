import React from 'react';
// import Img from '../imgs/section1.jpg'
import './Homesection.css'



const Homesection = () => {
    return (
       

       <div> 
         
             <section className='hero'>
                 <div className='container'>
                     <h1 className='text-center containe'>🅲🅾🅽🆃🅰🅸🅽🅴</h1>
                     <div className='row'>
                         <div className='col-md-6'>
                             <div className='copy textaria'>
                                 {/* <div className='text-libel'>
                                     change your  bussnises is more betwer 

                                 </div> */}
                                 <div className='text-hero-bold ab'>
                             <h2> Allah is giving charity on the road</h2>

                                 </div>
                                 <div className='text-hero-regular'>
                                 In many verses of the Holy Qur'an, Allah Ta'ala has ordered the spending of wealth on His roads. Allah has commanded a believer after accepting faith that you who have believed, be prepared to spend wealth in his cause.

                                 </div>

                                 <div className='cta'>
                                     <a href='' className='btn btn-success shadow-none'> Explore now</a>
                                     <a href='' className='btn btn-secondary shadow-none ms-3'> Explore now</a>

                                 </div>

                             </div>

                         </div>


                         {/* img */}

                         <div  className='col-md-6 '>
                       
                             <img   style={{width:'100%'}} src="https://i.ibb.co/KzqGZvz/section1.jpg" alt="section1" border="0"></img>
                              
                         </div>

                     </div>


                 </div>

             </section>

        
       </div>
       
    );
};

export default Homesection;