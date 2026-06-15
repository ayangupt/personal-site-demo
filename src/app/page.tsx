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
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Talks />
        <div className="section-divider" />
        <Videos />
        <div className="section-divider" />
        <Contact />
      </main>
    </>
  );
}
