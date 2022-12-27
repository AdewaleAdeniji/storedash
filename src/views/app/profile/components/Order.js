// Chakra imports
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { mapToArray } from "utils";
import Information from "views/app/profile/components/Information";

export default function OrderBanner(props) {
  const { name, images, description, orderID } = props;
  const UpdateComp = props.updateComp;
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
  const newProduct = { ...props };

  delete newProduct.images;
  delete newProduct._id;
  delete newProduct.__v;
  delete newProduct.updateComp;

  const statuses = "NEW,CANCELLED,PROCESSING,FAILED,COMPLETED".split(",");
  const paymentStatuses = "PENDING,FAILED,INCOMPLETE,COMPLETED".split(",");

  const prod = mapToArray(newProduct);

  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="5px" w={"fit-content"}>
        {images.map((img, i) => {
          return (
            <Box
              h="300px"
              w="300px"
              bg={`url(${img.url})`}
              bgSize="cover"
              borderColor={borderColor}
              key={i}
            />
          );
        })}
      </SimpleGrid>
      <Flex justifyContent="right" mt={"20px"}>
        <UpdateComp />
      </Flex>
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="m" mt="5px">
        {description}
      </Text>
      <SimpleGrid columns="2" gap="20px">
        {prod.map((p, i) => {
          return (
            <Information
              key={i}
              boxShadow={cardShadow}
              title={p[0]}
              value={p[1].toString() || "N/A"}
            />
          );
        })}
      </SimpleGrid>
    </Card>
  );
}
