import {
    Box,
    SimpleGrid,
  } from "@chakra-ui/react";
import SavingsCard from "../../../components/card/SavingsCard";
  import React from "react";

  export default function SavingsAccounts() {
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
        minChildWidth={{ base: '100%', md: '500px' }}
        columns={{ base: 1, md: 1, lg: 1, xl: 2, "2xl": 3 }}
        gap='20px'
        mb='20px'>
        <SavingsCard
            width={{ base: "100%", md: "100%", xl: "400px" }}
            gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            used={25.6}
            total={50}
        />
        <SavingsCard
            width={{ base: "100%", md: "100%", xl: "400px" }}
            gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            used={25.6}
            total={50}
        />
        <SavingsCard
            width={{ base: "100%", md: "100%", xl: "400px" }}
            gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            used={25.6}
            total={50}
        />
        <SavingsCard
            width={{ base: "100%", md: "100%", xl: "400px" }}
            gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
            used={25.6}
            total={50}
        />

        

        </SimpleGrid>
      </Box>
    );
  }
  