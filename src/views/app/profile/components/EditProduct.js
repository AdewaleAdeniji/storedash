// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import EditInformation from "views/app/profile/components/EditComponent";
import { splitCamelCaseToString } from "utils";
import axios from "axios";
import configs from "utils/configs";
import Cache from "utils/cache";
import ToggleForm from "./ToggleForm";

export default function ProductEditBanner(props) {
  const { editables, data, edit } = props;
  // Chakra Color Mode
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const newProduct = { ...data };
  //   const ImageToDisplay  = [...newProduct.images]
  const onImageUploaded = async (file) => {
      const config = {
        headers: { Authorization: `Bearer ${Cache.getToken()}` },
        "content-type": 'multipart/form-data'
    };
    // const imgs = newProduct.images;
    const formData = new FormData();
    formData.append('file',file[0])
    // imgs.push(file);
   const res = await axios.post(configs.api_url+'/uploads', formData, config);
   console.log(res);
  }
  const onValueChange = (field, value) => {
    console.log(field, value);
  }
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="5px" w={"fit-content"}>
        {newProduct?.images?.map((img) => {
          return (
            <Box
              h="300px"
              w="300px"
              bg={`url(${img.url})`}
              bgSize="cover"
              borderColor={borderColor}
            >
              <Button mt={"90%"} colorScheme="red">
                Remove Image
              </Button>
            </Box>
          );
        })}
        {/* <Upload
          onUpload={onImageUploaded}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
        /> */}
      </SimpleGrid>
      <Flex justifyContent='right' mt={'20px'}>
            <Button colorScheme={'brand'}>{edit ? 'Save' : 'Create'} Product</Button>
        </Flex>
      <SimpleGrid columns="2" gap="20px">
        {editables.map((editable) => {
          return (
            <EditInformation boxShadow={cardShadow} title={splitCamelCaseToString(editable)} value={data[editable]} onChange={onValueChange}/>
          );
        })}
        <ToggleForm boxShadow={cardShadow} label={'Product Availability'} value={data?.isAvailable} onChange={onValueChange}/>
      </SimpleGrid>
    </Card>
  );
}
