import { useMemo, useState } from "react";
import { Card, Drawer, PageHeader, Pill, ProgressBars, WidgetDropdown } from "../components/UI";
import {
  audienceSegments,
  competitiveBrands,
  defaultExploreFilters,
  exploreContent,
  historicalCampaigns,
} from "../data/demoData";
import { ExploreFilterState } from "../types";

export function ExplorePage() {
  const [filters, setFilters] = useState<ExploreFilterState>(defaultExploreFilters);
  const [drawerSegment, setDrawerSegment] = useState<string | null>(null);

  const content = exploreContent.National;
  const activeSliceLabel = filters.audience === "4 Selected" ? "4 automotive audiences selected" : filters.audience;

  const filteredSegments = useMemo(() => {
    if (filters.audience === "Luxury Tech Switchers") {
      return audienceSegments.filter((segment) => segment.name.includes("Luxury"));
    }
    if (filters.audience === "Family SUV Replacers") {
      return audienceSegments.filter((segment) => segment.name.includes("Family"));
    }
    if (filters.audience === "Eco-Upgraders") {
      return audienceSegments.filter((segment) => segment.name.includes("Eco"));
    }
    if (filters.audience === "Urban First-Time EV Buyers") {
      return audienceSegments.filter((segment) => segment.name.includes("Urban"));
    }
    return audienceSegments;
  }, [filters.audience]);

  const filteredCampaigns = useMemo(() => {
    return historicalCampaigns.filter((campaign) => {
      const matchesAdvertiser =
        filters.advertiser === "All" || campaign.advertiser === filters.advertiser;
      const matchesChannel =
        filters.channel === "All" || campaign.channelMix.includes(filters.channel);

      return matchesAdvertiser && matchesChannel;
    });
  }, [filters]);

  const performanceSummary = useMemo(() => {
    const advertiserCount = new Set(filteredCampaigns.map((item) => item.advertiser)).size;
    const totalSpend = filteredCampaigns.reduce((sum, item) => sum + item.spendValue, 0);
    const totalImpressions = filteredCampaigns.reduce((sum, item) => sum + item.impressionsValue, 0);
    const totalClicks = filteredCampaigns.reduce((sum, item) => sum + item.clicksValue, 0);
    const totalVideoViews = filteredCampaigns.reduce((sum, item) => sum + item.videoViewsValue, 0);
    const totalCompletedViews = filteredCampaigns.reduce((sum, item) => sum + item.completedViewsValue, 0);
    const averageCpm = totalImpressions > 0 ? (totalSpend * 1000) / totalImpressions : 0;
    const averageCpc = totalClicks > 0 ? (totalSpend * 1000000) / (totalClicks * 1000000) : 0;
    const averageVcr = totalVideoViews > 0 ? (totalCompletedViews / totalVideoViews) * 100 : 0;

    return [
      { label: "# Of Advertisers", value: `${advertiserCount}`, trend: "up" },
      { label: "Spend", value: formatCurrencyMillions(totalSpend), trend: "up" },
      { label: "Impressions", value: formatMetricMillions(totalImpressions), trend: "up" },
      { label: "Clicks", value: formatMetricMillions(totalClicks), trend: "up" },
      { label: "Video Views", value: formatMetricMillions(totalVideoViews), trend: "up" },
      { label: "Completed Views", value: formatMetricMillions(totalCompletedViews), trend: "up" },
      { label: "Audience Profiles", value: `${filteredSegments.length}`, trend: "flat" },
      { label: "Avg CPM", value: `$${averageCpm.toFixed(0)}`, trend: "flat" },
      { label: "Avg CPC", value: `$${averageCpc.toFixed(2)}`, trend: "down" },
      { label: "VCR", value: `${averageVcr.toFixed(0)}%`, trend: "up" },
    ];
  }, [filteredCampaigns, filteredSegments.length]);

  const highlightedSegment =
    audienceSegments.find((segment) => segment.id === drawerSegment) ?? audienceSegments[0];

  const audiencePerformanceRows = useMemo(() => {
    const performanceByAudience: Record<
      string,
      { spend: number; impressions: number; pageVisits: number; bookings: number }
    > = {
      "eco-upgraders": { spend: 2.6, impressions: 118, pageVisits: 164, bookings: 6.4 },
      "luxury-tech-switchers": { spend: 2.1, impressions: 96, pageVisits: 122, bookings: 4.9 },
      "family-suv-replacers": { spend: 3.4, impressions: 141, pageVisits: 211, bookings: 8.3 },
      "urban-first-time-ev-buyers": { spend: 1.8, impressions: 83, pageVisits: 109, bookings: 3.7 },
    };

    return filteredSegments.map((segment) => {
      const stats = performanceByAudience[segment.id];
      const cpv = (stats.spend * 1000000) / (stats.pageVisits * 1000);
      const cpc = (stats.spend * 1000000) / (stats.bookings * 1000);

      return {
        ...segment,
        spend: formatCurrencyMillions(stats.spend),
        impressions: formatMetricMillions(stats.impressions),
        cpv: `$${cpv.toFixed(2)}`,
        cpc: `$${cpc.toFixed(0)}`,
      };
    });
  }, [filteredSegments]);

  const trendSeries = useMemo(() => {
    const months = [
      { label: "Jan 30", impressions: 52, spend: 1.6 },
      { label: "Feb 30", impressions: 47, spend: 1.1 },
      { label: "Mar 30", impressions: 58, spend: 1.5 },
      { label: "Apr 30", impressions: 63, spend: 1.3 },
      { label: "May 30", impressions: 76, spend: 1.9 },
      { label: "Jun 30", impressions: 61, spend: 1.6 },
      { label: "Jul 30", impressions: 69, spend: 1.8 },
      { label: "Aug 30", impressions: 55, spend: 1.2 },
      { label: "Sep 30", impressions: 50, spend: 1.4 },
      { label: "Oct 30", impressions: 66, spend: 1.7 },
      { label: "Nov 30", impressions: 72, spend: 1.5 },
      { label: "Dec 30", impressions: 43, spend: 0.9 },
    ];
    const scaledSpend = months.map((item, index) => item.spend * [34, 26, 31, 24, 29, 33, 27, 25, 30, 28, 22, 20][index]);
    const combinedMax = Math.max(
      ...months.map((item, index) => Math.max(item.impressions, scaledSpend[index])),
    );
    const plotted = months.map((item, index) => ({
      ...item,
      x: (index / (months.length - 1)) * 100,
      impressionsY: 100 - (item.impressions / combinedMax) * 100,
      spendY: 100 - (scaledSpend[index] / combinedMax) * 100,
    }));

    return {
      months: plotted,
      impressionsPath: plotted.map((item) => `${item.x},${item.impressionsY}`).join(" "),
      spendPath: plotted.map((item) => `${item.x},${item.spendY}`).join(" "),
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Performance"
        subtitle="Aggregated past automotive campaign performance and reusable historical insights"
        actions={
          <div className="header-stack">
            <div className="project-chip">
              <span>Advertisers</span>
              <strong>1 selected</strong>
              <em>Auto</em>
            </div>
          </div>
        }
      />

      <section className="filters-row">
        <FilterGroup
          label="Industry"
          options={["All", "Auto Industry"]}
          value={filters.industry}
          onSelect={(value) =>
            setFilters((current) => ({ ...current, industry: value as ExploreFilterState["industry"] }))
          }
        />
        <FilterGroup
          label="Advertisers"
          options={["All"]}
          value={filters.advertiser}
          onSelect={(value) =>
            setFilters((current) => ({ ...current, advertiser: value as ExploreFilterState["advertiser"] }))
          }
        />
        <FilterGroup
          label="Channels"
          options={["All"]}
          value={filters.channel}
          onSelect={(value) =>
            setFilters((current) => ({ ...current, channel: value as ExploreFilterState["channel"] }))
          }
        />
      </section>

      <section className="filters-row four-up">
        <FilterGroup
          label="Audiences"
          options={["All", "4 Selected", "Eco-Upgraders", "Luxury Tech Switchers", "Family SUV Replacers", "Urban First-Time EV Buyers"]}
          value={filters.audience}
          onSelect={(value) =>
            setFilters((current) => ({ ...current, audience: value as ExploreFilterState["audience"] }))
          }
        />
        <FilterGroup
          label="KPIs"
          options={["All", "Brand Impressions", "Test Drive Bookings", "Site Visits", "Leads", "Engagement"]}
          value={filters.kpi}
          onSelect={(value) =>
            setFilters((current) => ({ ...current, kpi: value as ExploreFilterState["kpi"] }))
          }
        />
      </section>

      <section className="content-grid single">
        <section className="performance-panel performance-summary">
          <div className="performance-panel-head">
            <div className="performance-title">
              <span className="performance-accent" />
              <div>
                <h3>Summary</h3>
                <p>Period over period</p>
              </div>
            </div>
            <WidgetDropdown
              label="View"
              value="Period Over Period"
              options={["Period Over Period", "Year to Date", "Rolling 12 Months"]}
            />
          </div>
          <div className="performance-stat-grid">
            {performanceSummary.map(({ label, value, trend }) => (
              <div key={label} className="performance-stat">
                <span>{label}</span>
                <strong>{value}</strong>
                <i className={`trend-pill ${trend}`}>{trend === "down" ? "↘" : "↗"}</i>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="performance-panel performance-trend">
        <div className="performance-panel-head">
          <div className="performance-title">
            <span className="performance-accent" />
            <div>
              <h3>Spend and Impressions Over Time</h3>
              <p>Month</p>
            </div>
          </div>
          <WidgetDropdown
            label="Granularity"
            value="Month"
            options={["Month", "Quarter", "Year"]}
          />
        </div>
        <div className="trend-legend">
          <span><i className="legend-swatch trend-impressions" />Impressions</span>
          <span><i className="legend-swatch trend-spend" />Spend</span>
        </div>
        <div className="trend-line-chart">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="trend-svg" aria-hidden="true">
            <polyline className="trend-polyline impressions" points={trendSeries.impressionsPath} />
            <polyline className="trend-polyline spend" points={trendSeries.spendPath} />
          </svg>
          <div className="trend-hover-grid">
            {trendSeries.months.map((item) => (
              <div key={item.label} className="trend-hover-column">
                <div className="trend-tooltip">
                  <strong>{item.label}</strong>
                  <span>Impressions: {item.impressions}M</span>
                  <span>Spend: ${item.spend.toFixed(1)}M</span>
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-grid two-up">
        <section className="performance-panel goal-mix-panel">
          <div className="performance-panel-head">
            <div className="performance-title">
              <span className="performance-accent" />
              <div>
                <h3>Auto Industry Spend by KPI</h3>
              </div>
            </div>
            <WidgetDropdown
              label="Scope"
              value="Auto Industry"
              options={["Auto Industry", "EV Only", "Dealer Media"]}
            />
          </div>
          <div className="kpi-split-grid">
            {[
              ["Impressions", 34, "revenue"],
              ["Leads", 18, "awareness"],
              ["Bookings", 17, "application"],
              ["Site Visits", 16, "lead-gen"],
              ["Engagement", 15, "acquisition"],
            ].map(([label, value, tone], index, items) => (
              <div
                key={String(label)}
                className={`kpi-split-block ${String(tone)}${index === items.length - 1 ? " kpi-split-right" : ""}`}
                style={{ flexBasis: `${value}%` }}
                title={`${String(label)}: ${value}%`}
              >
                <span>{label}</span>
                <strong>{value}%</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="performance-panel channel-analysis-panel">
          <div className="performance-panel-head">
            <div className="performance-title">
              <span className="performance-accent" />
              <div>
                <h3>Advertiser Channels Breakdown</h3>
              </div>
            </div>
            <WidgetDropdown
              label="Advertisers"
              value="Top 4"
              options={["Top 4", "All Auto", "EV Brands"]}
            />
          </div>
          <div className="channel-analysis-list">
            {[
              ["Northstar Electric Motors", [12, 24, 28, 0, 14, 22]],
              ["Apex Auto", [18, 16, 22, 10, 14, 20]],
              ["Voltaris", [8, 18, 26, 0, 24, 24]],
              ["Meridian EV", [14, 12, 32, 6, 14, 22]],
            ].map(([advertiser, values]) => (
              <div key={String(advertiser)} className="channel-analysis-row">
                <span>{advertiser}</span>
                <div className="channel-analysis-bar">
                  {(values as number[]).map((value, index) => (
                    <i
                      key={`${String(advertiser)}-${index}`}
                      className={`channel-segment channel-${index + 1}`}
                      style={{ width: `${value}%` }}
                      title={`${["Connected TV", "Online Video", "Search", "Social", "Streaming Audio", "Premium Display"][index]}: ${value}%`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="channel-legend">
            {["Connected TV", "Online Video", "Search", "Social", "Streaming Audio", "Premium Display"].map((item, index) => (
              <span key={item}>
                <i className={`channel-dot channel-${index + 1}`} />
                {item}
              </span>
            ))}
          </div>
        </section>
      </section>

      <section className="content-grid single">
        <Card
          title="Advertiser Performance"
          action={<WidgetDropdown tone="light" label="Channel" value={filters.channel} options={["All", "Connected TV", "Online Video", "Search"]} />}
        >
          <div className="table-shell compact">
            <table>
              <thead>
                <tr>
                  <th>Advertiser</th>
                  <th>Campaign</th>
                  <th>Market Scope</th>
                  <th>KPI</th>
                  <th>Spend</th>
                  <th>Impressions</th>
                  <th>Bookings</th>
                  <th>Site Visits</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td>{campaign.advertiser}</td>
                    <td>{campaign.campaign}</td>
                    <td>{campaign.geography}</td>
                    <td>{campaign.primaryKpi}</td>
                    <td>{campaign.spend}</td>
                    <td>{formatMetricMillions(campaign.impressionsValue)}</td>
                    <td>{campaign.bookingsValue.toLocaleString()}</td>
                    <td>{formatThousands(campaign.siteVisitsValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section className="content-grid single">
        <Card
          title="Audience Performance"
          action={<WidgetDropdown tone="light" label="Audience" value={filters.audience} options={["All", "4 Selected", "Eco-Upgraders", "Luxury Tech Switchers"]} />}
        >
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Audience</th>
                  <th>Audience Size</th>
                  <th>Spend</th>
                  <th>Impressions</th>
                  <th>CPV</th>
                  <th>CPC</th>
                  <th>Top three channels</th>
                </tr>
              </thead>
              <tbody>
                {audiencePerformanceRows.map((segment) => (
                  <tr key={segment.id} onClick={() => setDrawerSegment(segment.id)}>
                    <td>{segment.name}</td>
                    <td>{segment.audienceSize}</td>
                    <td>{segment.spend}</td>
                    <td>{segment.impressions}</td>
                    <td>{segment.cpv}</td>
                    <td>{segment.cpc}</td>
                    <td>{segment.preferredChannels.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section className="content-grid market-kpi-grid">
        <Card
          title="Top Market Performance"
          action={<WidgetDropdown tone="light" label="Benchmark" value="US Avg" options={["US Avg", "Auto Avg", "East Coast Avg"]} />}
        >
          <div className="table-shell compact">
            <table>
              <thead>
                <tr>
                  <th>Market</th>
                  <th>Performance Index</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { market: "New York DMA", score: 118 },
                  { market: "Boston DMA", score: 111 },
                  { market: "Philadelphia DMA", score: 106 },
                  { market: "Miami DMA", score: 94 },
                  { market: "Detroit DMA", score: 89 },
                ].map((market) => (
                  <tr key={market.market}>
                    <td>{market.market}</td>
                    <td>{market.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card
          title="KPI by Channel Hit Map"
          action={<WidgetDropdown tone="light" label="View" value="KPI" options={["KPI", "Channel", "Audience"]} />}
        >
          {(() => {
            const heatmapRows = [
              ["Connected TV", "32%", "0%", "0%", "18%"],
              ["Online Video", "24%", "0%", "18%", "25%"],
              ["Premium Display", "16%", "0%", "0%", "13%"],
              ["Paid Social", "14%", "0%", "0%", "29%"],
              ["Streaming Audio", "14%", "0%", "0%", "15%"],
              ["Search", "0%", "31%", "27%", "0%"],
              ["Social Lead Ads", "0%", "24%", "0%", "0%"],
              ["CRM", "0%", "19%", "16%", "0%"],
              ["Retargeting", "0%", "14%", "0%", "0%"],
              ["Listings", "0%", "12%", "0%", "0%"],
              ["Dealer Display", "0%", "0%", "22%", "0%"],
              ["Social", "0%", "0%", "17%", "0%"],
            ] as const;

            return (
          <div className="table-shell compact">
            <table>
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Impressions</th>
                  <th>Bookings</th>
                  <th>Site Visits</th>
                  <th>Engagement</th>
                </tr>
              </thead>
              <tbody>
                {heatmapRows.map(([channel, impressions, bookings, siteVisits, engagement]) => (
                  <tr key={String(channel)}>
                    <td>{channel}</td>
                    {[impressions, bookings, siteVisits, engagement].map((value, index) => {
                      const intensity = parsePercent(value) / 32;
                      const heatStyle =
                        intensity === 0
                          ? undefined
                          : {
                              backgroundColor: `rgba(2, 168, 168, ${0.12 + intensity * 0.4})`,
                              color: intensity > 0.6 ? "#0e2a36" : "#123445",
                            };

                      return (
                        <td
                          key={`${String(channel)}-${index}`}
                          className={`heatmap-cell${intensity === 0 ? " zero" : ""}`}
                          style={heatStyle}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="summary-row">
                  <td>Total</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
            );
          })()}
        </Card>
      </section>

      <section className="content-grid single">
        <Card
          title="Stored Performance Learnings"
          action={<WidgetDropdown tone="light" label="Campaigns" value="Latest" options={["Latest", "Top Performing", "By Advertiser"]} />}
        >
          <div className="insight-list">
            {filteredCampaigns.slice(0, 4).map((campaign) => (
              <div key={campaign.id} className="insight-item">
                <p className="eyebrow">{campaign.advertiser}</p>
                <strong>{campaign.campaign}</strong>
                <span>{campaign.insight}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="content-grid single">
        <Card
          title="Competitive Snapshot"
          action={<WidgetDropdown tone="light" label="Scope" value="Auto Industry" options={["Auto Industry", "EV Segment", "Luxury Auto"]} />}
        >
          <div className="table-shell compact">
            <table>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Consideration</th>
                  <th>Visibility</th>
                  <th>Current Strength</th>
                </tr>
              </thead>
              <tbody>
                {competitiveBrands.map((brand) => (
                  <tr key={brand.id}>
                    <td>{brand.name}</td>
                    <td>{brand.consideration}</td>
                    <td>{brand.visibility}</td>
                    <td>{brand.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <Drawer open={drawerSegment !== null} title={highlightedSegment.name} onClose={() => setDrawerSegment(null)}>
        <div className="detail-stack">
          <p>
            This fictional audience cluster demonstrates how Performance can show stored automotive
            outcomes by audience before any new plan is created.
          </p>
          <ul className="detail-list">
            <li>Observed scale: {highlightedSegment.audienceSize}</li>
            <li>Engagement index: {highlightedSegment.evIndex}</li>
            <li>Historical video completion: {highlightedSegment.engagementRate}</li>
            <li>Dealer response strength: {highlightedSegment.dealerPropensity}</li>
            <li>Preferred channels: {highlightedSegment.preferredChannels.join(", ")}</li>
            <li>Relevant planning use: informs weighted channel and KPI recommendations later in Plan.</li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}

function formatCurrencyMillions(value: number) {
  return `$${value.toFixed(1)}M`.replace(".0M", "M");
}

function formatMetricMillions(value: number) {
  return `${value.toFixed(1)}M`.replace(".0M", "M");
}

function formatThousands(value: number) {
  return `${value}K`;
}

function parsePercent(value: string) {
  return Number.parseFloat(value.replace("%", "")) || 0;
}

function FilterGroup({
  label,
  options,
  value,
  onSelect,
}: {
  label: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="filter-group">
      <span>{label}</span>
      <div className="select-shell">
        <select value={value} onChange={(event) => onSelect(event.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="select-chevron">⌄</span>
      </div>
    </div>
  );
}
