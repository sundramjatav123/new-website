export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-violet-500 to-accent p-[1px] shadow-glow">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-950 text-white font-bold">A</div>
      </div>
      <div>
        <p className="font-semibold text-lg leading-tight">AlphaWeb Studio</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">Code • Design • Innovation</p>
      </div>
    </div>
  );
}
