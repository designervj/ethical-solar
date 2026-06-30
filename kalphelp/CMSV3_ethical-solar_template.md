# CMS Website Generator — Standard Prompt Template v3

> **Purpose:** Generate a complete, production-ready corporate/portfolio/marketing CMS website.
> **Stack:** Next.js 15, TypeScript, Redux Toolkit, Tailwind CSS, MongoDB (dynamic content), JSON (static pages).
> **Pattern:** Tokenized, theme-driven, JSON-first, EditableText-enabled, locale-aware, SEO-ready, responsive, type-safe, component-driven.

---

## How To Use This Template

```
SECTION A — USER INPUTS: Fill these per website (company info, design system, pages, sections).
SECTION B — SYSTEM CONFIGURATION: Fixed architecture. Do NOT modify — applies to all CMS websites.
```

When generating a new website:
1. Copy this file
2. Replace all `{{PLACEHOLDER}}` values in SECTION A with your website's data
3. Keep SECTION B as-is
4. Feed the completed prompt to the AI

---

# SECTION A: USER INPUTS
## (Fill these per website — these are the ONLY values that change)

---

## A1. COMPANY INFORMATION

```yaml
COMPANY_NAME: Ethical Solar
PROJECT_SLUG: ethical-solar
BUSINESS_TYPE: Solar Panel and Battery Installation Provider
VERTICAL: Energy & Utilities / Renewable Energy
INDUSTRY: Rooftop Solar, Battery Storage, Energy Systems, Maintenance & Monitoring
BUSINESS_GOAL: Deliver high-quality solar and battery solutions with transparency, accountability, and long-term value.
COMPANY_TAGLINE: "Solar built to last, by a team you can trust."

LANGUAGES:
  default: en
  active:
    - en

CURRENCIES:
  default: AUD
  active:
    - AUD

CONTACT:
  email: "info@ethicalsolar.com.au"
  phone: "(+61) 1300 686 595"
  whatsapp: ""
  address: "Suite No. 1562, 17 Gould Road, Herston 4006, QLD, Australia"
  googleMapsUrl: ""
  abn: "13 670 165 938"
  accreditation: "SAA Accredited Installer"
  serviceArea: "South East Queensland (SEQ)"
```

---

## A2. DESIGN SYSTEM

### Color Palette

```yaml
colors:
  primary: "#FF7020"           # Brand orange — buttons, primary accents, links
  primaryLight: "#FF8B4A"      # Hover state
  primaryDark: "#E05307"       # Active state
  primaryHover: "#E05307"      # Button hover

  secondary: "#050B2F"         # Dark blue — header/footer gradient start, dark section text
  accent: "#2AF598"            # Neon green/teal — accents, hover borders, footer borders
  accentSoft: "#F3F3F3"        # Light gray surface (cards)

  background: "#FFFFFF"        # Page background
  surface: "#F8F8F8"           # Section background (gray color)
  card: "#FFFFFF"              # Card background

  text: "#1F1F1F"              # Dark gray — main headings
  textSecondary: "#4F4640"     # Brand text color — body text, paragraphs
  textMuted: "#555555"         # Muted body text

  border: "#E5E7EB"            # Divider lines, borders
  borderHover: "#DDDDDD"       # Border on hover

  # Semantic colors
  success: "#2AF598"
  warning: "#F59E0B"
  danger: "#EF4444"
  error: "#EF4444"
  info: "#3B82F6"
  overlay: "rgba(0,0,0,0.45)"

  # Dark mode overrides
  dark:
    background: "#050B2F"      # Footer bg, dark sections
    surface: "#121212"
    card: "#1E293B"
    text: "#F8FAFC"
    textSecondary: "#CBD5E1"
    textMuted: "#94A3B8"
    border: "#334155"
```

### Typography

```yaml
typography:
  bodyFont: "'Inter', sans-serif"
  headingFont: "'Epilogue', sans-serif"
  monoFont: "'JetBrains Mono', monospace"

  text:
    xs: "0.75rem"      # 12px
    sm: "0.875rem"     # 14px
    base: "1rem"       # 16px — body font size
    md: "1.125rem"     # 18px
    lg: "1.25rem"      # 20px
    xl: "1.5rem"       # 24px
    "2xl": "1.875rem"  # 30px
    "3xl": "2.25rem"   # 36px
    "4xl": "3rem"      # 48px
    "5xl": "3.75rem"   # 60px

  fw:
    light: "300"
    normal: "400"
    medium: "500"
    semibold: "600"
    bold: "700"
    extrabold: "800"

  lineHeight:
    tight: "1.2"       # Heading line height (120%)
    normal: "1.5"
    relaxed: "1.75"
```

### Spacing, Radius, Shadows

```yaml
spacing:
  1: "0.25rem"  2: "0.5rem"  3: "0.75rem"  4: "1rem"
  5: "1.25rem"  6: "1.5rem"  8: "2rem"     10: "2.5rem"
  12: "3rem"    16: "4rem"   20: "5rem"    24: "6rem"

radius:
  sm: "4px"       # Standard rounded-sm (border-radius: 4px)
  md: "6px"       # Standard rounded-md (border-radius: 6px)
  lg: "12px"      # Large rounded-lg
  xl: "16px"      # Card rounded-xl
  "2xl": "24px"   # Section / large container rounded-2xl
  full: "9999px"  # Pill
  custom: "16px"  # Used on cards
  pill: "9999px"  # Used on CTA buttons

shadow:
  sm: "0 1px 2px rgba(0,0,0,.05)"
  md: "0 4px 6px rgba(0,0,0,.1)"
  lg: "0 10px 15px rgba(0,0,0,.15)"
  hover: "0 15px 25px rgba(0,0,0,.2)"
```

### Layout & Components

```yaml
layout:
  container: "1024px"          # max-w-5xl (1024px) for standard container
  containerLg: "1152px"        # max-w-6xl (1152px) for container-lg
  navbarHeight: "80px"
  sectionPadding: "5rem"       # py-20

buttons:
  height: "48px"
  paddingX: "1.5rem"
  radius: "9999px"             # Pill-shaped buttons
  primaryBackground: "#FF7020" # Brand orange
  primaryText: "#FFFFFF"
  primaryHover: "#E05307"
  secondaryBackground: "transparent"
  secondaryText: "#4F4640"
  secondaryHover: "#F8F8F8"
  outlineBorder: "#E5E7EB"
  outlineText: "#1F1F1F"
  outlineHoverBackground: "#FF7020"
  outlineHoverText: "#FFFFFF"

forms:
  inputHeight: "48px"
  inputPaddingX: "1rem"
  inputPaddingY: "0.75rem"
  inputRadius: "12px"          # rounded-xl input fields
  inputBackground: "#FFFFFF"
  inputText: "#1F1F1F"
  inputBorder: "#E5E7EB"
  inputBorderHover: "#DDDDDD"
  inputPlaceholder: "#555555"
  inputFocusBorder: "#FF7020"
  inputFocusShadow: "0 0 0 3px rgba(255,112,32,.2)"
  inputDisabledBackground: "#F8F8F8"
  inputDisabledText: "#999999"
  textareaMinHeight: "120px"

modal:
  sm: "400px"
  md: "600px"
  lg: "800px"
```

---

## A3. PAGES & ROUTES

### Page Inventory

| # | Page | Slug | Type | Source | Description |
|---|------|------|------|--------|-------------|
| 1 | Home | `/` | Static JSON | `homePage.json` | Hero with solar backdrop, brand trust cloud, what we do overview, let's talk shortcut, works overview, expandable video player, recent projects gallery, final CTA. |
| 2 | Residential | `/residential` | Static JSON | `residentialPage.json` | Let's put solar on your home hero with inline savings assessment form, why go solar benefits, 2x2 grid explaining how solar works, solar maintenance & longevity, step-by-step installation process, FAQ accordion, final CTA. |
| 3 | Commercial | `/commercial` | Static JSON | `commercialPage.json` | Commercial solutions page header, tailored commercial services list (rooftop, carport, ground, warehouse), order process steps, battery integration highlight, Tier-1 panels product grid, commercial finance case, FAQ accordion, contact form. |
| 4 | About Us | `/about-us` | Static JSON | `aboutUsPage.json` | About Us header, intro section detailing company background, commitments to quality grid, long-term energy partner philosophy, sustainability & transparency highlight, checklist of reasons clients choose us, local team overview, final CTA. |
| 5 | Blog | `/blog` | Static JSON | `blogPage.json` | Solar news & insights header, grid list of blog posts. |
| 6 | Contact Us | `/contact-us` | Static JSON | `contactPage.json` | Header, two-column contact details + SAA accreditation badge on the left, full contact form on the right. |

### Route Structure

```
src/app/
  page.tsx                          # Home (/)
  residential/page.tsx              # Residential Solar
  commercial/page.tsx               # Commercial Solar
  about-us/page.tsx                 # About Us
  blog/
    page.tsx                        # Blog Listing
    [slug]/page.tsx                 # Blog Post (dynamic)
  contact-us/page.tsx               # Contact Us
  api/
    [[slug]]/route.ts               # Universal proxy → FastAPI backend

src/lib/data/pages/
  homePage.json
  residentialPage.json
  commercialPage.json
  aboutUsPage.json
  blogPage.json
  contactPage.json
  headerData.json
  footerData.json
```

### URL Mapping

| Page | URL |
|------|-----|
| Home | `/` |
| Residential | `/residential` |
| Commercial | `/commercial` |
| About Us | `/about-us` |
| Blog | `/blog` |
| Contact Us | `/contact-us` |

---

## A4. SECTION CONTENT (Page Blocks)

### Home Page Sections

```yaml
homePage:
  - id: hero-001
    type: hero
    layout: split-overlay
    adminTitle: Hero Section
    props:
      heading: "Solar built to last, by a team you can trust."
      subheading: "We install the highest-quality solar panel systems and back them up with a 30-year warranty."
      backgroundImage: "/assets/img/solar-panal4.jpg"
      backgroundOverlay: "rgba(0,0,0,0.45)"
      primaryButtonText: "Get a Free Quote"
      primaryButtonHref: "/contact-us"

  - id: logo-cloud-001
    type: logo-cloud
    layout: slider
    adminTitle: Brand Trust Cloud
    props:
      sectionTitle: "Partnering With Certified Quality Brands"
      logos:
        - src: "/assets/img/qcells.png"
          alt: "Q CELLS"
        - src: "/assets/img/rec.png"
          alt: "REC Group"
        - src: "/assets/img/jinko.png"
          alt: "Jinko Solar"

  - id: services-001
    type: service-cards
    layout: grid
    adminTitle: What We Do
    props:
      sectionTitle: "What We Do"
      sectionDescription: "We design and install reliable solar + storage systems for homes and businesses — with clear pricing, quality components, and long-term support."
      services:
        - title: "Residential Solar"
          description: "Custom rooftop solar systems designed for your home, usage, and budget — built to maximize long-term savings."
          linkText: "Explore Residential solar"
          href: "/residential"
        - title: "Commercial Solar"
          description: "Scalable solar solutions for businesses to reduce operating costs and improve sustainability performance."
          linkText: "Explore commercial solar"
          href: "/commercial"
        - title: "Battery Storage"
          description: "Store energy for nights and outages. Add backup power and smarter savings with modern battery systems."
          linkText: "Explore battery options"
          href: "/residential#battery"
        - title: "Maintenance & Monitoring"
          description: "Ongoing monitoring, performance checks, and maintenance support to keep your system running at its best."
          linkText: "View support plans"
          href: "/residential#maintenance"

  - id: lets-talk-001
    type: lets-talk-strip
    layout: centered
    adminTitle: Let's Talk Strip
    props:
      heading: "Ready to start saving with clean energy?"
      buttonText: "Let's Talk"
      buttonHref: "/contact-us"

  - id: what-we-do-002
    type: what-we-do-grid
    layout: grid
    adminTitle: What Ethical Solar Does
    props:
      sectionTitle: "What Ethical Solar Does"
      sectionDescription: "Solar is not just panels — it’s a complete system. We design, install, and support solar + storage solutions that reduce bills, improve reliability, and deliver long-term savings."
      services:
        - service: "Residential Solar"
          problem: "High electricity bills and unpredictable rate increases."
          get: "Site assessment, system design, premium panels + inverter, clean installation."
          growth: "Cuts monthly bills and increases home value with long-term energy security."
        - service: "Commercial Solar"
          problem: "Rising operating costs are eating into profit margins."
          get: "Energy audit, scalable design, performance modelling, compliant commercial install."
          growth: "Reduces overhead, improves sustainability reporting, and stabilizes energy spend."
        - service: "Battery Storage"
          problem: "Grid outages and peak-hour costs reduce reliability and savings."
          get: "Battery sizing, backup setup, smart load control, hybrid-ready configuration."
          growth: "Stores solar for night use, improves resilience, and increases ROI over time."
        - service: "Maintenance & Monitoring"
          problem: "Systems underperform without anyone noticing."
          get: "Production monitoring, health checks, cleaning guidance, warranty support."
          growth: "Protects performance year-round and maximizes lifetime savings."

  - id: about-video-001
    type: about-video
    layout: split
    adminTitle: About Video Expandable
    props:
      sectionLabel: "ETHICAL SOLAR"
      sectionTitle: "Solar Installation Overview"
      videoUrl: "/assets/img/showreel.mp4"
      posterImage: "/assets/img/solar-panal4.jpg"

  - id: our-work-001
    type: work-gallery
    layout: grid
    adminTitle: Our Work Showcase
    props:
      sectionTitle: "Our Selected Solar Installations"
      description: "Performance meets aesthetics. See how we install across South East Queensland."
      items:
        - src: "/assets/img/install1.jpg"
          alt: "Residential installation Brisbane"
        - src: "/assets/img/install2.jpg"
          alt: "Commercial solar panels Gold Coast"
        - src: "/assets/img/install3.jpg"
          alt: "Rooftop solar panels Sunshine Coast"
        - src: "/assets/img/install4.jpg"
          alt: "Battery storage integration"

  - id: cta-001
    type: cta-centered
    layout: centered
    adminTitle: Bottom Quote CTA
    props:
      heading: "Interested in Going Solar?"
      description: "We’d be happy to provide you with information, a quote and site visit, all FREE of charge."
      buttonText: "Get a Free Quote"
      buttonHref: "/contact-us"
```

### Residential Page Sections

```yaml
residentialPage:
  - id: res-hero-001
    type: hero-form
    layout: split
    adminTitle: Residential Hero Form
    props:
      title: "Let's put solar"
      titleHighlight: "on your home."
      subtitle: "Residential Solar for Australian Homes, Power Your Home with Smart, Affordable Solar"
      description: "Take control of rising electricity costs with a custom-designed residential solar system built for Australian conditions. Whether you’re looking to reduce your power bills, increase your home’s value, or gain energy independence with battery storage, we make switching to solar simple and stress-free."
      backgroundImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058"
      form:
        id: "residential-assessment"
        name: "Residential Solar Assessment"
        settings:
          submitText: "Get a solar assessment"
          successRedirect: "/thank-you"
        fields:
          - id: "firstName"
            type: text
            name: "firstName"
            placeholder: "First Name"
            required: true
          - id: "lastName"
            type: text
            name: "lastName"
            placeholder: "Last Name"
            required: true
          - id: "phone"
            type: phone
            name: "phone"
            placeholder: "Phone"
            required: true
          - id: "email"
            type: email
            name: "email"
            placeholder: "Email"
            required: true
          - id: "postCode"
            type: text
            name: "postCode"
            placeholder: "Post Code"
            required: true
          - id: "electricBill"
            type: select
            name: "electricBill"
            placeholder: "Average Electric Bill"
            required: true
            options:
              - value: "100-150"
                label: "$100 - $150"
              - value: "150-250"
                label: "$150 - $250"
              - value: "250plus"
                label: "$250+"

  - id: res-benefits-001
    type: benefits-grid
    layout: grid
    adminTitle: Why More Australians Choose Solar
    props:
      sectionLabel: "Benefits"
      heading: "Why More Australians Are Choosing Solar"
      description: "Electricity prices across Australia continue to rise. Installing solar panels is one of the smartest long-term investments you can make for your home."
      items:
        - title: "Lower Your Power Bills"
          description: "Generate your own electricity and significantly reduce your quarterly bills."
          type: "stat"
        - title: "Protection from Rising Energy Prices"
          description: "Lock in long-term savings and reduce dependence on energy retailers."
          type: "stat"
        - title: "Government Incentives Available"
          description: "Eligible homeowners can benefit from the Small-scale Renewable Energy Scheme (SRES) which provides STCs (Small-scale Technology Certificates) that reduce upfront system costs. You may also be eligible for around a 30% discount on the upfront cost of installing a battery system through the Cheaper Home Batteries Program."
          type: "highlight"
          gradient: "linear-gradient(90deg, #23469B 0%, #26A187 100%)"
          subtitle: "STCs · Cheaper Home Batteries"
        - title: "Increase Property Value"
          description: "Homes with solar systems are more attractive to buyers and often sell faster."
          type: "stat"
        - title: "Environmentally Friendly"
          description: "Reduce your carbon footprint and contribute to a cleaner, more sustainable Australia."
          type: "stat"

  - id: res-how-works-001
    type: process-steps
    layout: grid
    adminTitle: How Solar Works
    props:
      heading: "How Solar Works"
      description: "Understanding your system is the first step to energy independence."
      steps:
        - number: "1"
          title: "Solar Panels"
          description: "When sunlight hits your panels, they generate DC electricity. Even on cloudy days, your system produces power. Excess energy flows back to the grid for credits (Net Metering)."
        - number: "2"
          title: "Solar Inverters"
          description: "The inverter is the heart of the system, converting DC power to usable AC power for your home. We use premium Enphase microinverters or SolarEdge optimizers for maximum efficiency."
        - number: "3"
          title: "Power Outages?"
          description: "Standard grid-tied systems shut off during outages for safety. To keep lights on during a blackout, you need a battery backup solution integrated with your solar."
        - number: "4"
          title: "Solar + Battery"
          description: "Batteries store excess solar energy for use at night or during outages. We design systems that power your essential appliances (fridges, lights, wifi) indefinitely."

  - id: res-maintenance-001
    type: text-columns
    layout: two-column
    adminTitle: Solar Maintenance & Longevity
    props:
      heading: "Solar Maintenance & Longevity"
      columns:
        - title: "How long do solar panels last?"
          description: "Modern solar panels are built to last, with most high-quality panels producing power for 30+ years. While efficiency slightly decreases over time (about 0.5% per year), reputable brands guarantee over 90% output even after 25 years."
        - title: "Maintenance Requirements"
          description: "Solar panels require very minimal maintenance. In most climates, rain naturally cleans the panels. We recommend an occasional professional cleaning or inspection every few years to ensure peak performance."

  - id: res-process-001
    type: vertical-timeline
    layout: left-border
    adminTitle: Installation Process
    props:
      heading: "Our Installation Process"
      description: "We handle everything from the initial design to the final switch flip."
      steps:
        - number: "1"
          title: "Free Assessment & Proposal"
          description: "We start with a conversation to understand your goals. Using satellite data, we design a custom system and present a clear proposal with economics."
        - number: "2"
          title: "Site Survey"
          description: "Our engineering team visits your home to inspect the roof condition, measure shading, and check your electrical panel capacity."
        - number: "3"
          title: "Contract & Permitting"
          description: "Once you approve the design, we handle all the paperwork. We submit building permits to the city and interconnection applications to the utility."
        - number: "4"
          title: "Installation"
          description: "Most residential installs take just 1-3 days. Our in-house crew works efficiently and respects your property, leaving the site cleaner than we found it."
        - number: "5"
          title: "Inspection & Activation"
          description: "We schedule the final city inspection. Once approved, the utility grants 'Permission to Operate', and you can turn on your clean power plant!"

  - id: res-faq-001
    type: faq-accordion
    layout: centered
    adminTitle: Residential FAQ
    props:
      heading: "Frequently Asked Questions"
      items:
        - question: "How much does residential solar cost in Australia?"
          answer: "System prices vary depending on size and equipment, but after government incentives, most systems are far more affordable than people expect."
        - question: "How long do solar panels last?"
          answer: "Most panels come with 25-year performance warranties and often last even longer."
        - question: "What happens on cloudy days?"
          answer: "Solar systems still generate electricity in cloudy weather — just at reduced output."
        - question: "Is a battery worth it?"
          answer: "Batteries are ideal for households wanting energy independence, blackout protection, and maximum savings from their solar system."
        - question: "How long until I see savings?"
          answer: "Most homeowners notice reduced electricity bills immediately after installation."

  - id: res-cta-001
    type: cta-centered
    layout: centered
    adminTitle: Bottom CTA
    props:
      heading: "Interested in Going Solar?"
      description: "We’d be happy to provide you with information, a quote and site visit, all FREE of charge."
      buttonText: "Get a Free Quote"
      buttonHref: "/contact-us"
```

### Commercial Page Sections

```yaml
commercialPage:
  - id: com-hero-001
    type: hero-page-header
    layout: centered
    adminTitle: Commercial Page Header
    props:
      title: "Commercial Solar Solutions"
      subtitle: "Powering Australian Businesses with Smart Energy"
      description: "At Ethical Solar, we deliver high-performance commercial solar systems designed to reduce operating costs, improve sustainability outcomes, and protect businesses from rising electricity prices. From small enterprises to large industrial facilities, we provide tailored solar and battery solutions that deliver measurable financial returns. Future-proof your business with intelligent energy solutions."
      buttonText: "Request a Commercial Energy Assessment"
      buttonHref: "/contact-us"
      backgroundImage: "/assets/img/img (3).jpg"

  - id: com-services-001
    type: service-cards-bullets
    layout: grid
    adminTitle: Commercial Services
    props:
      heading: "Our Services"
      subheading: "Tailored Commercial Solar Options — we design, supply, and install systems for all types of commercial properties across South East Queensland."
      services:
        - title: "Rooftop Commercial Solar"
          description: "Flat or pitched rooftop systems designed for offices, retail centres, schools, and industrial buildings. We maximise available roof space to deliver the highest energy output for your footprint."
          bullets:
            - "Custom system design per roof type"
            - "Tier-1 panels and commercial-grade inverters"
            - "Grid-connected and hybrid options available"
        - title: "Carport Solar Structures"
          description: "Solar carports combine covered parking with energy generation — turning underused car parks into productive assets. Ideal for shopping centres, hospitals, councils, and large employers."
          bullets:
            - "Dual function: shelter + solar generation"
            - "Custom structural engineering included"
            - "EV charging integration available"
        - title: "Ground Mount Systems"
          description: "For properties with available land, ground-mounted systems offer flexibility in orientation and scale. Suitable for farms, large industrial estates, and rural businesses."
          bullets:
            - "No roof constraints — optimise for full sun"
            - "Large-scale capacity available"
            - "Suitable for rural and semi-rural properties"
        - title: "Warehouse & Industrial Solar"
          description: "Large roof areas on warehouses and industrial facilities are ideal for high-capacity solar. We design systems to match your operational load profile and energy usage patterns."
          bullets:
            - "High-capacity systems from 30 kW to 1 MW+"
            - "Designed around your operational load profile"
            - "Reduce peak demand charges significantly"

  - id: com-process-001
    type: process-cards
    layout: list
    adminTitle: Commercial Order Process
    props:
      heading: "Commercial Solar Order Process"
      subheading: "A transparent, step-by-step process from initial inquiry through to system handover and ongoing monitoring."
      steps:
        - step: "01"
          title: "Initial Consultation & Energy Audit"
          description: "We review your electricity bills, operational hours, and energy goals to establish the right system size. A site walkthrough is arranged at no cost."
        - step: "02"
          title: "System Design & Proposal"
          description: "Our engineers produce a custom system design with full financial modelling — including expected savings, payback period, and ROI projections. No obligations."
        - step: "03"
          title: "Approvals & Permitting"
          description: "We manage all council approvals, network applications, and grid connection paperwork. You will not be chasing permits — we handle it completely."
        - step: "04"
          title: "Professional Installation"
          description: "Our CEC-accredited installation teams complete the project with minimal disruption to your business operations. All work is inspected and signed off by a licensed electrician."
        - step: "05"
          title: "Commissioning & Monitoring Setup"
          description: "Your system is commissioned, tested, and connected to our monitoring platform. You'll receive clear training on how to track production and savings in real time."
        - step: "06"
          title: "Ongoing Support & Maintenance"
          description: "We provide scheduled maintenance checks, performance reviews, and reactive support throughout the life of your system. Long-term energy partners — not just installers."

  - id: com-battery-001
    type: split-highlight
    layout: split
    adminTitle: Battery & Battery Integration
    props:
      heading: "Battery & Battery Integration"
      description: "A commercial solar system paired with battery storage delivers maximum financial benefit. Store solar energy generated during the day and deploy it during peak tariff periods — reducing your demand charges and improving energy independence."
      bullets:
        - "Reduce peak demand charges significantly"
        - "Store excess solar for after-hours use"
        - "Backup power for critical operations during outages"
        - "Compatible with all major commercial battery brands"
        - "Scalable capacity — expand storage as your needs grow"
      image: "/assets/Image/battery-solar-img.png"
      background: "#064e3b" # Emerald 950

  - id: com-panels-001
    type: product-cards
    layout: grid
    adminTitle: Commercial Solar Panels
    props:
      heading: "Our Commercial Solar Panels"
      subheading: "We exclusively source Tier-1 panels from manufacturers with proven 25-year track records, independent testing certifications, and strong Australian warranty support."
      panels:
        - brand: "Q CELLS"
          detail: "Q.PEAK DUO BLK ML-G10+ series — high efficiency monocrystalline panels with anti-LID and anti-LeTID technology. German-engineered, proven in Australian conditions."
        - brand: "REC Group"
          detail: "REC Alpha series — twin peak solar cell design delivering up to 405 W output. Excellent low-light performance with a 25-year all-inclusive product warranty."
        - brand: "Jinko Solar"
          detail: "Tiger Neo series — n-type TOPCon technology with class-leading efficiency above 22%. Rigorous quality control and strong local warranty support in Australia."

  - id: com-finance-001
    type: card-highlight
    layout: full-width
    adminTitle: Finance Case
    props:
      heading: "The Finance Case for Commercial Solar"
      description: "Commercial solar is one of the highest-returning capital investments available to Australian businesses today. With electricity prices continuing to rise, locking in your own generation cost provides long-term certainty in your operating expenses."
      stats:
        - value: "4–7 years"
          label: "Typical payback period for commercial systems"
        - value: "25+ years"
          label: "Expected operational life of quality solar panels"
        - value: "30–60%"
          label: "Average reduction in commercial electricity bills"
      footnote: "Government Small-scale Technology Certificates (STCs) and Large-scale Generation Certificates (LGCs) reduce upfront costs further. Commercial finance options — including chattel mortgage, operating leases, and power purchase agreements (PPAs) — are available to suit your business structure and cash flow requirements."

  - id: com-faq-001
    type: faq-accordion
    layout: centered
    adminTitle: Commercial FAQ
    props:
      heading: "Frequently Asked Questions"
      subheading: "Common questions from business owners considering commercial solar."
      items:
        - question: "How much can a commercial solar system save my business?"
          answer: "Savings depend on your system size, energy usage, and feed-in tariff rates. Most commercial customers see a 30–60% reduction in electricity bills, with full payback typically achieved within 4–7 years."
        - question: "Do we need to shut operations down during installation?"
          answer: "In most cases, no. Our installation teams are experienced in working around active business operations. We schedule work to minimise any disruption to your day-to-day activities."
        - question: "What size system does my business need?"
          answer: "System size is determined by your energy consumption, roof or ground space available, and budget. We conduct a detailed energy audit and site assessment to recommend a correctly sized system."
        - question: "Are there government incentives available for commercial solar?"
          answer: "Yes. The Small-scale Renewable Energy Scheme (SRES) and Large-scale Generation Certificates (LGCs) are available depending on system size. We assist with all applicable incentive applications."
        - question: "What warranties come with a commercial solar install?"
          answer: "Our commercial systems include up to 25-year product and performance warranties on panels, 10-year inverter warranties, and a 10-year workmanship warranty on all installations carried out by Ethical Solar."

  - id: com-cta-001
    type: cta-centered
    layout: centered
    adminTitle: Bottom CTA
    props:
      heading: "Interested in Going Solar?"
      description: "We’d be happy to provide you with information, a quote and site visit, all FREE of charge."
      buttonText: "Get a Free Quote"
      buttonHref: "/contact-us"
```

### About Us Page Sections

```yaml
aboutUsPage:
  - id: abt-hero-001
    type: hero-page-header
    layout: centered
    adminTitle: About Us Page Header
    props:
      title: "About Us"
      subtitle: "Pioneering Australia with Integrity, Performance and Purpose"
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"

  - id: abt-intro-001
    type: text-image-split
    layout: split
    adminTitle: Intro Section
    props:
      heading: "Pioneering Australia with Integrity, Performance and Purpose"
      description: "Ethical Solar was founded on a simple but powerful belief — that Australians deserve honest, high-quality solar solutions backed by real expertise and long-term support.\n\nFrom day one, we have prioritised doing things the right way. That means recommending systems only when they make financial sense for the customer, using premium components that stand the test of time, and being transparent about pricing, performance, and expectations at every step.\n\nWe are not just installers — we are energy partners committed to helping homes and businesses across Australia transition to cleaner, more affordable power with confidence and clarity."
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664"

  - id: abt-commitments-001
    type: card-grid
    layout: grid
    adminTitle: Our Commitments to Quality
    props:
      heading: "Our Commitments to Quality"
      subheading: "Everything we do is built around delivering reliable, ethical, and long-lasting solar outcomes for our clients."
      items:
        - title: "Premium Components Only"
          description: "We exclusively install Tier-1 panels and inverters from manufacturers with proven track records — no budget shortcuts."
        - title: "Certified & Experienced Installers"
          description: "Every installation is completed by Clean Energy Council accredited professionals with extensive field experience."
        - title: "Transparent Pricing"
          description: "No hidden fees, no surprise add-ons. What we quote is what you pay — with full system breakdowns provided upfront."
        - title: "Long-Term Support"
          description: "Our relationship doesn't end at installation. We provide ongoing monitoring, maintenance, and warranty support."
        - title: "Sustainable Practices"
          description: "We offset our operational footprint and prioritise environmentally responsible installation and disposal processes."
        - title: "Customer-First Approach"
          description: "We only recommend a solar system if it genuinely makes financial and practical sense for the customer's situation."

  - id: abt-partner-001
    type: text-centered
    layout: centered
    adminTitle: Long-Term Energy Partner
    props:
      heading: "A Long-Term Energy Partner"
      description: "Unlike companies that disappear after the installation truck drives away, Ethical Solar is built for the long haul. We monitor system performance, address warranty claims promptly, and stay accessible when you have questions — years after your system goes live.\n\nWhether your energy needs evolve, you want to add battery storage, or you simply want a system health check, our team is here. We grow with you."

  - id: abt-sustainability-001
    type: split-highlight
    layout: split
    adminTitle: Sustainability & Transparency
    props:
      heading: "Sustainability and Transparency"
      description: "At Ethical Solar, our commitment to sustainability is not just about the energy we help generate — it extends to how we operate as a business every day."
      bullets:
        - "Carbon-neutral operations with offset programs"
        - "50 trees planted for every system installed"
        - "Responsible recycling of all packaging and materials"
        - "Full pricing transparency — no commissions hidden in quotes"
        - "Honest performance projections modelled for your specific property"
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072"
      background: "#064e3b" # Emerald 950

  - id: abt-why-us-001
    type: checklist-grid
    layout: grid
    adminTitle: Why Clients Choose Us
    props:
      heading: "Why Clients Choose Ethical Solar"
      reasons:
        - "No pushy sales tactics — ever"
        - "Honest advice, even when it means recommending a smaller system"
        - "Tier-1 panels and inverters with proven performance records"
        - "Clean Energy Council accredited installers on every job"
        - "Detailed written quotes with no hidden fees"
        - "Post-installation monitoring and genuine long-term support"
        - "Sustainability commitments built into operations, not just marketing"
        - "Local teams who understand Australian conditions and incentives"

  - id: abt-team-001
    type: text-centered
    layout: centered
    adminTitle: Our Team
    props:
      heading: "Our Team"
      description: "The Ethical Solar team brings together solar designers, accredited electricians, project managers, and customer support specialists all united by a shared commitment to doing solar the right way.\n\nWe hire locally, train rigorously, and hold every team member to the same standard of honesty and professionalism that defines our brand. When you work with Ethical Solar, you are working with people who genuinely care about the outcome — for you and for the planet."

  - id: abt-cta-001
    type: cta-centered
    layout: centered
    adminTitle: Bottom CTA
    props:
      heading: "Interested in Going Solar?"
      description: "We’d be happy to provide you with information, a quote and site visit, all FREE of charge."
      buttonText: "Get a Free Quote"
      buttonHref: "/contact-us"
```

### Blog Page Sections

```yaml
blogPage:
  - id: blog-hero-001
    type: hero-page-header
    layout: centered
    adminTitle: Blog Page Header
    props:
      title: "Latest News & Insights"
      subtitle: "Stay updated on renewable energy, battery storage, and solar updates in Australia."
      backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"

  - id: blog-list-001
    type: blog-cards
    layout: grid
    adminTitle: Blog Grid List
    props:
      source: "dynamic"   # Serves blog posts from database
```

### Contact Page Sections

```yaml
contactPage:
  - id: cnt-hero-001
    type: hero-page-header
    layout: centered
    adminTitle: Contact Page Header
    props:
      title: "Contact Us"
      subtitle: "Get in touch for a free solar assessment"
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"

  - id: cnt-form-001
    type: contact-split
    layout: split
    adminTitle: Contact Form & Info
    props:
      email: "info@ethicalsolar.com.au"
      phone: "(+61) 1300 686 595"
      address: "Suite No. 1562,\n17 Gould Road\nHerston 4006\nQLD, Australia"
      accreditationTitle: "SAA Accredited Installer"
      accreditationSubtitle: "Service area - South East Queensland (SEQ)"
      formHeading: "Request a Free Solar Quote"
      formDescription: "We'd be happy to provide you with a custom design, quote, and site assessment. All free of charge, with no pressure."
      successHeading: "Thank you!"
      successDescription: "We've received your request and will get back to you shortly."
      successButtonText: "Back to Home"
      form:
        id: "contact-inquiry"
        name: "General Contact and Quote Inquiry"
        settings:
          submitText: "Get My Proposal"
        fields:
          - id: "name"
            type: text
            name: "name"
            placeholder: "Your Name"
            required: true
          - id: "email"
            type: email
            name: "email"
            placeholder: "Your Email"
            required: true
          - id: "phone"
            type: phone
            name: "phone"
            placeholder: "Your Phone"
            required: true
          - id: "message"
            type: textarea
            name: "message"
            placeholder: "Tell us about your property or energy needs..."
            required: false
```

---

## A5. SHARED COMPONENT DATA

### Header

```yaml
header:
  logo:
    type: image
    src: "/assets/Image/ethical-solor-logo.svg"
    alt: "Ethical Solar logo"
    width: "auto"
    height: "56px"
  navigation:
    - label: "Home"
      href: "/"
    - label: "Residential"
      href: "/residential"
    - label: "Commercial"
      href: "/commercial"
    - label: "About Us"
      href: "/about-us"
    - label: "Contact Us"
      href: "/contact-us"
  ctaButton:
    label: "Get a Quote"
    href: "/contact-us"
  style:
    sticky: true
    background: "linear-gradient(90deg, #050B2F 0%, #121212 100%)"
    borderBottom: "1px solid rgba(255,255,255,0.1)"
```

### Footer

```yaml
footer:
  background: "linear-gradient(90deg, #050B2F 0%, #121212 100%)"
  textColor: "#CFD8DC"
  accentColor: "#2AF598"
  borderTop: "4px solid #2AF598"
  logo:
    src: "/assets/Image/ethical-solor-logo.svg"
    alt: "Ethical Solar logo"
    height: "96px"
  columns:
    - title: "Quick Links"
      links:
        - label: "Home"
          href: "/"
        - label: "Residential"
          href: "/residential"
        - label: "Commercial"
          href: "/commercial"
        - label: "About Us"
          href: "/about-us"
        - label: "Contact Us"
          href: "/contact-us"
    - title: "Contact"
      content:
        address: "Suite No. 1562,\n17 Gould Road\nHerston 4006\nQLD, Australia"
        phone: "(+61) 1300 686 595"
        email: "info@ethicalsolar.com.au"
    - title: "Accreditation"
      badge:
        title: "SAA Accredited Installer"
        subtitle: "Service area - South East Queensland (SEQ)"
        checkIcon: true
  bottomBar:
    copyright: "© 2026 Ethical Solar Pty Ltd. All rights reserved."
    abn: "ABN: 13 670 165 938"
    links:
      - label: "Privacy Policy"
        href: "#"
      - label: "Terms of Service"
        href: "#"
```

---

## A6. MONGODB SCHEMAS (Dynamic Content)

```yaml
collections:
  blog:
    fields:
      - name: slug
        type: string
        required: true
      - name: title
        type: string
        required: true
      - name: content
        type: string
        required: true
      - name: author
        type: string
        required: true
      - name: readTime
        type: string
      - name: featuredImage
        type: string
      - name: tags
        type: string[]
      - name: publishedAt
        type: date
      - name: isPublished
        type: boolean
```

---

## A7. FORM CONFIGURATIONS (Dynamic)

Every form on the website is defined entirely in JSON via `section.props.form`. Forms are rendered dynamically — no field names are hardcoded.

### Form JSON Structure

```yaml
form:
  id: "unique-form-id"            # Required — used in API submission
  name: "Human-readable name"     # Required — used in API submission
  settings:
    submitText: "Submit"          # Button text
    recaptcha: true               # Enable reCAPTCHA
    successRedirect: "/thank-you" # Optional redirect URL
  fields:
    - id: "field-id"              # Unique field identifier
    type: text                    # See supported field types below
    name: "field_name"            # Field name for form submission
    label: "Field Label"          # Display label
    placeholder: "Hint text"      # Placeholder
    defaultValue: ""              # Optional default
    required: true                # Is this field required?
    helperText: ""                # Optional help text below field
    validation:
      minLength: 2
      maxLength: 100
      pattern: "^[a-zA-Z]+$"      # Optional regex pattern
      min: 0                      # For number fields
      max: 100                    # For number fields
    options:                      # For select/multiselect/radio
      - value: "opt1"
        label: "Option 1"
    accept: ".pdf,.jpg"           # For file fields
    multiple: false               # For file fields
```

### Supported Field Types

| Type | HTML Rendering | Validation |
|------|---------------|------------|
| `text` | `<input type="text">` | minLength, maxLength, pattern |
| `email` | `<input type="email">` | Built-in email + pattern |
| `phone` | `<input type="tel">` | Built-in tel + pattern |
| `password` | `<input type="password">` | minLength, maxLength |
| `textarea` | `<textarea>` | minLength, maxLength |
| `number` | `<input type="number">` | min, max, step |
| `select` | `<select>` | options array |
| `multiselect` | `<select multiple>` | options array |
| `checkbox` | `<input type="checkbox">` | — |
| `radio` | Radio group | options array |
| `switch` | Toggle switch | — |
| `date` | `<input type="date">` | min, max |
| `datetime` | `<input type="datetime-local">` | min, max |
| `file` | `<input type="file">` | accept, multiple |
| `hidden` | `<input type="hidden">` | — |
| `url` | `<input type="url">` | pattern |

Unknown field types must be ignored gracefully — never break rendering.

### Form Layout

Controlled by `section.layout`:
- `one_column` — single column (default)
- `two_column` — 2-column grid
- `three_column` — 3-column grid

### Form Behavior Rules (see B9 for full rendering spec)

1. Forms render entirely from `section.props.form` JSON — never hardcode fields
2. POST to `/api/form-data` with `Content-Type: application/json` (or `multipart/form-data` if files present)
3. Request body includes: `pageSlug`, `pageTitle`, `sectionId`, `formId`, `formName`, `submission: { fieldName: value }`
4. Client-side validation before submit: required, email, phone, pattern, min/max
5. Inline validation messages below each field
6. Submit button disabled while submitting + loading indicator
7. On success: hide form, show `successHeading` / `successDescription` + optional `successButtonText`
8. On error: preserve values, show server errors or generic message
9. Accessibility: `id`, `name`, `label`, `aria-*`, keyboard navigation

---

# SECTION B: SYSTEM CONFIGURATION
## (Fixed — Do NOT modify. Applies to ALL CMS websites)

---

## B1. AI PERSONA

Act as an Elite Full-Stack Next.js 15 Architect, CMS Specialist, and Design System Expert. Generate a complete, production-ready corporate/portfolio/marketing/blog CMS website.

System constraints: Tokenized, theme-driven, JSON-first, EditableText-enabled, locale-aware, SEO-ready, responsive, type-safe, component-driven.

---

## B2. ARCHITECTURE OVERVIEW

```
src/lib/theme/config.ts       ← Source of truth (actual token values)
       │
scripts/generate-theme-css.js ← Compiler
       │
src/styles/globals.css         ← Token placeholders only
       │
Compiled CSS variables on :root
       │
Components consume var(--primary), var(--background), etc.

Data Flow: JSON → Redux → Component
Static pages rendered from local JSON files in src/lib/data/pages/
Dynamic content served via proxy API → FastAPI backend → MongoDB

API PROXY PATTERN:
  src/app/api/[[slug]]/route.ts  ← Single catch-all route
       │
  Proxies all HTTP methods (GET/POST/PUT/PATCH/DELETE/OPTIONS/HEAD)
       │
  Forwards to KALZERO_PUBLIC_API_URL + path
       │
  Special handling for PUT/PATCH /api/media/[id] — updates MongoDB directly
```

---

## B3. CORE REQUIREMENTS

1. NO `.data.ts` files anywhere
2. SINGLE PAGE JSON — each page has its own JSON in `src/lib/data/pages/`
3. ALL PAGES RENDER FROM JSON — static page content is never stored in MongoDB
4. DATA FLOW: JSON → Redux → Component
5. EDITABLE TEXT — all text wrapped in `EditableText` component
6. CLEAN TEXT STORAGE — JSON stores text WITHOUT HTML tags
7. THEME TOKENS DYNAMIC — `{category.subcategory.property}` placeholders in CSS
8. NO LANGUAGE TOGGLE — switching via URL prefix only (when multi-language)
9. ALL FORMS ARE DYNAMIC — rendered entirely from JSON configuration in `section.props.form`; never hardcode field names, types, or validation rules
10. SINGLE API PROXY — all API calls go through `src/app/api/[[slug]]/route.ts` which proxies to FastAPI backend; no individual route.ts files per entity

---

## B4. GENERATION TARGETS

### TARGET 1: `src/styles/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: {colors.primary};
  --primary-light: {colors.primaryLight};
  --primary-dark: {colors.primaryDark};
  --primary-hover: {colors.primaryHover};
  --secondary: {colors.secondary};
  --accent: {colors.accent};
  --accent-hover: {colors.accentHover};
  --accent-soft: {colors.accentSoft};
  --background: {colors.background};
  --surface: {colors.surface};
  --card: {colors.card};
  --text: {colors.text};
  --text-secondary: {colors.textSecondary};
  --text-muted: {colors.textMuted};
  --border: {colors.border};
  --border-hover: {colors.borderHover};
  --success: {colors.success};
  --warning: {colors.warning};
  --danger: {colors.danger};
  --error: {colors.error};
  --info: {colors.info};
  --overlay: {colors.overlay};

  --card-hover-border: {colors.primary};

  --font-body: {typography.bodyFont};
  --font-heading: {typography.headingFont};
  --font-mono: {typography.monoFont};
  --text-xs: {typography.text.xs};
  --text-sm: {typography.text.sm};
  --text-base: {typography.text.base};
  --text-md: {typography.text.md};
  --text-lg: {typography.text.lg};
  --text-xl: {typography.text.xl};
  --text-2xl: {typography.text.2xl};
  --text-3xl: {typography.text.3xl};
  --text-4xl: {typography.text.4xl};
  --text-5xl: {typography.text.5xl};
  --font-light: {typography.fw.light};
  --font-normal: {typography.fw.normal};
  --font-medium: {typography.fw.medium};
  --font-semibold: {typography.fw.semibold};
  --font-bold: {typography.fw.bold};
  --font-extrabold: {typography.fw.extrabold};
  --leading-tight: {typography.lineHeight.tight};
  --leading-normal: {typography.lineHeight.normal};
  --leading-relaxed: {typography.lineHeight.relaxed};

  --space-1: {spacing.1};  --space-2: {spacing.2};
  --space-3: {spacing.3};  --space-4: {spacing.4};
  --space-5: {spacing.5};  --space-6: {spacing.6};
  --space-8: {spacing.8};  --space-10: {spacing.10};
  --space-12: {spacing.12};  --space-16: {spacing.16};
  --space-20: {spacing.20};  --space-24: {spacing.24};

  --radius-sm: {radius.sm};  --radius-md: {radius.md};
  --radius-lg: {radius.lg};  --radius-xl: {radius.xl};
  --radius-2xl: {radius.2xl};  --radius-full: {radius.full};

  --shadow-sm: {shadow.sm};  --shadow-md: {shadow.md};
  --shadow-lg: {shadow.lg};  --shadow-hover: {shadow.hover};

  --container: {layout.container};
  --navbar-height: {layout.navbarHeight};
  --section-padding: {layout.sectionPadding};

  --btn-height: {buttons.height};
  --btn-padding-x: {buttons.paddingX};
  --btn-radius: {buttons.radius};
  --btn-primary-bg: {buttons.primaryBackground};
  --btn-primary-text: {buttons.primaryText};
  --btn-primary-hover: {buttons.primaryHover};
  --btn-secondary-bg: {buttons.secondaryBackground};
  --btn-secondary-text: {buttons.secondaryText};
  --btn-secondary-hover: {buttons.secondaryHover};
  --btn-outline-border: {buttons.outlineBorder};
  --btn-outline-text: {buttons.outlineText};
  --btn-outline-hover-bg: {buttons.outlineHoverBackground};
  --btn-outline-hover-text: {buttons.outlineHoverText};

  --input-height: {forms.inputHeight};
  --input-padding-x: {forms.inputPaddingX};
  --input-padding-y: {forms.inputPaddingY};
  --input-radius: {forms.inputRadius};
  --input-bg: {forms.inputBackground};
  --input-text: {forms.inputText};
  --input-border: {forms.inputBorder};
  --input-border-hover: {forms.inputBorderHover};
  --input-placeholder: {forms.inputPlaceholder};
  --input-focus-border: {forms.inputFocusBorder};
  --input-focus-shadow: {forms.inputFocusShadow};
  --input-disabled-bg: {forms.inputDisabledBackground};
  --input-disabled-text: {forms.inputDisabledText};
  --textarea-min-height: {forms.textareaMinHeight};

  --modal-sm: {modal.sm};  --modal-md: {modal.md};  --modal-lg: {modal.lg};
}

.dark {
  --background: {colors.dark.background};
  --surface: {colors.dark.surface};
  --card: {colors.dark.card};
  --text: {colors.dark.text};
  --text-secondary: {colors.dark.textSecondary};
  --text-muted: {colors.dark.textMuted};
  --border: {colors.dark.border};
  --input-bg: {colors.dark.inputBackground};
  --input-text: {colors.dark.inputText};
  --input-border: {colors.dark.inputBorder};
  --input-placeholder: {colors.dark.inputPlaceholder};
  --input-disabled-bg: {colors.dark.inputDisabledBackground};
}
```

### TARGET 2: `src/lib/theme/theme.config.ts`

Generate a complete theme config object with ALL values from SECTION A2 (Color Palette, Typography, Spacing, Radius, Shadows, Layout, Buttons, Forms, Modal, Dark Mode).

### TARGET 3: `scripts/generate-theme-css.ts`

Same as existing — reads `theme.config.ts`, replaces `{path.placeholders}` in a CSS template, writes `globals.css`.

### TARGET 4: Page JSON files

Generate one JSON file per static page (from SECTION A4) in `src/lib/data/pages/` following the page block schema:

```typescript
interface PageBlock {
  id: string;
  type: string;
  layout: string;
  adminTitle: string;
  props?: Record<string, unknown>;
  content?: PageBlock[];
}
```

### TARGET 5: Header + Footer JSON

Generate `headerData.json` and `footerData.json` from SECTION A5.

### TARGET 6: MongoDB types (`src/lib/db/types.ts`)

Generate TypeScript interfaces for all dynamic collections listed in SECTION A6.

### TARGET 7: Redux Store (pages slice + store setup)

Same pattern as CMSV2 — pages slice with `setCurrentPageBySlug`, `updatePageField`, `setEditableMode`. Store with Redux Toolkit.

### TARGET 8: Shared Components

- `EditableText` — click-to-edit inline text component
- `Button` — primary/secondary variants
- `Card` — themed card container
- `Modal` — overlay modal
- `Accordion` — expandable sections
- `LoadingSkeleton` — loading placeholder
- `ThemeToggle` — light/dark toggle

### TARGET 9: Page Components per Section Type

For each unique `type` used in SECTION A4 page blocks, generate a render component:
- `HeroSection` (layouts: split-overlay, hero-form, hero-page-header)
- `LogoCloud` (slider trust bar)
- `ServiceCards` (service grid)
- `LetsTalkStrip` (simple text-link banner)
- `WhatWeDoGrid` (problem/get/growth list grid)
- `AboutVideo` (expandable video player overlay)
- `WorkGallery` (grid image list)
- `CtaCentered` (quote or question CTA block)
- `HeroForm` (hero with input form layout)
- `BenefitsGrid` (benefits tiles with highlight block)
- `ProcessSteps` (numbered how-it-works cards)
- `TextColumns` (maintenance two-column text)
- `VerticalTimeline` (numbered process steps with line indicator)
- `FaqAccordion` (collapsible item accordion list)
- `HeroPageHeader` (about / commercial header)
- `ServiceCardsBullets` (commercial services with check bullets)
- `ProcessCards` (numbered card list)
- `SplitHighlight` (split image and bullets with background color)
- `ProductCards` (commercial panel cards)
- `CardHighlight` (finance case with big numbers, description, footnote)
- `TextImageSplit` (intro text and side image split)
- `CardGrid` (commitments 2-column or 3-column grid)
- `TextCentered` (about philosophy description block)
- `ChecklistGrid` (why choose us checklist columns)
- `BlogCards` (grid layout for blog listing)
- `ContactSplit` (form and details split columns)
- `DynamicForm` (renders forms entirely from JSON — see TARGET 13)

### TARGET 10: `src/app/api/[[slug]]/route.ts`

Generate the universal API proxy route. This is the ONLY API route file in the project.

```typescript
import type { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ProxyRouteContext {
  params: Promise<{ path?: string[] }>;
}

function normalizeAbsoluteUrl(value: string | undefined) {
  if (!value) return null;
  const trimmed = value.endsWith("/") ? value.slice(0, -1) : value;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return null;
}

function resolveApiProxyBaseUrl() {
  const envUrl = process.env.KALZERO_PUBLIC_API_URL?.trim();
  if (!envUrl) throw new Error("KALZERO_PUBLIC_API_URL is not defined");
  return normalizeAbsoluteUrl(envUrl) ?? envUrl;
}

function buildTargetUrl(request: NextRequest, path: string[] | undefined) {
  const incomingUrl = new URL(request.url);
  const pathname = path && path.length > 0 ? `/${path.join("/")}` : "";
  const baseUrl = resolveApiProxyBaseUrl();
  return `${baseUrl}${pathname}${incomingUrl.search}`;
}

// Forwards all HTTP methods to the FastAPI backend
// Special-cases PUT/PATCH /api/media/[id] for direct MongoDB updates
async function proxyRequest(request: NextRequest, context: ProxyRouteContext) {
  const { path } = await context.params;

  // Intercept media metadata updates to MongoDB
  if (
    (request.method === "PUT" || request.method === "PATCH") &&
    path &&
    ((path.length === 2 && path[0] === "media") ||
     (path.length === 3 && path[0] === "admin" && path[1] === "media"))
  ) {
    const id = path[path.length - 1];
    const tenantDbName = request.headers.get("x-tenant-db");
    if (!tenantDbName) {
      return Response.json({ error: "x-tenant-db header is required" }, { status: 400 });
    }
    try {
      const body = await request.json();
      const { filename, altText, foldername, isWatermark } = body;
      const client = await connectToDatabase();
      const db = client.db(tenantDbName);
      const collection = db.collection("media");
      const updateData: Record<string, unknown> = {};
      if (filename !== undefined) updateData.filename = filename;
      if (altText !== undefined) updateData.alt = altText;
      if (foldername !== undefined) updateData.foldername = foldername;
      if (isWatermark !== undefined) updateData.isWatermark = isWatermark;
      updateData.updatedAt = new Date();
      let query: Record<string, unknown> = {};
      if (ObjectId.isValid(id)) {
        query = { _id: new ObjectId(id) };
      } else {
        query = { id: id };
      }
      const result = await collection.updateOne(query, { $set: updateData });
      if (result.matchedCount === 0 && ObjectId.isValid(id)) {
        const altResult = await collection.updateOne({ id: id }, { $set: updateData });
        if (altResult.matchedCount === 0) {
          return Response.json({ error: "Media item not found" }, { status: 404 });
        }
      } else if (result.matchedCount === 0) {
        return Response.json({ error: "Media item not found" }, { status: 404 });
      }
      return Response.json({ success: true, message: "Media item updated successfully" });
    } catch (error: any) {
      return Response.json({ error: error.message || "Failed to update media item" }, { status: 500 });
    }
  }

  // Proxy everything else to FastAPI backend
  const incomingUrl = new URL(request.url);
  const targetUrl = buildTargetUrl(request, path);
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.set("x-forwarded-host", incomingUrl.host);
  headers.set("x-forwarded-proto", incomingUrl.protocol.replace(":", ""));
  const init: RequestInit = { method: request.method, headers, cache: "no-store", redirect: "manual" };
  let body: ArrayBuffer | undefined;
  if (request.method !== "GET" && request.method !== "HEAD") {
    body = await request.arrayBuffer();
  }
  if (body && body.byteLength > 0) init.body = body;
  try {
    const response = await fetch(targetUrl, init);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers),
    });
  } catch (error: any) {
    const detail = error instanceof Error && error.message
      ? `API proxy request failed: ${error.message}`
      : "API proxy request failed.";
    return Response.json({ detail, targetUrl }, { status: 502 });
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
export const OPTIONS = proxyRequest;
export const HEAD = proxyRequest;
```

### TARGET 11: `src/middleware.ts` (if multi-language)

Generate locale-aware middleware following the pattern from CMSV2.

### TARGET 12: `src/lib/i18n/locale.ts` (if multi-language)

Export `getLocalizedString` helper for `LocalizedString` objects.

### TARGET 13: Dynamic Form Section Component

Generate a `FormSection` component that renders forms entirely from JSON config:

- Reads `section.props.form` for field definitions and settings
- Reads `section.props.formHeading`, `formDescription`, `successHeading`, `successDescription`, `successButtonText` for UI content
- Uses `section.layout` (one_column/two_column/three_column) for field grid layout
- Renders every field type from the dynamic field definitions (text, email, phone, password, textarea, number, select, multiselect, checkbox, radio, switch, date, datetime, file, hidden, url)
- Implements client-side validation: required, email, phone, pattern, min/max
- Shows inline validation messages below each field
- On submit: POSTs to `/api/form-data` with body `{ pageSlug, pageTitle, sectionId, formId, formName, submission: { fieldName: value } }`
- Auto-switches to `multipart/form-data` when file fields are present
- Submit button disabled + loading indicator during submission
- On success: hides form, shows success state with `successHeading`/`successDescription`/`successButtonText`
- On error: preserves values, shows server or generic error
- Full accessibility: `id`, `name`, `label`, `aria-*`, keyboard nav
- Unknown field types are ignored gracefully — never break rendering

### TARGET 14: API Form Submission Handler (included in proxy)

The proxy route at `src/app/api/[[slug]]/route.ts` forwards `POST /api/form-data` to the FastAPI backend. The frontend `FormSection` component sends submissions to `/api/form-data` — no additional route file needed.

---

## B5. COMPONENT INVENTORY

| Component | Path | Purpose |
|-----------|------|---------|
| EditableText | `src/components/shared/EditableText.tsx` | Click-to-edit inline text |
| Button | `src/components/ui/Button.tsx` | Primary/secondary/outline buttons |
| Card | `src/components/ui/Card.tsx` | Themed card container |
| Modal | `src/components/ui/Modal.tsx` | Overlay dialog |
| Accordion | `src/components/ui/Accordion.tsx` | Expandable FAQ/list |
| LoadingSkeleton | `src/components/ui/LoadingSkeleton.tsx` | Loading state |
| ThemeToggle | `src/components/ui/ThemeToggle.tsx` | Light/dark toggle |
| DynamicForm | `src/components/sections/DynamicForm.tsx` | Renders forms entirely from JSON config (field types, validation, submission) |
| [Section Components] | `src/components/sections/*.tsx` | One per page block type |

---

## B6. DATA FLOW SUMMARY

```
STATIC PAGES:
  src/lib/data/pages/*.json
       │
  pagesSlice.loadInitialData()
       │
  useSelector(state.pages.currentPages)
       │
  Page renders content.map() → <SectionRenderer block={...} />
       │
  <EditableText> dispatches updatePageField → Redux → UI updates

DYNAMIC PAGES:
  Server component fetches via fetch(/api/blog, ...)
       │
  src/app/api/[[slug]]/route.ts proxies to KALZERO_PUBLIC_API_URL + path
       │
  FastAPI backend queries MongoDB and returns JSON
       │
  Renders same section components with fetched props

FORM SUBMISSION:
  <DynamicForm block={...}>
       │
  POST /api/form-data (pageSlug, sectionId, formId, submission)
       │
  src/app/api/[[slug]]/route.ts proxies to FastAPI backend
       │
  FastAPI stores submission in MongoDB
       │
  Returns success/error response → DynamicForm shows success/error state

MEDIA UPLOAD:
  PUT/PATCH /api/media/[id]
       │
  src/app/api/[[slug]]/route.ts intercepts and updates MongoDB directly
       │
  (Bypasses FastAPI for media metadata updates)
```

---

## B7. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Mobile | < 640px | Single column, stacked |
| sm | ≥ 640px | 2-column grids |
| md | ≥ 768px | 2-3 column grids |
| lg | ≥ 1024px | Full multi-column layouts |
| xl | ≥ 1280px | Max-width container |

Container max-width: 1280px (`container-xl` or `max-w-8xl`)

---

## B8. SEO REQUIREMENTS

1. Each page JSON includes `metaTitle` and `metaDescription`
2. `generateMetadata()` reads from Redux store or page JSON
3. Open Graph tags: `og:title`, `og:description`, `og:url`
4. Twitter card: `summary`
5. Canonical URL per page
6. robots: `index, follow`
7. Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`
8. `alt` text on all images
9. Focus-visible outlines for keyboard navigation
10. Skip-to-content link
11. Prefers-reduced-motion media query support
