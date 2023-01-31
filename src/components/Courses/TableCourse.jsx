import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Assignment } from "@material-ui/icons";

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
  function createData(assessment, total, obtained) {
    return { assessment, total, obtained };
  }

  const rows = [
    createData("Assignment 1", props.data.assignment1, 10),
    createData("Assignment 2", props.data.assignment2, 10),
    createData("Assignment 3", props.data.assignment3, 10),
    createData("Quiz 1", props.data.quiz1, 10),
    createData("Quiz 2", props.data.quiz1, 10),
    createData("Quiz 3", props.data.quiz1, 10),
    createData("Mid", props.data.mid, 30),
    createData("Final", props.data.final, 50),
  ];
  console.log(props.data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ASSESSMENT</StyledTableCell>
            <StyledTableCell align="center">TOTAL MARKS</StyledTableCell>
            <StyledTableCell align="center">OBTAINED MARKS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.assessment}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.assessment}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.obtained}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
