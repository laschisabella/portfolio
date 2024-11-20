import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  At,
  CaretDoubleRight,
  Envelope,
  IconProps,
  IdentificationCard,
} from "@phosphor-icons/react";

const InputField = ({
  icon: Icon,
  name,
  placeholder,
  type = "text",
  required = true,
}: {
  icon: React.ComponentType<IconProps>;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) => (
  <div className="flex gap-3 px-5 py-4 select-none bg-gray-600/10 backdrop-blur-sm text-purple-theme rounded-xl">
    <Icon size={32} />
    <label className="sr-only">{placeholder}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="bg-transparent placeholder:text-purple-theme w-[85%] focus:outline-none focus:border-b-2 focus:border-b-purple-theme text-gray-900 font-bold placeholder:pl-1"
    />
  </div>
);

const TextareaField = ({
  icon: Icon,
  name,
  placeholder,
  rows = 4,
  required = true,
}: {
  icon: React.ComponentType<IconProps>;
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
}) => (
  <div className="flex gap-3 px-5 py-4 select-none bg-gray-600/10 backdrop-blur-sm text-purple-theme rounded-xl">
    <Icon size={32} />
    <label className="sr-only">{placeholder}</label>
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="scrollbar-thin scrollbar-thumb-purple-theme scrollbar-track-[#ABA272] bg-transparent placeholder:text-purple-theme w-[85%] focus:outline-none focus:border-b-2 focus:border-b-purple-theme text-gray-900 font-bold resize-none relative top-1 placeholder:pl-1"
    />
  </div>
);

const ContactForm = () => {
  const form = useRef(null);
  const { t } = useTranslation("contact");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
      .env;

    if (form.current) {
      emailjs
        .sendForm(
          VITE_SERVICE_ID,
          VITE_TEMPLATE_ID,
          form.current,
          VITE_PUBLIC_KEY
        )
        .then((result) => {
          console.log("Email sent.", result.text);
          setStatusMessage(t("formSuccess"));
          setStatusType("success");
        })
        .catch((error) => {
          console.log("Error, email not sent.", error.text);
          setStatusMessage(t("formError"));
          setStatusType("error");
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
      className="flex flex-col gap-3 py-5 w-full lg:w-[30vw]"
    >
      <InputField
        icon={IdentificationCard}
        name="client_name"
        placeholder={t("field.name")}
      />
      <InputField
        icon={At}
        name="client_email"
        placeholder={t("field.email")}
        type="email"
      />
      <TextareaField
        icon={Envelope}
        name="client_message"
        placeholder={t("field.message")}
      />

      <button
        type="submit"
        className="flex items-center self-end gap-3 pr-8 text-lg text-gray-900 uppercase transition select-none font-murecho max-w-min hover:brightness-[0.3]"
      >
        <CaretDoubleRight size={20} weight="bold" className="relative top-px" />
        <p>{t("field.send")}</p>
      </button>

      {statusMessage && (
        <div
          className={`mt-4 p-4 text-white rounded-xl text-center ${
            statusType === "success" ? "bg-[#558000]/70" : "bg-red-900/70"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div
      className="flex items-center justify-center bg-[url('/src/assets/services-bg.png')] min-h-screen bg-gray-100 "
      id="contact"
    >
      <div className="flex flex-col items-center justify-center h-full gap-10 lg:flex-row">
        <div>
          <h1 className="pb-2 text-5xl uppercase text-purple-theme font-murecho">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-900">{t("subtitle")}</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
