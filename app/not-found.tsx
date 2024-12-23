"use client";
import { Paragraph, Subtitle, Template } from "./components";

export default function NotFound() {
  return (
    <Template className={`bg-white text-black`}>
      <div className="text-center flex h-screen flex-col align-middle justify-center items-center">
        <Paragraph>We are sorry</Paragraph>
        <Subtitle>Page not found</Subtitle>
      </div>
    </Template>
  );
}
