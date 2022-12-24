import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/app/profile/components/Product";
// import Settings from "views/app/profile/components/Settings";


// Assets
import React from "react";
import { useLocation } from "react-router-dom";
import { goToURL } from "utils";

export default function OrderDetails(props) {
    const { query } = useLocation();
    console.log(query);
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
        //   gridArea='1 / 2 / 2 / 2'
        //   banner={banner}
        //   avatar={'https://res.cloudinary.com/hdlky7wud/image/upload/c_crop,g_face/c_scale,w_200/gt5mytr6vql8fo77gbrq.jpg'}
        //   username='@Username'
          {...query}
        />
      </Grid>
    </Box>
  );
}
