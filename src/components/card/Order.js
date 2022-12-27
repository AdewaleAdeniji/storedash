// Chakra imports
import {
    AvatarGroup,
    Avatar,
    Box,
    Button,
    Flex,
    Image,
    Link,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
import { OrderBadge } from "components/badge";
  // Custom components
  import Card from "components/card/Card.js";
  // Assets
  import React from "react";
  import { Link as RLink } from 'react-router-dom';

  export default function Order(props) {
    const { name, description, images, status, paymentStatus, orderItemID } = props;
    const textColor = useColorModeValue("navy.700", "white");
    const textColorBid = useColorModeValue("brand.500", "white");
    return (
      <Card p='20px'>
        <Flex direction={{ base: "column" }} justify='center'>
          <Box mb={{ base: "20px", "2xl": "20px" }} position='relative'>
            <Image
              src={images[0].url}
              w={{ base: "200px", "3xl": "200px" }}
              h={{ base: "300px", "3xl": "200px" }}
              borderRadius='20px'
            />
            {/* <Button
              position='absolute'
              bg='white'
              _hover={{ bg: "whiteAlpha.900" }}
              _active={{ bg: "white" }}
              _focus={{ bg: "white" }}
              p='0px !important'
              top='14px'
              right='14px'
              borderRadius='50%'
              minW='36px'
              h='36px'
              onClick={() => {
                setLike(!like);
              }}>
              <Icon
                transition='0.2s linear'
                w='20px'
                h='20px'
                as={like ? IoHeart : IoHeartOutline}
                color='brand.500'
              />
            </Button> */}
          </Box>
          <Flex flexDirection='column' justify='space-between' h='100%'>
            <Flex
              justify='space-between'
              direction={{
                base: "row",
                md: "column",
                lg: "row",
                xl: "column",
                "2xl": "row",
              }}
              mb='auto'>
              <Flex direction='column'>
                <Text
                  color={textColor}
                  fontSize={{
                    base: "xl",
                    md: "lg",
                    lg: "lg",
                    xl: "lg",
                    "2xl": "md",
                    "3xl": "lg",
                  }}
                  mb='5px'
                  fontWeight='bold'
                  me='14px'>
                  {name}
                </Text>
                <Text
                  color='secondaryGray.600'
                  fontSize={{
                    base: "sm",
                  }}
                  fontWeight='400'
                  me='14px'>
                  {description}
                </Text>
              </Flex>
              <AvatarGroup
                max={3}
                color={textColorBid}
                size='sm'
                mt={{
                  base: "0px",
                  md: "10px",
                  lg: "0px",
                  xl: "10px",
                  "2xl": "0px",
                }}
                fontSize='12px'>
                {images.map((avt, key) => (
                  <Avatar key={key} src={avt.url} />
                ))}
              </AvatarGroup>
            </Flex>
            <Flex
              align='start'
              justify='space-between'
              direction={{
                base: "row",
                md: "column",
                lg: "row",
                xl: "column",
                "2xl": "row",
              }}
              mt='25px'>
              <Text fontWeight='700' fontSize='sm' color={textColorBid}>
                Order Status:  <OrderBadge status={status}/>
              </Text>
              <Text fontWeight='700' fontSize='sm' color={textColorBid}>
                Payment Status: <OrderBadge status={paymentStatus}/>
              </Text>
              <RLink to={{ pathname : `/app/order/${orderItemID}`, query: props}} params={props}>
              <Link
                mt={{
                  base: "0px",
                  md: "10px",
                  lg: "0px",
                  xl: "10px",
                  "2xl": "0px",
                }}>
                <Button
                  variant='darkBrand'
                  color='white'
                  fontSize='sm'
                  fontWeight='500'
                  borderRadius='70px'
                  px='24px'
                  py='5px'>
                  View
                </Button>
              </Link>
              </RLink>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  }
  