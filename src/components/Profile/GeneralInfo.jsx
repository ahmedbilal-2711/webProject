import classes from "../../CSS/general.module.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
function GeneralInfo(props) {
  console.log(props);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <AccountBoxIcon />
        <h3>Additional Information</h3>
      </div>
      <div className={classes.InContainer}>
        <div className={classes.Insider}>
          <p className={classes.label}>First Name</p>
          <p className={classes.value}>{props.stdData.studentFirstName}</p>
        </div>
        <div className={classes.Insider}>
          <p className={classes.label}>Last Name</p>
          <p className={classes.value}>{props.stdData.studentLastName}</p>
        </div>
      </div>
      <div className={classes.InContainer}>
        <div className={classes.Insider}>
          <p className={classes.label}>Email</p>
          <p className={classes.value}>{props.stdData.studentMail}</p>
        </div>
        <div className={classes.Insider}>
          <p className={classes.label}>Religion</p>
          <p className={classes.value}>{props.stdData.studentReligion}</p>
        </div>
      </div>
      <div className={classes.Insider}>
        <p className={classes.label}>Department</p>
        <p className={classes.value}>{props.stdData.studentDepartment}</p>
      </div>
    </div>
  );
}
export default GeneralInfo;
