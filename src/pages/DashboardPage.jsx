import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import ProgressBar from '../components/common/ProgressBar';
import DashboardStatCard from '../components/dashboard/DashboardStatCard';
import AchievementBadge from '../components/dashboard/AchievementBadge';
import RecentActivityList from '../components/dashboard/RecentActivityList';
import LessonStatsTable from '../components/dashboard/LessonStatsTable';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { TOTAL_LESSONS } from '../utils/constants';
import { formatDuration } from '../utils/typing';

export default function DashboardPage() {
  const { progress, progressSummary, activeLanguage } = useAcademyContext();
  const languageHistory = progress.history.filter((entry) => entry.language === activeLanguage);
  const bestSession = [...languageHistory].sort((a, b) => b.wpm - a.wpm)[0];

  const averageSessionTime = progress.totalSessions
    ? Math.round(progress.totalPracticeTime / progress.totalSessions)
    : 0;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <SectionHeader
          eyebrow="Progress Dashboard"
          title="Your typing growth at a glance"
          description="Track completion, speed, accuracy, and consistency over time."
          rightSlot={
            <Link
              to={`/lessons/${progress.currentLesson}`}
              className="rounded-xl bg-gradient-to-r from-ocean-500 to-mint-500 px-4 py-2 text-sm font-semibold text-ink-950"
            >
              Continue Learning
            </Link>
          }
        />
        <ProgressBar
          value={progressSummary.completionPercent}
          label={`${progressSummary.completedCount} of ${TOTAL_LESSONS} lessons completed`}
        />
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardStatCard label="Completed" value={`${progressSummary.completedCount}/${TOTAL_LESSONS}`} />
        <DashboardStatCard label="Current Lesson" value={progress.currentLesson} />
        <DashboardStatCard label="Best WPM" value={progressSummary.bestWpm || 0} />
        <DashboardStatCard label="Average Accuracy" value={`${progressSummary.averageAccuracy || 0}%`} />
        <DashboardStatCard label="Total Sessions" value={progress.totalSessions} />
        <DashboardStatCard label="Practice Time" value={formatDuration(progress.totalPracticeTime)} />
        <DashboardStatCard label="Average WPM" value={progressSummary.averageWpm || 0} />
        <DashboardStatCard label="Avg Session Time" value={formatDuration(averageSessionTime)} />
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-ocean-500/10 to-mint-500/10 p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-ocean-300">Continue Learning</p>
        <p className="mt-1 text-sm text-slate-100">
          Continue from lesson <span className="font-semibold">{progress.currentLesson}</span> to maintain your streak.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold text-white">Milestones</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {progress.achievements.length ? (
              progress.achievements.map((achievementId) => <AchievementBadge key={achievementId} id={achievementId} />)
            ) : (
              <p className="text-sm text-slate-400">Complete lessons to unlock achievements.</p>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold text-white">Recent Activity</h2>
          <div className="mt-4">
            <RecentActivityList history={languageHistory.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold text-white">Best Performance</h2>
        {bestSession ? (
          <p className="mt-2 text-sm text-slate-300">
            Lesson {bestSession.lessonId}: {bestSession.wpm} WPM at {bestSession.accuracy}% accuracy.
          </p>
        ) : (
          <p className="mt-2 text-sm text-slate-400">Complete a lesson to establish your best performance.</p>
        )}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold text-white">Lesson-wise Stats</h2>
        <div className="mt-4">
          <LessonStatsTable lessonStats={progress.lessonStats} language={activeLanguage} />
        </div>
      </section>
    </div>
  );
}
