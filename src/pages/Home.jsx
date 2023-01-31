import axios from "axios";
import { useEffect, useState } from "react";
import Graphs from "../components/Home/Graphs";
import HomeHeader from "../components/Home/HomeHeader";
import HomeStudentinfo from "../components/Home/HomeStdInfo";
const Home = () => {
  const [data, setData] = useState(null);
  const getStudentDetails = () => {
    axios
      .get("http://localhost:3000/getStudentDetails", {
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
    <div
      style={{
        width: "90vw",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      <HomeHeader />
      <h1 style={{ textAlign: "left" }}>Student Info: </h1>
      {data && <HomeStudentinfo stdData={data} />}
      <h1 style={{ textAlign: "left" }}>Attendance & Semester Performance: </h1>
      <Graphs />
      {/* <h1 style={{ textAlign: "left" }}>Course Info: </h1> */}
      {/* <CurrentC/sourses val={dummy_data} /> */}
    </div>
  );
};

export default Home;
