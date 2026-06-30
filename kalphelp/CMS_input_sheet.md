# CMS Input Sheet — Standardized v1

> Fill this sheet per website. Every value below is a **user input** — nothing else is needed.
> Once filled, pair with the fixed `SECTION B: SYSTEM CONFIGURATION` from `CMSV4_standardized_prompt.md`.

---

## 1. COMPANY INFORMATION

```yaml
COMPANY_NAME: ""
PROJECT_SLUG: ""
BUSINESS_TYPE: ""
VERTICAL: ""
INDUSTRY: ""
BUSINESS_GOAL: ""
COMPANY_TAGLINE: ""

LANGUAGES:
  default: ""
  active: [""]

CURRENCIES:
  default: ""
  active: [""]

CONTACT:
  email: ""
  phone: ""
  whatsapp: ""
  address: ""
  googleMapsUrl: ""
  abn: ""
  accreditation: ""
  serviceArea: ""
```

---

## 2. DESIGN SYSTEM

### 2a. Color Palette

```yaml
colors:
  primary: ""
  primaryLight: ""
  primaryDark: ""
  primaryHover: ""

  secondary: ""

  accent: ""
  accentSoft: ""

  background: ""
  surface: ""
  card: ""

  text: ""
  textSecondary: ""
  textMuted: ""

  border: ""
  borderHover: ""

  success: ""
  warning: ""
  danger: ""
  error: ""
  info: ""
  overlay: ""

  dark:
    background: ""
    surface: ""
    card: ""
    text: ""
    textSecondary: ""
    textMuted: ""
    border: ""
```

### 2b. Typography

```yaml
typography:
  bodyFont: ""
  headingFont: ""
  monoFont: ""
```

### 2c. Layout & Components

```yaml
layout:
  container: ""
  containerLg: ""
  navbarHeight: ""
  sectionPadding: ""

buttons:
  height: ""
  paddingX: ""
  radius: ""
  primaryBackground: ""
  primaryText: ""
  primaryHover: ""
  secondaryBackground: ""
  secondaryText: ""
  secondaryHover: ""
  outlineBorder: ""
  outlineText: ""
  outlineHoverBackground: ""
  outlineHoverText: ""

forms:
  inputHeight: ""
  inputPaddingX: ""
  inputPaddingY: ""
  inputRadius: ""
  inputBackground: ""
  inputText: ""
  inputBorder: ""
  inputBorderHover: ""
  inputPlaceholder: ""
  inputFocusBorder: ""
  inputFocusShadow: ""
  inputDisabledBackground: ""
  inputDisabledText: ""
  textareaMinHeight: ""

modal:
  sm: ""
  md: ""
  lg: ""
```

---

## 3. PAGES & ROUTING

### 3a. Navigation

```yaml
navigation:
  - label: ""
    href: ""
```

### 3b. Page Inventory

| # | Page Name | Slug | Type (static/dynamic) | metaTitle | metaDescription |
|---|-----------|------|----------------------|-----------|-----------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |

### 3c. Dynamic Pages (Blog, etc.)

| Collection | Slug Pattern | Fields |
|------------|-------------|--------|
| | | |

---

## 4. SECTION CONTENT (Page Blocks)

### Block Types Available

| Block Type | Layouts | Use Case |
|------------|---------|----------|
| `hero` | split-overlay | Homepage hero with CTA |
| `hero-form` | split | Hero + inline form |
| `hero-page-header` | centered | Interior page header |
| `logo-cloud` | slider | Brand trust bar / partners |
| `service-cards` | grid | 3-4 service overview cards |
| `service-cards-bullets` | grid | Services with bullet points |
| `what-we-do-grid` | grid | Problem/solution/growth rows |
| `benefits-grid` | grid | Feature/benefit tiles |
| `process-steps` | grid | How-it-works numbered steps |
| `vertical-timeline` | left-border | Installation/process timeline |
| `process-cards` | list | Numbered card list |
| `faq-accordion` | centered | FAQ accordion |
| `split-highlight` | split | Image + bullet points + bg color |
| `cta-centered` | centered | Final call-to-action |
| `text-image-split` | split | Intro text + side image |
| `card-grid` | grid | Feature/commitment cards |
| `text-centered` | centered | Philosophy / description block |
| `checklist-grid` | grid | Why choose us checklist |
| `text-columns` | two-column | Two-column text content |
| `product-cards` | grid | Product/brand cards |
| `card-highlight` | full-width | Stats / finance case |
| `lets-talk-strip` | centered | Simple text-link banner |
| `about-video` | split | Video with poster thumbnail |
| `work-gallery` | grid | Image grid showcase |
| `blog-cards` | grid | Blog listing grid |
| `contact-split` | split | Contact info + form side-by-side |

### Page Block Structure (use for each page)

```yaml
pageBlocks:
  - id: ""
    type: ""
    layout: ""
    adminTitle: ""
    props:
      # Block-specific fields — see CMSV4_standardized_prompt.md A4b for full reference
```

---

## 5. HEADER & FOOTER

### Header

```yaml
header:
  logo:
    src: ""
    alt: ""
    height: ""
  ctaButton:
    label: ""
    href: ""
  style:
    sticky: true/false
    background: ""
    borderBottom: ""
```

### Footer

```yaml
footer:
  background: ""
  textColor: ""
  accentColor: ""
  borderTop: ""
  logo:
    src: ""
    alt: ""
    height: ""
  columns:
    - title: ""
      links:
        - label: ""
          href: ""
    - title: ""
      content:
        address: ""
        phone: ""
        email: ""
    - title: ""
      badge:
        title: ""
        subtitle: ""
        checkIcon: true/false
  bottomBar:
    copyright: ""
    abn: ""
    links:
      - label: ""
        href: ""
```

---

## 6. FORMS

```yaml
form:
  id: ""
  name: ""
  settings:
    submitText: ""
    recaptcha: true/false
    successRedirect: ""
  fields:
    - id: ""
      type: ""        # text, email, phone, textarea, select, number, checkbox, etc.
      name: ""
      placeholder: ""
      required: true/false
      options:        # For select/multiselect/radio
        - value: ""
          label: ""
```

---

## 7. ASSETS

```yaml
assets:
  logo: ""
  favicon: ""
  heroBackground: ""
  brandLogos:
    - src: ""
      alt: ""
  gallery:
    - src: ""
      alt: ""
```

---

> **Next step:** Pair this filled input sheet with `SECTION B: SYSTEM CONFIGURATION` from `CMSV4_standardized_prompt.md` and feed both to the AI.
