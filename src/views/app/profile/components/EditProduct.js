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
import axios from "axios";
import configs from "utils/configs";
import Cache from "utils/cache";
import ToggleForm from "./ToggleForm";
import Upload from "./Upload";
import { toast } from "utils/imports";
import _ from "lodash";

export default function ProductEditBanner(props) {
  const { editables, data, edit } = props;
  const [payload, setPayload] = React.useState({});
  const newProduct = { ...data };
  const [images, setImages] = React.useState([...newProduct?.images]);
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
  //   const ImageToDisplay  = [...newProduct.images]
  const onImageUploaded = async (files) => {
    if (files.length === 1) {
      var file = files[0];
      toast.loading("Uploading File...");

      uploadFile(file);
    } else {
      toast.warning("Please select an image");
    }
  };
  const onValueChange = (field, value) => {
    var newValue;
    if (field === "price" || field === "stockCount") {
      newValue = parseInt(value);
    }
    let t = { ...payload };
    t[field] = newValue || value;
    setPayload({ ...t });
  };
  function uploadFile(file) {
    var myHeaders = new Headers();
    
    var formdata = new FormData();
    formdata.append("image", file, "download.jpeg");
    formdata.append("key", "324e405ba26e81468f379a74133a3d3f");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.imgbb.com/1/upload", requestOptions)
      .then(response => response.json())
      .then(resp => {
        toast.dismiss();
        const result = resp.data;
        const image = {
          thumb: result.url,
          url: result.url,
          _id: '635ab4fe20fde2000d741c63'
        };
        images.push(image);
        setImages([ ...images]);
      })
      .catch(() => {
        toast.error("Image could not be uploaded!");
      });
    return;
  }
  const removeImage = (id) => {
      const t = _.remove(images, (i,j) => {
        return j !== id 
      })
      setImages(t);
  }
  const saveProduct = async () => {
    payload.images = images;
    toast.loading("Product order.......");
    try {
      await axios.put(
        `${configs.api_url}/commerce/products/${_id}`,
        payload,
        config
      );
      toast.dismiss();
      toast.success("Product updated successfully");
    } catch (err) {
      toast.dismiss();
      toast.error("Product could not be updated!");
    }
  };
  const deleteProduct = async () => {
    toast.loading("Product order.......");
    try {
      await axios.put(
        `${configs.api_url}/commerce/products/${_id}`,
        {
          deleted: true
        },
        config
      );
      toast.dismiss();
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.dismiss();
      toast.error("Product could not be deleted!");
    }
  };
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="5px" w={"fit-content"}>
        {images?.map((img, index) => {
          return (
            <Box
              h="300px"
              w="300px"
              bg={`url(${img.url})`}
              bgSize="cover"
              borderColor={borderColor}
            >
              <Button mt={"90%"} colorScheme="red" onClick={()=> removeImage(index)}>
                Remove Image
              </Button>
            </Box>
          );
        })}
        <Upload
          onUpload={onImageUploaded}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
        />
      </SimpleGrid>
      <Flex justifyContent="right" mt={"20px"}>
      <Button colorScheme={"brand"} onClick={deleteProduct}>
          Delete Product
        </Button>
        <Button colorScheme={"brand"} onClick={saveProduct}>
          {edit ? "Save" : "Create"} Product
        </Button>
      </Flex>
      <SimpleGrid columns="2" gap="20px">
        {editables.map((editable) => {
          return (
            <EditInformation
              boxShadow={cardShadow}
              title={editable}
              value={data[editable]}
              onChange={onValueChange}
            />
          );
        })}
        <Select
          variant="filled"
          placeholder="Product Availability"
          w={"300px"}
          onChange={(e) =>
            onValueChange(
              "isAvailable",
              e.target.value === "yes" ? true : false
            )
          }
        >
          <option value={"yes"}>Yes</option>
          <option value={"no"}>No</option>
        </Select>
        <ToggleForm
          boxShadow={cardShadow}
          label={"Product Availability"}
          value={data?.isAvailable}
          onChange={onValueChange}
        />
      </SimpleGrid>
    </Card>
  );
}
