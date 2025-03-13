"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// Définition du thème personnalisé
const theme = extendTheme({
  colors: {
    brand: {
      50: "#e6f5ff",
      100: "#b3d9ff",
      200: "#80bdff",
      300: "#4da1ff",
      400: "#1a85ff",
      500: "#0069e6",
      600: "#0052b3",
      700: "#003c80",
      800: "#00254d",
      900: "#000f1a",
    },
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
