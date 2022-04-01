import { json, LoaderFunction } from "remix";
import { i18n } from "../../i18n.server";
import { useTranslation } from "react-i18next";
import { Header } from "../components/header";
import styles from "../styles/home.css"

export let loader: LoaderFunction = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ["common"]),
  });
};
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Home() {
    const { t } = useTranslation("common");
    return (
      <section>
        <Header t={t} />
        <div className="flex items-center min-h-screen justify-center bg-img">
          <div>
              <h1 className="text-5xl text-yellow-700 mb-4">{t("landing.ourWedding")}</h1>
              <h2 className="text-4xl md:text-7xl lg:text-9xl text-yellow-900">Daniela & Daniel</h2>
              <p>SAVE THE DATE</p>
          </div>
        </div>
        <p className="mt-48">gg</p>
      </section>
    );
  }