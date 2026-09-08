export const site = {
  name: "PineryX",
  email: "info@pineryx.com",
  url: "https://pineryx.com",
  tagline: "Blockchain products and infrastructure, engineered to last.",
  description:
    "PineryX is a Web3 technology company that designs and builds scalable blockchain products and infrastructure, including RWA platforms, DeFi applications, DAO governance systems, tokenization platforms, and smart contract infrastructure.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
] as const;

export const hero = {
  eyebrow: "Web3 technology company",
  title: "Blockchain products and infrastructure, engineered to last.",
  body: "PineryX designs and builds scalable Web3 systems — real-world asset platforms, DeFi infrastructure, DAO governance, tokenization systems, and smart contract development — across Ethereum, Polygon, Solana, and other ecosystems.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "Explore capabilities", href: "/services" },
  chips: [
    "Real-world asset platforms",
    "DeFi infrastructure",
    "DAO governance",
    "Tokenization systems",
    "Smart contract development",
  ],
} as const;

export const ecosystems = [
  {
    name: "Ethereum",
    detail: "Institutional settlement, DeFi liquidity, and programmable assets.",
  },
  {
    name: "Polygon",
    detail: "High-throughput applications with Ethereum-aligned security.",
  },
  {
    name: "Solana",
    detail: "Low-latency products that need performance at consumer scale.",
  },
] as const;

export const about = {
  eyebrow: "About PineryX",
  title: "Built for teams who need blockchain to behave like infrastructure.",
  body: "PineryX is an early-stage Web3 technology company. We design and build products that have to operate with the reliability, security, and clarity expected of serious software — not as experiments, and not as single-chain demos.",
  mission: {
    title: "Mission",
    text: "To help organizations put real value on-chain with systems that are secure, scalable, and maintainable over time.",
  },
  vision: {
    title: "Vision",
    text: "A digital economy where tokenized assets, markets, and governance run on infrastructure as dependable as the institutions they serve.",
  },
} as const;

export const aboutPage = {
  eyebrow: "About",
  title: "A Web3 technology company built for production systems.",
  body: "PineryX designs and builds scalable blockchain products and infrastructure. We are early-stage. We focus on the work: architecture, contracts, and the operating model around them — not on looking like a large agency.",
  whatWeAre: {
    title: "What we are",
    text: "An engineering company for organizations that need blockchain to behave like infrastructure. We work across Ethereum, Polygon, Solana, and other ecosystems when the product requires it.",
  },
  whatWeAreNot: {
    title: "What we are not",
    text: "We are not a single-chain studio, a token-launch shop, or a marketplace for clone products. If the problem does not need a chain, we will say so.",
  },
} as const;

export const capabilities = [
  {
    id: "rwa",
    title: "Real-World Asset platforms",
    text: "Issuance, servicing, and lifecycle systems for tokenized funds, credit, property, and other off-chain value — designed around control, auditability, and operational workflow.",
  },
  {
    id: "defi",
    title: "DeFi applications",
    text: "On-chain markets, liquidity, staking, and financial primitives built for real usage: clear risk surfaces, resilient contracts, and interfaces teams can operate.",
  },
  {
    id: "dao",
    title: "DAO governance systems",
    text: "Proposal, voting, and treasury frameworks that make collective decision-making accountable — on-chain where it matters, usable where people work.",
  },
  {
    id: "tokenization",
    title: "Tokenization platforms",
    text: "End-to-end rails from asset onboarding to on-chain representation, transfers, and administration, so tokens are products rather than one-off contracts.",
  },
  {
    id: "contracts",
    title: "Smart contract infrastructure",
    text: "Modular protocol architecture, upgrade paths, testing, and deployment discipline — the layer every product above it has to trust.",
  },
] as const;

export const servicesPage = {
  eyebrow: "Services",
  title: "Blockchain products and infrastructure, built as systems.",
  body: "PineryX designs and builds the platforms organizations need to issue assets, run markets, govern on-chain, and operate smart contract infrastructure — across Ethereum, Polygon, Solana, and other networks.",
  items: [
    {
      id: "rwa",
      title: "Real-World Asset platforms",
      text: "We build issuance and servicing systems for tokenized funds, credit, property, and other off-chain value. The work is as much operational as it is on-chain: who can mint, who can transfer, what gets reported, and how the asset is administered after launch.",
      points: [
        "Issuance, permissions, and lifecycle events",
        "Servicing workflows and audit-ready records",
        "Integration with existing operations, not only a token contract",
      ],
    },
    {
      id: "defi",
      title: "DeFi applications",
      text: "We engineer on-chain markets, liquidity, staking, and financial primitives that teams can actually operate. Risk surfaces stay explicit. Contracts are built for real usage, not a launch-day demo.",
      points: [
        "Markets, liquidity, and incentive mechanics",
        "Staking and reward distribution",
        "Interfaces and consoles for day-to-day operation",
      ],
    },
    {
      id: "dao",
      title: "DAO governance systems",
      text: "We design proposal, voting, and treasury frameworks so collective decisions are accountable. On-chain where it matters. Usable where people actually work.",
      points: [
        "Proposals, voting, and execution paths",
        "Treasury controls and multi-party permissions",
        "Governance that operators can explain and maintain",
      ],
    },
    {
      id: "tokenization",
      title: "Tokenization platforms",
      text: "We build the rails from asset onboarding to on-chain representation, transfer, and administration. Tokens are treated as products with a lifecycle — not one-off contracts.",
      points: [
        "Onboarding, representation, and administration",
        "Transfer rules and access control",
        "Shared infrastructure under more than one asset",
      ],
    },
    {
      id: "contracts",
      title: "Smart contract infrastructure",
      text: "We architect the contract layer every product above it has to trust: modular programs, upgrade paths, testing, and deployment discipline. Security is a stage in delivery, not a slogan at the end.",
      points: [
        "Protocol architecture and upgrade paths",
        "Test coverage, reviews, and staging",
        "Mainnet deployment with monitoring after go-live",
      ],
    },
  ],
} as const;

export const solutions = [
  {
    title: "Asset issuance and servicing",
    text: "Platforms for bringing real-world value on-chain, then running the ongoing operations around it: permissions, reporting, transfers, and lifecycle events.",
  },
  {
    title: "On-chain markets and liquidity",
    text: "DeFi systems for trading, incentives, and capital flow — engineered so protocol mechanics stay explicit and operationally sound.",
  },
  {
    title: "Governance and treasury",
    text: "Decision and fund-control systems for protocols and organizations that need transparent rules without sacrificing day-to-day usability.",
  },
  {
    title: "Token and contract foundations",
    text: "The shared infrastructure under a product: token standards, access control, upgradeability, indexing, and the application layer that users actually touch.",
  },
] as const;

export const technology = {
  eyebrow: "Technology",
  title: "We choose the chain for the product — not the other way around.",
  body: "PineryX builds across ecosystems. Ethereum, Polygon, and Solana are primary environments we engineer in. They are not a limit. If a product needs another network, the architecture comes first.",
  practices: [
    { title: "Protocol engineering", text: "Solidity, Rust, and modular contract design with test coverage as a default." },
    { title: "Application layer", text: "Wallet flows, transaction UX, and operational consoles that make on-chain systems usable." },
    { title: "Data and observability", text: "Indexing, event pipelines, and reporting so teams can see what the chain is doing." },
    { title: "Secure delivery", text: "Threat modeling, reviews, staging, and mainnet discipline before value is at risk." },
  ],
} as const;

export const method = [
  { step: "01", title: "Assess", text: "Clarify the product, constraints, and whether blockchain is the right layer for the problem." },
  { step: "02", title: "Architect", text: "Design chain selection, contract boundaries, permissions, and the operating model around them." },
  { step: "03", title: "Build", text: "Implement protocols and applications with the same engineering bar as production software." },
  { step: "04", title: "Secure", text: "Test, review, and harden before mainnet. Security is a stage, not a slogan." },
  { step: "05", title: "Deploy", text: "Launch with monitoring, documentation, and a path for iteration after go-live." },
] as const;

export const why = [
  {
    title: "Production engineering",
    text: "We treat blockchain systems as software that has to be operated, upgraded, and understood — not as a launch-day artifact.",
  },
  {
    title: "Security as a default",
    text: "Threat models, testing, and conservative design sit inside the build, because on-chain mistakes do not roll back easily.",
  },
  {
    title: "Multi-chain fluency",
    text: "Ethereum, Polygon, Solana, and beyond. The ecosystem is a decision, not a brand position.",
  },
  {
    title: "Business-first architecture",
    text: "Contracts exist to serve a product: assets, markets, governance, or infrastructure. The use case leads.",
  },
] as const;

export const teamPage = {
  eyebrow: "Team",
  title: "A focused team, still being formed.",
  body: "PineryX is early. We do not list names, titles, or headcount we do not have. This page is here so Team and About stay distinct: About is the company. Team is the people — as they join.",
  disciplines: [
    {
      title: "Protocol engineering",
      text: "Smart contracts and on-chain programs with the same discipline as production software.",
    },
    {
      title: "Product architecture",
      text: "Turning a business problem into a system: chain choice, permissions, and the operating model.",
    },
    {
      title: "Application engineering",
      text: "Wallet flows, consoles, and interfaces that make infrastructure usable.",
    },
    {
      title: "Security and delivery",
      text: "Reviews, testing, staging, and mainnet care after launch.",
    },
  ],
} as const;

export const career = {
  eyebrow: "Careers",
  title: "A focused team, still being formed.",
  body: "PineryX is early. We hire for judgment and craft — protocol engineering, product architecture, and the discipline required to ship systems that hold real value. Open roles will be listed here as we create them.",
  cta: { label: "Introduce yourself", href: "/contact" },
} as const;

export const careersPage = {
  eyebrow: "Careers",
  title: "Work on systems that have to hold real value.",
  body: "We hire slowly. Open roles will appear on this page when we create them. Until then, a serious introduction is welcome.",
  howWeHire: [
    {
      title: "Judgment first",
      text: "We look for people who can decide what not to build, and who treat on-chain risk as part of the job.",
    },
    {
      title: "Craft, not theater",
      text: "Clear writing, careful reviews, and software that can be operated after launch matter more than a loud portfolio.",
    },
    {
      title: "Direct conversation",
      text: "There is no long hiring funnel to describe yet. If the fit is real, we will say so quickly.",
    },
  ],
  rolesNote:
    "No roles are open at the moment. When a role opens, it will be listed here with a short brief and how to apply.",
} as const;

export const interests = [
  "Real-World Asset platforms",
  "DeFi applications",
  "DAO governance systems",
  "Tokenization platforms",
  "Smart contract infrastructure",
  "Something else",
] as const;

export const footer = {
  blurb:
    "PineryX designs and builds scalable blockchain products and infrastructure across multiple ecosystems.",
} as const;
