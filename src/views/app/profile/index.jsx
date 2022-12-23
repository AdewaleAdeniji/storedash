import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/app/profile/components/Banner";
// import Settings from "views/app/profile/components/Settings";
import Upload from "views/app/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import React from "react";

export default function Profile() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='10px'
        // templateColumns={{
        //   base: "1fr",
        //   lg: "repeat(2, 1fr)",
        //   "2xl": "1.34fr 1.62fr 1fr",
        // }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={'https://res.cloudinary.com/hdlky7wud/image/upload/c_crop,g_face/c_scale,w_200/gt5mytr6vql8fo77gbrq.jpg'}
          name='Feranmi Adeniji'
          username='@Username'
        />
      </Grid>
    </Box>
  );
}
