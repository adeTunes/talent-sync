import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "ClearLink",
  description: "Uniting the world, one video call at a time",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider withCssVariables={false} theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
