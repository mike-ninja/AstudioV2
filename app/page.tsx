import {
  About,
  CallToAction,
  Carousel,
  Contact,
  Header,
  InstagramGallery,
  // Quote,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header headerBackground="/images/astudio-header.webp" />
      <About />
      <Carousel />
      <Services />
      <CallToAction />
      <InstagramGallery />
      <Contact />
    </main>
  );
}
