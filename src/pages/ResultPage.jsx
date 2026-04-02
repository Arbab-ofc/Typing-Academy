import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ResultCard from '../components/practice/ResultCard';
import { getLessonByLanguageAndId } from '../data/courseData';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { loadRecentResult } from '../utils/storage';

export default function ResultPage() {
  const { lessonId } = useParams();
  const { activeLanguage } = useAcademyContext();
  const lesson = getLessonByLanguageAndId(activeLanguage, lessonId);
  const result = loadRecentResult();

  useEffect(() => {
    if (!result) return;

    toast.info('Progress saved locally');
    if (result.passed && result.unlockedNextLesson) {
      toast.success('Next lesson unlocked');
    }
  }, [result]);

  if (!lesson || !result || Number(lessonId) !== result.lessonId || result.language !== activeLanguage) {
    return <Navigate to="/lessons" replace />;
  }

  return <ResultCard result={result} lesson={lesson} />;
}
