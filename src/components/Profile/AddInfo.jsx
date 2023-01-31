import classes from "../../CSS/general.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
function AddInfo(props) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <AccountBoxIcon />
        <h3>Additional Information</h3>
      </div>
      <div className={classes.InContainer}>
        <div className={classes.Insider}>
          <p className={classes.label}>Address</p>
          <p className={classes.value}>{props.stdData.studentAddress}</p>
        </div>
        <div className={classes.Insider}>
          <p className={classes.label}>Gender</p>
          <p className={classes.value}>{props.stdData.studentGender}</p>
        </div>
      </div>
      <div className={classes.InContainer}>
        <div className={classes.Insider}>
          <p className={classes.label}>Country</p>
          <p className={classes.value}>{props.stdData.studentCountry}</p>
        </div>
        <div className={classes.Insider}>
          <p className={classes.label}>Date of Birth</p>
          <p className={classes.value}>{props.stdData.studentDOB}</p>
        </div>
      </div>
    </div>
  );
}
export default AddInfo;
