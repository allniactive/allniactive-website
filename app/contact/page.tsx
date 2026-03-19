export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">Contact</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s build your next activewear collection
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Share your idea, target market, quantity range, and timeline. We’ll help you move forward with sampling, development guidance, and bulk production support.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-sm">
          <h2 className="text-2xl font-semibold">Start your inquiry</h2>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Your name" />
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Email address" />
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Brand / company name" />
            <textarea className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Tell us what product you want to develop" />
            <button className="w-full rounded-full bg-slate-900 px-6 py-3 font-semibold text-white">Get Free Sample</button>
          </form>
        </div>
      </div>
    </main>
  );
}
