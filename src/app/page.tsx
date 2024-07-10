"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center h-[80vh]">
          <h1 className="text-5xl font-bold text-center m-4">
            Olá! Como podemos ajudá-lo?
          </h1>
          <div className="flex w-3/12 items-center space-x-2">
            <Input type="email" className="w-full rounded border-none p-2 bg-slate-100 text-slate-600 text-sm placeholder-slate-400" placeholder="Faça uma pergunta..." />
            <Button type="submit" className="bg-slate-600 rounded text-white">Procurar</Button>
          </div>
          <div className="flex w-full items-center justify-center space-x-4 mt-24">
            <div className="w-52 h-52 bg-slate-100 shadow-md rounded"></div>
            <div className="w-52 h-52 bg-slate-100 shadow-md rounded"></div>
            <div className="w-52 h-52 bg-slate-100 shadow-md rounded"></div>
            <div className="w-52 h-52 bg-slate-100 shadow-md rounded"></div>
            <div className="w-52 h-52 bg-slate-100 shadow-md rounded"></div>
            <div className="w-52 h-52 bg-slate-100 shadow-md rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
