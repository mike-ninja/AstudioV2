import {
  About,
  CallToAction,
  Carousel,
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
    </main>
  );
}
