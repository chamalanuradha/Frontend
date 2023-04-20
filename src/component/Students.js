import React from "react";
import './Student.css'

const Students = ({students,loading})=>{
    if(loading){
        return <h2>loading</h2>
    }
    return (
        <div>
            <div className="Student_list">
            
            <ul>
                {students.map(student => (
                  <li key={student.id} className="list-group-item">
                    Name: {student.name}
                    <br/>
                    Email: {student.email}
                    <br/>
                    Username :{student.username}
                    <br/>
                    Phone: {student.phone}
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
          <button type="button" className="Add">+Add Student</button>
            </div>
        </div>
        
       

    )
}
export default Students;