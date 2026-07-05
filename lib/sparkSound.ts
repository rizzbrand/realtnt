let audioContext: AudioContext | null = null;

function getContext() {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export function playSpark(intensity: "soft" | "boom" = "soft") {
  const ctx = getContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = intensity === "boom" ? "sine" : "triangle";
  osc.frequency.setValueAtTime(
    intensity === "boom" ? 90 : 1400,
    now,
  );
  osc.frequency.exponentialRampToValueAtTime(
    intensity === "boom" ? 40 : 600,
    now + (intensity === "boom" ? 0.35 : 0.08),
  );

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(
    intensity === "boom" ? 0.08 : 0.025,
    now + 0.01,
  );
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.25);
}

export function playFuseCrackle() {
  const ctx = getContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }

  const bufferSize = ctx.sampleRate * 0.06;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  source.buffer = buffer;
  filter.type = "highpass";
  filter.frequency.value = 1200;
  gain.gain.value = 0.04;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();
}
