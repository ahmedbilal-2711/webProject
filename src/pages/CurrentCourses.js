import classes from "../CSS/currentCourse.module.css";
import CourseList from "../components/Courses/CourseList";
import axios from "axios";
import { useEffect, useState } from "react";

function CurrentCourses() {
  const [data, setData] = useState(null);
  const getStudentDetails = () => {
    axios
      .get("http://localhost:3000/getEnrolledCourses", {
        params: { userID: "101" },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStudentDetails();
  }, []);
  return (
    data && (
      <div style={{ width: "90vw", overflow: "hidden", padding: "2rem" }}>
        <h3 className={classes.tag}>Enrolled Courses:</h3>
        <div className={classes.card}>
          {data.map((course, index) => (
            <CourseList
              key={course.courseName}
              id={course.courseName}
              title={course.courseName}
              credit={course.courseCreditHour}
              type={course.courseType}
              sem={course.studentSemester}
              comp={course.courseCompletion}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default CurrentCourses;
