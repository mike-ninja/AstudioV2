import React from "react";
import { Colouring, Haircuts, Header, Styling, Treatments } from "@/components";

export default function ServicePage() {
  return (
    <main>
      <Header headerBackground="/images/beach-header.jpg" />
      <Haircuts />
      <Colouring />
      <Styling />
      <Treatments />
    </main>
  );
}
