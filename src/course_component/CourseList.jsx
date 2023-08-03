import './CourseList.css';
import { Link } from 'react-router-dom';
import data from '../courses.json';
import { useEffect, useState } from 'react';

const CourseList = () => {
    const [coursesData , setcoursesData] = useState([])
    useEffect(()=>{
        setcoursesData(data)
    },[])
    const coursesDataDelete=(id, index)=>{
           console.log(id)
    const filterData = [...coursesData]
        filterData.splice(index,1);
        setcoursesData(filterData)
    }
    return (
        <div>
            <Link to={'/create'}> <button>Create</button></Link>
            <table className='tableStyles'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>CourseTitle</th>
                        <th>CourseCategory</th>
                        <th>CourseDescription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                      {
                        coursesData.map((value,index)=>(
                            <tr key={value._id}>
                                <td>{index + 1}</td>
                                <td>{ value.courseTitle}</td>
                                <td>{value.courseCategory }</td>
                                <td>{ value.courseDescription}</td>
                                <td><button onClick={()=>coursesDataDelete(value._id, index)}>Delete</button></td>
                            </tr>
                            ))
                      }
                </tbody>
            </table>
        </div>
    )
}

export default CourseList