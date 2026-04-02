import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LESSONS, LESSON_CATEGORIES } from '../data/lessons';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { getLessonStatus } from '../utils/progressSelectors';
import ProgressBar from '../components/common/ProgressBar';
import SectionHeader from '../components/common/SectionHeader';
import LessonCard from '../components/lessons/LessonCard';
import CategoryFilterChips from '../components/lessons/CategoryFilterChips';

export default function LessonsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { progress, progressSummary } = useAcademyContext();

  const filteredLessons = useMemo(() => {
    if (activeCategory === 'All') return LESSONS;
    return LESSONS.filter((lesson) => lesson.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <SectionHeader
          eyebrow="Lesson Path"
          title="50 lessons to build complete typing fluency"
          description="Progress unlocks sequentially. Complete your current lesson to move forward."
          rightSlot={
            <Link
              to={`/lessons/${progress.currentLesson}`}
              className="inline-flex rounded-xl bg-gradient-to-r from-ocean-500 to-mint-500 px-4 py-2 text-sm font-semibold text-ink-950"
            >
              Resume Current Lesson
            </Link>
          }
        />

        <ProgressBar value={progressSummary.completionPercent} label="Overall completion" />
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <CategoryFilterChips
          categories={LESSON_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} status={getLessonStatus(lesson.id, progress)} />
        ))}
      </section>
    </div>
  );
}
