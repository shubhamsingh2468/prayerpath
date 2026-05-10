import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  age?: string;
  phoneUsage?: string;
  apps?: string[];
  goals?: string[];
  commitment?: string;
  hasSeenPaywall?: boolean;
}

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    apps: ['TikTok', 'Instagram', 'YouTube'],
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}
