import { Box, Button, Checkbox, Typography,Card,CardMedia } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CreateAdsForm from "./CreateAds/CreateAdsCreateAdsForm";

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  color: theme.palette.text.secondary,
  minHeight: "85vh",
  border: "1px solid #cccccc",
  borderRadius: theme.spacing(1)
}));

const CreateAdsMain = () => {
  const [step, setStep] = useState(0);
  const [adTypes, setAdTypes] = useState({
    "text": true,
    "media": false
  });
  if (step === 1) {
    return <CreateAdsForm adTypes={adTypes} />;
  }
  return (
    <Wrapper sx={{borderRadius:"5px"}}>
      <Typography sx={{color:"black"}}>Create Ads</Typography>
      <Box display={"flex"} justifyContent={"center"} >
      <Card sx={{ minWidth: 300,padding:"33px 40px" ,margin:"10px",height:"450px",cursor:"pointer"}} onClick={() => {
          
          setAdTypes((prev) => ({ ...prev, text: !prev.text }));
        }}  >
      <CardMedia
        sx={{ height: 300  }}
        image="../Assets/Text-Ad.jpeg"
        title="Text Ad"
      /> 
      <Box
       
        sx={{position:"relative", top:"-85%", left:"-13%"}}
      >
        <Checkbox checked={adTypes.text}  inputProps={{ "aria-label": "Text Ad" }} />
      
      </Box>
      <Box sx={{textAlign:"center"}}>
        <Typography sx={{color:"#cccccc"}}>Create</Typography>
        <Typography sx={{fontWeight:"1000", fontSize:"20px"}}>Text ad</Typography>
        </Box>
      </Card>
      <Card sx={{ minWidth: 300,padding:"33px 40px" ,margin:"10px",height:"450px",cursor:"pointer"}} onClick={() => {
          setAdTypes((prev) => ({ ...prev, media: !prev.media }));
        }}>
      <CardMedia
        sx={{ height: 300  }}
        image="../Assets/Media-Ad.jpeg"
        title="Media Ad"
      /> 
      <Box
       
        sx={{position:"relative", top:"-85%", left:"-13%"}}
      >
        <Checkbox checked={adTypes.media} inputProps={{ "aria-label": "Media Ad" }} />
      </Box>
      <Box sx={{textAlign:"center"}}>
        <Typography sx={{color:"#cccccc"}}>Create</Typography>
        <Typography sx={{fontWeight:"1000", fontSize:"20px"}}>Media ad</Typography>
        </Box>
      </Card>
      </Box>
      <Box sx={{display:"flex", justifyContent:"end",alignContent:"end"}}>
      <Button
        variant="contained"
        sx={{ width: "100px", fontWeight: 600 ,float: "right", padding:"7px 5rem" ,marginTop:"55px"}}
        disabled={!adTypes.media && !adTypes.text}
        onClick={() => {
          setStep(1);
        }}
        setS
      >
        Next
      </Button>
      </Box>
    </Wrapper>
  );
};

export default CreateAdsMain;
