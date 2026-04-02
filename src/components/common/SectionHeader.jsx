export default function SectionHeader({ eyebrow, title, description, rightSlot }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-500">{eyebrow}</p> : null}
        <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">{description}</p> : null}
      </div>
      {rightSlot ? <div>{rightSlot}</div> : null}
    </div>
  );
}
