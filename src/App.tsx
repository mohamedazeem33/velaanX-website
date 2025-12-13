import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

import Index from "./pages/Index";
import Farmers from "./pages/Farmers";
import Products from "./pages/About";   // ✅ Use the real About/Products Page
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import JoinFarmer from "./pages/JoinFarmer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />   {/* About page */}
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/join-farmer" element={<JoinFarmer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
