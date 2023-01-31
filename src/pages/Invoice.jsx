import InvoiceTable from "../components/Invoice/InvoiceTable";
import classes from "../CSS/invoice.module.css";
function Invoice() {
  return (
    <div className={classes.model}>
      <h2 className={classes.header}>Student Copy</h2>
      <div className={classes.text}>
        <p>Name: Ali Khan</p>
        <p>Student ID: 112</p>
        <p>Due-Date: 30-1-2023</p>
      </div>
      <div className={classes.table}>
        <InvoiceTable />
      </div>
    </div>
  );
}

export default Invoice;
