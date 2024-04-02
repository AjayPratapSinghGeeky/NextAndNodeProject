import Image from "next/image";
import Header from "@/components/Home/header/Header";
import AboutUs from "@/components/Home/about/About";
import Explore from "@/components/Home/explore/Explore";
import Footer from "@/components/Home/footer/Footer";

export default function Home() {
  return <>
    <Header/>
    <AboutUs/>
    <Explore/>
    <Footer/>
  </>
}
