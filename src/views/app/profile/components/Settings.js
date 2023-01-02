// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Settings(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const onSwitchChange = (e) => {
    // console.log(e.target.id);
    // console.log(e.target.value);
  }
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb='20px' {...rest}>
      <Flex align='center' w='100%' justify='space-between' mb='30px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mb='4px'>
          Account Settings
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        onChange={onSwitchChange}
        fontSize='sm'
        mb='20px'
        id='1'
        label='Send login alerts to my email'
      />
    </Card>
  );
}
