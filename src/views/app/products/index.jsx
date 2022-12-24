import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  SimpleGrid,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";

import Product from "components/card/Product";
import { axios, toast, configs,Cache } from "utils/imports";
import { useEffect, useState } from "react";

export default function Products() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

   async function fetchorders(param){
    const config = {
      headers: { Authorization: `Bearer ${Cache.getToken()}` }
  };
  toast.dismiss();
  setProducts([]);
  setLoading(true);
  const prods = await axios.get(`${configs.api_url}/commerce/products?_sort=createdAt:-1${param?param:''}`, config)
  setLoading(false);
  console.log(prods.data);
  setProducts(prods.data);
    if(prods.data.length === 0){
      toast.warning('No orders with the selected category');
    }
  }
  useEffect(()=>{
    fetchorders();
  }, [])
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
                Products
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                  <Button color={"white"} variant="brand">
                    Create new Product
                  </Button>
              </Flex>
            </Flex>
            {loading &&  <Skeleton isLoaded={!loading} height="500px"><Spinner /></Skeleton>}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              {
                products.map((product) =>{
                  return (
                    <Product {...product}/>
                  )
                })
              }
            </SimpleGrid>
          </Flex>
        </Flex>
    </Box>
  );
}
