import { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">Northstar Electric Motors</p>
        <h2>{title}</h2>
        <p className="page-subtitle">{subtitle}</p>
      </div>
      {actions ? <div className="page-actions">{actions}</div> : null}
    </header>
  );
}

export function Card({
  title,
  subtitle,
  children,
  action,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`card ${className}`.trim()}>
      <div className="card-head">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

export function WidgetDropdown({
  label,
  value,
  options,
  tone = "default",
}: {
  label: string;
  value: string;
  options: string[];
  tone?: "default" | "accent" | "light";
}) {
  return (
    <div className={`widget-dropdown ${tone}`}>
      <button type="button" className="widget-dropdown-trigger">
        <span className="widget-dropdown-copy">
          <span className="widget-dropdown-label">{label}</span>
          <strong className="widget-dropdown-value">{value}</strong>
        </span>
        <i className="widget-dropdown-chevron">⌄</i>
      </button>
      <div className="widget-dropdown-menu">
        {options.map((option) => (
          <span key={option} className={`widget-dropdown-option${option === value ? " active" : ""}`}>
            {option}
            {option === value ? <i className="widget-dropdown-check">✓</i> : null}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Drawer({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className={`drawer-backdrop${open ? " open" : ""}`} onClick={onClose}>
      <aside
        className={`drawer${open ? " open" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-head">
          <div>
            <p className="eyebrow">Detail view</p>
            <h3>{title}</h3>
          </div>
          <button className="ghost-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="drawer-body">{children}</div>
      </aside>
    </div>
  );
}

export function ProgressBars({
  items,
  formatter = (value: number) => `${value}`,
}: {
  items: readonly { label: string; value: number }[];
  formatter?: (value: number) => string;
}) {
  const max = Math.max(...items.map((item) => item.value));

  return (
    <div className="progress-list">
      {items.map((item) => (
        <div key={item.label} className="progress-row">
          <div className="progress-meta">
            <span>{item.label}</span>
            <strong>{formatter(item.value)}</strong>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${(item.value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
