import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Testimony from "../components/Testimony";

const Testimonies = () => {
  return (
    <Box>
      {/* <Grid gridTemplateColumns={"2fr 2fr"} justifyContent={"center"}>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </Grid> */}
      <Heading fontFamily={"Anton"} fontSize={80} my={10} textAlign={"center"}>
        Testimonials
      </Heading>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={10}>
        <Testimony
          image={
            "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?w=740&t=st=1707312539~exp=1707313139~hmac=3c4f6c072136d471578e3b89de222cdfd047cca33109531701c8aff620280b1a"
          }
          name={"Esther Anderson"}
          company={"Microsoft"}
          testimony={
            "Fantastic job done by Rick’s Plumbing, the whole team worked hard on a huge project in my furnace room. They took it from an ugly mess of piping to a beautifully organized areaƒ"
          }
        />
        <Testimony
          image={
            "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?w=740&t=st=1707313441~exp=1707314041~hmac=f4fdede70854ae687e6b6ac43bf6c3c91664f4bc8d35d4ff2ac5cc20adfbe1cd"
          }
          name={"Fredrick Mark"}
          company={"Facebook"}
          testimony={
            "Fantastic job done by Rick’s Plumbing, the whole team worked hard on a huge project in my furnace room. They took it from an ugly mess of piping to a beautifully organized areaƒ"
          }
        />
        <Testimony
          image={
            "https://img.freepik.com/free-photo/senior-man-face-portrait-wearing-bowler-hat_53876-148154.jpg?w=740&t=st=1707313461~exp=1707314061~hmac=5f28c824d112246d9b47ce23ba8bf4fd8390ed1874b79fb43013da164656795f"
          }
          name={"Alexander Gray"}
          company={"Hot Grills"}
          testimony={
            "Fantastic job done by Rick’s Plumbing, the whole team worked hard on a huge project in my furnace room. They took it from an ugly mess of piping to a beautifully organized areaƒ"
          }
        />
        <Testimony
          image={
            "https://img.freepik.com/free-photo/african-man-successful-entrepreneur-wearing-glasses-face-portrait_53876-143244.jpg?w=740&t=st=1707313492~exp=1707314092~hmac=b2aa5da138b8ef0b8a21a9afcb5c1093ac3099c78dff4dbe2325dfce9ac4f276"
          }
          name={"Peneloper Smith"}
          company={"Tesla"}
          testimony={
            "Fantastic job done by Rick’s Plumbing, the whole team worked hard on a huge project in my furnace room. They took it from an ugly mess of piping to a beautifully organized areaƒ"
          }
        />
      </Flex>
    </Box>
  );
};

export default Testimonies;
