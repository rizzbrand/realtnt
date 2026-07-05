import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import VaultContent from "@/components/VaultContent";

export const metadata = {
  title: "Vault — realtnt | Exclusives",
  description: "Unreleased snippets, BTS, early merch, and fan rewards.",
};

const VAULT_ITEMS = [
  "Unreleased snippets",
  "Behind-the-scenes content",
  "Early merch drops",
  "Fan rewards",
];

export default function VaultPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <PageHeader
          emoji="🔒"
          eyebrow="Hidden Vault"
          title="Insiders only."
          description="Fans who go deeper unlock what the public never sees. The vault opens in phases."
        />

        <section className="vault-list">
          {VAULT_ITEMS.map((item) => (
            <div key={item} className="vault-item">
              <span className="vault-item-icon">◆</span>
              <span>{item}</span>
            </div>
          ))}
        </section>

        <VaultContent />

        <div className="page-actions">
          <Link href="/music" className="page-btn page-btn--ghost">
            💥 Stream charges
          </Link>
        </div>
      </div>
    </main>
  );
}
