import Hero2 from "@/Components/Hero2/Hero2";
import Hello from "../Components/Hello/Hello";
import Navbar from "../Components/Navbar/Navbar";
import Poster from "../Components/Poster/Poster";
import Hero from "../Components/hero/Hero";
import Heading from "@/Components/OfferHeading/Heading";
import Offers from "@/Components/Offers/Offers";
import AboutUs from "@/Components/About CEO/AboutUs";
import Customer from "@/Components/CustomerLoyalty/Customer";
import Footer from "@/Components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Poster />
      <Hello />
      <Hero2 />
      <Heading />
      <Offers />
      {/* <AboutUs /> */}
      <Customer />
      <Footer />
    </main>
  );
}
