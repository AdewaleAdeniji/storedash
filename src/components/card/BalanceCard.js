import React from "react";

// Chakra imports
import { Flex, Box, Icon, Text, Spacer } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";

// Assets
import { RiWallet3Fill } from "react-icons/ri";
import CardBg from  "assets/phal/cardbg.svg";

export default function Balancecard(props) {
  const { balance, exp, cvv, number, ...rest } = props;

  return (
    <Card
      backgroundImage={CardBg}
      backgroundRepeat='no-repeat'
      backgroundColor='#003485'
      bgSize='cover'
      alignSelf='left'
      // w={'90vw'}
      h={'250px'}
      w={{ base: "100%", md: "100%", xl: "500px" }}
      bgPosition='10%'
      // mx='auto'
      p='20px'
      pt={'30px'}
      {...rest}>
      <Flex direction='column' color='white' h='100%' w='100%'>
        <Flex justify='space-between' align='center' mb='37px'>
          <Text fontSize='4xl' fontWeight='bold'>
          &#8358; 500,000 {balance}
          </Text>
          <Icon as={RiWallet3Fill} w='24px' h='auto' color='white.400' />
        </Flex>
        <Spacer />
        <Flex direction='column'>
          <Box>
            <Text fontSize={{ sm: "xl", lg: "lg", xl: "xl" }} fontWeight='bold'>
              Wallet Balance
            </Text>
          </Box>
          <Flex mt='14px'>
            <Flex direction='column' me='34px'>
              <Text fontSize='xs'>0424170849</Text>
              <Text fontSize='sm' fontWeight='500'>
                Jide Owoniran
              </Text>
            </Flex>
            <Flex direction='column'>
              <Text fontSize='xs'>GTBANK</Text>
              <Text fontSize='sm' fontWeight='500'>
                
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
