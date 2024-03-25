
import Options from "@/components/Homepage/options/Options";
import Explore from "@/components/Homepage/explore/Explore";
import Cities from "@/components/Homepage/Cities/Cities";
import Header from "../components/Homepage/header/Header";
import Services from "@/components/Homepage/services/Services";
import Postercard from "@/components/Homepage/postercard/Postercard";
import Toparticles from "@/components/Homepage/toparticles/Toparticles";
import Articlesmanual from "@/components/Homepage/articlesmanual/Articlesmanual";
import Staticcardleft from "@/components/Homepage/staticcard/Staticcardleft";
import Staticcardright from "@/components/Homepage/staticcard/Staticcardright";
import Services2 from "@/components/Homepage/services2/Services2";
import src1 from "../../public/postercardimg1.jpg";
import src2 from "../../public/postercardimg2.jpg";
import src3 from "../../public/postercardimg3.jpg";
import WhyChooseUs from "@/components/Homepage/chooseus/WhyChooseUs";
import TopProject from "@/components/Homepage/TopProject/TopProject";
import ExploreServices from "@/components/Homepage/ExploreServices/ExploreServices";
import PopularBuilder from "@/components/Homepage/PopularBuilder/PopularBuilder";
import Testimonial from "@/components/Homepage/testimonial/Testimonial";
import '../components/Homepage/homepage.css'
export default function Home() {
  return (
    <div>
      <Header />
      <ExploreServices />
      <div className="lg:ml-32 lg:mr-32 md:mr-20 md:ml-20 mr-5 ml-5">
        <Explore />
        <div style={{ position: "relative" }}>
          <Postercard
            title="Find Better Places to Live Work and Wonder..."
            src={src1}
            alt="src1"
            sidecontent1="BUY A HOME"
            sidecontent2="Search, Buy & Own Your Dream Home"
            sidecontent3="Explore from apartments, land, builders, floor, villas and more"
            buttontext="Find a Home"
          />
          <div className="toparticles-container">
            <Toparticles />
          </div>
        </div>



        <div className="mt-10 lg:mt-80">
          <Options />


        </div>
        {/* <Cities title={true} /> */}

        <div style={{ position: "relative" }}>
          <Postercard
            title="Sell or Rent your property faster with DealAcres"
            src={src2}
            alt="src2"
            sidecontent1="POST YOUR PROPERTY"
            sidecontent4="Register to post your property for "
            s2spantext="FREE"
            sidecontent3="Sell or rent your residential/commercial property"
            buttontext="Post your property FREE"
          />
          <div className="Articlesmanual-container">
            <Articlesmanual />
          </div>
         
        </div>
        <div className="mt-10 lg:mt-[22rem]">
          <Postercard
            src={src3}
            alt="src3"
            sidecontent1="RENT A HOME"
            sidecontent4="Rental Homes for Everyone "
            sidecontent3="Explore from Apartments, builder homes, villas and more"
            buttontext="Find a home for RENT"
          />
        </div>
        <TopProject />
        <PopularBuilder />
        {/* <Services2 />
        <Staticcardleft />
        <Staticcardright /> */}
      </div>
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
}

