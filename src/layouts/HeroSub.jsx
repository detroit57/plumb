import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Sub from "../components/Sub";

const HeroSub = () => {
  return (
    <Box pos={"absolute"} top={610}>
      <Grid gridTemplateColumns={"1fr 1fr 1fr"} gridGap={10} px={40}>
        <Sub number={100} text={"Air Conditioning Repairs and Install"} />
        <Sub number={150} text={"Plumbing Works and Fixes"} />
        <Sub number={250} text={"Customers are Satisfied with Our Services"} />
      </Grid>
    </Box>
  );
};

export default HeroSub;
