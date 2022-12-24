// Chakra imports
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { OrderBadge } from "components/badge";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import { currencies } from "utils";
import { formatMoney } from "utils";
import { formatDate, splitCamelCaseToString } from "utils";

export default function Information(props) {
  const { title, value, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");
  let newValue = '';
  if(title.indexOf('createdAt')>1||title.indexOf('updatedAt')>1){
    newValue = formatDate(value); 
  }
  if(title.indexOf('price')> -1){
    newValue = currencies[0] + formatMoney(value)
  }
  if(title.indexOf('status')> -1||title.indexOf('paymentStatus')> -1){
    newValue = <OrderBadge status={value}/>
  }
  return (
    <Card bg={bg} {...rest}>
      <Box>
        <Text fontWeight='500' color={textColorSecondary} fontSize='sm'>
          {(splitCamelCaseToString(title)).toUpperCase()}
        </Text>
        <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
          {newValue || value}
        </Text>
      </Box>
    </Card>
  );
}
