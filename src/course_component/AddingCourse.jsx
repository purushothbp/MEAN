import {useFormik} from 'formik';


const createFormValidate = (values) => {
    const requiredFields = {}
    if (!values.courseTitle) {
        requiredFields.courseTitle = "Course Title is required";
      }
    
      if (!values.courseCategory) {
        requiredFields.courseCategory = "Course Category is required";
      }else if (!/^[a-zA-Z0-9 ]*$/.test(values.courseCategory)) {
        requiredFields.courseCategory = "Course Category should not contain special characters";
      }
    
      if (!values.courseDescription) {
        requiredFields.courseDescription = "Course Description is required";
      }else if (!/^[a-zA-Z0-9 ]*$/.test(values.courseDescription)) {
        requiredFields.courseDescription = "Course Description should not contain special characters";
      }

    return requiredFields;
}

const NewCourse = () => {

    const formik = useFormik(
        {
            initialValues: {
                courseTitle: "",
                courseCategory:"",
                courseDescription:"",
            },
            onSubmit: (values) => {
                console.log(values)
            },
            validate: createFormValidate,
        }

    )
    return (
        <div className='NewCourseForm'>
           <form onSubmit={formik.handleSubmit}>
           <div>
                <label htmlFor="courseTitle">CourseTitle:</label>
                <input type="text" name='courseTitle' onChange={formik.handleChange} />
                {formik.errors.courseTitle && <div>{formik.errors.courseTitle}</div>}
            </div>
            <div>
                <label htmlFor="courseCategory">CourseCategory:</label>
                <input type="text" name='courseCategory' onChange={formik.handleChange}/>
                {formik.errors.courseCategory && <div>{formik.errors.courseCategory}</div>}
                
            </div>
            <div>
                <label htmlFor="courseDescription">courseDescription:</label>
                <input type="text" name='courseDescription' onChange={formik.handleChange} />
                {formik.errors.courseDescription&& <div>{formik.errors.courseDescription}</div>}

            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>
           </form>
        </div>
    )
}

export default NewCourse