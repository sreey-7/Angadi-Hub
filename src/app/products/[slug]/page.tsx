// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, dummyProducts, formatINR } from "@/lib/dummyData";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return dummyProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} — Angadi Hub`,
    description: product.lore.excerpt,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const { name, tagline, price, stock, category, tags, lore, attributes, rating, reviewCount } =
    product;

  return (
    <main className="min-h-screen bg-[#0D0D1A] px-6 py-16 md:px-16 lg:px-24">

      {/* Breadcrumb */}
      <nav className="mb-10 flex items-center gap-2 text-xs text-stone-500">
        <Link href="/" className="hover:text-stone-300">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-stone-300">Collection</Link>
        <span>/</span>
        <span className="text-stone-400">{name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

        {/* ── Left: 3D viewer slot (Phase 5) ──────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">
          <div className="flex h-96 items-center justify-center lg:h-[520px]">
            {/* Phase 5 TODO: Replace with <LoreViewer /> (React Three Fiber) */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/5">
                <svg
                  className="h-10 w-10 text-gold-400/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
              <p className="text-sm text-stone-500">3D viewer — Phase 5</p>
              <p className="mt-1 text-xs text-stone-600">
                Interactive Three.js model will render here
              </p>
            </div>
          </div>
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-stone-300 backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        {/* ── Right: Product info ──────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-stone-400 ring-1 ring-white/8"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name + tagline */}
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight text-parchment">
              {name}
            </h1>
            <p className="mt-2 text-base text-stone-400">{tagline}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "text-gold-400" : "text-stone-600"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-stone-400">
              {rating.toFixed(1)} · {reviewCount} reviews
            </span>
          </div>

          {/* Lore & Provenance */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-400/70">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Lore & Provenance
            </div>
            <p className="text-sm leading-relaxed text-stone-300">{lore.fullText}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-stone-500">
              <span><span className="text-stone-400">Origin:</span> {lore.origin}</span>
              <span><span className="text-stone-400">Era:</span> {lore.era}</span>
            </div>
          </div>

          {/* Specifications table */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-500">
              Specifications
            </p>
            <div className="divide-y divide-white/5 overflow-hidden rounded-xl border border-white/5">
              {attributes.map((attr) => (
                <div
                  key={attr.label}
                  className="flex items-center justify-between bg-white/[0.015] px-4 py-3 text-sm"
                >
                  <span className="text-stone-500">{attr.label}</span>
                  <span className="font-medium text-stone-300">{attr.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="font-display text-3xl font-bold text-parchment">
                {formatINR(price)}
              </span>
              {stock <= 3 && stock > 0 && (
                <span className="text-sm text-amber-400">Only {stock} remaining</span>
              )}
            </div>
            <div className="flex gap-3">
              {/* Phase 3: wire to Zustand */}
              <button
                disabled={stock === 0}
                className="flex-1 rounded-xl bg-gold-400 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {stock === 0 ? "Sold Out" : "Add to Cart"}
              </button>
              {/* Phase 4: wire to Razorpay */}
              <button
                disabled={stock === 0}
                className="flex-1 rounded-xl border border-white/10 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}