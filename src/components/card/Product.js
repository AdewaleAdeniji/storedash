// Chakra imports
import {
    AvatarGroup,
    Avatar,
    Box,
    Button,
    Flex,
    Image,
    Link as RLink,
    Text,
    useColorModeValue,
    Badge,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  // Assets
  import React from "react";
  import { Link } from 'react-router-dom';

  export default function Product(props) {
    const { name, description, images, stockCount, hasStockCount, price, isAvailable, productID } = props;
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
              { hasStockCount && <Text fontWeight='700' fontSize='sm' color={textColorBid}>
                Stock Count:  <Badge colorScheme={stockCount < 10 ? 'red' : 'green'}></Badge>
              </Text>}
              <Text fontWeight='700' fontSize='sm' color={textColorBid} mt={'5px'}>
                {!isAvailable && 'Not '} Available
              </Text>
              <Text fontWeight='700' fontSize='sm' color={textColorBid} mt={'5px'}>
                    Price : &#8358;{price}
              </Text>
              <Link to={{ pathname : `/app/product/${productID}`, query: props}} params={props}>
              <RLink
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
              </RLink>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  }
  