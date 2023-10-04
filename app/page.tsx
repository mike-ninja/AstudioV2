import {
  About,
  CallToAction,
  Carousel,
  Contact,
  InstagramGallery,
  Quote,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Quote />
      <About />
      <Carousel />
      <Services />
      <CallToAction />
      <InstagramGallery />
      <Contact />
    </main>
  );
}
