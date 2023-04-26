import { Container, Box, Divider } from "@mui/material";
import { additional } from "../step3/step3";
export function Step4({ information, setInformation }) {
  let priceTotal;
  let priceServices = 0;

  if (information.yearly == true && priceServices === 0) {
    information.service.map((service, index) => {
      priceServices += additional.at(service).priceY;
    });
    priceTotal = parseInt(information.plan.priceY) + parseInt(priceServices);
  } else {
    information.service.map((service, index) => {
      priceServices += additional.at(service).priceM;
    });
    priceTotal = parseInt(information.plan.priceM) + parseInt(priceServices);
  }

  return (
    <Container>
      <Box>
        <h2> Finishing up</h2>
        <h6>Double-check everything looks OK before confirming.</h6>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: {xs:"15px", md:"25px"},
          backgroundColor: "hsl(231, 100%, 99%)",
          borderRadius: "10px",
          margin: {xs:"20px 0", md:"40px 0 20px"},
          color: "hsl(213, 96%, 18%)",


          ".plan": {
            fontSize: "16px",
            fontWeight: "500",

            span: {
              padding: "0 5px",
            },
          },
          ".change": {
            fontSize: "14px",
            textDecoration: "underline 2px",
          },
          ".priceTotalPlan": {
            fontSize: "16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: {xs:"10px", md:"20px"},
          }}
        >
          <Box>
            <h3 className="plan">
              {information.plan.type}
              <span>({information.yearly == true ? "Yearly" : "Monthly"})</span>
            </h3>
            <h6 className="change">Change</h6>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <h3 className="priceTotalPlan">
              $
              {information.yearly == true
                ? information.plan.priceY + "/yr"
                : information.plan.priceM + "/mo"}
            </h3>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            padding: {xs:"10px 0", md:"20px 0 0"},

            ".serviceType , .totalLabel": {
              color: "hsl(231, 11%, 63%)",
              fontWeight: "400",
              fontSize: "15px",
              padding: "5px 0",
            },
            ".servicePrice": {
              fontSize: "15px",
              color: "hsl(213, 96%, 18%)",
              fontWeight: "500",
            },
          }}
        >
          {information.service.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 className="serviceType">{additional.at(service).type}</h5>
              <h4 className="servicePrice">
                +$
                {information.yearly == true
                  ? additional.at(service).priceY + "/yr"
                  : additional.at(service).priceM + "/mo"}
              </h4>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: {xs:"0 15px 10px", md:"0 30px"},
          alignItems: "center",

          ".totalLabel":{
            color: "hsl(231, 11%, 63%)",
            fontWeight: "500",
            fontSize: {md:"14px"},
          },
          ".precoTotal": {
            color: "hsl(243, 100%, 62%)",
          },
        }}
      >
        <h5 className="totalLabel">
          {information.yearly == true
            ? "Total (per year)"
            : "Total (per month)"}
        </h5>
        <h3 className="precoTotal">
          $
          {information.yearly == true ? priceTotal + "/yr" : priceTotal + "/mo"}
        </h3>
      </Box>
    </Container>
  );
}
