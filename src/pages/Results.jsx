import CurrentCourses from "./CurrentCourses";
import PrevCourses from "../components/PrevCourses";
import axios from "axios";
import { useEffect, useState } from "react";

const Results = (props) => {
  const [data, setData] = useState(null);
  const getStudentDetails = () => {
    axios
      .get("http://localhost:3000/getSemesterCurrentDetails", {
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
    <div>
      <div style={{ width: "90vw", overflow: "hidden", padding: "0rem 2rem" }}>
        <h3 style={{ textAlign: "left" }}>Previous Semesters: </h3>
        {data && <PrevCourses data={data} />}
      </div>
      <CurrentCourses val={props.val} />;
    </div>
  );
};

export default Results;
