import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Container, Box } from "@mui/material";

export function Step1({ setInformation, information }) {
  return (
    <Container>
      <Box 
      sx={{
        marginBottom: {xs: "10px",md: "30px"}
      }}
      >
        <h2>Personal info</h2>
        <h6>Please provide your name, email address, and phone number.</h6>
      </Box>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "8px 0px", md: "16px 0px" },
          }}
        >
          <InputLabel
          >
            Name
          </InputLabel>
          <TextField
            type="text"
            placeholder="e.g. Stephen King"
            sx={{
              "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                borderRadius: "6px",
              },
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid hsl(243, 100%, 62%)",
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
              setInformation({ ...information, name: e.target.value })
            }
            value={information.name ? information.name : ""}
            variant="outlined"
          ></TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "8px 0", md: "16px 0" },
          }}
        >
          <InputLabel
          >
            Email Address
          </InputLabel>
          <TextField
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            sx={{
              "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                borderRadius: "6px",
              },
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid hsl(243, 100%, 62%)",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "8px 0", md: "16px 0" },
          }}
        >
          <InputLabel
          >
            Phone Number
          </InputLabel>
          <TextField
            type="tel"
            placeholder="e.g. +1 234 567 890"
            sx={{
              "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                borderRadius: "6px",
              },
              input: {
                padding: "10px",
                fontSize: "15px",
                fontFamily: "Ubuntu",
                fontWeight: "500",
                cursor: "pointer",
              },
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid hsl(243, 100%, 62%)",
                },
            }}
            onChange={(e) =>
              setInformation({ ...information, tel: e.target.value })
            }
            value={information.tel ? information.tel : ""}
            variant="outlined"
          ></TextField>
        </Box>
      </form>
    </Container>
  );
}
