import SectionHeader from '../components/common/SectionHeader';
import FaqItem from '../components/about/FaqItem';

const helpCards = [
  {
    title: 'How the Course Works',
    content:
      'Typing Academy unlocks lessons sequentially. Each lesson targets a specific skill and builds on previous muscle memory.'
  },
  {
    title: 'What WPM Means',
    content:
      'Words Per Minute measures speed. Formula: (typed characters / 5) divided by elapsed minutes.'
  },
  {
    title: 'What Accuracy Means',
    content:
      'Accuracy tracks precision. Formula: correct characters / total typed characters multiplied by 100.'
  },
  {
    title: 'Posture Basics',
    content:
      'Sit upright, keep shoulders relaxed, feet flat, elbows near 90 degrees, and wrists neutral above the keyboard.'
  },
  {
    title: 'Finger Placement',
    content:
      'Use home row anchors: left hand on A S D F, right hand on J K L ; and thumbs on space bar.'
  },
  {
    title: 'How to Progress Faster',
    content:
      'Prioritize accuracy first, then speed. Practice daily in short sessions and repeat difficult lessons.'
  }
];

const faqItems = [
  {
    question: 'How often should I practice?',
    answer: 'Practice 15 to 25 minutes daily for steady progress without fatigue.'
  },
  {
    question: 'Should I look at the keyboard?',
    answer: 'Avoid it as much as possible. Building screen-focused muscle memory is essential.'
  },
  {
    question: 'When should I move to the next lesson?',
    answer: 'Move ahead after meeting lesson goals with confidence and repeatability.'
  }
];

const checklist = [
  'Sit upright with relaxed shoulders.',
  'Place fingers on home row before every drill.',
  'Look at screen, not keyboard.',
  'Prioritize 90%+ accuracy.',
  'Repeat challenging lessons before moving ahead.'
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <SectionHeader
          eyebrow="About & Help"
          title="Learn the method behind better typing"
          description="Use this guide whenever you need clarity on metrics, posture, or progression strategy."
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {helpCards.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="font-display text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{item.content}</p>
          </article>
        ))}
      </section>

      <section className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold text-white">Quick FAQ</h2>
        {faqItems.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold text-white">Before You Practice</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {checklist.map((item) => (
            <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
