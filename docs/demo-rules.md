# Demo Rules

This document is the source of truth for future work on the Northstar demo. It consolidates the product principles, design direction, content constraints, and interaction rules defined across the project conversation.

## Purpose

The demo exists to present a client-safe version of a media-planning platform. It should communicate the look, feel, and workflow of the real platform without using the client's actual design system, client data, or real infrastructure.

The demo is not a full platform. It is a lightweight presentation product built to support one guided use case well.

## Core Demo Goal

Show that the platform can:

1. store and review historical performance data
2. slice and manipulate that data in a presentation-friendly way
3. take a structured campaign prompt
4. generate a media plan in real time using prior campaign intelligence

The narrative should feel like:

1. Review historical automotive performance in `Performance`
2. Enter campaign prompts in `Build a Plan`
3. Show a short real-time generation delay
4. Review the generated recommendation in `Plans`

## High-Level Product Boundaries

- Use dummy data only
- Do not use client data
- Do not reproduce the client's exact branding
- Keep the functionality close to the real platform, but simplified
- Favor presentation quality over technical realism
- No real backend, infrastructure, auth, persistence, or production data integrations

## Structural Reference

The demo should mimic the structural feel of Cyris:

- login flow
- left-side navigation
- dashboard-style content regions
- widget/card layout
- prompt-driven planning flow
- plan outcome/recommendation view

It should not try to recreate every product area. It is intentionally narrowed.

## Included Navigation

Keep only these sections in the left navigation, grouped as a media workflow:

- title: `Media Management`
- group: `Post-Campaign`
  - child: `Performance`
- group: `Pre-campaign`
  - child: `Build a Plan`
  - child: `Plans`

## Excluded Navigation

Do not include:

- User Management
- Compare Scenarios
- Benchmarking

Do not leave placeholders, hidden routes, or disabled shells for excluded modules.

## Brand and Visual Rules

Use the Steppe Change visual direction, not the original client brand.

### Palette

- primary ink: `#0e2a36`
- deep blue support: `#203556`
- teal accent: `#02a8a8`
- bright cyan accent: `#1aa3de`
- soft aqua highlight: `#a5dde2`
- white surface: `#ffffff`
- light neutral surface: `#f1f1f1`

When refining widget visuals, prefer this palette over purple-heavy treatments. Dark analytic widgets should stay in a restrained navy/teal/aqua range.

### Typography

- headings: `Roboto Slab`
- body/UI: `Roboto`

### Visual Tone

- clean, polished, presentation-safe
- modern analytics product feel
- Cyris-style structure with Steppe-inspired coloring
- white cards for core UI surfaces
- dark analytics panels when appropriate for Cyris-like data visualization sections
- avoid overcrowded pages
- avoid dense clusters of small widgets

### Layout Preference

When a widget contains meaningful text or dense table content, prefer stacking widgets vertically and allowing them to span the page width rather than placing them side by side.

This applies especially to:

- text-heavy summaries
- campaign brief sections
- recommendation tables
- dense analytical tables

## Data Rules

All data must be dummy data.

### Demo Domain

Use a fictional automotive advertiser:

- brand: `Northstar Electric Motors`
- product: `Northstar Eon`

### Performance Data Framing

Historical data should come from a fictional set of automotive advertisers and campaigns. It should look aggregated, reusable, and sliceable.

Performance should emphasize:

- past campaign results
- historical performance by advertiser
- historical performance by audience
- historical spend and KPI distribution
- real-looking media performance outputs

Performance should not drift into prospective planning language such as:

- qualified prospects
- future-performing users
- prospect pools framed as planning outputs

Those belong to planning logic, not historical performance storytelling.

## Performance Page Rules

The first page is `Performance`, not `Explore`.

### What Performance Must Communicate

- selected industry is `Auto Industry`
- historical performance data has been collected and aggregated
- users can slice, review, and manipulate that historical data
- this historical intelligence will later be used to generate a plan

### Top Selector Rules

The selector area should feel like real product filters.

Show dropdown-style selectors for:

- Industry
- Advertisers
- Channels
- Audiences
- KPIs

Current expected defaults:

- `Auto Industry`
- `All`
- `All`
- `4 Selected`
- `All`

These selectors should look expandable, similar to Cyris filter controls.

The option lists may visibly include `All` even when the intended default remains more specific, as long as that helps the filters feel like real product controls.

The top selector and context cards should feel slim and refined, not oversized or chunky.

### Selector Semantics

- top summary can show advertiser selection context like `1 selected` and `Auto`
- advertisers and channels do not need to list every selection inline when `All` is selected
- audiences can remain visibly listed because that supports the demo story
- KPI may remain a visible dropdown with `All` selected to complete the performance filtering story
- audiences and KPI controls should sit on the same row

### Channels Rule

Use channel naming aligned with the real Cyris platform style rather than inventing unusual channel taxonomies.

### Performance Content Preference

Prefer widgets that resemble historical analytics:

- summary metrics
- spend and impressions over time
- auto industry spend by KPI
- advertiser channels breakdown
- advertiser performance
- audience performance
- KPI-based channel performance mix
- market performance index using 100 as the U.S. average baseline

When showing channel mix by KPI, prefer a table when the comparison needs to be explicit:

- channels in rows
- KPIs in columns
- each KPI column summing to 100%

Avoid planning-oriented callouts in this page.

The summary metric cards inside the dark summary panel should feel subtle and refined:

- smaller typography
- thinner badges
- quieter contrast
- less padded, less blocky shapes

### Performance Data Consistency Rule

The `Performance` page must stay internally consistent.

- if `4 Selected` audiences are shown in the filter state, audience-facing widgets should reflect those same four audiences
- summary metrics should be derived from the same underlying filtered data shown elsewhere on the page
- avoid generic dashboard placeholders that conflict with the visible table and filter state
- avoid repeating the same headline metrics in multiple stacked summary sections
- the spend/impressions time-series should use values that are directionally and numerically aligned with the rest of the page
- time-series charts should include a clear legend
- monthly values may appear on hover
- the spend/impressions series should not look mechanically parallel; monthly CPM and media-mix variation should be visible in the shape of the lines
- time-series lines should render with uniform visual thickness from end to end

### Widget Control Rule

Widget-level selector chips should look like real dropdown controls:

- include a chevron
- show a few plausible alternate options
- they may remain presentation-only if deeper interaction is not needed

## Planning Flow Rules

Planning is intentionally split into two stages:

- `Build a Plan`
- `Plans`

### Build a Plan

This page should demonstrate prompt-driven planning.

The idea is:

- the user starts with empty prompts
- the user types into a field
- only the correct option appears
- selecting those prompts creates the sense of a real guided planning workflow

### Prompt Interaction Rules

- prompts should start empty
- do not pre-show full option lists
- when the user types, only the intended suggestion should appear
- mandatory prompts must be filled before plan creation is enabled

### Prompt Structure

Use:

- campaign-level advertiser
- campaign-level start date
- campaign-level end date
- `KPI 1`
- `KPI 2`

For each KPI, show:

- KPI
- assigned budget
- geography
- optional channels
- optional audiences

### Audience Prompt Rule

Audience prompts are optional and should start empty. The intent is that the model appears capable of recommending audiences on its own.

### Removed Prompt Types

Do not include:

- launch objectives
- channel priority
- primary KPI / secondary KPI language

Use `KPI 1` and `KPI 2` instead.

### Geography Rule

Use explicit state lists where geographic precision matters. Do not use vague labels like `East Coast Dealers`.

### Generation State

After the required prompts are complete and the user clicks `Create Plan`:

- show a centered temporary generation state
- use a clock-style icon
- hold the state for about 5 seconds
- make it feel like the plan is being created in real time

## Plans Page Rules

The `Plans` page should show the generated result of the prompt-driven flow.

### Page Content Priority

Keep the result focused on the recommendation outcome, not on excessive support widgets.

### Submitted Brief

The submitted campaign brief must align exactly with the prompt structure used in `Build a Plan`.

It should contain:

- advertiser
- total budget
- campaign dates
- a visually separated `KPI 1` block
- a visually separated `KPI 2` block

Each KPI block should reflect:

- KPI
- assigned budget
- geography
- channels
- audiences

### Recommendation Tables

The recommendation area should currently end with only two channel recommendation widgets:

- `Brand Impressions Recommendations`
- `Test Drive Bookings Recommendations`

These should be stacked vertically, not shown side by side.

### Recommendation Table Columns

Use these columns:

- `Channel`
- `Budget`
- `CPM`
- `CPB`
- `Impressions`
- `Bookings`

Remove:

- objective
- rate
- viewability
- visits
- KPI-specific output labels that break consistency

### Recommendation Philosophy

The two recommendation tables should feel like direct buying recommendations:

- practical
- comparable
- easy to present live

### Keep It Tight

Remove unnecessary widgets beneath the recommendation tables. The user repeatedly preferred a tighter, cleaner plan outcome page.

## Demo Story Constraints

The specific scenario is:

- a fictional automotive company is launching a new electric model
- one KPI is national `Brand Impressions`
- one KPI is `Test Drive Bookings`
- the budget split is:
  - `$5.0M` for the brand impressions campaign
  - `$1.0M` for the bookings campaign

The plan should feel informed by the historical performance shown earlier.

## Interaction Priorities

When choosing what to implement or improve, prioritize:

1. clear presentation story
2. visual consistency
3. believable dummy data
4. obvious user flow
5. similarity to the real platform structure

Do not prioritize:

- real backend behavior
- advanced architecture
- production completeness
- secondary modules

## Working Principles For Future Edits

When making changes:

- preserve the Steppe-based design direction
- preserve Cyris-like structure and navigation behavior
- prefer larger, cleaner widgets over many small widgets
- keep the demo client-safe
- keep historical performance clearly separate from planning
- keep planning clearly separate from generated outcomes
- keep dummy data internally consistent

If a future request conflicts with this document, update this file so it remains the source of truth.
