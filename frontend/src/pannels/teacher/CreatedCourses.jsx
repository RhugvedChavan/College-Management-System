import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../../helpers/axiosConfig"

const CreatedCourses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get("/all-courses", 
          {withCredentials: true}
        );
        if (response.data.success){
          setCourses(response.data.course);
        }
      } catch (error) {
        console.log(error);
        setError(error.message)
        
      } finally {
        setLoading(true)
      }
    }

    fetchAllCourses();
  }, [])

  console.log(courses);
  

  return (
    <div className="px-6 py-4">
        <div>
            <h1 className="text-3xl font-bold text-neutral-800">
                Your created courses
            </h1>
        </div>
        <div>
            hello
        </div>
    </div>
  )
}

export default CreatedCourses