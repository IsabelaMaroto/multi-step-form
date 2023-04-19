import "./step1.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export function Step1() {
  return (
    <div className="container">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <div className="boxInput">
          <InputLabel
            sx={{
              fontSize: "13px",
              color: "hsl(213, 96%, 18%)",
              fontWeight: "500",
              letterSpacing: "-0.5px",
              fontFamily: 'Ubuntu',
            }}
          >
            Name
          </InputLabel>
          <TextField
            id="outlined-basic"
            type="text"
            placeholder="e.g. Stephen King"
            sx={{ input: { padding: "10px", fontSize: "15px", fontFamily: 'Ubuntu', fontWeight: "500",} }}
          ></TextField>
        </div>
        <div className="boxInput">
          <InputLabel
            sx={{
              fontSize: "13px",
              color: "hsl(213, 96%, 18%)",
              letterSpacing: "-0.5px",
              fontFamily: 'Ubuntu',
              fontWeight: "500",
            }}
          >
            Email Address
          </InputLabel>
          <TextField
            id="outlined-basic"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            sx={{ input: { padding: "10px", fontSize: "15px", fontFamily: 'Ubuntu', fontWeight: "500", } }}
          ></TextField>
        </div>
        <div className="boxInput">
          <InputLabel
            sx={{
              fontSize: "13px",
              color: "hsl(213, 96%, 18%)",
              letterSpacing: "-0.5px",
              fontFamily: 'Ubuntu',
              fontWeight: "500",
            }}
          >
            Phone Number
          </InputLabel>
          <TextField
            id="outlined-basic"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            sx={{ input: { padding: "10px", fontSize: "15px", fontFamily: 'Ubuntu', fontWeight: "500",} }}
            required
          ></TextField>
        </div>
      </form>
    </div>
  );
}
