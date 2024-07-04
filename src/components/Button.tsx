import { CaretDoubleRight } from "@phosphor-icons/react";
import { DefaultTFuncReturn } from "i18next";

export default function Button({
  title,
  link,
  color = "text-purple-500",
}: {
  title: DefaultTFuncReturn;
  link: string;
  color?: string;
}) {
  const buttonClass = `flex items-center gap-1 px-4 py-2 font-bold ${color} uppercase transition cursor-pointer font-murecho hover:text-gray-100`;
  return (
    <a href={link} role="button" target="_blank">
      <div className={buttonClass}>
        <CaretDoubleRight weight="bold" size={18} className="text-gray-100" />
        <p className="mb-0.5">{title}</p>
      </div>
    </a>
  );
}
