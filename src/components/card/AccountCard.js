import React from "react";

import { Flex, Box, Icon, Text, Spacer, Button } from "@chakra-ui/react";
import Card from "components/card/Card.js";

import { RiEyeFill, RiWallet3Fill } from "react-icons/ri";
import CardBg from  "assets/phal/cardbg.svg";

export default function Accountcard(props) {
  const { balance, ...rest } = props;
  return (
    <Card
      backgroundImage={CardBg}
      backgroundColor={'#003485'}
      backgroundRepeat="no-repeat"
      bgSize="cover"
      alignSelf="left"
      // w={'90vw'}
      h={"250px"}
      w={{ base: "100%", md: "100%", xl: "500px" }}
      bgPosition="10%"
      // mx='auto'
      p="20px"
      pt={"30px"}
      {...rest}
    >
      <Flex direction="column" color="white" h="100%" w="100%">
        <Flex direction="column">
          <Box>
            <Text fontSize={{ sm: "xl", lg: "lg", xl: "xl" }} fontWeight="bold">
              Tracy Account
            </Text>
          </Box>
        </Flex>
        <Flex justify="space-between" align="center" mb="37px">
          <Text fontSize="4xl" fontWeight="bold">
            &#8358; 500,000 {balance}
          </Text>
          <Icon as={RiWallet3Fill} w="24px" h="auto" color="white.400" />
        </Flex>
        <Spacer />
        <Flex direction="column">
          <Flex mt="15px">
            <Flex direction="column" me="34px">
              <Text fontSize="xs" fontWeight={'bold'}>GTBANK 0424170849</Text>
              
                {props.actionButton && 
                <Button
                  rightIcon={<RiEyeFill />}
                  colorScheme="blackAlpha"
                  variant="solid"
                  mt="14px"
                >
                  View Details
                </Button>
                }
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
