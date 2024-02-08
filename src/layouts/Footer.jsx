import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <Box p={20} mt={20} bg={"#fff"} color={"rgb(6, 24, 41)"}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Logo />
          <Text fontWeight={500} py={3}>
            &copy; All rights reserved @Plumbing&Air
          </Text>
        </Box>
        <Box fontSize={20}>
          <Text pb={4} fontSize={40}>
            Navigation
          </Text>
          <Text>Home</Text>
          <Text>About Us</Text>
          <Text>Contact</Text>
          <Text>Services</Text>
          <Text>Connect with Us</Text>
        </Box>
        <Box>
          <Text pb={4} fontSize={40}>
            Subscribe to Our <br /> Mailing List
          </Text>
          <Input width={400} placeholder="you@gmail.com" /> <br />
          <Button
            bg={"rgb(6, 24, 41)"}
            color={"#fff"}
            _hover={"none"}
            width={"400px"}
            my={3}
          >
            Subscribe
          </Button>{" "}
          <br />
          <Checkbox>I accept and agree to the Terms and Conditions...</Checkbox>
          <br />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
