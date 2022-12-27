// Chakra imports
import {
    Box,
    SimpleGrid,
    Text,
    useColorModeValue,
    Button,
    Flex,
  } from "@chakra-ui/react";
  import Card from "components/card/Card.js";
  import React from "react";
import { Link } from "react-router-dom";
import { mapToArray } from "utils";
  import Information from "views/app/profile/components/Information";
  
  export default function ProductBanner(props) {
    const { name, images, description, productID } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
    const borderColor = useColorModeValue(
      "white !important",
      "#111C44 !important"
    );
    const cardShadow = useColorModeValue(
      "0px 18px 40px rgba(112, 144, 176, 0.12)",
      "unset"
    );
    const newProduct = { ...props};

    delete newProduct.images;
    delete newProduct._id;
    delete newProduct.__v;

    const prod = mapToArray(newProduct);
    return (
      <Card mb={{ base: "0px", lg: "20px" }} align="center">
                
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="5px"
          w={'fit-content'}
        >
            {
                images.map((img) => {
                    return (
                        <Box
                          h="300px"
                          w="300px"
                          bg={`url(${img.url})`}
                          bgSize="cover"
                          borderColor={borderColor}
                        />
                    )
                })
            }
        </SimpleGrid>
        <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
          {name}
        </Text>
        <Text color={textColorSecondary} fontSize="m" mt="5px">
          {description}
        </Text>
        <SimpleGrid columns="2" gap="20px">
            {
                prod.map((p) => {
                    return (
                        <Information
                          boxShadow={cardShadow}
                          title={p[0]}
                          value={p[1].toString()||'N/A'}
                        />
                    )
                })
        }
        </SimpleGrid>

        <Flex justifyContent='right' mt={'20px'}>
            <Link to={{ pathname: `/app/edit/product/${productID}`, query: props }}>
                <Button colorScheme={'brand'}>Edit Product</Button>
            </Link>
        </Flex>
      </Card>
    );
  }
  