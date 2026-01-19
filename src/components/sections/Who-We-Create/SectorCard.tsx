import React from "react";

type SnapshotItem = string;

type SectorCard = {
  title: string;
  subtitle: string;
  pain: string;
  why: string;
  need: string;
  cta: string;
  snapshot: SnapshotItem[];
  planLabel: string;
  plan: string;
};

const cards: SectorCard[] = [
  {
    title: "Tourism & Travel",
    subtitle: "For brands that\nhost the world.",
    pain:
      "People browse, compare your offer with 40 similar listings, and leave without booking.",
    why:
      "Your digital experience feels “nice”, but it doesn’t clearly show why you’re the better choice.",
    need:
      "A booking-focused brand and website that make the value obvious — instantly.",
    cta: "See Tourism Projects",
    snapshot: [
      "+68% bookings after full website rebuild",
      "3× more qualified inquiries after messaging refresh",
      "AI video campaigns: +40–70% engagement",
    ],
    planLabel: "Suggested Plan",
    plan: "GROW + SCALE",
  },
  {
    title: "Yacht & Charter",
    subtitle: "For brands that sail\nabove the noise.",
    pain:
      "Potential guests compare you with 20 nearly identical charter options — and postpone the decision.",
    why:
      "Your website and visuals don’t communicate professionalism, experience or the feeling of the journey.",
    need:
      "A frictionless booking experience with strong visuals that sell the story before the form.",
    cta: "See Tourism Projects",
    snapshot: [
      "Booking friction reduced by 52%",
      "Hero video increased session duration by 3×",
      "Email + social funnel generating consistent leads",
    ],
    planLabel: "Suggested Plan",
    plan: "GROW + SCALE",
  },
  {
    title: "Health, Pharma & Beauty",
    subtitle: "For brands that build\ntrust through care.",
    pain:
      "Clients want to trust you — but your online presence feels outdated or inconsistent compared to 10+ similar clinics/brands they browse.",
    why:
      "Your expertise and warmth don’t translate clearly into digital communication.",
    need:
      "A credible, empathetic and structured digital identity that builds trust before they ever walk in.",
    cta: "See Tourism Projects",
    snapshot: [
      "Clearer messaging = more qualified inquiries",
      "+32% returning clients after content system setup",
      "Service pages redesigned for clarity & trust",
    ],
    planLabel: "Suggested Plan",
    plan: "START + GROW",
  },
  {
    title: "Local & Boutique Brands",
    subtitle: "For makers, doers\nand dreamers.",
    pain:
      "Your product stands out in real life — but online you blend in with dozens of similar boutique brands.",
    why:
      "Your personality, craft and story aren’t expressed visually or verbally in a way people remember.",
    need:
      "Authentic identity + storytelling that match the quality of your work.",
    cta: "See Tourism Projects",
    snapshot: [
      "Stronger brand clarity → higher perceived value",
      "Launch content generating instant traction",
      "Website refresh improving conversions by 45%",
    ],
    planLabel: "Suggested Plan",
    plan: "START + GROW",
  },
];

const SectorCards: React.FC = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl bg-[#F8F8F8] shadow-sm overflow-hidden flex flex-col"
            >
              {/* Top image placeholder */}
              <div className="h-40 bg-[#F1F1F1]" />

              {/* Main content */}
              <div className="flex flex-col gap-4 px-5 py-5 text-[#222]">
                <h4 className="text-[20px] font-semibold text-[#555555]">{c.title}</h4>
                <div className="h-px bg-black/10" />

                <p className="text-md leading-6 whitespace-pre-line text-[#555555]">
                  {c.subtitle}
                </p>

                <div className="h-px bg-black/10" />

                <div className="space-y-3 text-[14px] leading-6 text-black/70">
                  <div>
                    <p className="font-semibold text-black/80">The pain:</p>
                    <p>{c.pain}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black/80">Why it happens:</p>
                    <p>{c.why}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black/80">What you need:</p>
                    <p>{c.need}</p>
                  </div>
                </div>

                <button className="mt-2 w-fit rounded-full bg-[#8000FF] px-5 py-2 text-[14px] font-medium text-white shadow-sm hover:opacity-95">
                  {c.cta}
                </button>
              </div>

              {/* Snapshot Results block */}
              <div className="mt-auto bg-[#F1F1F1] px-5 py-4 text-sm">
                <p className="font-semibold text-[#555555] mb-2">
                  Snapshot Results:
                </p>
                <ul className="list-disc pl-4 font-medium space-y-1 text-[#555555]">
                  {c.snapshot.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* Suggested Plan block */}
              <div className="bg-[#E6E6E6] px-5 py-4">
                <p className="text-[16px] font-semibold tracking-wide text-[#555555]">
                  {c.planLabel}
                </p>
                <p className="mt-1 text-[24px] font-bold text-[#555555]">
                  {c.plan}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorCards;
