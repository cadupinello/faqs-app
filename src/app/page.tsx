import { generateFaqs } from "@/data/faqs";
import { Suspense } from "react";
import SearchFaqs from "./_components/search-faqs";

export default function Home() {
  const filteredfaqs = generateFaqs?.slice(0, 6);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full h-screen flex justify-center items-center bg-[url('/layered-waves-haikei.svg')] bg-cover bg-center">
      <SearchFaqs faqs={generateFaqs} />
      </div>
    </Suspense>
  );
}
