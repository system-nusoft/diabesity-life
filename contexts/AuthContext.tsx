"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
  communityBanned?: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAdmin: boolean;
  isBanned: boolean;
  bannedUsers: string[];
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName?: string,
  ) => Promise<void>;
  logout: () => void;
  banUser: (userId: string) => Promise<void>;
  unbanUser: (userId: string) => Promise<void>;
  isUserBanned: (userId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bannedUsers, setBannedUsers] = useState<string[]>([]);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedBannedUsers = localStorage.getItem("bannedUsers");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    if (storedBannedUsers) {
      setBannedUsers(JSON.parse(storedBannedUsers));
    }
    setIsLoading(false);
  }, []);

  const isAdmin = user?.role === "admin";
  // Use communityBanned from server-side user object if available,
  // otherwise fall back to the local bannedUsers list
  const isBanned = user
    ? (user.communityBanned ?? bannedUsers.includes(user.id))
    : false;

  const banUser = async (userId: string) => {
    if (token) {
      await fetch(`${API_BASE_URL}/community/users/${userId}/ban`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    const newBannedUsers = [...bannedUsers, userId];
    setBannedUsers(newBannedUsers);
    localStorage.setItem("bannedUsers", JSON.stringify(newBannedUsers));
  };

  const unbanUser = async (userId: string) => {
    if (token) {
      await fetch(`${API_BASE_URL}/community/users/${userId}/ban`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    const newBannedUsers = bannedUsers.filter((id) => id !== userId);
    setBannedUsers(newBannedUsers);
    localStorage.setItem("bannedUsers", JSON.stringify(newBannedUsers));
  };

  const isUserBanned = (userId: string) => {
    return bannedUsers.includes(userId);
  };

  const login = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    const data = await response.json();
    setToken(data.access_token);
    setUser(data.user);
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName?: string,
    role = "user",
  ) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, role }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Signup failed");
    }

    return await response.json();
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAdmin,
        isBanned,
        bannedUsers,
        login,
        signup,
        logout,
        banUser,
        unbanUser,
        isUserBanned,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
