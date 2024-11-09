import ContactForm from "@/../components/ContactForm";
import React from "react";
import { FloatingNav } from "../../../../components/ui/FloatingNav";
import { navItems } from "../../../../data";

const Page = () => {
  return (
      <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="h-[650px] w-full bg-cover bg-center flex items-center justify-center"
    >
      <FloatingNav navItems={navItems} />
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;