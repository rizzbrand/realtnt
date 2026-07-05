"use client";

import Link from "next/link";
import { VAULT_SECRETS } from "@/lib/site";

type VaultUnlockModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function VaultUnlockModal({
  open,
  onClose,
}: VaultUnlockModalProps) {
  if (!open) return null;

  return (
    <div className="vault-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="vault-modal"
        role="dialog"
        aria-labelledby="vault-modal-title"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="vault-modal-eyebrow">💥 Explosion found</p>
        <h2 id="vault-modal-title" className="vault-modal-title">
          Vault unlocked.
        </h2>
        <p className="vault-modal-desc">
          You found the hidden charge. Insiders get what the public never sees.
        </p>

        <div className="vault-modal-reward">
          <p className="vault-modal-reward-label">{VAULT_SECRETS.rewardLabel}</p>
          <code className="vault-modal-code">{VAULT_SECRETS.rewardCode}</code>
        </div>

        <div className="page-actions vault-modal-actions">
          <Link href="/vault" className="page-btn" onClick={onClose}>
            Enter the Vault
          </Link>
          <button type="button" className="page-btn page-btn--ghost" onClick={onClose}>
            Keep exploring
          </button>
        </div>
      </div>
    </div>
  );
}
