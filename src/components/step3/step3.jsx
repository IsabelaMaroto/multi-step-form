import { Checkbox, Container, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import "./step3.css";
import { useState } from "react";

const additional = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    priceM: "+$1/mo",
    priceY:"+$10/yr",
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceM: "+$2/mo",
    priceY:"+$20/yr",
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    priceM: "+$2/mo",
    priceY:"+$20/yr",
  },
];
export function Step3(period) {
  const [checked, setChecked] = useState([]);
  const [style, setStyle] = useState("");

  const handleChecked = (e) => {

    // check if the element is already checked
    if (checked.length > 0 && checked.includes(e)) {
      const filteredArray = checked.filter((el) => {
        return el != e;
      });

      // uncheck
      setChecked(filteredArray);
    }
    // include element on checked array
    else {
      setChecked([...checked, e]);
      setStyle("hover");
    }
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
      }}
    >
      <Box>
        <h2 className="title">Pick add-ons</h2>
        <p className="description">
          Add-ons help enhance your gaming experience.
        </p>
      </Box>
      <FormControl
        sx={{
          width: "100%",
          padding: "10px 0",
        }}
      >
        {additional.map((service, index) => (
          <Box
            onClick={() => handleChecked(index)}
            key={index}
            id={index}
            className={
              checked.length > 0 && checked.includes(index) ? style : null
            }
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "8px",
              padding: "10px",
              margin: "5px 0",
              border: "1px solid hsl(229, 24%, 87%)",
              
              ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
                color: "hsl(243, 100%, 62%)",
              },

              "&.hover": {
                border: "2px solid hsl(243, 100%, 62%) !important",
                backgroundColor: "hsl(217, 100%, 97%) !important",
              },
            }}
          >
            <Box sx={{ mr: "3px" }}>
              <Checkbox
                checked={checked.length > 0 && checked.includes(index)}
              />
            </Box>
            <Box sx={{ width: "300px" }}>
              <h3 className="type">{service.type}</h3>
              <p className="descriptionService">{service.description}</p>
            </Box>
            <Box>
              <p className="priceService">{period.period == true ? service.priceY : service.priceM}</p>
            </Box>
          </Box>
        ))}
      </FormControl>
    </Container>
  );
}
