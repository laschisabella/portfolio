import { Switch } from "@chakra-ui/react";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type LangSwitchProps = {
  setCvPt: (valor: boolean) => void;
};

export default function LangSwitch({ setCvPt }: LangSwitchProps) {
  const { i18n } = useTranslation();

  const [checked, setChecked] = useState(
    navigator.language.includes("pt") ? true : false
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (i18next.language.includes("pt")) {
      i18n.changeLanguage("en-US");
      setCvPt(false);
    } else if (!i18next.language.includes("pt")) {
      i18n.changeLanguage("pt-BR");
      setCvPt(true);
    }
  };

  return (
    <div className="flex items-center gap-2 text-sm font-bold text-gray-100 scale-90">
      <span>EN</span>
      <Switch size="lg" isChecked={checked} onChange={handleChange} />
      <span>PT</span>
    </div>
  );
}
