import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import CreateAdsMain from "../Create/CreateAdsMain";
import AdsSubmitted from "../AdsSubmitted/AdsSubmitted";

const Main = () => {
  return (
    <Box>
      <Navbar />
      <Box mt={10}>
        <Routes>
          <Route path="/create-ads" element={<CreateAdsMain />} />
          <Route path="/ads-submitted" element={<AdsSubmitted />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Main;
