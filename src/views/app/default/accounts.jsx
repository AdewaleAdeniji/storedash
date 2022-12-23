import {
    Box,
    SimpleGrid,
  } from "@chakra-ui/react";

  import AccountCard from "components/card/AccountCard";
  import React from "react";
  
  export default function Accounts() {
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
        minChildWidth={{ base: '100%', md: '500px' }}
        columns={{ base: 1, md: 1, lg: 1, xl: 2, "2xl": 3 }}
        gap='20px'
        mb='20px'>
        <AccountCard actionButton={true}/>
        <AccountCard actionButton={true}/>
        <AccountCard actionButton={true}/>
        <AccountCard actionButton={true}/>
        <AccountCard actionButton={true}/>


        </SimpleGrid>
      </Box>
    );
  }
  