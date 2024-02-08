import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Testimony = ({ name, company, testimony, image }) => {
  return (
    <Box
      width={500}
      my={5}
      as={motion.div}
      borderRadius={20}
      whileHover={{ boxShadow: "0px 0px 10px #000" }}
    >
      <Flex>
        <Image
          src={image}
          width={200}
          borderLeftRadius={20}
          objectFit={"cover"}
        />
        <Box bg={"#fff"} color={"rgb(6, 24, 41)"} p={5} borderRightRadius={20}>
          <Flex gap={5} alignItems={"center"} pb={4}>
            <Text fontWeight={800}>{name}</Text>
            <Text
              bg={"rgb(6, 24, 41)"}
              color={"#fff"}
              p={1}
              borderRadius={40}
              px={4}
              fontSize={12}
              fontWeight={500}
            >
              {company}
            </Text>
          </Flex>
          <Text fontWeight={"400"}>{testimony}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimony;
