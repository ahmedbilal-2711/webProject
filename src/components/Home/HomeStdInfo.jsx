import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const HomeStudentinfo = (props) => {
  console.log(props);
  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "4rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <AccountCircleIcon sx={{ width: "180px", height: "180px" }} />
        <div>
          <p style={{ fontWeight: "bold" }}>
            {props.stdData.studentFirstName +
              " " +
              props.stdData.studentLastName}
          </p>
          <p style={{ fontWeight: "bold" }}>Dept of CSE, MCS</p>
        </div>
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Academic Year: </span>3
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Academic Standing: </span>
            {props.stdData.studentAcdStanding}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>CGPA: </span>
            {props.stdData.gpa}
          </p>
        </div>
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Credit Hours Achieved: </span>
            {props.stdData.studentAchievedCredHr}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>In Progress: </span>
            {props.stdData.studentDegCreditHr}
          </p>
        </div>
      </div>
      <div style={{ padding: "0rem 0rem 1rem 0rem" }}>
        <p style={{ fontWeight: "bold" }}>
          <span>Degree: </span>
          {props.stdData.studentDegree}
        </p>
      </div>
    </div>
  );
};

export default HomeStudentinfo;
