import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Outlet,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import mainCSS from "./tailwind.css";
import { NextUIProvider } from "@nextui-org/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: mainCSS },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>Remix flomo</title>
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
