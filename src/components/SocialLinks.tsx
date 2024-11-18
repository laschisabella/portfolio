import { LinkedinLogo, GithubLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function SocialLinks() {
  return (
    <div className="hidden md:flex text-[2.2rem] lg:text-[2.5rem] gap-0 lg:gap-3">
      <a
        href="https://www.linkedin.com/in/isabella-laschi/"
        aria-label="LinkedIn"
        target="_blank"
      >
        <LinkedinLogo className="bg-transparent rounded-md text-gray-100 p-1 transition hover:bg-[#0E76A8]" />
      </a>
      <a
        href="https://github.com/laschisabella"
        aria-label="GitHub"
        target="_blank"
      >
        <GithubLogo className="p-1 text-gray-100 transition bg-transparent rounded-md hover:bg-[#171515]" />
      </a>
      <a
        href="https://wa.me/5511985454303"
        aria-label="WhatsApp"
        target="_blank"
      >
        <WhatsappLogo className="bg-transparent rounded-md text-gray-100 p-1 transition hover:bg-[#329431]" />
      </a>
    </div>
  );
}
