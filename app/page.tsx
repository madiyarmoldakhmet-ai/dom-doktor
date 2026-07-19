import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Benefits } from "@/components/sections/Benefits";
import { Consultation } from "@/components/sections/Consultation";
import { Delivery } from "@/components/sections/Delivery";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Benefits />
      <Consultation />
      <Delivery />
      <FinalCTA />
    </>
  );
}
