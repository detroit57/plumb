import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const FService = ({ image, text, des }) => {
  return (
    <Box width={400}>
      <Image src={image} borderTopRadius={20} width={"100%"} />
      <Box bg={"#fff"} color={"rgb(6, 24, 41)"} p={5} borderBottomRadius={20}>
        <Text textAlign={"center"} fontSize={20} fontWeight={700}>
          {text}
        </Text>
        <Text textAlign={"center"}>{des}</Text>
      </Box>
    </Box>
  );
};

export default FService;
