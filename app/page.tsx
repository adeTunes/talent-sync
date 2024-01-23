import Companies from "@/components/companies";
import Advantage from "@/components/Advantage";
import Testimonial from "@/components/testimonials";
import Hero from "@/components/hero";
import FAQs from "@/components/faqs";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Companies />
      <Advantage />
      <Testimonial />
      <FAQs />
      <Pricing />
      <Footer />
      <Copyright />
    </main>
  );
}
