import {
  About,
  CallToAction,
  Carousel,
  Contact,
  InstagramGallery,
  Navbar,
  // Quote,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <About />
      <Carousel />
      <Services />
      <CallToAction />
      <InstagramGallery />
      <Contact />
    </main>
  );
}
