import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import mainCSS from "./tailwind.css";
import { Providers } from "~/providers";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: mainCSS },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Providers>
      </body>
    </html>
  );
}
