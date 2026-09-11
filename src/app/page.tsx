// src/app/page.tsx
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/lib/dummyData";

export default function HomePage() {
  const featured = dummyProducts.filter((p) => p.isFeatured);

  return (
    <main className="min-h-screen bg-[#0D0D1A] text-parchment">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[70vh] flex-col items-start justify-end overflow-hidden px-6 py-20 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_30%,rgba(201,168,76,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-[0.03]" />
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-400/20 to-transparent md:left-16 lg:left-24" />

        <div className="relative max-w-2xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-gold-400/70">
            Angadi Hub · Kerala's Ancient Marketplace
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.1] text-parchment md:text-6xl lg:text-7xl">
            Objects that carry
            <br />
            <span className="text-gold-400">centuries</span> in them.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-400">
            A curated collection of mythic artefacts, botanical rarities, and
            ceremonial objects sourced from the heart of Kerala — authenticated,
            storied, and singular.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            
              href="#featured"
              className="rounded-xl bg-gold-400 px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-gold-300"
            >
              Explore the Collection
            </a>
            
              href="/products"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-white/25 hover:text-white"
            >
              View All Items
            </a>
          </div>
        </div>

        <div className="relative mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-8">
          {[
            { value: "3",      label: "Artefact categories" },
            { value: "12+",    label: "Authenticated pieces" },
            { value: "900 CE", label: "Oldest provenance" },
            { value: "ASI",    label: "Certified origins" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-gold-400">
                {stat.value}
              </span>
              <span className="text-xs text-stone-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────── */}
      <section id="featured" className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-gold-400/70">
              Featured Collection
            </p>
            <h2 className="font-display text-3xl font-semibold text-parchment md:text-4xl">
              Chosen for their rarity
            </h2>
          </div>
          
            href="/products"
            className="hidden text-sm text-stone-400 underline underline-offset-4 transition-colors hover:text-parchment md:block"
          >
            See all items →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a href="/products" className="text-sm text-stone-400 underline underline-offset-4">
            See all items →
          </a>
        </div>
      </section>

      {/* ── Provenance Strip ──────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-12 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          {[
            {
              icon: "🏛",
              title: "ASI Authenticated",
              desc: "Every antique is verified by the Archaeological Survey of India before listing.",
            },
            {
              icon: "📜",
              title: "Provenance Certificates",
              desc: "Each item ships with a handwritten certificate of origin and historical notes.",
            },
            {
              icon: "🚢",
              title: "Heritage Packaging",
              desc: "Teak reliquary boxes, acid-free linen, and zero single-use plastic.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-display text-lg font-semibold text-parchment">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}