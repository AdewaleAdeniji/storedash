// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import EditInformation from "views/app/profile/components/EditComponent";
import { splitCamelCaseToString } from "utils";
import axios from "axios";
import configs from "utils/configs";
import Cache from "utils/cache";
import ToggleForm from "./ToggleForm";
import Upload from "./Upload";
import { toast } from "utils/imports";

export default function ProductEditBanner(props) {
  const { editables, data, edit } = props;
  const [payload, setPayload] = React.useState({});
  const { _id } = data;
  const config = {
    headers: { Authorization: `Bearer ${Cache.getToken()}` },
  };
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
  const onImageUploaded = async (files) => {
    if (files.length === 1) {
      var file = files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        //setImageURL(reader.result);
      };
      toast.loading("Uploading File...");

      uploadFile(file);
    } else {
      toast.warning("Please select an image");
    }
  }
  const onValueChange = (field, value) => {
    console.log(field, value);
    var newValue;
    if(field === 'price' || field === 'stockCount'){
      newValue = parseInt(value);
    }
      let t = { ...payload};
      t[field] = newValue || value;
    setPayload({...t});
  }
  function uploadFile(file) {
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    };
    //add cloudinary url
    const url = "https://api.cloudinary.com/v1_1/hdlky7wud/upload/";
    const data = new FormData();
    data.append("upload_preset", "phalconwise_users"); //append cloudinary specific config
    data.append("file", file);
    axios
      .post(url, data, config)
      .then((res) => {
        toast.dismiss();
        if (res.data) {
          console.log(res.data);
          const imageurl = res.data.url;
          console.log(imageurl);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Image Upload failed");
      });
  }
  const saveProduct = async () => {
      toast.loading("Updating order.......");
    try {
      await axios.put(
        `${configs.api_url}/commerce/products/${_id}`,
        payload,
       config
      );
      toast.dismiss();
      toast.success("Order updated successfully");

    } catch (err) {
      toast.dismiss();
      toast.error("Order could not be updated!");
    }
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
              {/* <Button mt={"90%"} colorScheme="red">
                Remove Image
              </Button> */}
            </Box>
          );
        })}
        {/* <Upload
          onUpload={onImageUploaded}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
        /> */}
      </SimpleGrid>
      <Flex justifyContent='right' mt={'20px'}>
            <Button colorScheme={'brand'} onClick={saveProduct}>{edit ? 'Save' : 'Create'} Product</Button>
        </Flex>
      <SimpleGrid columns="2" gap="20px">
        {editables.map((editable) => {
          return (
            <EditInformation boxShadow={cardShadow} title={editable} value={data[editable]} onChange={onValueChange}/>
          );
        })}
        <Select
          variant="filled"
          placeholder="Product Availability"
          w={"300px"}
          onChange={(e) => onValueChange('isAvailable', e.target.value === "yes" ? true : false)}
        >
              <option value={'yes'}>
                Yes
              </option>
              <option value={'no'}>
                No
              </option>
        </Select>
        <ToggleForm boxShadow={cardShadow} label={'Product Availability'} value={data?.isAvailable} onChange={onValueChange}/>
      </SimpleGrid>
    </Card>
  );
}
