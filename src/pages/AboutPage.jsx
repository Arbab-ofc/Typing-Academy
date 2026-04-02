import SectionHeader from '../components/common/SectionHeader';

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
    </div>
  );
}
