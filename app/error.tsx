"use client";

import { Paragraph, Subtitle, Template } from "./components";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <Template className={`bg-white text-black`}>
      <div className="text-center flex h-screen flex-col align-middle justify-center items-center">
        <Paragraph>Oops</Paragraph>
        <Subtitle>Something went wrong!</Subtitle>
        <p className="mt-4 text-lg">More info: {error.message}</p>
      </div>
    </Template>
  );
}
