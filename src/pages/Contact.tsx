import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  At,
  CaretDoubleRight,
  Envelope,
  GithubLogo,
  Headset,
  IconProps,
  IdentificationCard,
  LinkedinLogo,
  Star,
  User,
  WhatsappLogo,
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
      className="scrollbar-thin scrollbar-thumb-purple-theme scrollbar-gray-100 bg-transparent placeholder:text-purple-theme w-[85%] focus:outline-none focus:border-b-2 focus:border-b-purple-theme text-gray-900 font-bold resize-none relative top-1 placeholder:pl-1"
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
      className="flex items-center justify-center bg-[url('/src/assets/services-bg.png')] min-h-screen bg-gray-100"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center h-full gap-20 lg:flex-row">
        <div className="flex flex-col items-center justify-center pt-16 lg:pt-0">
          <h1 className="pb-2 text-3xl uppercase lg:text-5xl text-purple-theme font-murecho">
            {t("title")}
          </h1>
          <p className="text-gray-900 lg:text-xl">{t("subtitle")}</p>
          <div className="relative scale-75 lg:scale-100 top-10">
            <User className="text-[15rem] text-purple-theme" />
            <Headset
              weight="fill"
              className="text-[13rem] absolute -top-10 left-4 text-gray-900"
            />
            <Star
              weight="fill"
              className="absolute text-yellow-theme top-20 left-12"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-murecho">{t("social")}</p>
          <div className="flex text-[2.2rem] lg:text-[2.5rem] lg:gap-3 pb-10 pt-3">
            <a
              href="https://www.linkedin.com/in/isabella-laschi/"
              aria-label="LinkedIn"
              target="_blank"
              className="bg-[#0E76A8] flex rounded-lg items-center px-2 py-1 gap-1 text-gray-100 hover:brightness-110 transition"
            >
              <LinkedinLogo />
              <p className="text-lg font-bold">Linkedin</p>
            </a>
            <a
              href="https://www.linkedin.com/in/isabella-laschi/"
              aria-label="LinkedIn"
              target="_blank"
              className="bg-[#171515] flex rounded-lg items-center px-2 py-1 gap-1 text-gray-100 hover:brightness-110 transition"
            >
              <GithubLogo />
              <p className="text-lg font-bold">Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/isabella-laschi/"
              aria-label="LinkedIn"
              target="_blank"
              className="bg-[#329431] flex rounded-lg items-center px-2 py-1 gap-1 text-gray-100 hover:brightness-110 transition"
            >
              <WhatsappLogo />
              <p className="text-lg font-bold">WhatsApp</p>
            </a>
          </div>
          <p className="text-lg">{t("form")}</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
