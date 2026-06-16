export default function PreloaderBrand() {
  const real = "real".split("");
  const tnt = "tnt".split("");

  return (
    <div className="preloader-label" aria-label="realtnt 🥀">
      <div className="preloader-brand">
        <div className="preloader-name">
          <span className="preloader-word preloader-real">
            {real.map((char, index) => (
              <span key={`real-${index}`} className="preloader-char">
                {char}
              </span>
            ))}
          </span>
          <span className="preloader-word preloader-tnt">
            {tnt.map((char, index) => (
              <span key={`tnt-${index}`} className="preloader-char">
                {char}
              </span>
            ))}
          </span>
          <span className="preloader-rose preloader-char" aria-hidden="true">
            🥀
          </span>
        </div>
      </div>
    </div>
  );
}
