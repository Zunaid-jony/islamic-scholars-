import React, { useEffect, useState } from "react";
import ViewModalFinal from "./ViewModalFinal";

// values of local storage

const getDatafromLS=()=>{
    const data = localStorage.getItem('books')
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}
// 

const View = ({ modal }) => {
  const { scholarImage, scholarName, nid, status, city, phone, _id } = modal;


//   main array of object state

const [books, setbooks] = useState(getDatafromLS())

// input field
  const[ title, setTitle] = useState('')
  const[ author, setAuther] = useState('')
  const[ isbn, setIsbn] = useState('')
  const[ schol, setIchol] = useState('')

  useEffect(() => setIchol(scholarName),[scholarName])

//   form submit event
const handleAddBookSubmit=(e)=>{
    e.preventDefault();

    // object 
    let book={
        title: title,
        author:author,
        isbn:isbn,
        schol:schol
    }
  console.log(schol)

    setbooks([...books,book])
    setTitle('')
    setAuther('')
    setIsbn('')
    setIchol('')

}
  // delete book
  const deleteBook=(isbn)=>{
     const filterBooks = books.filter((eliment,index)=>{
         return eliment.isbn !== isbn
     })
     setbooks(filterBooks);
  }
// DATA Save to local storage
useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books))


},[books])
  return (
    <div style={{ height: "300px" }}>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
       
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Scholars
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <section id="contact">
                <div className="container-lg">
                  <div className="text-center">
                    <h2> Scholar Schedule Form </h2>
                   
                  </div>

                  <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        {/* form */}

                     <div className="from-section  justify-content-end">
                       {/* img */}
                      
                       <form 
                       
                      onSubmit={handleAddBookSubmit}
                      
                      style={{ backgroundColor: 'gainsboro' , width:'270px',textAlign:'center',marginLeft:'-22PX'}}> 
                        <div class="mb-3">
                        <img class="img-fluid" alt="" style={{width:"90px", borderRadius: '50px',textAlign:'center'}} src={scholarImage} ></img>


                          <label for="exampleInputEmail1" class="form-label">
                  
                          </label>
                          
                          
                          <h6>{scholarName}</h6>
                            
                         
                        
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                          Scholoar name
                          </label>
                          <input
                          onBlur={(e) => setIchol(e.target.value)} value={scholarName}
                          
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        {/* your name */}
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                          Your Name
                          </label>
                          <input
                          onChange={(e) => setTitle(e.target.value)} value={title}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        
                        </div>


                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Your Email
                          </label>
                          <input
                            onChange={(e) => setAuther(e.target.value)} value={author}
                            type="email"
                            
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                           Date
                          </label>
                          <input
                             onChange={(e) => setIsbn(e.target.value)} value={isbn}
                            type="date"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        
                        </div>
                        
                       
                        <button style={{width:"260px"}} type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>


                     </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
           {/* <p> hi</p>   */}
           {/* tabol */}
           <div>
               
               {books.length > 0 && <>
               <div table-reesponsive>
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Scholar</th>
                               <th>DATE</th>
                               <th>NAME</th>
                               <th>EMAIL</th>
                               <th>DELETE</th>
                           </tr>
                       </thead>
                       <tbody> 
                           <ViewModalFinal 
                           
                           books={books}
                           deleteBook={ deleteBook}
                           
                           
                           ></ViewModalFinal>
                       </tbody>
                        
                   </table>
               </div>
               
               
               </>}

               {books.length <1 && <div> <h6>no books are added yet</h6></div>}
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
