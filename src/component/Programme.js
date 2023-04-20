import React from "react";
import './Student.css'

const Programme = ({programmes ,loading})=>{
    if(loading){
        return <h2>loading</h2>
    }
    return (
        <div>
            <div className="Student_list">
            
            <ul>
                {programmes.map(programme => (
                  <li key={programme.id} className="list-group-item">
                    ID:{programme.id}
                    <br/>
                    Name: {programme.name}
                    
                    <div className="buttons">
                    <button type="button" className="edit">Edit</button>
                    <button type="button" className="delete">Delete</button>
                    </div> 
                   <br/>
                    <hr/>
                </li> 
            ))}
        </ul>
            </div>
            <div>
          <button type="button" className="Add">+Add Programme</button>
            </div>
        </div>
        
       

    )
}
export default Programme;