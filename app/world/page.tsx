import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "World — realtnt | Shockwave",
  description: "Culture, visuals, and the RealTNT universe.",
};

export default function WorldPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <PageHeader
          emoji="🌍"
          eyebrow="Shockwave"
          title="The ripple effect."
          description="Culture, visuals, collaborations, and everything radiating outward from the blast."
        />

        <section className="placeholder-panel">
          <p className="placeholder-label">Coming online</p>
          <p className="placeholder-text">
            Transmission logs, visual archives, and world-building content will
            surface here as the shockwave expands.
          </p>
        </section>

        <div className="page-actions">
          <Link href="/about" className="page-btn page-btn--ghost">
            ✦ About the transmission
          </Link>
        </div>
      </div>
    </main>
  );
}
