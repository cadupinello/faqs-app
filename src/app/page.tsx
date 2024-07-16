import { generateFaqs } from "@/data/faqs";
import { Suspense } from "react";
import FaqsFilter from "./_components/faqs-filter";
import SearchFaqs from "./_components/search-faqs";

export default function Home() {
  const filteredfaqs = generateFaqs?.slice(0, 6);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-lg md:max-w-5xl flex flex-col items-center justify-between h-[80vh] p-4 overflow-hidden rounded">
          <h1 className="text-4xl md:text-5xl font-bold text-center m-4">
            Olá! Como podemos ajudá-lo?
          </h1>
          <SearchFaqs faqs={generateFaqs} />
          <FaqsFilter filteredfaqs={filteredfaqs} />
        </div>
      </div>
    </Suspense>
  );
}
