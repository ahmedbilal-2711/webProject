import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3C76D2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BasicTable(props) {
  console.log(props);
  function createData(
    SrNo,
    Term,
    GradePoints,
    TotalCredits,
    EarnedCredits,
    GPA
  ) {
    return { Term, GradePoints, TotalCredits, EarnedCredits, GPA };
  }
  let rows = [];
  props.data.forEach((semester) => {
    rows.push(
      createData(
        semester.term,
        semester.studentGp,
        semester.totalCreditHours,
        semester.totalCreditHours,
        semester.studentGpa
      )
    );
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">TERM</StyledTableCell>
            <StyledTableCell align="center">GRADE POINTS</StyledTableCell>
            <StyledTableCell align="center">TOTAL CREDITS</StyledTableCell>
            <StyledTableCell align="center">EARNED CREDITS</StyledTableCell>
            <StyledTableCell align="center">GPA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.assessment}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.Term}</TableCell>
              <TableCell align="center">{row.GradePoints}</TableCell>
              <TableCell align="center">{row.TotalCredits}</TableCell>
              <TableCell align="center">{row.EarnedCredits}</TableCell>
              <TableCell align="center">{row.GPA}</TableCell>
              <TableCell align="center">{row.CGPA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
