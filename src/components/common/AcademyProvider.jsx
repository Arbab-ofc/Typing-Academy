import useTypingAcademy from '../../hooks/useTypingAcademy';
import useAcademySettings from '../../hooks/useAcademySettings';
import { AcademyContext } from '../../hooks/useAcademyContext';

export default function AcademyProvider({ children }) {
  const academy = useTypingAcademy();
  const settingsApi = useAcademySettings();

  return <AcademyContext.Provider value={{ ...academy, ...settingsApi }}>{children}</AcademyContext.Provider>;
}
