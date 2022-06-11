import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const fakeUserList = [
  { name: "Ali", username: "mrA", email: "Ali@mail.com" },
  { name: "Veli", username: "mrV", email: "Veli@mail.com" },
  { name: "Cafer", username: "mrC", email: "Cafer@mail.com" },
  { name: "Berk", username: "mrB", email: "Berk@mail.com" },
  { name: "Dogi", username: "mrD", email: "Dogi@mail.com" },
];

const Main = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeUserList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Main;
