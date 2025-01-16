import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { fetchUsers, createUser, updateUser as updateUserApi, deleteUser } from '../utils/api';
import { UserRequestDTO, UserResponseDTO } from '../types/UserTypes';
import { toast } from 'react-toastify'; // Import for notifications


interface UserContextType {
  users: UserResponseDTO[];
  addUser: (user: UserRequestDTO) => void;
  updateUser: (id: string, user: UserRequestDTO) => void;
  removeUser: (id: string) => void;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within a UserProvider');
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserResponseDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const addUser = async (user: UserRequestDTO) => {
    try {
      const newUser = await createUser(user);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      toast.success('User created successfully!'); // Success notification
    } catch (error) {
      setError('Failed to create user');
      toast.error('Error: Failed to create user'); // Error notification
    }
  };

  const updateUser = async (id: string, user: UserRequestDTO) => {
    try {
      const updatedUser = await updateUserApi(id, user); // Ensure you call the correct API method
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
    } catch (error) {
      setError('Failed to update user');
    }
  };

  const removeUser = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, removeUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
