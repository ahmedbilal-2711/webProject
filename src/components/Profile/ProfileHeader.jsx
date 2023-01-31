import profilehead from "../../assets/student.jpg";
import classes from "../../CSS/profilehead.module.css";

function ProfileHeader(props) {
  return (
    <div className={classes.models}>
      <div>
        <img src={profilehead} alt="profile" className={classes.image} />
        <div className={classes.info}>
          <p className={classes.text}>
            Student ID: <span>{props.stdData.studentID}</span>
          </p>
          <p className={classes.text}>
            Degree: <span>{props.stdData.studentDegree}</span>
          </p>
          <p className={classes.text}>
            Section: <span>{props.stdData.studentSection}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
