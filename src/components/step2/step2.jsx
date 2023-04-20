import FormControl from "@mui/material/FormControl";
import { Box, Container } from "@mui/material";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import imgArcade from "../../assets/images/icon-arcade.svg";
import imgAdvanced from "../../assets/images/icon-advanced.svg";
import imgPro from "../../assets/images/icon-pro.svg";
import "./step2.css";
import { useState } from "react";

const plans = [
  {
    image: imgArcade,
    type: "Arcade",
    priceM: " $9/mo",
    priceY: "$90/yr",
  },
  {
    image: imgAdvanced,
    type: "Advanced",
    priceM: "$12/mo",
    priceY: "$120/yr",
  },
  {
    image: imgPro,
    type: "Pro",
    priceM: "$15/mo",
    priceY: "$150/yr",
  },
];
export function Step2() {
  const [yearly, setYearly] = useState(false);

  const handleChange = (e) => {
    setYearly(e.target.checked);
  };

  return (
    <Container
      sx={{
        position: "absolute",
        top: "97px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "hsl(0, 0%, 100%)",
        width: "90%",
        borderRadius: "10px",
        padding: "20px",
        bottom: "90px",
        overflow: "hidden",
      }}
    >
      <Box>
        <h2 className="title">Select your plan</h2>
        <p className="description">
          You have the option of monthly or yearly billing.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "350px",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {plans.map((plano, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                border: "1px solid hsl(229, 24%, 87%)",
                borderRadius: "8px",
                padding: "10px 15px",
                margin: "5px 0",
                height: "80px",

                ":hover": {
                  border: "2px solid hsl(243, 100%, 62%)",
                  backgroundColor: "hsl(217, 100%, 97%)",
                },
              }}
            >
              <Box sx={{ mr: "15px" }}>
                <img src={plano.image} />
              </Box>
              <Box>
                <h3>{plano.type}</h3>
                <p className="price">{yearly === true ? plano.priceY : plano.priceM}</p>
                <p
                  className="yearP"
                  style={yearly === true ? { display: "flex" } : { display: "none" }}
                >
                  2 months free
                </p>
              </Box>
            </Box>
          ))}
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "hsl(217, 100%, 97%)",
            borderRadius: "8px",
            padding: "12px",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={
                yearly === true
                  ? {
                      color: "hsl(231, 11%, 63%)",
                      fontWeight: "700",
                      fontSize: "14px",
                    }
                  : {
                      color: "hsl(213, 96%, 18%)",
                      fontWeight: "700",
                      fontSize: "14px",
                    }
              }
            >
              Monthly
            </Typography>
            <Switch
              checked={yearly}
              inputProps={{ "aria-label": "controlled" }}
              onChange={handleChange}
              sx={{
                width: "35px",
                height: '20px',
                padding: '0',
                display: "flex",
                '&:active': {
                  '& .MuiSwitch-thumb': {
                    width: '15px',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    transform: 'translateX(10px)',
                  },
                },
                "& .MuiSwitch-switchBase": {
                  padding: '4px',
                  "&.Mui-checked": {
                    transform: "translateX(13px)",
                    color: "#fff",
                    "& + .MuiSwitch-track": {
                      opacity: '1',
                      backgroundColor: "hsl(213, 96%, 18%)",
                    },
                  },
                },
                '& .MuiSwitch-thumb': {
                  boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
                  width: '13px',
                  height: '13px',
                  borderRadius: '50px',
                  
                },
                '& .MuiSwitch-track': {
                  borderRadius: '50px',
                  opacity: '1',
                  backgroundColor:"hsl(213, 96%, 18%)",
                  boxSizing: 'border-box',
                },
              }}
            />
            <Typography
              sx={
                yearly === true
                  ? {
                      color: "hsl(213, 96%, 18%)",
                      fontWeight: "700",
                      fontSize: "14px",
                    }
                  : {
                      color: "hsl(231, 11%, 63%)",
                      fontWeight: "700",
                      fontSize: "14px",
                    }
              }
            >
              Yearly
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
