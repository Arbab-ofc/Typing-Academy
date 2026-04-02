import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LESSONS, LESSON_CATEGORIES } from '../data/lessons';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { getLessonStatus } from '../utils/progressSelectors';
import ProgressBar from '../components/common/ProgressBar';
import SectionHeader from '../components/common/SectionHeader';
import LessonCard from '../components/lessons/LessonCard';
import CategoryFilterChips from '../components/lessons/CategoryFilterChips';
import LessonSearch from '../components/lessons/LessonSearch';
import EmptyState from '../components/common/EmptyState';

export default function LessonsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('id-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const { progress, progressSummary, settings } = useAcademyContext();
  const learningMode = settings.learningMode || 'mission';

  const filteredLessons = useMemo(() => {
    const base = activeCategory === 'All' ? LESSONS : LESSONS.filter((lesson) => lesson.category === activeCategory);
    if (!query.trim()) return base;
    const normalized = query.trim().toLowerCase();
    return base.filter((lesson) => `${lesson.title} ${lesson.keysPracticed} ${lesson.description}`.toLowerCase().includes(normalized));
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

  const totalPages = Math.max(1, Math.ceil(displayedLessons.length / pageSize));

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query, sortBy, pageSize]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedLessons = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return displayedLessons.slice(startIndex, startIndex + pageSize);
  }, [displayedLessons, currentPage, pageSize]);

  const statusCounts = useMemo(
    () => ({
      completed: LESSONS.filter((lesson) => getLessonStatus(lesson.id, progress, learningMode) === 'completed').length,
      unlocked: LESSONS.filter((lesson) => getLessonStatus(lesson.id, progress, learningMode) === 'unlocked').length,
      locked: LESSONS.filter((lesson) => getLessonStatus(lesson.id, progress, learningMode) === 'locked').length
    }),
    [progress, learningMode]
  );

  return (
    <div className="space-y-5 sm:space-y-7">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <SectionHeader
          eyebrow="Lesson Path"
          title="250 lessons to build complete typing fluency"
          description={
            learningMode === 'unlocked'
              ? 'Unlocked Mode is active. You can start any lesson instantly.'
              : 'Mission Mode is active. Complete your current lesson to unlock the next stage.'
          }
          rightSlot={
            <Link
              to={`/lessons/${progress.currentLesson}`}
              className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-ocean-500 to-mint-500 px-4 py-2 text-sm font-semibold text-ink-950 sm:w-auto"
            >
              Resume Current Lesson
            </Link>
          }
        />

        <ProgressBar value={progressSummary.completionPercent} label="Overall completion" />
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <CategoryFilterChips categories={LESSON_CATEGORIES} activeCategory={activeCategory} onChange={setActiveCategory} />
          <LessonSearch query={query} onChange={setQuery} />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
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
          <div>
            <label className="block text-xs uppercase tracking-[0.14em] text-slate-400">Per Page</label>
            <select
              value={pageSize}
              onChange={(event) => setPageSize(Number(event.target.value))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-ink-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-ocean-500"
            >
              <option value={9}>9 lessons</option>
              <option value={12}>12 lessons</option>
              <option value={15}>15 lessons</option>
              <option value={18}>18 lessons</option>
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-ocean-500/30 bg-ocean-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.14em] text-ocean-300">Current Focus</p>
        <p className="mt-1 text-sm text-slate-100">
          {learningMode === 'unlocked' ? (
            <>
              Unlocked Mode is enabled. All <span className="font-bold">{LESSONS.length}</span> lessons are available.
            </>
          ) : (
            <>
              You are currently on lesson <span className="font-bold">{progress.currentLesson}</span>. Complete it to unlock the next stage.
            </>
          )}
        </p>
      </section>

      <section className="flex flex-wrap gap-2">
        <span className="rounded-full border border-mint-500/30 bg-mint-500/10 px-3 py-1 text-xs text-mint-200">Completed: {statusCounts.completed}</span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-200">Unlocked: {statusCounts.unlocked}</span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">Locked: {statusCounts.locked}</span>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedLessons.length ? (
          paginatedLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} status={getLessonStatus(lesson.id, progress, learningMode)} />
          ))
        ) : (
          <div className="sm:col-span-2 xl:col-span-3">
            <EmptyState title="No lessons found" description="Try a different category or keyword to find matching lessons." />
          </div>
        )}
      </section>

      {displayedLessons.length ? (
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-300">
              Page <span className="font-semibold text-white">{currentPage}</span> of{' '}
              <span className="font-semibold text-white">{totalPages}</span>
            </p>
            <p className="text-xs text-slate-400 sm:text-xs sm:uppercase sm:tracking-[0.12em]">
              Showing {Math.min((currentPage - 1) * pageSize + 1, displayedLessons.length)}-
              {Math.min(currentPage * pageSize, displayedLessons.length)} of {displayedLessons.length}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              First
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Last
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
