import { json, LinksFunction, LoaderFunction } from "remix";
import { useEffect } from "react";
import { i18n } from "../../i18n.server";
import { useTranslation } from "react-i18next";
import { atcb_action } from 'add-to-calendar-button'
import { Header } from "../components/header";
import homeStyles from "../styles/home.css"
import timerStlyles from "../styles/datetime.css";
import calendarBtnStyles from "add-to-calendar-button/assets/css/atcb.min.css";
import Timer from "../components/timer/CountDownTimer";

export let loader: LoaderFunction = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ["common"]),
  });
};
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: homeStyles },
    { rel: "stylesheet", href: timerStlyles },
    { rel: "stylesheet", href: calendarBtnStyles}
  ];
}

export default function Home() {
    const { t } = useTranslation("common");
    useEffect(() => {
      const config = {
        name: t("weddingName"),
        startDate: "2022-10-01",
        endDate: "2022-10-02",
        startTime:"20:00",
        endTime:"02:00",
        options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'MicrosoftTeams', 'Yahoo'],
        timeZone: "America/Chihuahua",
        trigger: "click",
        iCalFileName: "Danis Wedding",
      }
      const button: HTMLElement | null = document.querySelector('#calendar-button')
      button?.addEventListener('click', () => atcb_action((config as any), button))
    }, [t]);
    return (
      <section>
        <Header t={t} />
        <div className="flex items-center min-h-screen justify-center bg-img">
          <div>
              <h1 className="text-5xl text-yellow-700 mb-4">{t("landing.ourWedding")}</h1>
              <h2 className="text-4xl md:text-7xl lg:text-9xl text-yellow-900">Daniela & Daniel</h2>
              <p className="py-1 pt-6 md:text-center text-xl text-yellow-700">SAVE THE DATE</p>
              <div className="counter-container">
                <Timer targetDate={new Date("10-01-2022 20:00:00")} t={t} />
                <p className="md:text-center text-yellow-800 font-bold text-2xl">{t("date")}</p>
              </div>
              <div className="w-full flex">
                <button id="calendar-button" className="md:m-auto font-bold w-full md:w-auto">{t('landing.addCalendar')}</button>
              </div>
          </div>
        </div>
        <p className="mt-48">gg</p>
      </section>
    );
  }