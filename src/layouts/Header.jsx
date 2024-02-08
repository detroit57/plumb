import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Facebook, Instagram, Twitch, Whatsapp } from "iconsax-react";
import NavAnimate from "../components/NavAnimate";

const Header = () => {
  return (
    <Flex justifyContent={"space-between"} pt={"40px"} alignItems={"center"}>
      <Logo />
      <Flex gap={20} fontSize={12}>
        <NavAnimate text={"Home"} />
        <NavAnimate text={"About Us"} />
        <NavAnimate text={"Service"} />
        <NavAnimate text={"Contact"} />
        <NavAnimate text={"Connect with Us"} />
      </Flex>
      <Flex gap={5}>
        <Facebook variant="Bold" size={20} />
        <Whatsapp variant="Bold" size={20} />
        <Twitch variant="Bold" size={20} />
        <Instagram variant="Bold" size={20} />
      </Flex>
    </Flex>
  );
};

export default Header;
