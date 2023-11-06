import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../Create/CreateAdsMain";
import { Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const AdsSubmitted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/create-ads");
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Wrapper justifyContent={"center"} alignItems={"center"} backgroundColor="#f3f3f3">
      <Box
        sx={{
          backgroundColor: "white",
          p: 3,
          px: 10,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          gap: 1
        }}
        boxShadow={2}
      >
        <Box color={"#84cc16"}>
          <CheckCircle />
        </Box>
        <Typography>Submitted</Typography>
      </Box>
    </Wrapper>
  );
};

export default AdsSubmitted;
