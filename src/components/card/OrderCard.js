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
    Badge,
  } from "@chakra-ui/react";
import { OrderBadge } from "components/badge";
  // Custom components
  import Card from "components/card/Card.js";
  // Assets
  import React from "react";
  import { Link as RLink } from 'react-router-dom';
import { formatDate } from "utils";
    import { formatMoney } from "utils";
  export default function OrderCard(props) {
    const { paymentStatus, paymentMode, cost, address, createdAt, items, orderID } = props;
    const textColor = useColorModeValue("navy.700", "white");
    const textColorBid = useColorModeValue("brand.500", "white");
    
    return (
      <Card p='20px'>
        <Flex direction={{ base: "column" }} justify='center'>
          <Box mb={{ base: "20px", "2xl": "20px" }} position='relative'>
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
                  &#8358;{formatMoney(cost)}
                </Text>
                <Text
                  color='secondaryGray.600'
                  fontSize={{
                    base: "sm",
                  }}
                  fontWeight='400'
                  me='14px'>
                  {address}
                </Text>
                <Text
                  color='secondaryGray.600'
                  fontSize={{
                    base: "sm",
                  }}
                  fontWeight='400'
                  me='14px'>
                  {formatDate(createdAt)}
                </Text>
              </Flex>
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
              mt='20px'>
            <Text fontWeight='700' fontSize='sm' color={textColorBid} mb={'3px'}>
                Total items:  <Badge>{items}</Badge>
              </Text>
              <Text fontWeight='700' fontSize='sm' color={textColorBid} mb={'3px'}>
                Payment Mode:  <Badge>{paymentMode}</Badge>
              </Text>
              <Text fontWeight='700' fontSize='sm' color={textColorBid}>
                Payment Status: <OrderBadge status={paymentStatus}/>
              </Text>
              <Flex align={'right'} justifyContent={'right'} w={'100%'}>
              <RLink to={{ pathname : `/app/order/${orderID}`, query: props}} params={props}>
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
        </Flex>
      </Card>
    );
  }
  