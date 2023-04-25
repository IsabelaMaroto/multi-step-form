import "./step1.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Container,Box } from "@mui/material";

export function Step1({ setInformation, information }) {
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
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <Box className="boxInput">
          <InputLabel
            sx={{
              fontSize: "13px",
              color: "hsl(213, 96%, 18%)",
              fontWeight: "500",
              letterSpacing: "-0.5px",
              fontFamily: "Ubuntu",
            }}
          >
            Name
          </InputLabel>
          <TextField
            type="text"
            placeholder="e.g. Stephen King"
            sx={{
              "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
                borderRadius:"6px",
              },
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
                border:"1px solid hsl(243, 100%, 62%)"
              },
              input: {
                padding: "10px",
                fontSize: "15px",
                fontFamily: "Ubuntu",
                fontWeight: "500",
                cursor:"pointer",
                
              },
            }}
            onChange={(e) =>
              setInformation({ ...information, name: e.target.value })
            }
            value={information.name ? information.name : ""}
            variant="outlined"
          ></TextField>
        </Box>
        <Box className="boxInput">
          <InputLabel
            sx={{
              fontSize: "13px",
              color: "hsl(213, 96%, 18%)",
              letterSpacing: "-0.5px",
              fontFamily: "Ubuntu",
              fontWeight: "500",
            }}
          >
            Email Address
          </InputLabel>
          <TextField
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            sx={{
              "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
                borderRadius:"6px",
              },
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
                border:"1px solid hsl(243, 100%, 62%)"
              },
              input: {
                padding: "10px",
                fontSize: "15px",
                fontFamily: "Ubuntu",
                fontWeight: "500",
                cursor: "pointer",
                
              },
            }}
            onChange={(e) =>
              setInformation({ ...information, email: e.target.value })
            }
            value={information.email ? information.email : ""}
            variant="outlined"
          ></TextField>
        </Box>
        <Box className="boxInput">
          <InputLabel
            sx={{
              fontSize: "13px",
              color: "hsl(213, 96%, 18%)",
              letterSpacing: "-0.5px",
              fontFamily: "Ubuntu",
              fontWeight: "500",
            }}
          >
            Phone Number
          </InputLabel>
          <TextField
            type="tel"
            placeholder="e.g. +1 234 567 890"
            sx={{
              "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
                borderRadius:"6px",
              },
              input: {
                padding: "10px",
                fontSize: "15px",
                fontFamily: "Ubuntu",
                fontWeight: "500",
                cursor: "pointer",
              },
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
                border:"1px solid hsl(243, 100%, 62%)"
              },
            }}
            onChange={(e) =>
              setInformation({ ...information, tel: e.target.value })
            }
            value={information.tel ? information.tel : ""}
            variant="outlined"
            helperText="This field is required"
          ></TextField>
        </Box>
      </form>
    </Container>
  );
}
