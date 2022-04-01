import { json, LoaderFunction } from "remix";
import { i18n } from "../../i18n.server";
import { useTranslation } from "react-i18next";
import { Header } from "../components/header";

export let loader: LoaderFunction = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ["common"]),
  });
};

export default function Home() {
    const { t } = useTranslation("common");
    return (
      <section>
        <Header t={t} />
        <div className="flex items-center min-h-screen justify-center bg-yellow">
          <h1 className="text-5xl">SITE UNDER CONSTRUCTION</h1>
        </div>
      </section>
    );
  }