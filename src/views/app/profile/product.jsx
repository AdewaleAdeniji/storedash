import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/app/profile/components/Product";
// import Settings from "views/app/profile/components/Settings";


// Assets
import React from "react";
import { useLocation } from "react-router-dom";
import { goToURL } from "utils";

export default function ProductDetails(props) {
    const { query } = useLocation();
    if(!query){
       goToURL(props, '/app/products');
    }
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='10px'
        gap={{ base: "20px", xl: "20px" }}>
        
        <Banner
          {...query}
        />
      </Grid>
    </Box>
  );
}
