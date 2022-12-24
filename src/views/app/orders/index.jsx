import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import Order from "components/card/Order";
import { axios, toast, configs,Cache } from "utils/imports";
import { useEffect, useState } from "react";

export default function Orders() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

   async function fetchorders(param){
    const config = {
      headers: { Authorization: `Bearer ${Cache.getToken()}` }
  };
  toast.dismiss();
  setOrders([]);
  setLoading(true);
  const orders = await axios.get(`${configs.api_url}/commerce/orderItems?_sort=createdAt:-1${param?param:''}`, config)
  setLoading(false);
  setOrders(orders.data);
    if(orders.data.length === 0){
      toast.warning('No orders with the selected category');
    }
  }
  useEffect(()=>{
    fetchorders();
  }, [])
  const handleFilter = (param) => {
    return fetchorders(`&status=${param.toUpperCase()}`);
  }
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Orders
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                  <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  >Filters:</Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  mr={'10px'}
                  me={{ base: "34px", md: "44px" }}
                  onClick={()=> handleFilter("completed")}>
                  COMPLETED
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  onClick={()=> handleFilter("processing")}>
                  PROCESSING
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  onClick={()=> handleFilter("incomplete")}>
                  INCOMPLETE
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  onClick={()=> handleFilter("cancelled")}>
                  CANCELLED
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  onClick={()=> handleFilter("failed")}>
                  FAILED
                </Link>
                {/* <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Sports
                </Link> */}
              </Flex>
            </Flex>
            {loading &&  <Skeleton isLoaded={!loading} height="500px"><Spinner /></Skeleton>}
    
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              {
                orders.map((order) =>{
                  return (
                    <Order
                      {...order}
                  />
                  )
                })
              }
            </SimpleGrid>
          </Flex>
        </Flex>
    </Box>
  );
}
