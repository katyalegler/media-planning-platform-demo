# Non-Decisions

## 2026-04-27

### No vendored runtime in git

- We are not committing the local vendored Node runtime or its archive to the shared repo.
- Reason: Those files are machine-recovery assets, not source code, and would bloat the repository unnecessarily.

### No generated build output in git

- We are not committing `dist/` or `node_modules/`.
- Reason: The repo should contain source and docs, not generated or reinstallable artifacts.

### No private GitHub visibility

- We are not creating this repository as private.
- Reason: The user explicitly selected a public GitHub repo for the demo.

## 2026-04-15

### No deeper widget interactivity yet

- We are not turning every widget dropdown into a fully functional control right now.
- Reason: The current goal is to make the interface read as complete and product-like for presentation purposes. Visual completeness and consistency matter more than wiring every alternate option into state changes.

### No per-widget persisted state

- We are not introducing separate persisted widget filter state for each dropdown just to make the selected values more visible.
- Reason: The visibility issue is presentational, not state-management related. The simpler and safer fix is to improve the trigger treatment itself.

### No chart replacement for the KPI mix view

- We are not replacing `Channel Performance Mix by KPI` with a separate chart type.
- Reason: The user explicitly wants to keep the table structure and layer heatmap behavior onto it rather than losing the exact KPI/channel matrix.

### No subtitle removal above the lower widget stack

- We are not removing subtitles from the upper analytics panels as part of this change.
- Reason: The request is specifically scoped to `Advertiser Performance` and the widgets below it, not the full page.

## 2026-03-30

- We did not replace the removed widgets with new charts or cards.
  Reason: the request was to simplify the area, not swap one dense block for another.

- We did not change the donut charts above the removed widgets.
  Reason: they already serve as the campaign-level summary visuals the user asked to keep.

- We did not change the underlying scenario data.
  Reason: this update was strictly about outcome-page presentation.

- We did not merge the two KPI program tables into a single combined table.
  Reason: the user asked for vertical placement, not structural consolidation.

- We did not claim the live Cyris dashboard values were extracted exactly from the referenced page.
  Reason: the public SPA bundle was reachable, but the authenticated runtime dashboard data was not available to inspect directly.

- We did not keep the audience recommendation widgets.
  Reason: the user explicitly asked to remove them and focus on the remaining channel tables.

## 2026-04-13

- We did not split the master rules across many separate new documents.
  Reason: the user asked for one place to preserve the principles of work so future sessions stay aligned.

## 2026-04-15

- We did not add any new routes or modules while changing the sidebar structure.
  Reason: the request was only to reorganize the existing pages visually in the left navigation.

- We did not expand the Performance page into new widgets to solve the consistency issue.
  Reason: the request was to reconcile existing content, not broaden the page scope.

- We did not change the default filter story while adding visible `All` options.
  Reason: the request was to make those options visible, not to change the intended demo defaults.

- We did not replace the removed duplicate metric row with another summary widget.
  Reason: the request was to eliminate repetition, not move it elsewhere.

- We did not change the underlying advertiser channel data when renaming the widget.
  Reason: the request was about naming clarity, not a data change.

- We did not change the KPI percentages when renaming the KPI-spend widget.
  Reason: the request was about the title, not the chart contents.

- We did not wire the new KPI dropdown into deeper filtering logic.
  Reason: the request was to show the control in the UI, not to change the underlying page behavior.

- We did not introduce a new separate filter section for KPI.
  Reason: the user wanted KPI grouped directly with Audiences on the same line.

- We did not remove the ability to navigate to planning from the product entirely.
  Reason: the request was to remove the repeated CTA from the Performance header, not to remove planning access from the app.

- We did not change the underlying monthly values while separating the chart lines.
  Reason: the request was about chart readability, not the numbers themselves.

- We did not convert the chart into a synthetic forecasting view.
  Reason: the request was still about historical-looking monthly behavior, not prediction.

- We did not add new top-of-page widgets while polishing the control area.
  Reason: the request was to improve the existing controls visually, not introduce more elements.

- We did not change the chart data while thinning the lines.
  Reason: the request was purely about visual weight.

- We did not introduce a new unrelated color system while refining the widgets.
  Reason: the request was to move closer to the existing Steppe-based direction, not invent another palette.

- We did not keep the old trend percentage column in the market widget.
  Reason: the updated requirement was to focus on the index benchmark only.

- We did not wire the widget dropdown menus into full state changes.
  Reason: the request was to show how they should work visually, not to implement full filtering behavior.

- We did not keep the KPI mix widget as a visual bar composition.
  Reason: the user explicitly wanted the contribution shown as a table.

- We did not change the actual summary metrics while refining the summary cards.
  Reason: the request was about visual quality, not the underlying numbers.
