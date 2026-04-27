import { NavLink, Outlet, useLocation } from "react-router-dom";

const navGroups = [
  {
    label: "Post-Campaign",
    items: [{ label: "Performance", to: "/explore" }],
  },
  {
    label: "Pre-campaign",
    items: [
      { label: "Build a Plan", to: "/plan/eon-launch" },
      { label: "Plans", to: "/plans/eon-launch" },
    ],
  },
];

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark" />
          <div>
            <p className="eyebrow">Northstar Demo</p>
            <h1>Media Management</h1>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navGroups.map((group) => (
            <div key={group.label} className="sidebar-group">
              <p className="sidebar-group-label">{group.label}</p>
              <div className="sidebar-group-items">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `sidebar-link sidebar-sublink${isActive || location.pathname.startsWith(item.to) ? " active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          <p className="eyebrow">Campaign Window</p>
          <strong>Apr 2026 - Jun 2026</strong>
          <span>Steppe-inspired automotive launch planning demo</span>
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
