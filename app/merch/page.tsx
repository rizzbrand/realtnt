import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Merch — realtnt | Arsenal",
  description: "Official RealTNT merchandise and early drops.",
};

export default function MerchPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <PageHeader
          emoji="◆"
          eyebrow="Arsenal"
          title="Wear the blast."
          description="Official merch and early vault drops. Chrome aesthetics, fuse motifs, future uniform."
        />

        <section className="placeholder-panel placeholder-panel--merch">
          <p className="placeholder-label">Store loading</p>
          <p className="placeholder-text">
            The arsenal opens soon. Vault members get first access to limited
            drops.
          </p>
        </section>

        <div className="page-actions">
          <Link href="/vault" className="page-btn">
            🔒 Get vault access
          </Link>
        </div>
      </div>
    </main>
  );
}
