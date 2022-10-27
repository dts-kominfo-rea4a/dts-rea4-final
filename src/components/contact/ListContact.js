import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, Typography } from "@mui/material";

const ListContact = ({ list }) => {
  const columns = [
    {
      field: "UserId",
      headerName: "Name",
      minWidth: 200,
    },
    {
      field: "FullName",
      headerName: "Message",
      width: 130,
    },
    {
      field: "CreatedDate",
      headerName: "Created Date",
      sortable: false,
    },
  ];

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Message</TableCell>
              <TableCell sx={{ maxWidth: 50 }}>Created Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((dt, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{dt.UserId}</TableCell>

                <TableCell>{dt.FullName}</TableCell>

                <TableCell>{dt.CreatedDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br></br>
    </>
  );
};

export default ListContact;
