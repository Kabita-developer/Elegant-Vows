import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StoryGallery from "@/components/StoryGallery";
import InquiryForm from "@/components/InquiryForm";
import Testimonials from "@/components/Testimonials";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <StoryGallery />
      <InquiryForm />
      <Testimonials />
      <LatestNews />
      <Footer />
    </div>
  );
}