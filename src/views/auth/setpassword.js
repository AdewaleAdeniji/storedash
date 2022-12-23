import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
import illustration from "assets/phal/phal.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { axios, toast } from 'utils/imports';
import configs from "utils/configs";
import { passwordStrength } from "check-password-strength";
import Utils from "utils";

function SetPassword(props) {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [cont, setContinue] = useState(false);
  const [email] = useState(localStorage.getItem("email") || "");
  const [phonenumber] = useState(localStorage.getItem("phonedetails") || "");
  const [password, setPassword] = useState("");
  const [bar, setBar] = useState(0);
  const [message, setPasswordMessage] = useState("");
  const setValue = (password) => {
    const measure = passwordStrength(password);
    setBar(measure.id);
    setPasswordMessage(measure.value + ".");
    setPassword(password);
    if (measure.id > 0) {
      return setContinue(true);
    }
    setContinue(false);
  };
  const donePassword = async () => {
    const payload = {
      email,
      password,
      phonenumber,
    };
    try {
      setContinue(false);
      toast.loading("Setting your password");
      //toast.dismiss();
      const setpassword = await axios.post(
        configs.api_url + "auth/register",
        payload
      );
      Utils.sendSlackMessage(
        `New registration, \n Email : ${payload.email} \n Phone Number: ${payload.phonenumber}`
      );
      setContinue(true);
      toast.dismiss();
      if (setpassword.status === 205 || setpassword.status === 200) {
        toast.success(
          "A six digit verification code was sent to your email address, Please enter the code and proceed!",
          {
            autoClose: 5000,
            position: "bottom-center",
          }
        );
        setTimeout(() => {
          props.history.push("/auth/verify-email");
        }, 2000);
      } else {
        toast.dismiss();
        toast.warning(setpassword.data.text, {
          autoClose: 10000,
          position: "bottom-center",
        });
      }
    } catch (err) {
      toast.dismiss();
      toast.error("Ooops, Error Occured");
    }
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Flex justifyContent="flex-start" align="center" mb="24px">
            <FaAngleDoubleLeft /> &nbsp;
            <NavLink to="/auth/login">
              <Text
                color={textColorBrand}
                fontSize="sm"
                w="124px"
                fontWeight="500"
              >
                Back to Login
              </Text>
            </NavLink>
          </Flex>
          <Heading color={textColor} fontSize="36px" mb="10px">
            Set Up Your Password
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Setup your Password to Get Started on Phalconwise
          </Text>
        </Box>

        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <Flex align="center" mb="25px">
            <HSeparator />
          </Flex>
          <FormControl>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Min. 8 characters"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
                onChange={(e) => setValue(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <div className="password-info">
              <div className="bars">
                <div className={`bar ${bar > 0 && "good"}`}></div>
                <div className={`bar ${bar >= 1 && "good"}`}></div>
                <div className={`bar ${bar >= 2 && "good"}`}></div>
                <div className={`bar ${bar >= 3 && "good"}`}></div>
              </div>
            </div>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              {message}
            </Text>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Passwords should contain special characters, numbers and should
              have at least 8 characters.
            </Text>

            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              disabled={!cont}
              onClick={donePassword}
            >
              Continue
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Not registered yet?
              <NavLink to="/auth/register">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Create an Account
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SetPassword;
