// src/app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/lib/dummyData";

export const metadata = {
  title: "The Collection — Angadi Hub",
  description: "Browse all authenticated artefacts and botanical rarities from Kerala.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A] px-6 py-20 md:px-16 lg:px-24">

      {/* Page header */}
      <div className="mb-12 border-b border-white/5 pb-10">
        <p className="mb-3 text-sm font-medium text-gold-400/70">
          Angadi Hub · The Collection
        </p>
        <h1 className="font-display text-4xl font-bold text-parchment md:text-5xl">
          Every piece, a document.
        </h1>
        <p className="mt-4 max-w-xl text-base text-stone-400">
          {dummyProducts.length} authenticated items. Each one arrives with its
          provenance certificate and historical notes.
        </p>
      </div>

      {/* Filter bar — static in Phase 1, functional in Phase 2 */}
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", "Botanical Elixirs", "Numismatic Antiquities", "Sacred Artefacts"].map(
          (cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                cat === "All"
                  ? "bg-gold-400/20 text-gold-300 ring-1 ring-gold-400/30"
                  : "text-stone-400 hover:text-parchment"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}