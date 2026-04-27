# Reasoning

## 2026-04-15

### Why the Performance dropdowns needed another pass

Some widget-level controls had already been converted into dropdowns, but the experience still felt incomplete because the pattern was inconsistent from widget to widget. In a presentation-oriented analytics demo, repeated control language matters as much as the data itself. If one widget has a visible chevron and menu while another similar widget has no control at all, the interface reads as unfinished rather than intentionally simplified.

The fix is therefore not only to add more dropdowns, but to make the dropdown system behave reliably wherever it appears. That means consistent trigger styling, a few plausible alternate options for each widget, and enough z-index and overflow safety that menus can open without being visually clipped by adjacent sections.

### Why the chosen value needs stronger emphasis

Even when a dropdown exists, it does not help the presentation if the active selection is visually weak or easy to miss. In this demo, the selected state needs to remain readable without hover because the user is often narrating the page live. The trigger itself therefore has to carry the current choice clearly, especially on white-card widgets where the darker analytics styling is not the right fit.

### Why a heatmap is better than a plain KPI contribution table

The KPI-mix matrix is useful because it is explicit, but plain percentages force the presenter to read every number one by one. A heatmap treatment preserves the analytical rigor of the table while making relative strength obvious at a glance. Using the Steppe palette for intensity also keeps the widget visually consistent with the rest of the demo instead of introducing another unrelated chart treatment.

### Why removing lower-widget subtitles helps

Once the `Performance` page already establishes the historical-analysis context, repeating descriptive subtitles on every lower widget adds more noise than clarity. For the dense lower stack, shorter headers make the page easier to scan and more presentation-friendly without changing the meaning of the content.

### Why the audience table needed performance metrics

The previous audience table leaned too much toward descriptive segmentation fields like engagement index and dealer response. Those signals can be useful internally, but in this page they read more like planning inputs than stored post-campaign outputs. Moving the table toward spend, impressions, and efficiency metrics makes the widget feel more like a genuine historical reporting surface.

## 2026-04-27

### Why the repo needs cleanup before GitHub sync

Local recovery assets can be useful inside a working folder, but they should not define the shape of the shared repository. A GitHub repo for this demo should contain the product code, documentation, and configuration needed to run the app in a normal environment. Keeping machine-specific bundles and generated output out of version control makes the repo easier to clone, review, and maintain.
## Why a consolidated rules document was needed

The demo direction was established gradually: first the platform boundaries, then the Steppe-inspired visual system, then the performance-vs-planning distinction, and then the exact planning workflow. Keeping those principles only in chat would make future work slower and less consistent.

Placing them in one document makes it easier to preserve:

- the intended visual language
- the simplified product scope
- the client-safe data rules
- the narrative flow from historical performance to real-time plan generation

## Why the sidebar should be grouped

The three pages represent two different phases of work. Grouping them under `Post-Campaign` and `Pre-campaign` makes the information architecture clearer and closer to a real media-management workflow.

## Why the Performance summary needed to be data-driven

The page mixed a filtered historical view with a generic hardcoded summary panel. That made the tab feel less trustworthy in a live demo. Driving the summary from the same historical records used by the tables keeps the story coherent and makes the audience selection feel real instead of decorative.

## Why `All` should appear in the selector lists

Even if the demo does not rely on those options as defaults, including `All` makes the filter controls feel more complete and closer to a real analytics product. This is a UI affordance change rather than a workflow change.

## Why the KPI dropdown should be visible

The performance page is framed as a slice-and-dice analytics surface. Adding a KPI selector next to audiences makes the filter bar feel more complete, even if the demo does not yet depend on that control for deeper logic.

## Why Audience and KPI should share a row

Those two controls belong to the same analytical framing layer and read more clearly when presented together. Putting them on one line makes the filter section feel more intentional and product-like.

## Why the CTA button should be removed from Performance

The `Performance` page is now an analytics review surface. Keeping a large action button in the header pulls attention away from the historical data and repeats navigation that is already available elsewhere in the product.

## Why the spend/impressions chart should be a line chart

A two-series line chart is better for showing month-over-month historical movement than paired columns in this layout. Adding a legend and hover values also makes the chart easier to explain in a live walkthrough.

## Why the two lines needed stronger separation

When each series uses its own normalization, similar seasonal patterns can appear visually stacked on top of each other. Using a shared plotting scale and stronger styling makes the relationship easier to read without changing the underlying monthly numbers.

## Why the two lines should not move in parallel

Historical spend and impressions rarely move as perfectly scaled copies of one another because CPMs, inventory mix, and channel balance vary over time. Introducing more month-level variation makes the chart feel more realistic and more aligned with media-planning behavior.

## Why the chart lines should be thinner

Heavy strokes can overpower the rest of the interface and make the chart feel blunt rather than polished. Thinner lines keep the focus on the pattern while fitting the subtler design direction the user wants.

## Why the widget palette needed another pass

Even after establishing the overall brand direction, some widgets were still carrying loud purple-heavy accents that clashed with the Steppe-inspired look. Pulling those widgets back into a navy/teal/aqua range makes the whole page feel more intentional.

## Why line rendering needed tightening

Even a technically constant stroke can look uneven when scaling and joins are too aggressive. Using a more restrained SVG stroke treatment helps the chart read like a professional graph rather than an illustration.

## Why the channel mix should be broken out by KPI

A single total channel mix hides the more interesting story. Breaking channel allocation out by KPI better demonstrates how historical performance can differ by business objective and makes the widget feel more strategic.

## Why market performance should use an index around 100

Indexing markets against a U.S. average of 100 creates a clearer benchmark than showing trend percentages. It lets the user immediately see which markets are above or below national norms.

## Why widget chips should expose option lists

Static chips can imply filtering, but they do not communicate how the control would actually behave. Adding a chevron and a short option list makes the demo feel much closer to a real analytics product without requiring full interactivity.

## Why the KPI mix should be a table

For cross-KPI contribution comparisons, a graphic can obscure the actual percentages. A matrix table makes it obvious how each channel contributes to each KPI and makes the 100% column totals easy to verify.

## Why the top controls should be slimmer

The top of the page is a control area, not the main content. When those widgets get too tall and padded, they compete with the actual analytics sections. Slimming them down improves hierarchy and makes the page feel more product-like.

## Why the summary cards should be quieter

The metrics are important, but they should not dominate the entire page with oversized numerals and chunky status pills. Subtler cards feel more premium and let the data speak without shouting.

## Why the extra metric row should be removed

Once the larger dark `Summary` panel is present, a second row of white headline cards repeats the same story and weakens the visual hierarchy. Removing the duplicate row keeps the top of the `Performance` page cleaner and easier to present.

## Why the channel widget title should be more specific

The chart is not a generic channel-analysis view; it is specifically showing how each advertiser allocated spend across channels. Naming it `Advertiser Channels Breakdown` makes that clearer for a client walkthrough.

## Why the KPI widget title should include the industry

The performance page is framed around historical automotive data. Including `Auto Industry` in the widget title makes the scope explicit and keeps the naming aligned with the rest of the page.

## Why the metric grids were removed

The generated plan page had become crowded. The two donut charts already summarize campaign-level allocation, and the channel tables plus KPI sections already communicate the performance story. Keeping 10 additional small widgets under those graphs created duplication and made the page harder to present live.

Removing them improves:

- readability during a client walkthrough
- visual hierarchy on the `Plans` page
- consistency with the user's preference for larger text-heavy widgets to span full width

## Why nothing else changed

The user asked specifically to remove the small widgets, not to rework the surrounding charts or program tables. Preserving the rest of the page keeps the planning narrative stable while simplifying the outcome layout.

## Why the program tables should stack vertically

Those two cards are table-heavy and carry meaningful text in nearly every column. In a side-by-side layout, they compress too quickly and become harder to present. Giving each table the full row keeps the plan easier to read without changing the actual recommendation.

## Why both program tables now share the same columns

The previous table structure mixed objectives, rates, and KPI-specific output labels in ways that made the two sections harder to compare. A common structure makes the plan easier to explain in a meeting: each row now answers the same questions for every channel, regardless of whether the program is upper-funnel or lower-funnel.

The figures are calibrated to the demo budgets and channel mix and were inferred from the Cyris-style planning pattern, because the referenced live dashboard data itself was not accessible from the public app bundle.

## Why the plan outcome now ends with audience recommendations

Once the page already shows submitted brief information, budget composition, channel recommendations, and audience recommendations, the extra allocation and summary widgets become redundant for this demo. Ending the page at the recommendation tables keeps the outcome page tighter and more presentation-friendly.

## Why the audience tables were removed

For this walkthrough, the channel recommendation is the clearer final output. Keeping the audience tables made the page longer without adding much decision value for a live demo. Removing them keeps the page tighter and puts attention on the two main buying recommendations.

## Why CPB was added even to the impressions table

The user wanted a shared table structure. Showing CPB across both tables creates a consistent readout and helps connect awareness channels to downstream booking efficiency, even in the upper-funnel program.
