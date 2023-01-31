import ProfileHeader from "../components/Profile/ProfileHeader";
import GeneralInfo from "../components/Profile/GeneralInfo";
import AddInfo from "../components/Profile/AddInfo";
import classes from "../CSS/profile.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [data, setData] = useState("Ahmed");
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
    <>
      <div className={classes.wrap}>
        <ProfileHeader stdData={data} />
        <div>
          <GeneralInfo stdData={data} />
          <AddInfo stdData={data} />
        </div>
      </div>
    </>
  );
}

export default Profile;
