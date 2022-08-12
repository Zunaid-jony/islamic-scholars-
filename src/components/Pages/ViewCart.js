import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const ViewCart = () => {
    const {

        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    
    } = useCart() 

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <section className="py-4  container addToCard" >
      <div className="row justify-content-center ">
        {/* item cart are sathe  */}
        
        <div className="col-4 col-sm-12">
          <h5 style={{color:'black'}}>
            {" "}
            Cart: {totalUniqueItems} &nbsp; &nbsp; Total Donation: {totalItems}
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }}></img>
                    </td>
                        <td>{item.title}</td>
                        <td> $ {item.price} &nbsp;  Donation</td>
                        
                        <td>
                            <button 
                            className="btn btn-info ms-2"
                            onClick={()=> updateItemQuantity(item.id, item.quantity-1)}
                            >-</button>

                            <button 
                            className="btn btn-info ms-2"
                            onClick={()=> updateItemQuantity(item.id, item.quantity+1)}
                            >+</button>

                            <button
                            className="remove btn btn-danger ms-2"
                            onClick={()=>  removeItem(item.id)}
                            
                            >Remove Item</button>
                        </td>
                  </tr>
                 

                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-auto ms-auto">
           <h2 style={{color:'black',marginRight:'20px'}} > Total Price: $ {cartTotal}</h2>
       </div>
       <div className="col-auto" style={{marginRight:'140px'}}>
           <button
           className="btn btn-danger m-2"
           onClick={()=> emptyCart()} 
           > Clear Cart
           </button>
           <button className="btn btn-success m-2">
               
              
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/pay'>  Buy Now </Link>  
               </button>
           
       
       </div> 
      </div>
    </section>
        </div>
    );
};

export default ViewCart;