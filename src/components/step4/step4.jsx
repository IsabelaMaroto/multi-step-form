import { Container, Box, Divider } from "@mui/material";
import { additional } from "../step3/step3";
import './step4.css';
export function Step4({ information, setInformation }) {
  let priceTotal;
  let priceServices = 0;

  if (information.yearly == true && priceServices === 0) {
    information.service.map((service, index) => {
      priceServices += additional.at(service).priceY;
    });
    priceTotal = parseInt(information.plan.priceY) + parseInt(priceServices)
  } else {
    information.service.map((service, index) => {
      priceServices += additional.at(service).priceM;
    });
    priceTotal = parseInt(information.plan.priceM) + parseInt(priceServices)
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
        <h2 className="title"> Finishing up</h2>
        <p className="description">
          Double-check everything looks OK before confirming.
        </p>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "15px",
          backgroundColor: "hsl(231, 100%, 99%)",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom:"10px"}}>
          <Box>
            <h3 className="plan">
              {information.plan.type}
              <span>({information.yearly == true ? "Yearly" : "Monthly"})</span>
            </h3>
            <p className="change">Change</p>
          </Box>
          <Box sx={{ display:"flex", alignItems:"center"}}>
            <h3 className="priceTotalPlan">
              $
              {information.yearly == true
                ? information.plan.priceY + "/yr"
                : information.plan.priceM + "/mo"}
            </h3>
          </Box>
        </Box>
        <Divider/>
        <Box sx={{padding: "10px 0"}}>
          {information.service.map((service, index) => (
            <Box
              key={index}
              sx={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}
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
      <Box sx={{ display: "flex", justifyContent: "space-between", padding:"0 15px", alignItems: "center" }}>
        <h5 className="totalLabel">
          {information.yearly == true
            ? "Total (per year)"
            : "Total (per month)"}
        </h5>
        <h3 className="precoTotal">${information.yearly == true ? (priceTotal+ "/yr"): (priceTotal + "/mo")}</h3>
      </Box>
    </Container>
  );
}
