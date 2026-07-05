"use client";

import Link from "next/link";
import { useVaultUnlocked } from "@/components/EasterEggProvider";
import { VAULT_SECRETS } from "@/lib/site";

export default function VaultContent() {
  const unlocked = useVaultUnlocked();

  if (!unlocked) {
    return (
      <section className="placeholder-panel placeholder-panel--vault">
        <p className="placeholder-label">Vault sealed</p>
        <p className="placeholder-text">
          Exclusive content drops with each release. Click the 🧨 firecracker in
          the nav five times — or check back when the next charge detonates.
        </p>
      </section>
    );
  }

  return (
    <section className="vault-unlocked">
      <p className="vault-unlocked-badge">🔓 Vault open</p>

      <article className="vault-secret-card">
        <p className="vault-secret-eyebrow">Unreleased snippet</p>
        <h3 className="vault-secret-title">{VAULT_SECRETS.snippetTitle}</h3>
        <p className="vault-secret-desc">{VAULT_SECRETS.snippetDescription}</p>
        <div className="vault-secret-player">
          <span className="vault-secret-wave" />
          <span>Preview loading with next drop</span>
        </div>
      </article>

      <article className="vault-secret-card vault-secret-card--reward">
        <p className="vault-secret-eyebrow">Fan reward</p>
        <p className="vault-secret-desc">{VAULT_SECRETS.rewardLabel}</p>
        <code className="vault-modal-code">{VAULT_SECRETS.rewardCode}</code>
      </article>

      <div className="page-actions">
        <Link href="/music" className="page-btn">
          💥 Stream charges
        </Link>
        <Link href="/merch" className="page-btn page-btn--ghost">
          ◆ Early merch
        </Link>
      </div>
    </section>
  );
}
