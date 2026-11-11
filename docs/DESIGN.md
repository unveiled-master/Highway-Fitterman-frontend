---
name: Accra Pitstop & Artisan Mobile
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001d31'
  on-tertiary-container: '#188ace'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  currency-display:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.03em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system powers an on-demand automotive emergency and workshop marketplace engineered for the Ghanaian transport landscape. The brand personality blends institutional reliability with active roadside readiness: it is dependable, authoritative, street-smart, and rapid. 

The aesthetic is **Tactile Modern Utility**—a high-contrast, performance-driven design direction optimized for field visibility under harsh West African equatorial sunlight, variable mobile network bandwidth, and high-stress roadside breakdown contexts.

### Design Principles
- **Roadside Legibility:** High-contrast color pairings, heavy weights for primary data figures, and substantial touch targets designed for one-handed operation or high-glare environments.
- **Craft & Verification:** Dignified artisan signifiers that elevate local auto technicians through certified badges, clear distinction between roving mobile vans and brick-and-mortar workshops, and transparent Ghana Cedi (`GH₵`) invoicing.
- **Physical Automotive Grounding:** Tactile physical metaphors drawn from automotive consoles, industrial warning panels, and diagnostic meters without resorting to skeuomorphic kitsch.

## Colors

The palette is engineered around high functional contrast, clear state delineation, and immediate visibility.

### Palette Architecture
- **Primary Navy (`#0F172A`):** The grounding industrial slate. Serves as base surfaces in dark elements, high-emphasis text, top app bars, and high-priority primary actions.
- **Secondary Hazard Amber (`#D97706` / Bright `#F59E0B`):** Represents mechanical energy, urgent roadside dispatch, roadside hazards, and emergency callouts. Reserved strictly for attention-critical CTAs, emergency towing states, and live tracking markers.
- **Tertiary Trust Cyan (`#0284C7`):** Expresses engineering precision, diagnostic scans, navigation links, and informational callouts.
- **Artisan Success Emerald (`#10B981`):** Applied to certified Ghanaian artisan verification badges, completed repair validations, escrow payouts, and live active workshop slots.
- **Neutral Slate (`#64748B`):** Used for metadata, inactive states, secondary borders, and contextual labels.

### Functional Surface Model
- **Base Canvas:** `#F8FAFC` (Off-white daylight base to combat glare).
- **Surface Elevation 1 (Card):** `#FFFFFF` with razor borders.
- **Surface Inset/Trough:** `#F1F5F9` for data chips, progress bar tracks, and counter blocks.
- **High-Contrast Warning Tier:** Deep amber text over tinted amber wash (`#FEF3C7`) with `#D97706` structural boundaries.

## Typography

The type system pairs **Plus Jakarta Sans** for clear narrative UI elements with **Space Grotesk** for numerical metrics, currency tags, and technical specs.

### Numerical and Currency Formatting
All prices in Ghana Cedi must utilize the `Space Grotesk` font family. 
- Write the currency symbol standardly as `GH₵` with no space separating the symbol and the numeric amount (e.g., `GH₵450.00`).
- Use tabular/monospaced numbers in billing line-items and distance meters (`3.4 km away`) to maintain alignment during real-time updates.

### Hierarchy & Legibility Rules
- Never use font sizes below `12px` for instructional text or critical disclaimers. `10px` is restricted to all-caps technical micro-tags.
- In low-connectivity or high-stress contexts (such as an SOS roadside request screen), titles switch directly to `headline-xl-mobile` with uppercase styling to guarantee immediate scanning.

## Layout & Spacing

A mobile-first system designed for quick thumb interaction.

### Grid & Breakpoints
- **Mobile (< 640px):** Single-column fluid stack. 4-column sub-grid for internal card layouts, 16px (`1rem`) horizontal screen margins, and 16px gutters between adjacent cards.
- **Tablet / In-Shop Dashboard (640px - 1024px):** 8-column layout with 24px margins. Enables a split-view layout featuring a persistent live map or workshop queue beside active job sheets.
- **Desktop / Admin Hub (> 1024px):** 12-column fixed grid with a max width of 1280px and 32px gutters.

### Touch Target System
- Every interactive element (buttons, chip selectors, call triggers) must provide a minimum physical hit target of **48px × 48px**, even if the visible bounding box is smaller.
- Safe areas must account for system navigation bars, bottom-anchored booking sheets, and emergency trigger buttons fixed to the viewport bottom.

## Elevation & Depth

Visual hierarchy combines clean tonal surfaces with subtle border-and-shadow framing to keep cards distinct on dusty screens or in harsh glare.

### Layer Architecture
- **Level 0 (Canvas):** `#F8FAFC`. Completely flat.
- **Level 1 (Card & Content Blocks):** Pure `#FFFFFF` surface enclosed by a 1px continuous hairline stroke in `#E2E8F0`, paired with an ambient shadow: `0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Active Selections & Modals):** `#FFFFFF` surface with an elevated shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`. Outlined by a 1px border in `#CBD5E1`.
- **Level 3 (Emergency Towing / Persistent Bottom Sheets):** `#FFFFFF` accompanied by a distinct lift shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`.
- **Tactile State Drops:** Primary actionable cards include a 2px offset border effect upon mouse press or finger tap down, giving instant mechanical feedback.

## Shapes

The design system adopts **Roundedness Level 2** (`rounded-md: 0.5rem / 8px`, `rounded-lg: 1rem / 16px`, `rounded-xl: 1.5rem / 24px`).

### Shape Application Guidelines
- **Input Fields & Action Buttons:** Styled with `8px` (`0.5rem`) corner radiuses, giving them a sturdy, tool-like appearance.
- **Service & Mechanic Cards:** Styled with `16px` (`1rem`) corner radiuses, providing a clean container separation across vertical feeds.
- **Bottom Sheets & Floating Trays:** Styled with `24px` (`1.5rem`) top-only corner radiuses.
- **Status Pills, Specialty Tags, and Badges:** Rendered as full pills (`9999px`) to immediately set them apart from structural rectangular cards.

## Components

### 1. Buttons
- **Primary Mechanic CTA (Dispatch/Book):** Background `#0F172A`, text `#FFFFFF`, label in `Space Grotesk 14px bold`. Minimum height 52px. Active press state applies an internal inset glow or 1px transform down.
- **Emergency Roadside SOS Button:** Background `#D97706`, text `#FFFFFF`, accompanied by an automotive hazard triangle icon. Displays an ambient pulsing ring when searching for nearby technicians.
- **Secondary Utility Button:** Background `#F1F5F9`, border 1px solid `#CBD5E1`, text `#0F172A`.

### 2. Service Cards
- Standard white surface with 1px border in `#E2E8F0` and `16px` rounded corners.
- Internal layout includes a top slot for the artisan's business avatar, title, and distance meter, a middle slot for vehicle specialty badges, and a footer featuring pricing in `Space Grotesk` alongside direct action triggers.

### 3. Specialty Markers & Artisans Badges
- **Mobile Mechanic Badge:** Pill container with an amber wash (`#FEF3C7`), text `#92400E`, fronted by a service-van icon.
- **Physical Workshop Badge:** Pill container with a slate wash (`#F1F5F9`), text `#334155`, fronted by an industrial garage icon.
- **Ghanaian Verified Artisan Marker:** Emerald pill (`#ECFDF5`), border 1px solid `#10B981`, text `#065F46`, featuring a verified checkmark and small national color indicator or artisan certification registry tag.

### 4. Booking Lifecycle Step Tracker
- Horizontal 4-step progressive timeline: `Requested` → `Mechanic En Route` → `Diagnostics & Repair` → `Job Cleared`.
- **Completed Steps:** Filled circle in `#10B981` with an interior checkmark, connected by a 2px solid `#10B981` line.
- **Active Step:** Filled circle in `#D97706` with an animating hazard pulse ring.
- **Upcoming Steps:** Muted circle in `#E2E8F0` with a 2px dashed neutral line.

### 5. Input Fields & Search Bars
- Background `#FFFFFF`, 1px solid `#CBD5E1`, 48px height, 8px radius.
- On focus, applies a 2px highlight border in `#0284C7` with zero blur spread.
- Location search fields feature quick-access chips below for landmark-based navigation (e.g., "Near Circle Interchange", "Spintex Road Shell").

### 6. Chips & Filter Tags
- Horizontal scroll container with 8px gaps.
- Inactive: `#F1F5F9` background, `#475569` text, 36px height.
- Active: `#0F172A` background, `#FFFFFF` text, bold weight.