import { Nav }     from "@/components/Nav";
import { Hero }    from "@/components/Hero";
import { About }   from "@/components/About";
import { Talks }   from "@/components/Talks";
import { Videos }  from "@/components/Videos";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Talks />
        <Videos />
        <Contact />
      </main>
    </>
  );
}
