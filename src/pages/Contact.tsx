import { useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  At,
  CaretDoubleRight,
  Envelope,
  IdentificationCard,
} from "@phosphor-icons/react";

const ContactForm = () => {
  const form = useRef(null);
  // const { t } = useTranslation("contact");

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log("Email sent.", result.text);
          setStatusMessage("Mensagem enviada com sucesso!"); // Mensagem de sucesso
          setStatusType("success"); // Tipo de status
        })
        .catch((error) => {
          console.log("Error, email not sent.", error.text);
          setStatusMessage("Ocorreu um erro. Tente novamente."); // Mensagem de erro
          setStatusType("error"); // Tipo de status
        });

      (e.currentTarget as HTMLFormElement).reset();
    } else {
      console.error("Reference not available.");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 py-5 w-[40%]"
    >
      <div className="glass-effect text-[#6B633C] gap-3 px-5 py-4 rounded-xl flex select-none">
        <IdentificationCard size={32} />
        <label className="sr-only">Your name:</label>
        <input
          type="text"
          name="client_name"
          placeholder="Nome"
          required
          className="bg-transparent placeholder:text-[#6B633C] w-[85%] focus:outline-none focus:border-b-2 focus:border-b-[#6B633C] text-gray-900 font-bold placeholder:pl-1"
        />
      </div>
      <div className="glass-effect text-[#6B633C] gap-3 px-5 py-4 rounded-xl flex select-none">
        <At size={32} />
        <label className="sr-only">Your email:</label>
        <input
          type="email"
          name="client_email"
          placeholder="Email"
          required
          className="bg-transparent placeholder:text-[#6B633C] w-[85%] focus:outline-none focus:border-b-2 focus:border-b-[#6B633C] text-gray-900 font-bold placeholder:pl-1"
        />
      </div>
      <div className="glass-effect text-[#6B633C] gap-3 px-5 py-4 rounded-xl flex select-none">
        <Envelope size={32} />
        <label className="sr-only">Message:</label>
        <textarea
          name="client_message"
          placeholder="Message"
          required
          className="bg-transparent placeholder:text-[#6B633C] w-[85%] focus:outline-none focus:border-b-2 focus:border-b-[#6B633C] text-gray-900 font-bold resize-none relative top-1 placeholder:pl-1"
        />
      </div>
      <button
        type="submit"
        className="flex items-center self-end gap-3 pr-8 text-gray-900 uppercase transition select-none font-murecho max-w-min hover:brightness-[0.3]"
      >
        <CaretDoubleRight size={20} weight="bold" className="relative top-px" />
        <p>enviar</p>
      </button>

      {statusMessage && (
        <div
          className={`mt-4 p-4 text-white rounded-xl ${
            statusType === "success" ? "bg-green-900" : "bg-red-500"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default function Contact() {
  // const { t } = useTranslation("contact");

  return (
    <div
      className="bg-[url('/src/assets/contact-bg.png')] h-screen bg-[#ABA272]"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="pb-2 text-3xl text-gray-900 uppercase font-murecho">
          entre em contato
        </h1>
        <p className="text-gray-900">
          Vamos conversar sobre seu próximo projeto!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
