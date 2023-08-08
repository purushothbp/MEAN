import './CourseList.css';
import { Link } from 'react-router-dom';
import data from '../courses-cost.json';
// import DeleteIcon from'@mui/material/'
import { useEffect, useState } from 'react';

const CourseList = () => {
    const [courseData , setcourseData] = useState([])
    useEffect(()=>{
        setcourseData(data)
    },[])
    const courseDataDelete=(id, index)=>{
           console.log(id)
    const filterData = [...courseData]
        filterData.splice(index,1);
        setcourseData(filterData)
        // {<DeleteIcon/>}
    }
    return (
        <div>
            <Link to={'/create'}> <button>Create</button></Link>
            <table className='tableStyles'>
                 <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Course Title</th>
                        <th>Course Category</th>
                        <th>Course Description</th>
                        <th>Course Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                      {
                        courseData.map((value,index)=>(
                            <tr key={value._id}>
                                <td>{index + 1}</td>
                                <td>{value.courseTitle}</td>
                                <td>{value.courseCategory }</td>
                                <td>{value.courseDescription}</td>
                                <td>{value.balance}</td>
                                <td><button onClick={()=>courseDataDelete(value._id, index)}>Delete</button></td>
                            </tr>
                            ))
                      }
                </tbody>
            </table>
        </div>
    )
}

export default CourseList