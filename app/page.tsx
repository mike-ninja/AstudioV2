import {
  About,
  CallToAction,
  Carousel,
  Header,
  InstagramGallery,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Carousel />
      <Services />
      <CallToAction />
      <InstagramGallery />
    </main>
  );
}
