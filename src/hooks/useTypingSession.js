import { useEffect, useMemo, useState } from 'react';
import {
  calculateAccuracy,
  calculateProgress,
  calculateWpm,
  evaluateLessonCompletion
} from '../utils/typing';

export default function useTypingSession({ lessonId, targetText, inputTransformer }) {
  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    setTypedText('');
    setStartTime(null);
    setElapsedSeconds(0);
  }, [lessonId, targetText]);

  useEffect(() => {
    if (!startTime) return undefined;

    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 500);

    return () => clearInterval(timer);
  }, [startTime]);

  const metrics = useMemo(() => {
    let correctCharacters = 0;
    for (let i = 0; i < typedText.length; i += 1) {
      if (typedText[i] === targetText[i]) correctCharacters += 1;
    }

    const typedCharacters = typedText.length;
    const mistakes = typedCharacters - correctCharacters;

    return {
      typedCharacters,
      correctCharacters,
      mistakes,
      wpm: calculateWpm(typedCharacters, elapsedSeconds),
      accuracy: calculateAccuracy(correctCharacters, typedCharacters),
      progress: calculateProgress(typedCharacters, targetText.length)
    };
  }, [elapsedSeconds, targetText, typedText]);

  const isStarted = Boolean(startTime);
  const isComplete = typedText.length >= targetText.length;
  const activeIndex = Math.min(typedText.length, targetText.length - 1);

  const completionMeta = evaluateLessonCompletion(metrics.accuracy, metrics.wpm, lessonId);

  const onTextChange = (nextValue) => {
    const transformed = typeof inputTransformer === 'function' ? inputTransformer(nextValue) : nextValue;
    const limited = transformed.slice(0, targetText.length);

    if (!startTime && limited.length > 0) {
      setStartTime(Date.now());
    }

    setTypedText(limited);
  };

  const restart = () => {
    setTypedText('');
    setStartTime(null);
    setElapsedSeconds(0);
  };

  return {
    typedText,
    elapsedSeconds,
    metrics,
    isStarted,
    isComplete,
    activeIndex,
    completionMeta,
    onTextChange,
    restart
  };
}
