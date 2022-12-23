// Chakra imports
import {
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card {...rest} mb='20px' align='center' p='20px'>
      <Flex h='100%' direction={{ base: "column", "2xl": "row" }}>
        <Flex direction='column' pe='44px'>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            textAlign='start'
            fontSize='2xl'
            mt={{ base: "20px", "2xl": "50px" }}>
            Complete your profile
          </Text>
          <Text
            color={textColorSecondary}
            fontSize='md'
            my={{ base: "auto", "2xl": "10px" }}
            mx='auto'
            textAlign='start'>
            You have not completed your registration steps in order to fully enjoy Phalconwise.
          </Text>
          <Flex justifyContent={'space-between'} mt='10px'>
          <Text
            color={textColorSecondary}
            fontSize='sm'
            mt='10px'
            textAlign='start'>
            Profile Details
          </Text>
          <Text
            color={'brand.500'}
            fontSize='sm'
            mt='10px'
            textAlign='start'>
            Completed.
          </Text>

          </Flex>
          <Flex justifyContent={'space-between'} mt='10px'>
          <Text
            color={textColorSecondary}
            fontSize='sm'
            mt='10px'
            textAlign='start'>
            BVN number
          </Text>
          <Text
            color={'brand.500'}
            fontSize='sm'
            mt='10px'
            textAlign='start'>
            Completed.
          </Text>

          </Flex>
          <Flex justifyContent={'space-between'} mt='10px'>
          <Text
            color={textColorSecondary}
            fontSize='sm'
            mt='10px'
            textAlign='start'>
            Picture and Date of Birth
          </Text>
          <Text
            color={'red.500'}
            fontSize='sm'
            mt='10px'
            textAlign='start'>
            Incomplete
          </Text>

          </Flex>
          
          
          <Flex w='100%'>
            <Button
              me='100%'
              mb='50px'
              minW='200px'
              mt={{ base: "20px", "2xl": "auto" }}
              variant='brand'
              fontWeight='500'>
               Finish Registration
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
