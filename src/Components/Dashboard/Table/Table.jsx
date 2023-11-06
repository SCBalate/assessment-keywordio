import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";

export default function ColumnGroupingTable({ columns, rows }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("campaign");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getComparator = (a, b) => {
    if (order === "asc") {
      return a < b ? -1 : 1;
    } else {
      return a > b ? -1 : 1;
    }
  };

  const sortedRows = rows.slice().sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    if (typeof aValue === "string" && typeof bValue === "string") {
      return getComparator(aValue.toLowerCase(), bValue.toLowerCase());
    } else {
      return getComparator(aValue, bValue);
    }
  });

  const SortLabel = ({ active, direction, onClick, children }) => {
    return (
      <Box display={"flex"} alignItems={"center"} onClick={onClick}>
        <Typography width={"100%"}>{children}</Typography>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} fontSize={"sm"}>
          <Box
            fontSize={"8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"10px"}
            color={active && direction === "asc" ? "#000000" : "#cccccc"}
          >
            <KeyboardArrowUpIcon />
          </Box>
          <Box
            fontSize={"8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"10px"}
            color={active && direction === "desc" ? "#000000" : "#cccccc"}
          >
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ top: 57, minWidth: column.minWidth }}
            >
              <SortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : "asc"}
                onClick={(e) => handleRequestSort(e, column.id)}
              >
                {column.label}
              </SortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedRows.map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.campaign}>
              {columns.map((column) => {
                const value = row[column.id];

                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === "number" ? column.format(value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}

        {columns.map((column, idx) => {
          if (idx === 0) {
            return (
              <TableCell key={column.id} align={column.align}>
                Total
              </TableCell>
            );
          }
          const value = sortedRows.reduce((acc, row) => {
            return acc + row[column.id];
          }, 0);
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number" ? column.format(value) : value}
            </TableCell>
          );
        })}
      </TableBody>
    </Table>
  );
}
