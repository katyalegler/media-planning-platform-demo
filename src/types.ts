export type DemoProject = {
  id: string;
  name: string;
  brand: string;
  product: string;
  flightDates: string;
};

export type AudienceSegment = {
  id: string;
  name: string;
  audienceSize: string;
  evIndex: number;
  engagementRate: string;
  dealerPropensity: string;
  preferredChannels: string[];
};

export type CompetitiveBrand = {
  id: string;
  name: string;
  consideration: number;
  visibility: string;
  strength: string;
};

export type PlanChannel = {
  id: string;
  channel: string;
  budget: string;
  cpm: string;
  impressions: string;
  bookings: string;
};

export type ScenarioVariant = {
  id: string;
  name: string;
  summaryMetrics: {
    brandImpressions: string;
    completedVideoViews: string;
    avgViewability: string;
    testDriveBookings: string;
    bookingCpa: string;
    activeMarkets: string;
  };
  awarenessChannels: PlanChannel[];
  bookingChannels: PlanChannel[];
  awarenessAudiences: PlanChannel[];
  bookingAudiences: PlanChannel[];
  chartSeries: {
    budgetAllocation: { label: string; national: number; regional: number }[];
    reachCurve: { week: string; value: number }[];
    bookingForecast: { market: string; bookings: number }[];
  };
};

export type ExploreFilterState = {
  industry: "All" | "Auto Industry";
  advertiser: "All" | "Northstar Electric Motors" | "Apex Auto" | "Voltaris" | "Meridian EV";
  channel: "All" | "Connected TV" | "Online Video" | "Search" | "Social" | "CRM";
  kpi: "All" | "Brand Impressions" | "Test Drive Bookings" | "Site Visits" | "Leads" | "Engagement";
  audience:
    | "All"
    | "4 Selected"
    | "Eco-Upgraders"
    | "Luxury Tech Switchers"
    | "Family SUV Replacers"
    | "Urban First-Time EV Buyers";
};
