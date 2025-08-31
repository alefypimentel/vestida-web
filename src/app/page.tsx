import { Hero } from "@/src/components/hero";
import { Waitlist } from "@/src/components/waitlist";
import { Faq } from "@/src/components/faq";
import { Why } from "@/src/components/why";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div className="flex justify-center pt-8">
          <img src="/logo.svg" className="max-h-14 dark:invert" alt="logo" />
        </div>

        <Hero />
        <Why />
        <Faq />
      </main>
      {/* <Waitlist /> */}
    </>
  );
}
