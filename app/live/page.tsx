import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Live — realtnt | Detonation",
  description: "Shows, tour dates, and live detonations.",
};

export default function LivePage() {
  return (
    <main className="page">
      <div className="page-inner">
        <PageHeader
          emoji="🚀"
          eyebrow="Detonation"
          title="Live explosions."
          description="When the fuse reaches the stage, the room becomes part of the blast radius."
        />

        <section className="placeholder-panel">
          <p className="placeholder-label">No dates announced</p>
          <p className="placeholder-text">
            Tour dates and ticket links will appear here when the next
            detonation is scheduled.
          </p>
        </section>

        <div className="page-actions">
          <Link href="/music" className="page-btn page-btn--ghost">
            💥 Listen first
          </Link>
        </div>
      </div>
    </main>
  );
}
