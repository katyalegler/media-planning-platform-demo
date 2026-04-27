# Updated Requirements

## Documentation

- Maintain `docs/demo-rules.md` as the single source of truth for core demo principles.
- Keep the repository shareable by excluding machine-local runtime bundles, generated output, and dependency directories from git.
- Publish the GitHub repository as public.
- Include at least one representative demo screenshot in the README.

## Navigation

- The left sidebar title should be `Media Management`.
- Show grouped navigation sections:
  - `Post-Campaign`
    - `Performance`
  - `Pre-campaign`
    - `Build a Plan`
    - `Plans`

## Performance Page

- Keep audience-facing sections consistent with the current audience selection state.
- When `4 Selected` audiences are active, the page should consistently reflect those four audiences.
- The `Summary` section should use values consistent with the rest of the `Performance` tab rather than generic placeholder numbers.
- The `Industry` selector should visibly include an `All` option.
- The `Audiences` selector should visibly include an `All` option.
- Add a visible `KPI` selector next to `Audiences` with `All` selected.
- Keep `Audiences` and `KPI` on the same row.
- Make the top context/filter widgets feel slimmer and less chunky.
- Do not repeat the same top-level headline metrics in a second summary row below the main `Summary` section.
- Make the summary metric cards inside the dark summary panel more subtle and refined.
- Remove the `Open Launch Plan` button from the `Performance` page header.
- Name the KPI-spend widget `Auto Industry Spend by KPI`.
- Name the advertiser-level channel mix widget `Advertiser Channels Breakdown`.
- Render the spend/impressions widget as a line chart, not a bar chart.
- Include a legend in the spend/impressions widget.
- Show monthly values on hover in the spend/impressions widget.
- Keep the spend/impressions widget numerically aligned with the rest of the page.
- Make the spend and impressions lines visually distinct and clearly separated.
- Show the monthly timeline from `Jan 30` to `Dec 30`.
- Do not make the spend and impressions lines behave like parallel scaled copies.
- Keep the spend and impressions lines thin and visually restrained.
- Keep the spend and impressions lines visually uniform in thickness.
- Apply the Steppe-inspired palette consistently across the widgets; avoid purple-heavy accents.
- Make `Channel Performance Mix` KPI-based instead of one total mix.
- Render `KPI by Channel Hit Map` as a table.
- In that table, list channels in rows and KPIs in columns.
- Within each KPI column, the channel percentages should add to 100.
- Style that KPI mix table as a heatmap, with brighter cells for higher percentages and white cells for zeros.
- Remove subtitles from `Advertiser Performance` and all widgets below it on the `Performance` page.
- In `Audience Performance`, use these columns:
  - `Audience`
  - `Audience Size`
  - `Spend`
  - `Impressions`
  - `CPV`
  - `CPC`
  - `Top three channels`
- Make `Top Market Performance` a smaller market-index widget.
- In `Top Market Performance`, show only `Performance Index`, with some markets above 100 and some below 100.
- Treat `100` as the U.S. average benchmark for the market-performance widget.
- Widget-level controls should show a small chevron and a few plausible alternate options.
- Apply that dropdown treatment consistently across the `Performance` widgets rather than only a subset of them.
- Ensure widget dropdown menus remain visible above neighboring widgets and are not visually clipped.
- Make the currently selected widget option clearly visible without hover.
- Use a lighter dropdown treatment on white-card widgets so the active value remains readable.

## Plan Outcome Page

- Do not show the 10 small summary widgets beneath the two campaign-level donut charts.
- Keep the larger sections visible:
  - submitted campaign brief
  - budget by channel
  - budget by audience
  - KPI program tables
  - larger allocation / delivery / forecast visuals
  - stacked full-width text sections
- Show the two KPI program tables one under the other, not side by side.
- In both KPI program tables, show only these columns:
  - `Channel`
  - `Budget`
  - `CPM`
  - `Impressions`
  - `Bookings`
- Rename the two channel recommendation widgets to:
  - `Brand Impressions Recommendations`
  - `Test Drive Bookings Recommendations`
- Do not show audience recommendation widgets.
- Add `CPB` to the remaining recommendation tables.
- Remove all remaining widgets below the two channel recommendation tables.

## Non-Functional

- The page should feel presentation-ready and avoid dense clusters of small cards.
- The layout should preserve the existing prompt-driven planning flow.
