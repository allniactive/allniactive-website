import Link from "next/link";

const metrics = [
  { label: "Annual Export", value: "$5M–$10M" },
  { label: "Monthly Capacity", value: "60K–150K pcs" },
  { label: "Certifications", value: "BSCI / GRS" },
  { label: "Main Markets", value: "US / UK / AU" },
];

const strengths = [
  "In-house fabric development",
  "7-day fast sampling",
  "Flexible MOQ from 1000 pcs",
  "Stable OEM / ODM support",
  "Repeat-order production experience",
  "Support for growing brands",
];

const products = [
  {
    title: "Yoga Wear",
    description:
      "High-waist leggings, sports bras, tops, and coordinated sets designed for comfort, movement, and repeat sales.",
    bestFor: "Growing yoga and activewear brands",
    tag: "Custom logo / color / fabric",
  },
  {
    title: "Gym Wear",
    description:
      "Performance-driven training apparel with strong fit, durability, and practical development support for scaling collections.",
    bestFor: "Fitness labels and e-commerce brands",
    tag: "OEM & ODM support",
  },
  {
    title: "Swimwear",
    description:
      "Trend-ready swim collections with reliable construction, flexible customization, and efficient sample-to-bulk workflow.",
    bestFor: "Boutique brands and seasonal launches",
    tag: "Fast sample development",
  },
];

const caseStudies = [
  {
    title: "High-Waist Yoga Leggings",
    description:
      "Optimized for squat-proof coverage, stretch recovery, and stable quality across repeat production.",
    result: "100,000+ pcs / year",
  },
  {
    title: "Seamless Sports Bra",
    description:
      "Improved support, comfort, and fit through material upgrade and structural refinement for better sell-through.",
    result: "Repeat orders across multiple seasons",
  },
  {
    title: "Custom Swimwear Collection",
    description:
      "Supported trend-focused brand launches with fast development, clear communication, and reliable bulk follow-through.",
    result: "ODM development support",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Product Development",
    description:
      "We review your idea, target market, and product direction before development starts.",
  },
  {
    step: "02",
    title: "Fabric Sourcing",
    description:
      "Fabric options are matched to performance, hand feel, price point, and collection goals.",
  },
  {
    step: "03",
    title: "Sampling & Fit",
    description:
      "We refine structure, sizing, and details through a fast sample and fit-adjustment process.",
  },
  {
    step: "04",
    title: "Bulk Production",
    description:
      "Production moves forward with quality control, communication, and on-time delivery focus.",
  },
];

const blogCards = [
  {
    title: "How to Choose Fabric for Yoga Wear",
    description:
      "Explain performance needs, stretch recovery, opacity, and common mistakes brand owners make when choosing fabrics.",
  },
  {
    title: "MOQ Guide for Growing Activewear Brands",
    description:
      "Help potential clients understand how MOQ affects development, pricing, and first production planning.",
  },
  {
    title: "How to Build a Best-Selling Sports Bra",
    description:
      "Use fit, support, fabric, and development examples to position your company as a useful product partner.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{eyebrow}</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-bold tracking-tight">ALLNI ACTIVE</div>
            <div className="text-xs text-slate-500">Activewear Manufacturing Partner</div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#products" className="transition hover:text-slate-900">Products</a>
            <a href="#case-studies" className="transition hover:text-slate-900">Case Studies</a>
            <a href="#process" className="transition hover:text-slate-900">Process</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#blog" className="transition hover:text-slate-900">Blog</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Get Free Sample
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Built for growing activewear brands
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We Help Activewear Brands Create Best-Selling Products
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From fabric development to bulk production, ALLNI ACTIVE supports yoga wear, gym wear, and swimwear brands with OEM and ODM manufacturing that is clear, reliable, and built for repeat orders.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Get Free Sample
              </a>
              <a
                href="#products"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900"
              >
                Start Your Collection
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold tracking-tight text-slate-900">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Why brands choose us</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Manufacturing support that helps clients scale</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Best-seller proof</div>
                <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">100K+</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Annual yoga legging production achieved for existing clients.
                </p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Sampling speed</div>
                <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">7 Days</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Fast development support to help brands test and launch faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core product lines"
            title="Focused on categories that help brands grow"
            description="Instead of trying to be everything, ALLNI ACTIVE stays focused on activewear categories where product fit, fabric choice, and repeatable production matter most."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{product.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
                <div className="mt-5 text-sm font-semibold text-slate-900">Best for: {product.bestFor}</div>
                <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {product.tag}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Proven experience in creating best-sellers"
            description="Buyers do not need generic promises. They need evidence that a supplier can help them build core products that sell and reorder."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {item.result}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="From idea to bulk production"
            description="The process is designed to reduce confusion for buyers and help activewear brands move from concept to stable production with confidence."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{step.step}</div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">About ALLNI ACTIVE</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A manufacturing partner for growing activewear brands
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              ALLNI ACTIVE is built for brands that need more than a product catalog. We combine fabric development, fast sampling, and production support to help activewear businesses launch stronger collections and scale repeat orders.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our clearest strengths are in yoga wear, gym wear, and swimwear — especially for clients who want best-selling core items, practical customization, and a supplier that understands both OEM and ODM workflows.
            </p>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Best fit for</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Clients we support best</h3>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <li>• Emerging activewear brands</li>
              <li>• Growing e-commerce brands</li>
              <li>• Boutique fitness and yoga labels</li>
              <li>• Brands scaling from development to repeat bulk orders</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Many clients start with development or small production runs, then expand with us as their collections grow.
            </p>
          </article>
        </div>
      </section>

      <section id="blog" className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="SEO-ready blog section"
            title="Content that brings in qualified traffic"
            description="This section can be expanded later into a real blog. For launch, it already signals expertise and gives you a place for future Google SEO growth."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {blogCards.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <Link href="#contact" className="mt-6 inline-flex text-sm font-semibold text-slate-900 underline underline-offset-4">
                  Ask about this topic
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to develop your next best-selling product?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
              Tell us your product idea, target market, quantity range, and timeline. We will help you move faster with sample support, development guidance, and a production plan that fits your brand stage.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/80">Free sample consultation</div>
              <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/80">Quote in 24 hours</div>
              <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/80">OEM / ODM support</div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-8 text-slate-900 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Start your inquiry</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Send your project details</h3>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              <input
                type="text"
                placeholder="Brand / company name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              <textarea
                placeholder="Tell us what product you want to develop"
                className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              <button
                type="button"
                className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Get Free Sample
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-900 py-8 text-sm text-white/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 lg:px-8">
          <div>© 2026 ALLNI ACTIVE. All rights reserved.</div>
          <div>Built for growing activewear brands.</div>
        </div>
      </footer>
    </main>
  );
}
