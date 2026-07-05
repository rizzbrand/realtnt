"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { EASTER_EGG } from "@/lib/site";
import { playFuseCrackle, playSpark } from "@/lib/sparkSound";
import VaultUnlockModal from "@/components/VaultUnlockModal";

type EasterEggContextValue = {
  clicks: number;
  isUnlocked: boolean;
  registerCrackerClick: () => void;
};

const EasterEggContext = createContext<EasterEggContextValue | null>(null);

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [clicks, setClicks] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(EASTER_EGG.storageKey);
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const registerCrackerClick = useCallback(() => {
    if (isUnlocked) return;

    playFuseCrackle();
    setClicks((prev) => {
      const next = prev + 1;

      if (next >= EASTER_EGG.clicksRequired) {
        localStorage.setItem(EASTER_EGG.storageKey, "true");
        setIsUnlocked(true);
        setShowModal(true);
        playSpark("boom");
      } else {
        playSpark("soft");
      }

      return next;
    });
  }, [isUnlocked]);

  return (
    <EasterEggContext.Provider
      value={{ clicks, isUnlocked, registerCrackerClick }}
    >
      {children}
      <VaultUnlockModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error("useEasterEgg must be used within EasterEggProvider");
  }
  return context;
}

export function useVaultUnlocked() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(EASTER_EGG.storageKey) === "true");
  }, []);

  return unlocked;
}
