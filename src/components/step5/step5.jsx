import { Box, Container } from "@mui/material";
import imgcompleted from "../../assets/images/icon-thank-you.svg";
export function Step5() {
  return (
    <Container
    sx={{
      position: {xs: "absolute", md: "unset"},
      top: {xs:"97px", md: "unset"},
      left: {xs:"50%", md: "unset"},
      transform: {xs:"translateX(-50%)", md: "unset"},
      backgroundColor: "hsl(0, 0%, 100%)",
      width: {xs:"90%"},
      borderRadius: "10px",
      padding: "50px 20px",
    }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          "& .img": {
            height: "60px",
            marginBottom:"10px",
          },
        }}
      >
        <img className="img" src={imgcompleted} alt="completed icon" />
      </Box>
      <Box
       sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign:"center",

        "& .thanks":{
            padding:"10px 0"
        },

        h6:{
          maxWidth: {md: "550px"},
        },

      }}
      >
        <h2 className="thanks">Thank you!</h2>
        <h6 className="thanksDescription">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </h6>
      </Box>
    </Container>
  );
}
