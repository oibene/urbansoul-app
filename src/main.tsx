import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./pages/header"
import Footer from "./pages/footer"
import Index from './pages'
import ProductSearch from './pages/productSearch';
import PaymentPage from './pages/paymentPage';
import Account from './pages/account';
import ProductPage from './pages/productPage';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/search/:product",
      element: <ProductSearch />,
    },
    {
      path: "/pay",
      element: <PaymentPage />
    },
    {
      path: "/account/:variant",
      element: <Account />
    },
    {
      path: "/product/:id",
      element: <ProductPage />
    }
  ]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-bglight">
      <Header></Header>
      <RouterProvider router={router} />
      <Footer></Footer>

    </div>
  </StrictMode>,
)
