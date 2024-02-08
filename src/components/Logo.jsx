import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Box
      bg={"#fff"}
      boxShadow={"0px 0px 10px #ddd"}
      borderRadius={40}
      width={"fit-content"}
    >
      <Text
        fontFamily={"Gloock"}
        px={4}
        py={2}
        borderRadius={40}
        bg={"#fff"}
        color={"rgb(6, 24, 41)"}
        cursor={"pointer"}
      >
        Plumbing & Air
      </Text>
    </Box>
  );
};

export default Logo;
