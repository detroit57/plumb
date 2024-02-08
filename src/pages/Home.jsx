import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import TopMan from "../layouts/TopMan";
import Hero from "../layouts/Hero";
import FeaturedServices from "../layouts/FeaturedServices";
import HeroSub from "../layouts/HeroSub";
import Testimonies from "../layouts/Testimonies";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <Box>
      {/* <TopMan /> */}
      <Box
        borderRadius={40}
        bgImage={"url('/plum.jpg')"}
        mx={5}
        my={5}
        width={"97%"}
        bgSize={"cover"}
      >
        <Box className="bg" px={10} pb={5} borderRadius={40}>
          <Header />
          <Hero />
        </Box>
      </Box>
      <HeroSub />
      <Box px={5} pt={"150px"}>
        <FeaturedServices />
        <Testimonies />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
