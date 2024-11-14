import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div
      className="bg-[url('/src/assets/contact-bg.png')] h-full bg-[#ABA272]"
      id="contact"
    >
      <div>oi</div>
    </div>
  );
}
