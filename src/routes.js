import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";
import DataTables from "views/app/dataTables";

import AppDashboard from "views/app/default";
// Auth Imports
import SignInCentered from "views/auth/signin";
import Orders from "views/app/orders";
import Products from "views/app/products";
import ProductDetails from "views/app/profile/product";
import OrderDetails from "views/app/profile/order";
import EditProduct from "views/app/profile/EditProduct";

const authRoutes = [
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  }
]
const routes = [
  ...authRoutes,
  {
    name: "Dashboard",
    layout: "/app",
    path: "/dashboard",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: AppDashboard,
    navbar: true,
    protected: true,
  },
  {
    name: "Orders",
    layout: "/app",
    path: "/orders",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Orders,
    navbar: true,
    protected: false,
  },
  {
    name: "Products",
    layout: "/app",
    path: "/products",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Products,
    navbar: true,
    protected: false,
  },
  {
    name: "Data Tables",
    layout: "/app",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Product details",
    layout: "/app",
    path: "/product/:id",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: ProductDetails,
    navbar: false,
    protected: true,
    secondary: true,
  },
  {
    name: "Order details",
    layout: "/app",
    path: "/order/:id",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: OrderDetails,
    navbar: false,
    protected: true,
    secondary: true,
  },
  {
    name: "Edit Product",
    layout: "/app",
    path: "/edit/product/:id",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: EditProduct,
    navbar: false,
    protected: true,
    secondary: true,
  }
];
export const navRoutes = routes.filter((link) => link.navbar);
export default routes;
