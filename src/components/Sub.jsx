import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Sub = ({ text, number }) => {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        gap={5}
        borderRadius={20}
        className="color"
        color={"rgb(6, 24, 41)"}
        p={10}
      >
        <Text
          fontSize={60}
          fontWeight={800}
          className="ani"
          fontFamily={"Anton"}
        >
          {number}
        </Text>
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

export default Sub;
