import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import FeaturedCard from "@/components/FeaturedCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialsCard";

export default function Home() {
 return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
       <HeroSection/>
       <FeaturedCard/>
       <WhyChooseUs/>
       <MusicSchoolTestimonials/>
   </main>
  )
}
