import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EResources from "./components/EResources";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journals from "./components/Journals";
import OpenAccess from "./components/OpenAccess";
import Services from "./components/Services";
import SignLanguage from "./components/SignLanguage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-poppins">
        <Header />
        <main>
          <Hero />
          <EResources />
          <Services />
          <Journals />
          <OpenAccess />
          <SignLanguage />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
