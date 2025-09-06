import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import RegistrationForm from "./components/RegistrationForm";
import SyllabusSection from "./components/SyllabusSection";
import NoticesSection from "./components/NoticesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LandingPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroSection />
    <AboutSection />
    <RegistrationForm />
    <SyllabusSection />
    <NoticesSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
