import useTypingAcademy from '../../hooks/useTypingAcademy';
import { AcademyContext } from '../../hooks/useAcademyContext';

export default function AcademyProvider({ children }) {
  const academy = useTypingAcademy();

  return <AcademyContext.Provider value={academy}>{children}</AcademyContext.Provider>;
}
