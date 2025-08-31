import React from "react";

import { BackgroundLines } from "@/src/components/ui/background-lines";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Avatar, AvatarImage } from "@/src/components/ui/avatar";

const Waitlist = () => {
  return (
    <section className="relative flex h-full min-h-screen w-screen items-center justify-center overflow-hidden py-14">
      <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        <h2 className="relative z-20 py-2 text-center font-sans text-3xl font-semibold tracking-tighter md:py-10 lg:text-5xl">
          Cadastre-se na lista de espera
        </h2>
        <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          Cadastre-se na lista de espera para ser a primeira a usar o app.
        </p>
        <div className="relative z-20 mt-10 flex w-full max-w-md items-center gap-3 rounded-full p-1">
          <Input
            className="bg-muted h-10 w-full rounded-xl border-none shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-0 active:ring-0"
            placeholder="Digite seu email"
          />
          <Button className="h-10 rounded-xl">Cadastre-se</Button>
        </div>
        <div className="mt-10 flex items-center gap-2">
          <p className="text-muted-foreground/80 tracking-tight">
            +300 usuárias já se cadastraram
          </p>
        </div>
      </BackgroundLines>
    </section>
  );
};

export { Waitlist };
