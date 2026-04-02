import {
  FiClock,
  FiDatabase,
  FiFlag,
  FiLayers,
  FiTarget,
  FiTrendingUp
} from 'react-icons/fi';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import RoadmapPreview from '../components/home/RoadmapPreview';
import CategoryPreview from '../components/home/CategoryPreview';
import SectionHeader from '../components/common/SectionHeader';
import StatCard from '../components/common/StatCard';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { TOTAL_LESSONS } from '../utils/constants';

const features = [
  {
    icon: FiLayers,
    title: '50 Guided Lessons',
    description: 'A structured journey from fundamentals to final mastery.'
  },
  {
    icon: FiTrendingUp,
    title: 'Real-time Feedback',
    description: 'Live accuracy, WPM, and mistake tracking while you type.'
  },
  {
    icon: FiDatabase,
    title: 'Saved Progress',
    description: 'Your sessions and settings persist locally across visits.'
  },
  {
    icon: FiFlag,
    title: 'Unlock System',
    description: 'Complete lessons to unlock the next challenge naturally.'
  },
  {
    icon: FiTarget,
    title: 'Speed + Accuracy',
    description: 'Balanced training that rewards precision and control.'
  },
  {
    icon: FiClock,
    title: 'Beginner to Mastery',
    description: 'Grow from posture drills to real-world paragraph fluency.'
  }
];

export default function HomePage() {
  const { progress, progressSummary } = useAcademyContext();

  return (
    <div className="space-y-14 sm:space-y-16">
      <HeroSection currentLessonId={progress.currentLesson} />

      <section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard label="Total Lessons" value={TOTAL_LESSONS} />
          <StatCard label="Completed" value={progressSummary.completedCount} />
          <StatCard label="Current Lesson" value={progress.currentLesson} />
          <StatCard label="Best WPM" value={progressSummary.bestWpm || 0} />
          <StatCard label="Avg Accuracy" value={`${progressSummary.averageAccuracy || 0}%`} />
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Why Typing Academy"
          title="Designed like a premium learning product"
          description="Focused lessons, polished interactions, and progress visibility built into every screen."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Course Roadmap"
          title="Step-by-step progression"
          description="Learn row by row, then graduate to real-world typing performance."
        />
        <RoadmapPreview />
      </section>

      <section>
        <SectionHeader
          eyebrow="Categories"
          title="Curriculum coverage"
          description="Every category builds a specific capability in your typing skillset."
        />
        <CategoryPreview />
      </section>
    </div>
  );
}
