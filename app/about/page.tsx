export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">About ALLNI ACTIVE</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          A reliable manufacturing partner for growing activewear brands
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          ALLNI ACTIVE supports brands in yoga wear, gym wear, and swimwear with OEM and ODM manufacturing, fabric development, fast sampling, and repeat-order production support.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">What we do best</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Activewear product development</li>
              <li>• Fabric sourcing and material support</li>
              <li>• Fast sample and fit adjustment</li>
              <li>• Stable bulk production</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Who we work with</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Emerging activewear brands</li>
              <li>• Growing e-commerce brands</li>
              <li>• Boutique yoga and fitness labels</li>
              <li>• Brands scaling from sample to repeat orders</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
