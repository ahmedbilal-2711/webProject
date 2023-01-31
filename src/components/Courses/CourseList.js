import classes from "../../CSS/courseList.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TableCourses from "./TableCourse.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function CourseList(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    getResultsDetails(props.id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [data, setData] = useState(null);
  const getResultsDetails = (course) => {
    axios
      .get("http://localhost:3000/getStudentResultSheet", {
        params: { userID: "101", course: course },
      })
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  return (
    <div className={classes.container}>
      <h2>{props.title}</h2>
      <p className={classes.descrip}>Credit hours: {props.credit}</p>
      <p className={classes.descrip}>Type: {props.type}</p>
      <p className={classes.descrip}>Semester: {props.sem}</p>
      <button className={classes.crsBtn} onClick={handleOpen}>
        View Course
      </button>
      <p>Completed: {props.comp}%</p>
      <LinearProgress variant="determinate" value={props.comp} />

      {data && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TableCourses data={data} />
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default CourseList;
