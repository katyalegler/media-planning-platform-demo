# Decision Log

## 2026-04-13

### Consolidated the project principles into a single demo rules document

- Decision: Create `docs/demo-rules.md` as the source-of-truth document for the demo's product principles and design direction.
- Why: The project guidance had accumulated across many chat turns and needed one stable reference for future sessions.
- Impact: Future work can now align against a single document covering branding, structure, data rules, page intent, interaction patterns, and scope boundaries.
- Scope change: Documentation only.

## 2026-04-15

### Reorganized the sidebar into grouped media-management sections

- Decision: Change the left navigation title to `Media Management` and group the nav into `Post-Campaign` and `Pre-campaign`.
- Why: The user wanted the product structure to read more like a staged media workflow rather than a flat list of pages.
- Impact: `Performance` now sits under `Post-Campaign`, while `Build a Plan` and `Plans` sit under `Pre-campaign`.
- Scope change: Navigation presentation only.

### Unified the Performance page summary with the underlying filtered data

- Decision: Replace the hardcoded `Performance` summary metrics with values derived from the same campaign and audience data used elsewhere on the page.
- Why: The user wanted the page to stay internally consistent, especially around the selected four audiences and the headline summary numbers.
- Impact: The summary and advertiser-performance sections now read from the same historical dataset and no longer present conflicting totals.
- Scope change: Local demo data and page logic only.

### Added visible `All` options to Industry and Audiences

- Decision: Show `All` as an available option in the `Industry` and `Audiences` selectors.
- Why: The user wanted those controls to look more like complete filter menus, even without changing the underlying default behavior.
- Impact: The selectors now appear more product-like while preserving the same demo flow.
- Scope change: UI option-list update only.

### Added a KPI dropdown to the Performance filters

- Decision: Add a visible `KPI` dropdown next to the `Audiences` dropdown on the `Performance` page, with `All` selected.
- Why: The user wanted the filter area to feel more complete and more like a real analytics interface.
- Impact: The lower filter row now includes both audience and KPI selectors.
- Scope change: UI filter presentation update only.

### Aligned the Audience and KPI dropdowns onto the same row

- Decision: Change the lower filter-row layout so `Audiences` and `KPIs` render side by side.
- Why: The user wanted those two related controls to sit on the same line.
- Impact: The second filter row now presents the audience and KPI selectors as a paired control set.
- Scope change: Layout-only update.

### Removed the Performance page CTA button

- Decision: Remove the `Open Launch Plan` button from the `Performance` header.
- Why: The user identified it as repetitive and not needed in that location.
- Impact: The header now stays focused on context rather than a duplicated action.
- Scope change: Presentation-only update.

### Reworked the spend/impressions widget into a line chart with legend and hover values

- Decision: Replace the bar-style monthly widget with a two-line chart for spend and impressions, add a legend, and show monthly values on hover.
- Why: The user wanted the chart to read more clearly and align better with the rest of the page data.
- Impact: The widget now communicates historical spend and impression trends with clearer series labeling and interactive month-level values.
- Scope change: Visualization update only.

### Increased visual separation between the spend and impressions lines

- Decision: Move the line chart to a shared plotting scale and strengthen the spend series styling.
- Why: The user found the two lines too overlapped to read clearly.
- Impact: The two series now separate more visibly while preserving the same monthly values.
- Scope change: Visualization-only refinement.

### Updated the time-series window and made the two lines less parallel

- Decision: Change the monthly timeline to run from `Jan 30` through `Dec 30` and vary the monthly spend/impression relationship more visibly.
- Why: The user wanted the timeline labels changed and the line shapes to reflect changing CPM and media mix rather than tracking in parallel.
- Impact: The chart now reads more like a real historical media-performance series with varying month-level efficiency.
- Scope change: Chart data refinement only.

### Reduced the line thickness in the spend/impressions chart

- Decision: Make both chart lines noticeably thinner.
- Why: The user found the current stroke weight visually heavy and unattractive.
- Impact: The line chart should now feel cleaner and more restrained.
- Scope change: Visualization styling only.

### Retuned the widget palette toward the Steppe-inspired colors

- Decision: Reduce purple-heavy widget accents and rebalance the analytics widgets around navy, teal, cyan, and aqua.
- Why: The user asked for the widgets to fit the Steppe palette more closely.
- Impact: The performance widgets should now feel more coherent with the agreed brand direction.
- Scope change: Styling refinement only.

### Forced uniform-looking line rendering in the chart

- Decision: Adjust the SVG line rendering so the chart strokes feel visually consistent across their full length.
- Why: The user felt the lines still looked uneven and illustrative rather than analytic.
- Impact: The two chart series should now read more like proper graph lines.
- Scope change: Visualization styling only.

### Slimmed down the top Performance controls

- Decision: Reduce the visual weight of the top context chip and filter cards on the `Performance` page.
- Why: The user felt the top widgets looked too fat, clunky, and unattractive.
- Impact: The top control area now reads more like a polished filter bar and less like a stack of oversized cards.
- Scope change: Styling refinement only.

### Refined the summary metric cards inside the Performance summary panel

- Decision: Tone down the ten metric cards inside the dark `Summary` panel with subtler typography and lighter card treatment.
- Why: The user felt the cards themselves still looked too fat, clunky, and visually heavy.
- Impact: The summary panel should now feel more polished and less loud while keeping the same metrics.
- Scope change: Styling refinement only.

### Changed the lower performance widgets to KPI-based channel mix and market index

- Decision: Convert `Channel Performance Mix` from a total rollup into a KPI-based view, and simplify `Top Market Performance` to a market performance index table with `100` as the U.S. average baseline.
- Why: The user wanted the channel widget to be more analytically useful and the market widget to be tighter and less cluttered.
- Impact: The channel widget is now larger and KPI-oriented, while the market widget is smaller and focused on index values above or below the national average.
- Scope change: Content and layout refinement on the `Performance` page.

### Converted widget chips into visible dropdown-style controls

- Decision: Add chevrons and small option lists to the widget-level controls across the `Performance` page.
- Why: The user wanted those controls to visibly demonstrate how real product dropdowns would work.
- Impact: Widget controls now look interactive and show a few alternate options while remaining presentation-safe.
- Scope change: UI-only enhancement.

### Converted `Channel Performance Mix by KPI` into a matrix table

- Decision: Replace the KPI mix graphic with a table that lists channels in rows and KPIs in columns.
- Why: The user wanted the contribution by KPI to be explicit and numerically legible.
- Impact: Each KPI column now shows channel percentage contributions that sum to 100%.
- Scope change: Widget content and presentation update only.

### Standardized Performance widget dropdowns across the page

- Decision: Apply the same finished dropdown treatment to all `Performance` widget headers and strengthen menu layering so option lists remain visible above neighboring content.
- Why: The user wanted the dropdown pattern completed everywhere instead of only in a few widgets, and the current state still felt partially unfinished.
- Impact: The `Performance` page now presents a more consistent product-like control language across dark panels and white cards.
- Scope change: UI consistency and layering refinement only.

### Made selected dropdown values more explicit in widget headers

- Decision: Change widget dropdown triggers so the chosen value is visually emphasized and introduce a lighter dropdown treatment for white-card widgets.
- Why: The user pointed out that the current chosen selections were still not always visible.
- Impact: Widget controls now keep the active selection readable at a glance across both dark panels and white cards.
- Scope change: UI clarity refinement only.

### Turned the KPI mix table into a heatmap table

- Decision: Keep `Channel Performance Mix by KPI` as a matrix table, but add value-based heatmap coloring to the KPI cells.
- Why: The user wanted to preserve the explicit row/column structure while making the intensity of contribution easier to scan visually.
- Impact: Non-zero KPI cells now use a Steppe-aligned aqua/teal intensity scale, while zero-value cells remain white for contrast.
- Scope change: Widget styling and rendering refinement only.

### Removed subtitles from the lower Performance widgets

- Decision: Remove subtitles from `Advertiser Performance` and all widgets below it on the `Performance` page.
- Why: The user wanted those sections to feel cleaner and less repetitive.
- Impact: The lower widget stack now relies on concise titles and content rather than repeating explanatory subtitle text.
- Scope change: Presentation-only refinement.

### Renamed the KPI heatmap widget

- Decision: Rename `Channel Performance Mix by KPI` to `KPI by Channel Hit Map`.
- Why: The user wanted the widget name to match its current heatmap presentation more directly and use the exact preferred wording.
- Impact: The widget title now reflects the requested heatmap framing instead of the older table-only label.
- Scope change: Label-only update.

### Reframed the Audience Performance table around spend and delivery

- Decision: Replace the old audience-observation columns with `Audience`, `Audience Size`, `Spend`, `Impressions`, `CPV`, `CPC`, and `Top three channels`.
- Why: The user wanted this section to read as a historical media-performance table rather than an audience-profile descriptor.
- Impact: The audience widget now aligns better with the rest of the page’s performance storytelling and surfaces concrete spend and efficiency outputs.
- Scope change: Table content refinement only.

## 2026-04-27

### Prepared the demo for a clean GitHub repository sync

- Decision: Add a `.gitignore` and remove machine-specific vendored-runtime commands from the primary README path.
- Why: The user asked to add the project to a GitHub repo, and the workspace contained local-only artifacts like `node_modules`, `dist`, `.DS_Store`, and a vendored Node runtime that should not be tracked as source.
- Impact: The repo can now be committed and shared as a standard app codebase rather than a machine snapshot.
- Scope change: Repo hygiene and handoff readiness only.

### Publish the repo publicly on GitHub

- Decision: Create `media-planning-platform-demo` as a public GitHub repository.
- Why: The user explicitly chose a public repository for sharing the demo.
- Impact: The codebase can now be synced to a shareable remote and referenced directly from GitHub.
- Scope change: Repository hosting configuration only.

### Removed the duplicate metric-card row from Performance

- Decision: Remove the smaller white metric row beneath the main `Summary` panel on the `Performance` page.
- Why: The user identified it as repetitive with the larger summary section already shown above.
- Impact: The page now has a cleaner hierarchy with one primary summary instead of two overlapping headline-metric sections.
- Scope change: Presentation-only update.

### Renamed `Channel Analysis` to `Advertiser Channels Breakdown`

- Decision: Change the widget title from `Channel Analysis` to `Advertiser Channels Breakdown`.
- Why: The user wanted the label to describe more precisely what the visualization is showing.
- Impact: The widget name now matches the advertiser-level channel-spend breakdown shown in the chart.
- Scope change: Label-only update.

### Renamed `Spend by KPI` to `Auto Industry Spend by KPI`

- Decision: Change the KPI-spend widget title to `Auto Industry Spend by KPI`.
- Why: The user wanted the widget framing to make the industry scope explicit.
- Impact: The label now better reflects that the visualization summarizes historical auto-category spend rather than a generic KPI breakdown.
- Scope change: Label-only update.

## 2026-03-30

### Removed the 10 small metric widgets from the plan outcome page

- Decision: Remove the two compact metric grids that appeared below the campaign-level donut charts on the `Plans` view.
- Why: The user wanted the page to feel cleaner and less fragmented. Those widgets repeated information already visible in larger sections and added visual noise beneath the graphs.
- Impact: The plan outcome now emphasizes the submitted brief, budget-composition charts, channel programs, forecast visuals, and full-width text sections without the extra row of small cards.
- Scope change: This is a presentation-layer simplification only. No routing, data model, or prompt logic changed.

### Stacked the two program tables vertically on the plan outcome page

- Decision: Change the `Program for KPI 1` and `Program for KPI 2` cards from a two-column layout to a single-column vertical stack.
- Why: The user wanted text-heavy widgets to use the full page width so labels and values are easier to present and scan.
- Impact: The two program tables now appear one under the other and have more horizontal space for channel, objective, budget, and output values.
- Scope change: Layout-only update. No data, navigation, or planning logic changed.

### Simplified both KPI program tables to shared media columns

- Decision: Both `Program for Brand Impressions` and `Program for Test Drive Bookings` now use the same five columns: `Channel`, `Budget`, `CPM`, `Impressions`, and `Bookings`.
- Why: The user wanted the tables to read more like direct media output tables and less like mixed KPI-specific reporting views.
- Impact: The old `Objective`, `Rate`, and KPI-specific output labels were removed from the table UI, and the row values were recast into a consistent format.
- Scope change: This updated the local planning data model and table presentation only.

### Reduced the plan outcome page to four recommendation tables

- Decision: Keep only channel and audience recommendation tables for the two KPIs on the `Plans` page.
- Why: The user wanted the page focused on the actionable recommendation outputs and asked to remove all remaining widgets below those tables.
- Impact: The plan outcome now centers on four stacked recommendation tables with no additional widgets below them.
- Scope change: Presentation and local demo-data update only.

### Reduced the plan outcome page further to two channel recommendation tables

- Decision: Remove the two audience recommendation widgets and keep only the two channel recommendation widgets.
- Why: The user wanted the page simplified further and asked specifically to remove the audience widgets.
- Impact: The `Plans` page now ends with just `Brand Impressions Recommendations` and `Test Drive Bookings Recommendations`.
- Scope change: Presentation-only update, with one additional table column for booking efficiency.

### Added CPB to both recommendation tables

- Decision: Add a `CPB` column to both remaining recommendation tables.
- Why: The user wanted a direct cost-per-booking readout alongside CPM, impressions, and bookings.
- Impact: Each channel row now surfaces both top-funnel media cost and lower-funnel efficiency in the same table.
