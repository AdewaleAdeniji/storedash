// Chakra imports
import {
  Avatar,
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

export default function Banner(props) {
  const { banner, avatar, name, username } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap="5px"
        w={'fit-content'}
      >
        <Box
          h="200px"
          w="200px"
          bg={`url(${avatar})`}
          bgSize="cover"
          borderColor={borderColor}
        />
        <Box
          h="200px"
          w="200px"
          bg={`url(${avatar})`}
          bgSize="cover"
          borderColor={borderColor}
        />
        <Box
          h="200px"
          w="200px"
          bg={`url(${avatar})`}
          bgSize="cover"
          borderColor={borderColor}
        />
      </SimpleGrid>
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {username}
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Education"
          value="Stanford University"
        />
        <Information
          boxShadow={cardShadow}
          title="Languages"
          value="English, Spanish, Italian"
        />
        <Information
          boxShadow={cardShadow}
          title="Department"
          value="Product Design"
        />
        <Information
          boxShadow={cardShadow}
          title="Work History"
          value="Google, Facebook"
        />
        <Information
          boxShadow={cardShadow}
          title="Organization"
          value="Simmmple Web LLC"
        />
        <Information
          boxShadow={cardShadow}
          title="Birthday"
          value="20 July 1986"
        />
      </SimpleGrid>
    </Card>
  );
}
