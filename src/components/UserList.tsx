"use client";

import { useState, useEffect } from "react";
import { User, getUsers } from "../services/userService";
import {
  Box,
  Heading,
  Text,
  Link,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, ExternalLinkIcon } from "@chakra-ui/icons";

/**
 * Composant pour afficher une liste d'utilisateurs
 */
export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(
          "Erreur lors du chargement des utilisateurs. Veuillez réessayer plus tard."
        );
        console.error("Erreur de chargement:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" p="4">
        <Spinner />
        <Text mt="4">Chargement des utilisateurs...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box p="4" bg="red.100" color="red.800" borderRadius="md">
        {error}
      </Box>
    );
  }

  return (
    <Box p="4">
      <Heading as="h2" size="xl" mb="6">
        Liste des Utilisateurs
      </Heading>

      {users.length === 0 ? (
        <Text>Aucun utilisateur trouvé.</Text>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="6">
          {users.map((user) => (
            <GridItem key={user.id}>
              <Box p="5" shadow="md" borderWidth="1px" borderRadius="md">
                <Heading size="md" mb="2">
                  {user.name}
                </Heading>
                <Text fontWeight="bold" color="gray.500" mb="3">
                  @{user.username}
                </Text>

                <Box mb="2" display="flex" alignItems="center">
                  <EmailIcon mr="2" />
                  <Text>
                    <Link color="blue.500" href={`mailto:${user.email}`}>
                      {user.email}
                    </Link>
                  </Text>
                </Box>

                {user.phone && (
                  <Box mb="2" display="flex" alignItems="center">
                    <PhoneIcon mr="2" />
                    <Text>Téléphone: {user.phone}</Text>
                  </Box>
                )}

                {user.website && (
                  <Box mb="2" display="flex" alignItems="center">
                    <ExternalLinkIcon mr="2" />
                    <Text>
                      Site web:{" "}
                      <Link
                        color="blue.500"
                        href={`https://${user.website}`}
                        target="_blank"
                      >
                        {user.website}
                      </Link>
                    </Text>
                  </Box>
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}
