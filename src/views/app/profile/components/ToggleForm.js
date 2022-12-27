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
import React, { useState } from "react";
import SwitchField from "components/fields/SwitchField";

export default function ToggleForm(props) {
  const { title, value, label, onChange, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bg = useColorModeValue("white", "navy.700");
  const textColor = useColorModeValue("navy.700", "white");
 //const [checked] = useState(false)
  const onSwitchChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
  };

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
          <SwitchField
            isChecked={value}
            reversed={true}
            onChange={onSwitchChange}
            fontSize="sm"
            mb="20px"
            id="1"
            label={label || ""}
          />
        </Text>
      </Box>
    </Card>
  );
}
