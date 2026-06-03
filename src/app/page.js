import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursePortalsSection from "./components/CoursePortalsSection";
import AcademicSuccessSection from "./components/AcademicSuccessSection";
import OnlineClassSection from "./components/OnlineClassSection";
import OfferSection from "./components/OfferSection";
import SubjectSection from "./components/SubjectSection";
import UniversitySection from "./components/UniversitySection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import SimpleOrderingProcess from "./components/SimpleOrderingProcess";
import HeroContentSection from "./components/HeroContentSection";
import RegistrationProcess from "./components/RegistrationProcess";

export default function Home() {
  return (
    <>
    <TopBar />
    <Navbar />   {/* done */}
    <HeroSection />  {/* done */}
    <CoursePortalsSection />
    <AcademicSuccessSection />    {/* done */}
    <OnlineClassSection />   {/* done */}
    <OfferSection />    {/* done */}
    <RegistrationProcess />   {/* done */}
    <HeroContentSection />   {/* done */}
    <SubjectSection />   {/* done */}
    <SimpleOrderingProcess />
    <UniversitySection />  
    <TestimonialsSection />    {/* done */}
    <FAQSection />
    <Footer />
    </>
  );
}
