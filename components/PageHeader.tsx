type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  emoji?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  emoji,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="page-eyebrow">
        {emoji && <span className="page-eyebrow-emoji">{emoji}</span>}
        {eyebrow}
      </p>
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-desc">{description}</p>}
    </header>
  );
}
