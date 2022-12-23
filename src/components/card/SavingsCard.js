// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import React from "react";
// Assets
import { MdSavings } from "react-icons/md";
import { RiEye2Fill } from "react-icons/ri";
import { currency } from "utils";

export default function SavingsCard(props) {
  const { used, total, width } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");

  const box = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center" w={width}>
      <IconBox
        mx="auto"
        h="100px"
        w="100px"
        icon={
          <Icon as={MdSavings} color={brandColor} h="46px" w="46px" />
        }
        bg={box}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="10px">
        School savings
      </Text>
      <Text
        color={textColorSecondary}
        fontSize="md"
        maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
        mx="auto"
      >
        A savings for my kids school
      </Text>
      <Box w="100%" mt="auto">
        <Flex w="100%" justify="space-between" mb="10px" mt="20px">
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
          {currency.get(0)} {used} saved
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="80%">
            Target Amount: {currency.get(0)} {total} 
          </Text>
        </Flex>
        <Progress
          align="start"
          colorScheme="brandScheme"
          value={(used / total) * 100}
          w="100%"
        />
      </Box>
      <Flex justify={"flex-end"}>
      <Button
        rightIcon={<RiEye2Fill />}
        colorScheme="brand"
        variant="solid"
        mt="14px"
        w={'fit-content'}
        float={'right'}
      >
        View
      </Button>
      </Flex>
    </Card>
  );
}
