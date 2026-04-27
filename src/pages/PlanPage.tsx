import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Drawer, MetricCard, PageHeader, Pill } from "../components/UI";
import { demoProject, historicalCampaigns, planningPrompts, scenarios } from "../data/demoData";

export function PlanPage({ initialView = "builder" }: { initialView?: "builder" | "result" }) {
  const navigate = useNavigate();
  const [planGenerated, setPlanGenerated] = useState(initialView === "result");
  const [selectedScenarioId, setSelectedScenarioId] = useState("balanced-launch");
  const [activeScenarioId, setActiveScenarioId] = useState("balanced-launch");
  const [isLoading, setIsLoading] = useState(false);
  const [brief, setBrief] = useState({
    advertiser: initialView === "result" ? planningPrompts.advertiserOption : "",
    kpi1: initialView === "result" ? planningPrompts.kpi1Option : "",
    kpi1Budget: initialView === "result" ? planningPrompts.kpi1BudgetOption : "",
    kpi1Geography: initialView === "result" ? planningPrompts.kpi1GeographyOption : "",
    kpi1Channel: "",
    kpi1Audience: "",
    kpi2: initialView === "result" ? planningPrompts.kpi2Option : "",
    kpi2Budget: initialView === "result" ? planningPrompts.kpi2BudgetOption : "",
    kpi2Geography: initialView === "result" ? planningPrompts.kpi2GeographyOption : "",
    kpi2Channel: "",
    kpi2Audience: "",
    startDate: initialView === "result" ? planningPrompts.startDateOption : "",
    endDate: initialView === "result" ? planningPrompts.endDateOption : "",
  });

  useEffect(() => {
    if (!planGenerated || selectedScenarioId === activeScenarioId) {
      return;
    }
    setIsLoading(true);
    const timeout = window.setTimeout(() => {
      setActiveScenarioId(selectedScenarioId);
      setIsLoading(false);
    }, 1250);

    return () => window.clearTimeout(timeout);
  }, [activeScenarioId, selectedScenarioId]);

  const scenario = useMemo(
    () => scenarios.find((item) => item.id === activeScenarioId) ?? scenarios[0],
    [activeScenarioId],
  );

  const supportingCampaigns = useMemo(
    () =>
      historicalCampaigns.filter((campaign) =>
        campaign.primaryKpi === brief.kpi2 ||
        campaign.primaryKpi === brief.kpi1 ||
        campaign.advertiser === brief.advertiser,
      ),
    [brief],
  );

  const requiredFieldsComplete = Boolean(
    brief.advertiser === planningPrompts.advertiserOption &&
      brief.kpi1 === planningPrompts.kpi1Option &&
      brief.kpi1Budget === planningPrompts.kpi1BudgetOption &&
      brief.kpi1Geography === planningPrompts.kpi1GeographyOption &&
      brief.kpi2 === planningPrompts.kpi2Option &&
      brief.kpi2Budget === planningPrompts.kpi2BudgetOption &&
      brief.kpi2Geography === planningPrompts.kpi2GeographyOption &&
      brief.startDate === planningPrompts.startDateOption &&
      brief.endDate === planningPrompts.endDateOption,
  );

  const totalBudget = sumBudgetStrings([brief.kpi1Budget, brief.kpi2Budget]);

  return (
    <>
      <PageHeader
        title={`${brief.advertiser || "Northstar Electric Motors"} Plan`}
        subtitle={
          planGenerated
            ? `Generated from campaign prompts for ${brief.kpi1 || "KPI 1"} and ${brief.kpi2 || "KPI 2"} using reusable historical performance patterns`
            : "Start with a campaign brief, then generate a recommendation from historical campaign intelligence"
        }
        actions={
          <div className="header-stack">
            <Pill tone="accent">{planGenerated ? "Recommended Scenario" : "Prompt Driven Planning"}</Pill>
            {planGenerated ? (
              <div className="scenario-switcher">
                {scenarios.map((item) => (
                  <button
                    key={item.id}
                    className={selectedScenarioId === item.id ? "active" : ""}
                    onClick={() => setSelectedScenarioId(item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        }
      />

      {!planGenerated ? (
        <>
          <section className="content-grid single plan-setup-grid">
            <Card
              title="Campaign Prompt Builder"
              subtitle="These are the exact inputs used to generate the launch recommendation"
            >
              <div className="plan-scope-note">
                Auto industry selected. All advertisers, all channels, and 4 selected audiences were reviewed in Performance before generating this plan.
              </div>
              <div className="prompt-grid">
                <PromptField
                  label="Advertiser"
                  value={brief.advertiser}
                  suggestion={planningPrompts.advertiserOption}
                  onChange={(value) => setBrief((current) => ({ ...current, advertiser: value }))}
                />
                <PromptField
                  label="Start Date"
                  value={brief.startDate}
                  suggestion={planningPrompts.startDateOption}
                  onChange={(value) => setBrief((current) => ({ ...current, startDate: value }))}
                />
                <PromptField
                  label="End Date"
                  value={brief.endDate}
                  suggestion={planningPrompts.endDateOption}
                  onChange={(value) => setBrief((current) => ({ ...current, endDate: value }))}
                />
              </div>
              <div className="kpi-briefs">
                <section className="kpi-brief-card">
                  <div className="kpi-brief-head">
                    <h3>KPI 1</h3>
                  </div>
                  <div className="prompt-grid">
                    <PromptField
                      label="KPI 1"
                      value={brief.kpi1}
                      suggestion={planningPrompts.kpi1Option}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi1: value }))}
                    />
                    <PromptField
                      label="Assigned Budget for KPI 1"
                      value={brief.kpi1Budget}
                      suggestion={planningPrompts.kpi1BudgetOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi1Budget: value }))}
                    />
                    <PromptField
                      label="Geography for KPI 1"
                      value={brief.kpi1Geography}
                      suggestion={planningPrompts.kpi1GeographyOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi1Geography: value }))}
                    />
                    <PromptField
                      label="Channels for KPI 1 (Optional)"
                      value={brief.kpi1Channel}
                      suggestion={planningPrompts.kpi1ChannelOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi1Channel: value }))}
                      optional
                    />
                    <PromptField
                      label="Audiences for KPI 1 (Optional)"
                      value={brief.kpi1Audience}
                      suggestion={planningPrompts.kpi1AudienceOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi1Audience: value }))}
                      optional
                    />
                  </div>
                </section>

                <section className="kpi-brief-card">
                  <div className="kpi-brief-head">
                    <h3>KPI 2</h3>
                  </div>
                  <div className="prompt-grid">
                    <PromptField
                      label="KPI 2"
                      value={brief.kpi2}
                      suggestion={planningPrompts.kpi2Option}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi2: value }))}
                    />
                    <PromptField
                      label="Assigned Budget for KPI 2"
                      value={brief.kpi2Budget}
                      suggestion={planningPrompts.kpi2BudgetOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi2Budget: value }))}
                    />
                    <PromptField
                      label="Geography for KPI 2"
                      value={brief.kpi2Geography}
                      suggestion={planningPrompts.kpi2GeographyOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi2Geography: value }))}
                    />
                    <PromptField
                      label="Channels for KPI 2 (Optional)"
                      value={brief.kpi2Channel}
                      suggestion={planningPrompts.kpi2ChannelOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi2Channel: value }))}
                      optional
                    />
                    <PromptField
                      label="Audiences for KPI 2 (Optional)"
                      value={brief.kpi2Audience}
                      suggestion={planningPrompts.kpi2AudienceOption}
                      onChange={(value) => setBrief((current) => ({ ...current, kpi2Audience: value }))}
                      optional
                    />
                  </div>
                </section>
              </div>
              <div className="prompt-footer">
                <button
                  className="primary-button"
                  disabled={!requiredFieldsComplete}
                  onClick={() => {
                    if (!requiredFieldsComplete) {
                      return;
                    }
                    setIsLoading(true);
                    window.setTimeout(() => {
                      setPlanGenerated(true);
                      setIsLoading(false);
                      navigate("/plans/eon-launch");
                    }, 5000);
                  }}
                >
                  Create Plan
                </button>
              </div>
            </Card>
          </section>
        </>
      ) : null}

      {isLoading && !planGenerated ? (
        <div className="plan-loading-overlay">
          <div className="plan-loading-card">
            <div className="plan-loading-icon">◷</div>
            <h3>Creating Plan</h3>
            <p>Generating the recommendation in real time from campaign prompts and historical performance patterns.</p>
          </div>
        </div>
      ) : null}

      {planGenerated ? (
        <>
      <section className="content-grid single">
        <Card title="Submitted Campaign Brief" subtitle="Prompt values used to create this plan">
          <div className="brief-summary campaign-brief">
            <div><span>Advertiser</span><strong>{brief.advertiser}</strong></div>
            <div><span>Total Budget</span><strong>{totalBudget}</strong></div>
            <div><span>Campaign Dates</span><strong>{formatDateRange(brief.startDate, brief.endDate)}</strong></div>
          </div>
          <div className="brief-kpi-groups">
            <section className="brief-kpi-card">
              <div className="kpi-brief-head">
                <h3>KPI 1</h3>
              </div>
              <div className="brief-summary">
                <div><span>KPI</span><strong>{brief.kpi1}</strong></div>
                <div><span>Assigned Budget</span><strong>{brief.kpi1Budget}</strong></div>
                <div><span>Geography</span><strong>{brief.kpi1Geography}</strong></div>
                <div><span>Channels</span><strong>{brief.kpi1Channel || "Model selected"}</strong></div>
                <div><span>Audiences</span><strong>{brief.kpi1Audience || "Model suggested"}</strong></div>
              </div>
            </section>

            <section className="brief-kpi-card">
              <div className="kpi-brief-head">
                <h3>KPI 2</h3>
              </div>
              <div className="brief-summary">
                <div><span>KPI</span><strong>{brief.kpi2}</strong></div>
                <div><span>Assigned Budget</span><strong>{brief.kpi2Budget}</strong></div>
                <div><span>Geography</span><strong>{brief.kpi2Geography}</strong></div>
                <div><span>Channels</span><strong>{brief.kpi2Channel || "Model selected"}</strong></div>
                <div><span>Audiences</span><strong>{brief.kpi2Audience || "Model suggested"}</strong></div>
              </div>
            </section>
          </div>
        </Card>
      </section>

      <section className="content-grid two-up">
        <Card title="Budget by Channel" subtitle="Campaign-level split of spend across channels">
          <div className="donut-widget">
            <div
              className="donut-chart"
              style={{
                background:
                  "conic-gradient(#203556 0 26%, #02a8a8 26% 48%, #1aa3de 48% 66%, #5e4694 66% 79%, #a5dde2 79% 89%, #67d0d9 89% 100%)",
              }}
            >
              <div className="donut-hole">
                <strong>100%</strong>
                <span>Budget</span>
              </div>
            </div>
            <div className="donut-legend">
              {[
                ["Connected TV", "26%", "channel-1"],
                ["Online Video", "22%", "channel-5"],
                ["Search", "18%", "channel-4"],
                ["Social", "13%", "channel-2"],
                ["Streaming Audio", "10%", "channel-3"],
                ["Premium Display", "11%", "channel-6"],
              ].map(([label, value, tone]) => (
                <div key={String(label)} className="donut-legend-row">
                  <span><i className={`channel-dot ${String(tone)}`} />{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Budget by Audience" subtitle="Campaign-level split of spend across selected audiences">
          <div className="donut-widget">
            <div
              className="donut-chart"
              style={{
                background:
                  "conic-gradient(#02a8a8 0 28%, #1aa3de 28% 53%, #5e4694 53% 77%, #a5dde2 77% 100%)",
              }}
            >
              <div className="donut-hole">
                <strong>100%</strong>
                <span>Budget</span>
              </div>
            </div>
            <div className="donut-legend">
              {[
                ["Eco-Upgraders", "28%", "channel-5"],
                ["Luxury Tech Switchers", "25%", "channel-4"],
                ["Family SUV Replacers", "24%", "channel-2"],
                ["Urban First-Time EV Buyers", "23%", "channel-3"],
              ].map(([label, value, tone]) => (
                <div key={String(label)} className="donut-legend-row">
                  <span><i className={`channel-dot ${String(tone)}`} />{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {isLoading ? (
        <div className="loading-banner">
          <div className="spinner" />
          <span>Recalculating projected outcomes for {scenarios.find((item) => item.id === selectedScenarioId)?.name}...</span>
        </div>
      ) : null}

      <section className="content-grid single">
        <Card
          title="Brand Impressions Recommendations"
          subtitle={`Geography: ${brief.kpi1Geography || "National (United States)"}`}
        >
          <PlanTable rows={scenario.awarenessChannels} />
        </Card>
        <Card title="Test Drive Bookings Recommendations" subtitle={`Geography: ${brief.kpi2Geography || "Regional markets"}`}>
          <PlanTable rows={scenario.bookingChannels} />
        </Card>
      </section>
        </>
      ) : null}
    </>
  );
}

function PromptField({
  label,
  value,
  suggestion,
  onChange,
  optional = false,
}: {
  label: string;
  value: string;
  suggestion: string;
  onChange: (value: string) => void;
  optional?: boolean;
}) {
  const showSuggestion = value.length > 0 && value !== suggestion;

  return (
    <label className="prompt-field">
      <span>{label}</span>
      <div className="prompt-input-shell">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={optional ? "Optional" : "Type to search"}
        />
        {showSuggestion ? (
          <button
            type="button"
            className="prompt-suggestion"
            onClick={() => onChange(suggestion)}
          >
            {suggestion}
          </button>
        ) : null}
      </div>
    </label>
  );
}

function sumBudgetStrings(values: string[]) {
  const total = values.reduce((sum, value) => {
    if (!value) {
      return sum;
    }
    if (value.endsWith("M")) {
      return sum + Number.parseFloat(value.replace("$", "").replace("M", ""));
    }
    if (value.endsWith("K")) {
      return sum + Number.parseFloat(value.replace("$", "").replace("K", "")) / 1000;
    }
    return sum;
  }, 0);

  return `$${total.toFixed(1)}M`;
}

function formatDateRange(startDate: string, endDate: string) {
  if (!startDate || !endDate) {
    return demoProject.flightDates;
  }

  const start = parseFlexibleDate(startDate);
  const end = parseFlexibleDate(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return demoProject.flightDates;
  }

  return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
}

function parseFlexibleDate(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return new Date(`${value}T00:00:00`);
  }

  return new Date(value);
}

function PlanTable({
  rows,
}: {
  rows: {
    id: string;
    channel: string;
    budget: string;
    cpm: string;
    impressions: string;
    bookings: string;
  }[];
}) {
  return (
    <div className="table-shell compact">
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Budget</th>
            <th>CPM</th>
            <th>CPB</th>
            <th>Impressions</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.channel}</td>
              <td>{row.budget}</td>
              <td>{row.cpm}</td>
              <td>{formatCpb(row.budget, row.bookings)}</td>
              <td>{row.impressions}</td>
              <td>{row.bookings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatCpb(budget: string, bookings: string) {
  const normalizedBudget = Number.parseFloat(budget.replace("$", "").replace("M", ""));
  const normalizedBookings = Number.parseFloat(bookings.replace(/,/g, ""));

  if (!Number.isFinite(normalizedBudget) || !Number.isFinite(normalizedBookings) || normalizedBookings <= 0) {
    return "-";
  }

  const cpb = (normalizedBudget * 1_000_000) / normalizedBookings;
  return `$${Math.round(cpb)}`;
}
