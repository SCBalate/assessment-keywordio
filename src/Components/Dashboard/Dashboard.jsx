import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MainDataTable from "./MainDataTable";
import GraphDataTable from "./GraphDataTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  height: "100%",
  overflow:'auto',
}));

export default function Dashboard() {
  return (
    <Box p={4}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Item>
            <MainDataTable />
          </Item>
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Item>
            <GraphDataTable />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
