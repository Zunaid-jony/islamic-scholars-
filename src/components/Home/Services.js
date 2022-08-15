import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './service.css'
import View from './View';

const Services = () => {

        const [services, setService] = useState([])
        const[modal, setModal] = useState(null)
        const [filterValue, setFilterValue]= useState('')
        const [searchData, setSearchData] = useState([])

        

        // pagination
        // const [currentPage, setCurrentPage] = useState(1);
        // const [postsPerPage, setPostsPerPage] = useState(10);

        useEffect(()=>{
            fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
            .then(responce => responce.json())
            .then(data => {
                setService(data)
                setSearchData(data)
            
            })
        },[])
        const handleFilter = (e) =>{
            if(e.target.value == ''){
                setService(searchData)
            }else{
              const filterResult = searchData.filter(card  => card.scholarName.toLowerCase().includes(e.target.value.toLowerCase()
              ))
              setService(filterResult)
            }
            setFilterValue(e.target.value)
            
        }
        // pagi
        // const lastPostIndex = currentPage * postsPerPage;
        // const firstPostIndex = lastPostIndex - postsPerPage;
        // const currentposts = services.slice(firstPostIndex, lastPostIndex);
    return (
        <div>
      <h1 style={{textAlign: 'center'}}> 🅸🆂🅻🅰🅼🅸🅲 🆂🅲🅷🅾🅻🅰🆁🆂</h1>

              <div className='container'>
              <input  placeholder='Search' value={filterValue} onInput={(e)=> handleFilter(e)}></input>
              </div>

            <section className='py-4 container'>
            <div className='row justify-content-center '>
                {/* col-12 col-md-6 col-lg-4   col-4 col-sm-12*/}
                        
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

            </section>
      
            
       
        </div>
    );
};

export default Services;