/**
 * Service pour gérer les opérations liées aux utilisateurs
 */

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/**
 * Récupère la liste des utilisateurs depuis l'API
 * @returns Promise contenant un tableau d'utilisateurs
 */
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    throw error;
  }
}

/**
 * Récupère un utilisateur spécifique par son ID
 * @param id L'identifiant de l'utilisateur
 * @returns Promise contenant les détails de l'utilisateur
 */
export async function getUserById(id: number): Promise<User> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'utilisateur ${id}:`,
      error
    );
    throw error;
  }
}
