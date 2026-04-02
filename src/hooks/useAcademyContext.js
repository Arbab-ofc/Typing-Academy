import { createContext, useContext } from 'react';

export const AcademyContext = createContext(null);

export function useAcademyContext() {
  const context = useContext(AcademyContext);
  if (!context) {
    throw new Error('useAcademyContext must be used within AcademyProvider');
  }
  return context;
}
