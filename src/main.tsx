import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./pages/header"
import Footer from "./pages/footer"
import Index from './pages'
import ProductSearch from './pages/productSearch';
import PaymentPage from './pages/paymentPage';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index></Index>,
    },
    {
      path: "/search",
      element: <ProductSearch></ProductSearch>,
    },
    {
      path: "/pay",
      element: <PaymentPage></PaymentPage>
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
