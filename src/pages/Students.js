import React,{useEffect,useState} from 'react'
import Header from '../component/header';
import axios from 'axios';
import Stu from '../component/Students';
import Pagination from '../component/Pagination';
import SearchBox from '../component/SerachBox';


 const Students = () => {

    const [students,setStudents]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentpage,setCurrentpage]=useState(1);
    const [studentPerPage]=useState(4);
   

    useEffect(()=>{
        const fetchStudents = async () =>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setStudents(res.data);
            setLoading(false);
        }
        fetchStudents();
    }, []);

const indexOfLastStudents = currentpage *studentPerPage;
const indexOfFirstStudent = indexOfLastStudents-studentPerPage;
const currentStudents = students.slice(indexOfFirstStudent,indexOfLastStudents);

const paginate = pageNumber => setCurrentpage(pageNumber);
  return (
    <div>
        <Header/> 
        <SearchBox />
        <Stu students={currentStudents} loading={loading} />   
        <Pagination studentPerPage={studentPerPage} totalStudents={students.length} paginate={paginate}/>
    </div>
  )
}
export default Students;