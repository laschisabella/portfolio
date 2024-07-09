import { MapPin, At, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Switch } from "@chakra-ui/react";
import Button from "./Button";

export default function About() {
  const { t, i18n } = useTranslation();

  const PtCv =
    "https://drive.google.com/file/d/1qWisNQQEY4EeMnht48WsBL8bqd5Vf1gN/view";
  const EnCv =
    "https://drive.google.com/file/d/1spP8wYN8hCjiRyV8GzZVjK0OpIE8k1qe/view";

  const [checked, setChecked] = useState(
    navigator.language.includes("pt") ? true : false
  );

  const [cvUrl, setCvUrl] = useState(
    navigator.language.includes("pt") ? PtCv : EnCv
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (i18next.language.includes("pt")) {
      i18n.changeLanguage("en-US");
      setCvUrl(EnCv);
    } else if (!i18next.language.includes("pt")) {
      i18n.changeLanguage("pt-BR");
      setCvUrl(PtCv);
    }
  };

  return (
    <div className="p-8 mt-5 text-gray-100 bg-gray-500 rounded-md">
      <div className="flex items-center justify-end gap-2">
        <span className="text-sm font-bold">EN</span>
        <Switch size="lg" isChecked={checked} onChange={handleChange} />
        <span className="text-sm font-bold">PT</span>
      </div>

      <h1 className="text-2xl text-black">
        <span className="font-bold">{t("about.titleFirst")}</span>{" "}
        {t("about.titleSecond")}
      </h1>
      <p className="font-light">{t("about.description")}</p>

      <div className="my-5">
        <span className="flex items-center gap-3">
          <MapPin size={20} color="#fff" weight="fill" />
          <span>{t("about.location")}</span>
        </span>
        <span className="flex items-center gap-3 transition cursor-pointer hover:text-black">
          <At size={20} color="#fff" />
          <a href="mailto:laschi.isabella@gmail.com">
            laschi.isabella@gmail.com
          </a>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-gray-900">
          <a
            href="https://github.com/laschisabella"
            target="_blank"
            role="button"
          >
            <GithubLogo
              size={32}
              weight="fill"
              className="transition rounded cursor-pointer hover:text-white hover:bg-gray-900"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/isabella-laschi/"
            target="_blank"
            role="button"
          >
            <LinkedinLogo
              size={32}
              weight="fill"
              className="transition rounded cursor-pointer hover:text-white hover:bg-gray-900"
            />
          </a>
        </div>
        <Button title={t("about.button")} link={cvUrl} color="text-black" />
      </div>
    </div>
  );
}
