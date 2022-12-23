import {
    Box,
    SimpleGrid,
  } from "@chakra-ui/react";
  import React from "react";
  import RecentTransactions from "views/app/default/components/Transactions";
  
  export default function Transactions() {
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <RecentTransactions />
        </SimpleGrid>
      </Box>
    );
  }
  