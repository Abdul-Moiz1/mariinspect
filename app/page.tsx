import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';
import Testimonial from "./components/Testimonial";
import MarineIntelligence from "./components/MarineIntelligence/index";
import Countergen from "./components/Countergen/index"


export default function Home() {
  return (
    <main>
      <Banner />
      <Cook />
      <Features />
      <Expert />  
      <Gallery />
      <MarineIntelligence />
      <Testimonial />
      <Newsletter />
      <Countergen/>
    </main>
  )
}
