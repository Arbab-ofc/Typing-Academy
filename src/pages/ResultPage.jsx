import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ResultCard from '../components/practice/ResultCard';
import { getLessonById } from '../data/lessons';
import { loadRecentResult } from '../utils/storage';

export default function ResultPage() {
  const { lessonId } = useParams();
  const lesson = getLessonById(lessonId);
  const result = loadRecentResult();

  useEffect(() => {
    if (!result) return;

    toast.info('Progress saved locally');
    if (result.passed && result.unlockedNextLesson) {
      toast.success('Next lesson unlocked');
    }
  }, [result]);

  if (!lesson || !result || Number(lessonId) !== result.lessonId) {
    return <Navigate to="/lessons" replace />;
  }

  return <ResultCard result={result} lesson={lesson} />;
}
