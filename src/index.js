import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.css";
import { Provider } from 'react-redux'
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <BrowserRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/app`} component={AdminLayout} />
            <Redirect from='/' to='/app/dashboard' />
          </Switch>
        </BrowserRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
    <ToastContainer
      hideProgressBar={true}
      newestOnTop={true}
      autoClose={8000}
      closeOnClick={true}
      position="top-center"
    />
  </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
