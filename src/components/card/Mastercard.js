import React from "react";

// Chakra imports
import { Flex, Box, Icon, Text, Spacer } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import { RiWallet3Fill } from "react-icons/ri";
import CardBg from  "assets/phal/cardbg.svg";

export default function Mastercard(props) {
  const { balance, exp, cvv, number, ...rest } = props;

  return (
    <Card
      backgroundImage={CardBg}
      backgroundRepeat='no-repeat'
      bgSize='cover'
      alignSelf='left'
      // w={'90vw'}
      h={'250px'}
      w={{ base: "100%", md: "60%", xl: "500px" }}
      bgPosition='10%'
      // mx='auto'
      p='20px'
      {...rest}>
      <Flex direction='column' color='white' h='100%' w='100%'>
        <Flex justify='space-between' align='center' mb='37px'>
          <Text fontSize='2xl' fontWeight='bold'>
          &#8358; 500,000 {balance}
          </Text>
          <Icon as={RiWallet3Fill} w='48px' h='auto' color='white.400' />
        </Flex>
        <Spacer />
        <Flex direction='column'>
          <Box>
            <Text fontSize={{ sm: "xl", lg: "lg", xl: "xl" }} fontWeight='bold'>
              {number}
            </Text>
          </Box>
          <Flex mt='14px'>
            <Flex direction='column' me='34px'>
              <Text fontSize='xs'>VALID THRU</Text>
              <Text fontSize='sm' fontWeight='500'>
                {exp}
              </Text>
            </Flex>
            <Flex direction='column'>
              <Text fontSize='xs'>CVV</Text>
              <Text fontSize='sm' fontWeight='500'>
                {cvv}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
