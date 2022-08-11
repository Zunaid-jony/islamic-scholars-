import React from 'react';
import { AiFillDelete } from 'react-icons/ai';



const ViewModalFinal = ({books,deleteBook}) => {
    return books.map(book =>(
        <tr key={book.isbn}>

           <td>{book.schol}</td>
            <td>{book.isbn}</td>
            
            <td>{book.title}</td>
            <td>{book.author}</td>
           
            <td className='delete-btn' onClick={()=> deleteBook(book.isbn)}>
                <AiFillDelete></AiFillDelete>
                
                

               
            </td>
            
        </tr>
    ))
};

export default ViewModalFinal;