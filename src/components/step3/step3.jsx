import { Checkbox, Container, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import './step3.css'
import { useState } from "react";

const additional = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$2/mo",
  },
];
export function Step3() {
    const [checked, setChecked] = useState([]);

    const handleChecked = (e) => {
        // check if the element is already checked
        if(checked.length > 0 && checked.includes(e)){
            const filteredArray = checked.filter((el) => {return el != e});

            // uncheck
            setChecked(filteredArray);
        }
        // include element on checked array
        else{
            setChecked([...checked, e])
        }
    }

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
            onClick={()=> handleChecked(index)}
            key={index}
            id={index}
            sx={{
              display: "flex",
              justifyContent:"space-between",
              alignItems: "center",
              border: "1px solid hsl(229, 24%, 87%)",
              borderRadius: "8px",
              padding: "10px",
              margin: "5px 0",

              ":hover": {
                border: "2px solid hsl(243, 100%, 62%)",
                backgroundColor: "hsl(217, 100%, 97%)",
              },
            }}
          >
            <Box sx={{mr:'3px'}}>
              <Checkbox checked={checked.length > 0 && checked.includes(index)} />
            </Box>
            <Box sx={{width:"300px"}}>
              <h3 className="type">{service.type}</h3>
              <p className="descriptionService">{service.description}</p>
            </Box>
            <Box>
                <p className="priceService">{service.price}</p>
            </Box>
          </Box>
        ))}
      </FormControl>
    </Container>
  );
}
