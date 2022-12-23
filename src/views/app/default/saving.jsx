import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {
  RiSendPlaneFill,
  RiWallet3Fill,
} from "react-icons/ri";
import { Button } from "@chakra-ui/react";
import RecentTransactions from "views/app/default/components/Transactions";
import SavingCard from "components/card/SavingCard";

export default function SavingsAccount() {

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        minChildWidth={{ base: "100%", md: "500px" }}
        columns={{ base: 1, md: 1, lg: 1, xl: 2, "2xl": 3 }}
        gap="20px"
        mb="20px"
      >
        <SavingCard />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <Button
          rightIcon={<RiWallet3Fill />}
          colorScheme="brand"
          variant="outline"
        >
          Fund this account
        </Button>
        <Button
          leftIcon={<RiSendPlaneFill />}
          variant="outline"
          colorScheme={"brand"}
        >
          Withdraw Savings to wallet
        </Button>
      </SimpleGrid>
      <SimpleGrid
        width={{ base: "100%", md: "100%", xl: "50%" }}
        gap="20px"
        mb="20px"
      >
        <RecentTransactions />
      </SimpleGrid>
    </Box>
  );
}
