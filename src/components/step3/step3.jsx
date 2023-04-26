import { Checkbox, Container, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";

export const additional = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    priceM: 1,
    priceY: 10,
    id: 0,
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceM: 2,
    priceY: 20,
    id: 1,
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    priceM: 2,
    priceY: 20,
    id: 2,
  },
];
export function Step3({ information, setInformation }) {
  const [checked, setChecked] = useState([]);
  const [style, setStyle] = useState("");

  const handleChecked = (e, service) => {
    // check if the element is already checked
    if (checked.length > 0 && checked.includes(e)) {
      const filteredArray = checked.filter((el) => {
        return el != e;
      });
      // uncheck
      setChecked(filteredArray);
      setInformation({ ...information, service: filteredArray });
    }
    // include element on checked array
    else {
      setChecked([...checked, e]);
      setStyle("hover");
      setInformation({ ...information, service: [...checked, e] });
    }
  };

  useEffect(() => {
    setChecked(information.service);
    setStyle("hover");
  });
  return (
    <Container>
      <Box>
        <h2>Pick add-ons</h2>
        <h6>Add-ons help enhance your gaming experience.</h6>
      </Box>
      <FormControl
        sx={{
          display: "flex",
          width: "100%",
          padding: {xs:"10px 0", md:"30px 0 0"},
          height: "100%",
          minHeight: {md:"350px"},
          justifyContent: {md:"space-evenly"},
        }}
      >
        {additional.map((service, index) => (
          <Box
            onClick={() => handleChecked(index, service)}
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
              padding: {xs:"10px", md: "15px 10px"},
              margin: "5px 0",
              border: "1px solid hsl(229, 24%, 87%)",

              ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
                color: "hsl(243, 100%, 62%)",
              },

              "&.hover": {
                border: "2px solid hsl(243, 100%, 62%) !important",
                backgroundColor: "hsl(217, 100%, 97%) !important",
              },

              ":hover": {
                border: "2px solid hsl(243, 100%, 62%)",
                cursor: "pointer",
              },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Checkbox
                checked={checked.length > 0 && checked.includes(index)}
              />
              <Box
                sx={{
                  padding:" 0 10px",

                  ".descriptionService": {
                    fontSize: {xs:"12px",md:"15px"},
                  },

                  h3:{
                    fontSize: {xs:"15px", md:"16px"},
                    color: "hsl(213, 96%, 18%)",
                  }
                }}
              >
                <h3 className="type">{service.type}</h3>
                <h6 className="descriptionService">{service.description}</h6>
              </Box>
            </Box>

            <Box
              sx={{
                "& .priceService": {
                  fontSize: "13px",
                  color: "hsl(243, 100%, 62%)",
                  fontWeight: "500",
                },
              }}
            >
              <p className="priceService">
                +$
                {information.yearly == true
                  ? service.priceY + "/yr"
                  : service.priceM + "/mo"}
              </p>
            </Box>
          </Box>
        ))}
      </FormControl>
    </Container>
  );
}
