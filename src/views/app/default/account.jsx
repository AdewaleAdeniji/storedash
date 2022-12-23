import { Box, SimpleGrid } from "@chakra-ui/react";

import AccountCard from "components/card/AccountCard";
import React from "react";
import {
  RiSendPlaneFill,
  RiSettings2Line,
  RiWallet3Fill,
} from "react-icons/ri";
import { Button } from "@chakra-ui/react";
import RecentTransactions from "views/app/default/components/Transactions";

export default function VirtualAccount() {

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        minChildWidth={{ base: "100%", md: "500px" }}
        columns={{ base: 1, md: 1, lg: 1, xl: 2, "2xl": 3 }}
        gap="20px"
        mb="20px"
      >
        <AccountCard />
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
          colorScheme="brand"
          variant="outline"
        >
          Make a Bank Transfer
        </Button>
        <Button
          leftIcon={<RiSendPlaneFill />}
          colorScheme="brand"
          variant="outline"
        >
          Withdraw to wallet
        </Button>
        <Button
          leftIcon={<RiSettings2Line />}
          colorScheme="brand"
          variant="outline"
        >
          Account Settings
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
