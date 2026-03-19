const items = [
  {
    name: "Yoga Wear",
    desc: "Leggings, sports bras, tops, and sets designed for comfort, movement, and repeat sales.",
  },
  {
    name: "Gym Wear",
    desc: "Training apparel focused on fit, durability, and scalable production support.",
  },
  {
    name: "Swimwear",
    desc: "Custom swim collections with flexible development and trend-ready silhouettes.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Products</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Core product lines for activewear brands
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          We keep our offer focused so clients immediately understand where we create value: yoga wear, gym wear, and swimwear with OEM and ODM support.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              <div className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Custom logo / color / fabric
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
