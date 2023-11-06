import React, { useState } from "react";
import { Box, ButtonBase, MenuItem, Select, Typography } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ToggleChart from "./ToggleChart/ToggleChart";
import { formatNumber } from "../../Utils/utils";
import ColumnGroupingTable from "./Table/Table";

const SwichViewBtn = ({ children, onClick, isActive }) => {
  return (
    <ButtonBase
      ty
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        borderRadius: "28px",
        height: "28px",
        width: "28px",
        bgcolor: isActive ? "#22d3ee" : "#eeeeee",
        color: isActive ? "#ffffff" : "GrayText",
        p: "2px"
      }}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};
const GraphDataTable = () => {
  const columnsData = [
    { id: "group", label: "Group" },
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
  const data = [
    {
      group: "Male",
      clicks: 348,
      cost: 12528,
      conversions: 42,
      revenue: 62118
    },
    {
      group: "Female",
      clicks: 692,
      cost: 24912,
      conversions: 35,
      revenue: 5175
    },
    {
      group: "Unknown",
      clicks: 105,
      cost: 3943,
      conversions: 3,
      revenue: 4498
    }
  ];
  const [isChartView, setIsChart] = useState(true);

  const options = columnsData.reduce((acc, curr, currIdx) => {
    if (currIdx === 0) {
      return acc;
    }
    return [...acc, { label: curr.label, value: curr.id }];
  }, []);
  const [attr, setAttr] = useState(options[0].value);
  const total = data.reduce((acc, row) => {
    return acc + row[attr];
  }, 0);
  const gData = data.map((item, idx) => {
    const val = ((item[attr] * 100) / total).toFixed(2);
    return {
      id: idx,
      value: val,
      label: `${val}% ${item.group}`
    };
  });

  const handleChange = (e) => {
    setAttr(e.target.value);
  };

  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{ borderBottom: "1px solid #cccccc", px: 2, py: 1, mb: 1 }}
      >
        <Typography width={"80%"} align="left" fontSize={"xl"} fontWeight={500} color={"black"}>
          Ad Insights
        </Typography>
        {isChartView ? (
          <Box width={"20%"}>
            <Select
              size="small"
              value={attr}
              fullWidth
              sx={{ height: "24px", textAlign: "left" }}
              onChange={handleChange}
            >
              {options.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ) : null}
      </Box>
      <Box sx={{
        width:'100%',
        height:'100%',
      }}>
        {isChartView ? (
          <ToggleChart chartData={gData} />
        ) : (
          <ColumnGroupingTable rows={data} columns={columnsData} />
        )}
      </Box>
      <Box sx={{ borderTop: "1px solid #cccccc", px: 2, py: 1, mt: 1 }}>
        <Box display={"flex"} justifyContent={"end"}>
          <Box
            display={"flex"}
            gap={1}
            sx={{
              bgcolor: "#eeeeee",
              width: "auto",
              p: "4px",
              borderRadius: "28px"
            }}
          >
            <SwichViewBtn
              isActive={isChartView}
              onClick={() => {
                setIsChart(true);
              }}
            >
              <DonutLargeIcon />
            </SwichViewBtn>

            <SwichViewBtn
              isActive={!isChartView}
              onClick={() => {
                setIsChart(false);
              }}
            >
              <BackupTableIcon />
            </SwichViewBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GraphDataTable;
