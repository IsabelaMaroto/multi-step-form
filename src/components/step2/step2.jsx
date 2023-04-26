import FormControl from "@mui/material/FormControl";
import { Box, Checkbox, Container } from "@mui/material";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import imgArcade from "../../assets/images/icon-arcade.svg";
import imgAdvanced from "../../assets/images/icon-advanced.svg";
import imgPro from "../../assets/images/icon-pro.svg";
import { useEffect, useState } from "react";

export const plans = [
  {
    image: imgArcade,
    type: "Arcade",
    priceM: 9,
    priceY: 90,
  },
  {
    image: imgAdvanced,
    type: "Advanced",
    priceM: 12,
    priceY: 120,
  },
  {
    image: imgPro,
    type: "Pro",
    priceM: 15,
    priceY: 150,
  },
];
export function Step2({ setInformation, information }) {
  const [checked, setChecked] = useState(null);
  const [style, setStyle] = useState("");
  const [yearly, setYearly] = useState(false);

  const handleChecked = (e, plan) => {
    if (information.plan !== e) {
      setChecked(e);
      setInformation({ ...information, plan: plan, indexPlan: e });
    }
  };

  useEffect(() => {
    setStyle("selected");
    setYearly(information.yearly);
  });

  const handleChange = (e) => {
    setYearly(e.target.checked);
    setInformation({ ...information, yearly: e.target.checked });
  };

  return (
    <Container>
      <Box>
        <h2>Select your plan</h2>
        <h6>You have the option of monthly or yearly billing.</h6>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: { xs: "350px", md: "auto" },
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            padding: { xs: "10px 0", md: "40px 0" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            height: "100%",
            alignItems: "center",
          }}
        >
          {plans.map((plan, index) => (
            <Box
              onClick={() => handleChecked(index, plan)}
              id={index}
              key={index}
              className={index == information.indexPlan ? style : null}
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: { xs: "left", md: "space-between" },
                border: "1px solid hsl(229, 24%, 87%)",
                borderRadius: "8px",
                padding: { xs: "10px 15px", md: "10px 5px" },
                margin: { xs: "5px 0", md: "5px 10px" },
                height: { xs: "80px", md: "100%" },
                width: { xs: "100%", md: "100%" },
                maxWidth: { md: "180px" },
                minHeight: { md: "220px" },

                "&.selected": {
                  border: "2px solid hsl(243, 100%, 62%)",
                  backgroundColor: "hsl(217, 100%, 97%)",
                },

                ":hover": {
                  border: "2px solid hsl(243, 100%, 62%)",
                  cursor: "pointer",
                },
              }}
            >
              <Box sx={{ mr: "15px" }}>
                <Checkbox
                  icon={<img src={plan.image} />}
                  checkedIcon={<img src={plan.image} />}
                  checked={index == information.plan}
                />
              </Box>
              <Box
                sx={{
                  padding: { md: "0 0 0 10px" },
                  h3: {
                    fontSize: "16px",
                    fontWeight: "900",
                    color: "hsl(213, 96%, 18%)",
                  },
                  h6: {
                    fontSize: "16px",
                  },
                  "& .yearP": {
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "hsl(213, 96%, 18%)",
                  },
                }}
              >
                <h3>{plan.type}</h3>
                <h6>
                  ${yearly === true ? plan.priceY + "/yr" : plan.priceM + "/mo"}
                </h6>
                <p
                  className="yearP"
                  style={
                    yearly === true ? { display: "flex" } : { display: "none" }
                  }
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
            marginBottom:"15px",
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
              inputProps={{ false: "true" }}
              onChange={handleChange}
              sx={{
                width: "35px",
                height: "20px",
                padding: "0",
                display: "flex",
                "&:active": {
                  "& .MuiSwitch-thumb": {
                    width: "15px",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    transform: "translateX(10px)",
                  },
                },
                "& .MuiSwitch-switchBase": {
                  padding: "4px",
                  "&.Mui-checked": {
                    transform: "translateX(13px)",
                    color: "#fff",
                    "& + .MuiSwitch-track": {
                      opacity: "1",
                      backgroundColor: "hsl(213, 96%, 18%)",
                    },
                  },
                },
                "& .MuiSwitch-thumb": {
                  boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50px",
                },
                "& .MuiSwitch-track": {
                  borderRadius: "50px",
                  opacity: "1",
                  backgroundColor: "hsl(213, 96%, 18%)",
                  boxSizing: "border-box",
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
