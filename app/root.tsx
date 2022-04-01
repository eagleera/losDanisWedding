import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  LoaderFunction,
  useLoaderData
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";
import { i18n } from "../i18n.server";
import { useSetupTranslations } from "remix-i18next";
import styles from "./styles/app.css";

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  console.log(request, locale);
  return json({ locale });
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "http://fonts.cdnfonts.com/css/leky-calgria"
    }
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Los Danis Wedding" };
};

export default function App() {
  let { locale } = useLoaderData<{ locale: string }>();
  useSetupTranslations(locale);
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
