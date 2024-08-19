
import Background from "./components/background";
import Content from "./components/content";
import Hero from "./components/hero";
import Money from "./components/money";
import Navbar from "./components/navbar";



export default function Home() {
  return ( 
        <div>
         <Navbar/>
         <Hero/>
         <Background/>
         <Money/>
         <Content/>
        </div> 
  );
}
