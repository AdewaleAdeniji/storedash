// Chakra imports
import {
  Box,
  Text,
  useColorModeValue,
  FormLabel,
  Input,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";

export default function EditForm(props) {
  const { title, value, onChange, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bg = useColorModeValue("white", "navy.700");
  const textColor = useColorModeValue("navy.700", "white");
    console.log(title, value);
  return (
    <Card bg={bg} {...rest}>
      <Box>
        <Text color={textColorPrimary} fontWeight="500" fontSize="md">
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            {title}
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            defaultValue={value}
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder={title}
            mb="24px"
            fontWeight="500"
            size="lg"
          />
          
        </Text>
      </Box>
    </Card>
  );
}
