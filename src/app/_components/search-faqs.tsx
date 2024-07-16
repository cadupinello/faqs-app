"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useEffect } from "react";

interface SearchProps {
  faqs: { id: string; question: string; answer: string; image: string }[];
}

const SearchFaqs = ({ faqs }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const [searchFilter, setSearchFilter] =
    useState<
      { id: string; question: string; answer: string; image: string }[]
    >();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    setLoading(true);

    setTimeout(() => {
      if (!value) {
        setSearchFilter(faqs);
      } else {
        setSearchFilter(faqs.filter((faq) => faq.question.includes(value)));
      }
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="flex w-full max-w-lg space-x-2 mb-4">
        <Input
          type="text"
          className="w-[500px] h-10 rounded border-none p-2 bg-slate-100 text-slate-600 text-sm placeholder-slate-400"
          placeholder="Faça uma pergunta..."
          onChange={handleChange}
          value={search}
        />
        <Button
          type="submit"
          className="h-10 bg-slate-600 rounded text-white p-2 text-sm w-24 flex items-center justify-center hover:bg-slate-700"
        >
          Procurar
        </Button>
      </div>

      {loading ? (
        <p className="text-center text-md text-slate-600">Carregando...</p>
      ) : Array.isArray(searchFilter) && searchFilter.length > 0 ? (
        <ul className="absolute top-72 flex flex-col w-full h-[200px] max-w-lg space-y-1 bg-slate-100 z-10 overflow-y-auto rounded shadow">
          {searchFilter.map((faq) => (
            <li
              key={faq.id}
              className="w-full h-fit flex flex-col items-center p-2 mb-1 gap-1 hover:bg-slate-200"
            >
              <Link
                href={`/faq/${faq.id}`}
                className="w-full h-full items-start text-left text-md text-slate-600"
              >
                {faq.question}
              </Link>
            </li>
          ))}
        </ul>
      ) : Array.isArray(searchFilter) && searchFilter.length === 0 ? (
        <p className="text-center text-md text-slate-600">
          Nenhuma pergunta encontrada
        </p>
      ) : null}
    </>
  );
};

export default SearchFaqs;
