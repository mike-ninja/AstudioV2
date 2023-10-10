import React from "react";
import {
  AdditionalInformation,
  Colouring,
  Haircuts,
  Header,
  Styling,
  Treatments,
} from "@/components";

export default function ServicePage() {
  return (
    <main>
      <Header headerBackground="/images/sand-header.webp" />
      <Haircuts />
      <Colouring />
      <Styling />
      <Treatments />
      <AdditionalInformation />
    </main>
  );
}
