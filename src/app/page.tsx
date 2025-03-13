"use client";

import Image from "next/image";
import UserList from "../components/UserList";
import { Box, Container, Heading, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" py="4">
      <Flex direction="column" align="center">
        <Box my="4">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </Box>

        <Heading as="h1" size="2xl" textAlign="center" mb="6">
          Gestion des Utilisateurs
        </Heading>

        {/* Intégration du composant UserList */}
        <Box w="full" maxW="4xl" mx="auto">
          <UserList />
        </Box>

        <Flex justify="center" gap="4" mt="8">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #e2e8f0",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              textDecoration: "none",
            }}
          >
            Read our docs
          </a>
        </Flex>
      </Flex>

      <Flex as="footer" justify="center" mt="16" gap="8">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <Image src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </Flex>
    </Container>
  );
}
