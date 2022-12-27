import { Box, Grid, Skeleton, Select } from "@chakra-ui/react";

// Custom components
import Banner from "views/app/profile/components/Order";
// import Settings from "views/app/profile/components/Settings";

// Assets
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { axios, toast, configs, Cache } from "utils/imports";
import { useEffect } from "react";

export default function OrderDetails(props) {
  const { query } = useLocation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  const [orderDetails, setOrderDetails] = useState({});
  const config = {
    headers: { Authorization: `Bearer ${Cache.getToken()}` },
  };
  const getOrder = async (id) => {
    try {
      const orderItem = await axios.get(
        `${configs.api_url}/commerce/orderItems?orderItemID=${id}`,
        config
      );

      setOrder(orderItem.data[0]);
      const { orderID } = orderItem.data[0];
      getOrderDetails(orderID);
      setLoading(false);
    } catch (err) {
      toast.error("Order not found");
    }
  };
  const getOrderDetails = async (orderID) => {
    try {
      const order = await axios.get(
        `${configs.api_url}/commerce/orders?orderID=${orderID}`,
        config
      );
      const details = order.data[0];
      delete details.paymentStatus;
      setOrderDetails(details);
    } catch (err) {
      toast.error("Order details cannot be found");
    }
  };
  const getOrderById = () => {
    setLoading(true);
    getOrder(id);
  };
  useEffect(() => {
    if (!query && order.name === undefined) {
      getOrderById(id);
      return <></>;
    } else if (query) {
      getOrderDetails(query.orderID);
      setOrder(query);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);
  const statuses = "NEW,CANCELLED,PROCESSING,FAILED,COMPLETED".split(",");
  const paymentStatuses = "PENDING,FAILED,INCOMPLETE,COMPLETED".split(",");

  const updateOrderStatus = async (payload) => {
    toast.loading("Updating order.......");
    try {
      await axios.put(
        `${configs.api_url}/commerce/orderItems/${order._id}`,
        payload,
        config
      );
      toast.dismiss();
      // setLoading(true);
      // setOrder({});
      getOrder(id);
      toast.success("Order updated successfully");

    } catch (err) {
      toast.dismiss();
      toast.error("Order could not be updated!");
    }
  };
  const updateStatuses = () => {
    return (
      <>
        <Select
          variant="filled"
          placeholder="Update Order Status"
          w={"300px"}
          onChange={(e) => updateOrderStatus({ status: e.target.value })}
        >
          {statuses.map((status, index) => {
            return (
              <option value={status} key={index}>
                {status}
              </option>
            );
          })}
        </Select>
        <Select
          variant="filled"
          placeholder="Update Payment Status"
          w={"300px"}
          onChange={(e) => updateOrderStatus({ paymentStatus: e.target.value })}
        >
          {paymentStatuses.map((status, index) => {
            return (
              <option value={status} key={index}>
                {status}
              </option>
            );
          })}
        </Select>
      </>
    );
  };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid mb="10px" gap={{ base: "20px", xl: "20px" }}>
        {loading ? (
          <Skeleton isLoaded={!loading} height="500px"></Skeleton>
        ) : (
          <Banner
            {...order}
            {...orderDetails}
            updateComp={updateStatuses}
          />
        )}
      </Grid>
    </Box>
  );
}
