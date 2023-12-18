import React, { useState } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
} from "@mui/material";

const itemsPerPage = 10;
const DataPagination = ({ data }) => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const changeEvent = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search Here..." onChange={changeEvent} />
      <Container>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "id"}
                      direction={orderBy === "id" ? order : "asc"}
                      onClick={() => handleSort("id")}
                    >
                      UserId
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "name"}
                      direction={orderBy === "name" ? order : "asc"}
                      onClick={() => handleSort("name")}
                    >
                      Id
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "id"}
                      direction={orderBy === "id" ? order : "asc"}
                      onClick={() => handleSort("id")}
                    >
                      Title
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "id"}
                      direction={orderBy === "id" ? order : "asc"}
                      onClick={() => handleSort("id")}
                    >
                      Body
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (
                      item.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .slice(
                    page * itemsPerPage,
                    page * itemsPerPage + itemsPerPage
                  )
                  .sort((a, b) => {
                    const isAsc = order === "asc";
                    return isAsc
                      ? a[orderBy] - b[orderBy]
                      : b[orderBy] - a[orderBy];
                  })
                  .map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.userId}</TableCell>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.body}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[itemsPerPage]}
            component="div"
            count={data.length}
            rowsPerPage={itemsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default DataPagination;
