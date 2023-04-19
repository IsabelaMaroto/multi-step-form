import FormControl from "@mui/material/FormControl";
import { Box, Container } from "@mui/material";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import imgArcade from "../../assets/images/icon-arcade.svg";
import imgAdvanced from "../../assets/images/icon-advanced.svg";
import imgPro from "../../assets/images/icon-pro.svg";
import './step2.css';

const plans = [
  {
    image: imgArcade,
    type: "Arcade",
    priceM: " $9/mo",
    priceY: "$90/yr"
  },
  {
    image: imgAdvanced,
    type: "Advanced",
    priceM: "$12/mo",
    priceY: "$120/yr"
  },
  {
    image: imgPro,
    type: "Pro",
    priceM: "$15/mo",
    priceY: "$150/yr"
  },
];
export function Step2() {
  return (
    <Container  
    sx={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -60%)",
        backgroundColor: "hsl(0, 0%, 100%)",
        width: "90%",
        borderRadius: "10px",
        padding: "20px",
      }}>
      <h2>Select your plan</h2>
      <p className="description">You have the option of monthly or yearly billing.</p>
      <FormControl sx={{width:'100%', padding:'10px 0'}}>
        {plans.map((plano, index) => (
          <Box key={index} 
          sx={{
            display:"flex", 
            border:"1px solid hsl(229, 24%, 87%)", 
            borderRadius:"8px", 
            padding:"10px 15px", 
            margin:"5px 0", 
            alignItems:'center',

            ':hover':{
              border:"1px solid hsl(213, 96%, 18%)", 
              backgroundColor:"hsl(217, 100%, 97%)",
            }
          }}>
            <Box sx={{mr:'15px'}}>
              <img src={plano.image}/>
            </Box>
            <Box>
              <h3>{plano.type}</h3>
              <p className="price">{plano.priceM}</p>
              <p className="yearP">2 months free</p>
            </Box>
          </Box>
        ))}
      </FormControl>
      <Box sx={{display:"flex", justifyContent:"center", backgroundColor:"hsl(217, 100%, 97%)", borderRadius:'8px'}}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Monthly</Typography>
          <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Yearly</Typography>
        </Stack>
      </Box>
    </Container>
  );
}
