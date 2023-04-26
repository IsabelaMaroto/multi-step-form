import StepperComponent from "./components/stepper/stepper";
import { Box } from "@mui/material";
import imageDesktop from "./assets/images/bg-sidebar-desktop.svg";
import imageMobile from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    <Box
      className="App"
      display={{ sm: "block", md: "flex" }}
      sx={{
        fontFamily: "Ubuntu",
        padding: { md: "20px" },
        height: "100vh",
        justifyContent: { md: "center" },
        backgroundColor: {xs: "hsl(217, 100%, 97%)", md: "hsl(0, 0%, 100%)"},

        h2: {
          color: "hsl(213, 96%, 18%)",
          fontWeight: "700",
          fontSize: { xs: "25px", md: "30px" },
          padding: "10px 0",
        },

        h6:{
          fontSize: { xs: "16px", md: "18px" },
          color: "hsl(231, 11%, 63%)",
          fontWeight: "400",
        },

        label: {
          fontSize: { xs: "13px", md: "16px" },
          color: "hsl(213, 96%, 18%)",
          letterSpacing: "-0.5px",
          fontFamily: "Ubuntu",
          fontWeight: "500",
          paddingBottom: { md: "8px" },
        },

      }}
    >
      <Box
        className="background"
        sx={{
          backgroundImage: {
            md: `url(${imageDesktop})`,
            xs: `url(${imageMobile})`,
          },
          height: { xs: "172px", md: "unset" },
          width: { xs: "100%", md: "400px" },
          minWidth: { md: "400px" },
          backgroundSize: { xs: "cover", md: "contain" },
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "center", lg:"left" },
          paddingLeft: {lg:"150px"},
        }}
      >
        <StepperComponent />
      </Box>
    </Box>
  );
}

export default App;
