import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom component
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React,{ useState } from "react";
import {
  MdBarChart,
} from "react-icons/md";
import {
  orderTableColumns,
} from "views/app/dataTables/variables/columnsData";
import ColumnsTable from "views/app/dataTables/components/OrdersTable";
import { axios, toast, configs,Cache, moment } from "utils/imports";
import { useEffect } from "react";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState([]);
  //get orders 
  useEffect(()=>{
    async function fetchorders(){
      const config = {
        headers: { Authorization: `Bearer ${Cache.getToken()}` }
    };
    const orders = await axios.get(`${configs.api_url}/commerce/orderItems`, config)
    getStats(orders.data);
    }
    fetchorders();
  }, [])
  const getStats = (orders) => {
    const orderStatus = {};
    const paymentStatus = {};
    orders.map((order) => {
      order.createdAt = moment(order.createdAt).format(
        "MMMM Do YYYY, h:mm:ss a"
      )
      orderStatus[order.status] = (orderStatus[order.status] || 0) + 1;
      return order;
    })
    orders.map((order) => {
      paymentStatus[order.paymentStatus] = (paymentStatus[order.paymentStatus] || 0) + 1;
      return order;
    })
    const obj = {
      ...orderStatus,
      ...paymentStatus,
      Total: orders.length
    }
    var result = Object.keys(obj).map((key) => [(key), obj[key]]);
    setStats(result);
    setOrders(orders.slice(0,10));
    console.log(orders.slice(0,10))
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        {
          stats.map((stat)=> {
            return (
              <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
                  }
                />
              }
              name={`${stat[0]} orders`}
              value={stat[1]}
            />
            )
          })
        }
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <ColumnsTable
          columnsData={orderTableColumns}
          tableData={orders}
        />
      </SimpleGrid>
    </Box>
  );
}
