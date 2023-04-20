import React,{useState,useEffect} from 'react'
import Header from '../component/header'
import axios from 'axios';
import Pro from '../component/Programme';
import Pagination from '../component/Pagination';
import SearchBox from '../component/SerachBox';
 const  Programme = () => {
  const [programmes,setProgrammes]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentpage]=useState(1);
    const [programmePerPage]=useState(40);
    const [setSearchTerm] = useState('');

    useEffect(()=>{
      const fetchProgrammes = async () =>{
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
          setProgrammes(res.data);
          setLoading(false);
      }
      fetchProgrammes();
  }, []);
  
  const indexOfLastProgramme = currentPage * programmePerPage;
  const indexOfFirstProgramme= indexOfLastProgramme - programmePerPage;
  const currentProgrammes = programmes.slice(indexOfFirstProgramme,indexOfLastProgramme);

  const paginate = pageNumber => setCurrentpage(pageNumber);
function handleSearchTermChange(event) {
  setSearchTerm(event.target.value);
}

  return (
    <div>
        <Header/>
        <SearchBox onChange={handleSearchTermChange} />
        <Pro programmes={currentProgrammes} loading={loading} /> 
        <Pagination studentPerPage={programmePerPage} totalStudents={programmes.length} paginate={paginate}/>
    </div>
  )
}
export default Programme;