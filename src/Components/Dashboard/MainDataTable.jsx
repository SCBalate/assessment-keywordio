import React from "react";
import { formatNumber } from "../../Utils/utils";
import ColumnGroupingTable from "./Table/Table";
import { Box, Typography } from "@mui/material";

const columnsData = [
  { id: "campaign", label: "Campaign" },
  {
    id: "clicks",
    label: "Clicks",
    align: "right",
    format: (value) => formatNumber(value)
  },
  {
    id: "cost",
    label: "Cost",
    align: "right",
    format: (value) => formatNumber(value, true)
  },
  {
    id: "conversions",
    label: "Conversions",
    align: "right",
    format: (value) => formatNumber(value)
  },
  {
    id: "revenue",
    label: "Revenue",
    align: "right",
    format: (value) => formatNumber(value, true)
  }
];
const rowsData = [
  {
    campaign: "Cosmetics",
    clicks: 712,
    cost: 4272,
    conversions: 8,
    revenue: 16568
  },
  {
    campaign: "Serums",
    clicks: 3961,
    cost: 27331,
    conversions: 115,
    revenue: 362526
  },
  {
    campaign: "Facewash",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800
  },
  {
    campaign: "Shapoos",
    clicks: 439,
    cost: 2151,
    conversions: 5,
    revenue: 11029
  },
  {
    campaign: "Conditioners",
    clicks: 1680,
    cost: 3834,
    conversions: 49,
    revenue: 175245
  },
  {
    campaign: "FaceWash 2",
    clicks: 4978,
    cost: 29370,
    conversions: 189,
    revenue: 623106
  }
];

const MainDataTable = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box sx={{ borderBottom: "1px solid #cccccc", px: 2, py: 1, mb: 1 }}>
        <Typography align="left" fontSize={"xl"} fontWeight={500} color={"black"}>
          Ad Insights
        </Typography>
      </Box>
      <Box sx={{
        width:'100%',
        height:'100%',
      }}>
      <ColumnGroupingTable rows={rowsData} columns={columnsData} />
      </Box>
    </Box>
  );
};

export default MainDataTable;
