import "../src/style-app/app.css";
import StepperComponent from "./components/stepper/stepper";
import { Box } from "@mui/material";
import imageDesktop from "./assets/images/bg-sidebar-desktop.svg";
import imageMobile from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    <Box 
    display={{ sm: "block", md: "flex" }} 
    sx={{
      padding:{md:"20px"},
      height: {md:"100vh"},
      justifyContent: {md:"center"}
    }}>
      <Box
        className="background"
        sx={{
          backgroundImage: {
            md: `url(${imageDesktop})`,
            sm: `url(${imageMobile})`,
          },
          height: { sm: "172px", md: "unset" },
          width: { sm: "100%", md: "400px" },
          minWidth:{md:"400px"},
          backgroundSize: { sm: "cover", md: "contain" },
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        className="App"
        sx={{
          position: "relative",
          backgroundColor: {sm: "hsl(217, 100%, 97%)", md: "hsl(0, 0%, 100%)"},
          minHeight: "667px",
          height: "100%",
          width: "100%",
          fontFamily: "Ubuntu",
        }}
      >
        <Box>
          <StepperComponent />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
