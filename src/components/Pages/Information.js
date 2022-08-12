import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../Home/Services';
import './Information.css'

const Information = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <section className='hero mt-35'>
                 <div className='container'>
                     <h1 className='text-center containe'>🅸🆂🅻🅰🅼🅸🅲 </h1>
                     <br></br>
                     <div className='row'>


                         
                         {/* img */}

                         <div  className='col-md-6 '>
                       
                            
                             <img style={{width:'100%'}} src="https://i.ibb.co/BrFWM9T/2872133-7181.jpg" alt="2872133-7181" border="0"></img>
                              
                         </div>

                         <div className='col-md-6'>
                             <div className='copy textaria'>
                                 {/* <div className='text-libel'>
                                     change your  bussnises is more betwer 

                                 </div> */}
                                 <div className='text-hero-bold ab'>
                             <h2> Hadiths</h2>

                                 </div>
                                 <div className='text-hero-regular'>
                                 In the Holy Qur'an, Allah Almighty says, 'Surely prayer prevents indecent and evil deeds. (Sura-29 Ankabut, verse: 45). In Hadith Sharif, Rasulullah (SAW) said, 'Prayer without the presence of the Lord Qalab (heart) is not a true prayer.

                                 </div>

                                 <div className='cta'>
                                     <a href='' className='btn btn-success shadow-none'> Explore now</a>
                                     <a href='' className='btn btn-secondary shadow-none ms-3'> Explore now</a>

                                 </div>

                             </div>

                         </div>


                         {/* img */}

                         

                     </div>


                 </div>

             </section>
             {/* secentd */}
             <section className='hero'>
                 <div className='container'>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <h1 className='text-center containe'> 🅷🅾🅻🆈 🆀🆄🆁'🅰🅽</h1>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <div className='row'>

                         <div className='col-md-6'>
                             <div className='copy textaria'>
                                 {/* <div className='text-libel'>
                                     change your  bussnises is more betwer 

                                 </div> */}
                                 <div className='text-hero-bold ab'>
                             <h2> Holy Qur'an</h2>

                                 </div>
                                 <div className='text-hero-regular'>
                                 In many verses of the Holy Qur'an, Allah Ta'ala has ordered the spending of wealth on His roads. Allah has commanded a believer after accepting faith that you who have believed, be prepared to spend wealth in his way.

                                 </div>

                                 <div className='cta'>
                                     <a href='' className='btn btn-success shadow-none'> Explore now</a>
                                     <a href='' className='btn btn-secondary shadow-none ms-3'> Explore now</a>

                                 </div>

                             </div>

                         </div>


                         {/* img */}
                           {/* img */}

                           <div  className='col-md-6 '>
                       
              
                       <img style={{width:'100%'}} src="https://i.ibb.co/Q65z6xy/14213814-5452136.jpg" alt="14213814-5452136" border="0"></img>
                        
                   </div>

                         

                     </div>


                 </div>

             </section>
             
             <section>
             <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                 <Services></Services>
                 <br></br>
             <br></br>
             <br></br>
             </section>



            <Footer></Footer>
        </div>
    );
};

export default Information;