import RevealMain from "@/components/RevealMain";
import React from "react";

interface Props {}

export default function PresentationPage({}: Props) {
  return (
    <RevealMain>
      <section>Horizontal Slide</section>
      <section>
        <section>Vertical Slide 1</section>
        <section>Vertical Slide 2</section>
      </section>
    </RevealMain>
  );
}
