import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LESSONS, LESSON_CATEGORIES } from '../data/lessons';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { getLessonStatus } from '../utils/progressSelectors';
import ProgressBar from '../components/common/ProgressBar';
import SectionHeader from '../components/common/SectionHeader';
import LessonCard from '../components/lessons/LessonCard';
import CategoryFilterChips from '../components/lessons/CategoryFilterChips';
import LessonSearch from '../components/lessons/LessonSearch';

export default function LessonsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('id-asc');
  const { progress, progressSummary } = useAcademyContext();

  const filteredLessons = useMemo(() => {
    const base = activeCategory === 'All' ? LESSONS : LESSONS.filter((lesson) => lesson.category === activeCategory);
    if (!query.trim()) return base;
    const normalized = query.trim().toLowerCase();
    const filtered = base.filter((lesson) =>
      `${lesson.title} ${lesson.keysPracticed} ${lesson.description}`.toLowerCase().includes(normalized)
    );
    return filtered;
  }, [activeCategory, query]);

  const displayedLessons = useMemo(() => {
    const items = [...filteredLessons];
    if (sortBy === 'difficulty') {
      const weight = { Easy: 1, Medium: 2, Hard: 3, Expert: 4 };
      items.sort((a, b) => (weight[a.difficulty] || 99) - (weight[b.difficulty] || 99));
    } else if (sortBy === 'id-desc') {
      items.sort((a, b) => b.id - a.id);
    } else {
      items.sort((a, b) => a.id - b.id);
    }
    return items;
  }, [filteredLessons, sortBy]);

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
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <CategoryFilterChips
            categories={LESSON_CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
          <LessonSearch query={query} onChange={setQuery} />
        </div>
        <div className="mt-4 max-w-xs">
          <label className="block text-xs uppercase tracking-[0.14em] text-slate-400">Sort</label>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-ocean-500"
          >
            <option value="id-asc">Lesson Number (Ascending)</option>
            <option value="id-desc">Lesson Number (Descending)</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </div>
      </section>

      <section className="rounded-2xl border border-ocean-500/30 bg-ocean-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.14em] text-ocean-300">Current Focus</p>
        <p className="mt-1 text-sm text-slate-100">
          You are currently on lesson <span className="font-bold">{progress.currentLesson}</span>. Complete it to unlock
          the next stage.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {displayedLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} status={getLessonStatus(lesson.id, progress)} />
        ))}
      </section>
    </div>
  );
}
