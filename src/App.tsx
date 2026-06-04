import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart, Wallet, TrendingUp, Shield, Cpu, BarChart3,
  CheckCircle2, ChevronRight, ChevronDown, Layers, Zap,
  Globe, Database, Lock, Server, Smartphone, Code, Rocket,
  Calendar, Target, DollarSign, Package, ExternalLink, Copy,
  Check, Menu, X, ArrowRight, Sparkles, IndianRupee, Search,
  Bell, PieChart, GitBranch, Cloud, Terminal, FileText, Star,
  AlertTriangle, Clock, Users, TrendingDown, CreditCard
} from "lucide-react";

// ============= DATA =============

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: Layers },
  { id: "features", label: "Features", icon: Zap },
  { id: "architecture", label: "Architecture", icon: Server },
  { id: "techstack", label: "Tech Stack", icon: Code },
  { id: "security", label: "Security", icon: Shield },
  { id: "database", label: "Database", icon: Database },
  { id: "priceengine", label: "Price Engine", icon: Search },
  { id: "ai", label: "AI Engine", icon: Cpu },
  { id: "roadmap", label: "Roadmap", icon: Calendar },
  { id: "costs", label: "Costs", icon: IndianRupee },
  { id: "prompts", label: "AI Prompts", icon: Terminal },
];

const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Daily Task Manager",
    description: "Create & manage grocery lists, daily tasks, bill reminders with smart categorization and recurring templates.",
    color: "from-emerald-500 to-teal-600",
    details: [
      "Recurring task templates (weekly groceries, monthly bills)",
      "Smart categorization (Food, Transport, Entertainment)",
      "Mark as purchased with actual price entry",
      "Share lists with family members",
      "Location-based reminders"
    ]
  },
  {
    icon: Wallet,
    title: "Income & Expense Tracker",
    description: "Track every rupee. Multiple income sources, categorized expenses, trend analysis, and budget alerts.",
    color: "from-blue-500 to-indigo-600",
    details: [
      "Multiple income sources (salary, freelance, rental)",
      "Category-wise expense breakdown with charts",
      "3/6/12 month trend analysis",
      "Savings rate calculator",
      "Export to CSV/PDF for tax filing"
    ]
  },
  {
    icon: Search,
    title: "Price Comparison Engine",
    description: "Compare prices across Amazon, Flipkart, JioMart, BigBasket, and more. Get price history & drop alerts.",
    color: "from-orange-500 to-red-600",
    details: [
      "Search across 8+ Indian platforms",
      "Price history graph (30/60/90 days)",
      "Price drop alerts via push/email",
      "Best deal finder (price + cashback)",
      "\"Should I buy now?\" AI recommendation"
    ]
  },
  {
    icon: TrendingUp,
    title: "Affordability Advisor",
    description: "Can you afford this purchase? Get EMI options, alternative suggestions, and budget impact analysis.",
    color: "from-purple-500 to-pink-600",
    details: [
      "Check against current balance/income",
      "EMI calculator with interest rates",
      "Similar product suggestions at lower price",
      "Impact on monthly budget visualization",
      "AI-powered financial recommendation"
    ]
  },
  {
    icon: Package,
    title: "Asset Tracker",
    description: "Track your net worth: OLX listings, salary, gold, stocks, mutual funds, and all physical assets.",
    color: "from-amber-500 to-yellow-600",
    details: [
      "Physical assets with auto-depreciation",
      "OLX listing monitoring (price changes, views)",
      "Live gold/stock/MF price integration",
      "Variable assets (salary, freelance pipeline)",
      "Net worth = Assets - Liabilities dashboard"
    ]
  },
  {
    icon: ExternalLink,
    title: "Shopping Hub",
    description: "Quick access to Flipkart, Amazon, Swiggy, Netflix, OLX & more with affiliate redirect links.",
    color: "from-cyan-500 to-blue-600",
    details: [
      "Redirect links to 15+ platforms",
      "Category tabs: Shopping, Food, Entertainment, Bills",
      "Deep links for mobile apps",
      "Click tracking & analytics",
      "Deals of the Day aggregation"
    ]
  },
];

const TECH_FRONTEND = [
  { name: "React 18+ (Vite)", purpose: "UI Framework", cost: "FREE", icon: "⚛️" },
  { name: "TypeScript", purpose: "Type Safety", cost: "FREE", icon: "📘" },
  { name: "Tailwind CSS 4", purpose: "Styling", cost: "FREE", icon: "🎨" },
  { name: "shadcn/ui", purpose: "UI Components", cost: "FREE", icon: "🧩" },
  { name: "Zustand", purpose: "State Management", cost: "FREE", icon: "🐻" },
  { name: "TanStack Query", purpose: "Data Fetching", cost: "FREE", icon: "🔄" },
  { name: "Recharts", purpose: "Charts/Graphs", cost: "FREE", icon: "📊" },
  { name: "React Hook Form + Zod", purpose: "Forms & Validation", cost: "FREE", icon: "📝" },
  { name: "Framer Motion", purpose: "Animations", cost: "FREE", icon: "✨" },
];

const TECH_BACKEND = [
  { name: "Node.js 20+", purpose: "Runtime", cost: "FREE", icon: "🟢" },
  { name: "Hono.js", purpose: "API Framework", cost: "FREE", icon: "🔥" },
  { name: "Supabase Auth", purpose: "Authentication", cost: "FREE (50K MAU)", icon: "🔐" },
  { name: "Drizzle ORM", purpose: "Database ORM", cost: "FREE", icon: "💧" },
  { name: "BullMQ + Redis", purpose: "Background Jobs", cost: "FREE", icon: "📋" },
  { name: "Cloudflare Workers", purpose: "Edge Computing", cost: "FREE (100K/day)", icon: "⚡" },
];

const TECH_INFRA = [
  { name: "Supabase PostgreSQL", purpose: "Primary Database", cost: "FREE (500MB)", icon: "🐘" },
  { name: "Upstash Redis", purpose: "Cache Layer", cost: "FREE (10K/day)", icon: "🔴" },
  { name: "Cloudflare R2", purpose: "File Storage", cost: "FREE (10GB)", icon: "📦" },
  { name: "Cloudflare Pages", purpose: "Frontend Hosting", cost: "FREE", icon: "🌐" },
  { name: "Railway.app", purpose: "Backend Hosting", cost: "FREE (500hrs)", icon: "🚂" },
  { name: "GitHub Actions", purpose: "CI/CD", cost: "FREE", icon: "🔧" },
  { name: "Sentry", purpose: "Error Monitoring", cost: "FREE", icon: "🐛" },
  { name: "Google Gemini API", purpose: "AI/LLM Engine", cost: "FREE (60 RPM)", icon: "🤖" },
];

const SECURITY_LAYERS = [
  {
    title: "Authentication & Authorization",
    icon: Lock,
    color: "border-red-500",
    items: [
      "Supabase Auth (battle-tested, open-source)",
      "JWT tokens (15 min access, 7 day refresh)",
      "Google OAuth 2.0 (PKCE flow)",
      "Phone OTP via MSG91",
      "Row Level Security (RLS) on ALL tables",
      "Multi-factor authentication (TOTP)"
    ]
  },
  {
    title: "Data Encryption",
    icon: Shield,
    color: "border-orange-500",
    items: [
      "AES-256 encryption for sensitive fields",
      "TLS 1.3 everywhere (in transit)",
      "bcrypt + salt (12 rounds) for passwords",
      "Client-side encryption for sensitive inputs",
      "Zero-knowledge architecture for financial data"
    ]
  },
  {
    title: "Infrastructure Security",
    icon: Server,
    color: "border-yellow-500",
    items: [
      "Cloudflare WAF (Web Application Firewall)",
      "DDoS protection (Cloudflare free tier)",
      "Rate limiting (100 req/min per user)",
      "Bot protection (Cloudflare Turnstile — FREE)",
      "CSP, CORS, CSRF, XSS prevention"
    ]
  },
  {
    title: "API Security",
    icon: Globe,
    color: "border-green-500",
    items: [
      "API key rotation every 90 days",
      "Request signing (HMAC-SHA256)",
      "Zod validation on every endpoint",
      "Pagination limits (max 100 items)",
      "Generic error messages (no stack traces)"
    ]
  },
  {
    title: "Compliance & Privacy",
    icon: FileText,
    color: "border-blue-500",
    items: [
      "RBI Data Localization compliance",
      "GDPR-ready (data export, deletion)",
      "Audit logs for all financial operations",
      "Privacy-first analytics (no cookies)",
      "Right to deletion (full account purge)"
    ]
  },
];

const ROADMAP_PHASES = [
  {
    phase: "Phase 1",
    title: "MVP Foundation",
    weeks: "Weeks 1-4",
    color: "from-blue-500 to-indigo-600",
    tasks: [
      "Project scaffolding (Vite + React + Tailwind)",
      "Supabase setup (DB, Auth, RLS)",
      "Backend setup (Hono.js + Drizzle)",
      "Authentication (Google OAuth + Email)",
      "Task list management (CRUD)",
      "Expense & income tracker",
      "Dashboard with basic charts",
      "CI/CD pipeline"
    ]
  },
  {
    phase: "Phase 2",
    title: "Price Engine & Shopping",
    weeks: "Weeks 5-8",
    color: "from-purple-500 to-pink-600",
    tasks: [
      "Amazon PA-API integration",
      "Flipkart API integration",
      "Product search & comparison UI",
      "Redis caching layer",
      "Background price scraper (BullMQ)",
      "Price history tracking & charts",
      "Affordability checker + EMI calculator",
      "Shopping hub with redirect links"
    ]
  },
  {
    phase: "Phase 3",
    title: "AI & Assets",
    weeks: "Weeks 9-12",
    color: "from-emerald-500 to-teal-600",
    tasks: [
      "Asset CRUD (physical, financial, variable)",
      "Net worth calculator & dashboard",
      "Gold/Stock price API integration",
      "OLX listing tracker",
      "Gemini AI integration",
      "Purchase advisor AI agent",
      "Budget optimization suggestions",
      "PWA setup (offline support)"
    ]
  },
  {
    phase: "Phase 4",
    title: "Polish & Launch",
    weeks: "Weeks 13-16",
    color: "from-amber-500 to-orange-600",
    tasks: [
      "Security audit & penetration testing",
      "Performance optimization (Lighthouse > 90)",
      "Load testing with k6",
      "Beta testing (50 users)",
      "Bug fixes & polish",
      "SEO optimization",
      "Marketing landing page",
      "🚀 PUBLIC LAUNCH"
    ]
  },
];

const COST_TABLE = [
  {
    phase: "MVP (0-1K users)",
    monthly: "~₹42",
    items: [
      { service: "Cloudflare Pages", cost: "₹0" },
      { service: "Supabase Free", cost: "₹0" },
      { service: "Upstash Redis Free", cost: "₹0" },
      { service: "Railway Free", cost: "₹0" },
      { service: "Domain (.in)", cost: "~₹42/mo" },
    ]
  },
  {
    phase: "Growth (1K-10K users)",
    monthly: "~₹3,000",
    items: [
      { service: "Supabase Pro", cost: "~₹2,100" },
      { service: "Railway Hobby", cost: "~₹420" },
      { service: "Upstash Pay-as-go", cost: "~₹200" },
      { service: "SMS (OTP)", cost: "~₹150" },
      { service: "Cloudflare R2", cost: "~₹100" },
    ]
  },
  {
    phase: "Scale (10K-100K users)",
    monthly: "~₹15,000",
    items: [
      { service: "Supabase Pro+", cost: "~₹5,000" },
      { service: "Railway Team", cost: "~₹2,500" },
      { service: "Redis Pro", cost: "~₹2,000" },
      { service: "SMS/Notifications", cost: "~₹2,000" },
      { service: "Monitoring", cost: "~₹2,000" },
    ]
  },
];

const PROMPTS_DATA = [
  {
    id: 1,
    title: "Generate Supabase Schema",
    description: "Complete PostgreSQL schema with RLS, indexes, and migrations",
    prompt: `Create a complete Supabase PostgreSQL schema for a personal finance app with these tables:
- users (id, email, phone, name, avatar_url, encrypted_pin, created_at, updated_at)
- task_lists (id, user_id, title, type ENUM grocery/bills/daily/custom, is_recurring, recurrence_pattern, due_date, status, created_at)
- task_items (id, list_id, name, quantity, unit, estimated_price, actual_price, is_purchased, category, platform_link, purchased_at, created_at)
- expenses (id, user_id, amount, category, sub_category, description, date, payment_method ENUM cash/upi/credit/debit, receipt_url, is_recurring, task_item_id nullable, created_at)
- incomes (id, user_id, amount, source, type ENUM salary/freelance/rental/investment/bonus/other, is_recurring, recurrence_pattern, date, created_at)
- assets (id, user_id, name, type ENUM physical/financial/variable, category, current_value, purchase_value, purchase_date, platform, external_link, depreciation_rate, notes, last_updated, created_at)
- products (id, name, category, image_url, description, created_at)
- product_prices (id, product_id, platform ENUM, price, mrp, discount_percent, cashback, url, in_stock, last_scraped)
- price_history (id, product_id, platform, price, recorded_at)
- price_alerts (id, user_id, product_id, target_price, is_active, triggered_at, created_at)
- user_settings (id, user_id, currency default INR, theme, notification_preferences JSONB, monthly_budget_limit)

Include: All FK constraints, indexes, RLS policies, enum types, UUID PKs.`
  },
  {
    id: 2,
    title: "Generate Backend API",
    description: "Complete Hono.js backend with auth, CRUD, and price engine",
    prompt: `Create a complete Hono.js backend API in TypeScript with:
1. Project structure with routes, services, middleware, workers
2. Auth middleware using Supabase JWT verification
3. Rate limiting middleware (100 req/min per user)
4. Security headers middleware
5. CORS configuration
6. Full CRUD routes for: tasks, expenses, incomes, assets
7. Price comparison route that fans out to multiple platform APIs
8. Affordability check endpoint
9. Error handling with proper HTTP status codes
10. Zod validation on all inputs
11. Drizzle ORM integration
12. Background worker setup for price scraping (every 6 hours)
Tech: Hono.js, Drizzle ORM, Zod, Supabase client, BullMQ`
  },
  {
    id: 3,
    title: "Generate Frontend Dashboard",
    description: "React dashboard with charts, widgets, and dark mode",
    prompt: `Create a React + TypeScript + Tailwind CSS dashboard with:
1. Responsive sidebar navigation (collapsible on mobile)
2. Dashboard page with:
   - Monthly income vs expense chart (bar chart)
   - Category-wise expense breakdown (donut chart)
   - Recent transactions list
   - Quick action buttons (add expense, add income, new task list)
   - Net worth card
   - Budget progress bar
   - Today's tasks widget
   - Price alerts widget
3. Use shadcn/ui components
4. Use Recharts for charts
5. Use Zustand for state management
6. Use TanStack Query for data fetching
7. Dark mode support
8. Skeleton loading states
9. Empty states with illustrations`
  },
  {
    id: 4,
    title: "Generate Price Comparison Engine",
    description: "Multi-platform price scraper with caching and alerts",
    prompt: `Build a price comparison service in Node.js/TypeScript that:
1. Takes a product search query
2. Searches across: Amazon (PA-API), Flipkart (Affiliate API), JioMart (scrape), BigBasket (scrape)
3. Normalizes results into unified format: { platform, name, price, mrp, discount, cashback, effectivePrice, url, image, inStock, deliveryDays, rating }
4. Caches results in Redis (6-hour TTL)
5. Stores price history in PostgreSQL
6. Generates affiliate redirect URLs
7. Calculates best deal (price + cashback + delivery)
8. Price history graph data
9. Price drop alerts
10. Puppeteer with stealth plugin for scraping
11. Rate limiting and retries
12. Graceful error handling per platform`
  },
  {
    id: 5,
    title: "Generate Affordability Engine",
    description: "Financial analysis with EMI calculator and AI recommendations",
    prompt: `Create an affordability analysis engine in TypeScript:
INPUT: Product price, monthly income, fixed expenses, variable expenses (3mo avg), savings, existing EMIs
PROCESSING:
1. Disposable income = income - fixed - avg variable
2. Check if product price < disposable income
3. Calculate EMI options (3,6,9,12,18,24 months) using EMI = P × r × (1+r)^n / ((1+r)^n - 1)
4. Check if EMI fits within disposable income
5. Query alternative products (same category, lower price)
6. Calculate budget impact
7. Generate AI recommendation via Gemini API
OUTPUT: affordability status, bestEmiOption, alternatives, budgetImpact, aiRecommendation`
  },
  {
    id: 6,
    title: "Generate Security Middleware",
    description: "Comprehensive security stack for Hono.js",
    prompt: `Create comprehensive security middleware for Hono.js:
1. Helmet-like headers (CSP, X-Frame-Options, HSTS, etc.)
2. Rate limiter: 100/min auth, 20/min unauth, 5/min login (Upstash Redis)
3. CORS whitelist with credentials
4. Input sanitization (XSS prevention)
5. Supabase JWT auth middleware
6. Audit logger for financial mutations
7. AES-256-GCM encryption utility for sensitive fields
8. Request signing (HMAC-SHA256)
9. Max body size: 1MB
10. Generic error messages in production`
  },
];

// ============= COMPONENTS =============

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-all"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 h-full">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
        >
          {expanded ? "Show less" : "View details"}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-3 space-y-2 overflow-hidden"
            >
              {feature.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function TechTable({ title, data, icon: Icon }: { title: string; data: typeof TECH_FRONTEND; icon: any }) {
  return (
    <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon size={20} className="text-indigo-400" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-indigo-900/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <div>
                <span className="text-white text-sm font-medium">{item.name}</span>
                <span className="text-gray-500 text-xs ml-2">— {item.purpose}</span>
              </div>
            </div>
            <span className="text-emerald-400 text-xs font-medium bg-emerald-900/30 px-2 py-0.5 rounded-full">{item.cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptCard({ prompt }: { prompt: typeof PROMPTS_DATA[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-2xl p-5 hover:border-indigo-500/50 transition-all">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-indigo-400 bg-indigo-900/50 px-2 py-0.5 rounded-full">#{prompt.id}</span>
          <h4 className="text-white font-semibold text-sm">{prompt.title}</h4>
        </div>
        <CopyButton text={prompt.prompt} />
      </div>
      <p className="text-gray-400 text-xs mb-3">{prompt.description}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-indigo-400 text-xs font-medium hover:text-indigo-300 flex items-center gap-1"
      >
        {expanded ? "Hide prompt" : "View prompt"}
        <motion.div animate={{ rotate: expanded ? 180 : 0 }}><ChevronDown size={14} /></motion.div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <pre className="code-block mt-3 text-xs">{prompt.prompt}</pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============= MAIN APP =============

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0f0a2a] text-white">
      {/* Gradient orbs background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-indigo-600/90 backdrop-blur-sm p-2 rounded-lg"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-[#0d0826]/95 backdrop-blur-xl border-r border-indigo-900/50 z-40 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">SmartSpend</h1>
              <span className="text-xs text-indigo-400 font-medium">AI Plan.md</span>
            </div>
          </div>
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl p-4">
            <p className="text-xs text-gray-300 mb-2">Full plan document</p>
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-medium">
              <FileText size={14} />
              plan.md — 1,500+ lines
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Main Content */}
      <main ref={contentRef} className="lg:ml-64 relative z-10">
        {/* Hero / Overview Section */}
        <section id="overview" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
                <Star size={14} className="text-yellow-400" />
                <span className="text-xs font-medium text-indigo-300">FINALIZED PROJECT PLAN</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  SmartSpend AI
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-2 font-light">
                Agentic Personal Finance & Smart Shopping Platform
              </p>
              <p className="text-gray-500 text-sm mb-8 max-w-2xl">
                India-first, AI-powered web app that unifies daily task management, expense tracking, 
                cross-platform price comparison, affordability analysis, and asset tracking — all with 
                bank-grade security and free/affordable infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {[
                { label: "Security", value: "Bank-Grade", icon: Shield, color: "text-red-400" },
                { label: "MVP Cost", value: "₹0/month", icon: IndianRupee, color: "text-emerald-400" },
                { label: "Target", value: "India-First", icon: Globe, color: "text-blue-400" },
                { label: "Timeline", value: "16 Weeks", icon: Clock, color: "text-amber-400" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-xl p-4">
                  <stat.icon size={18} className={`${stat.color} mb-2`} />
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-6"
            >
              <h3 className="text-sm font-bold text-indigo-300 mb-3 flex items-center gap-2">
                <Target size={16} /> ONE-LINE SUMMARY
              </h3>
              <p className="text-gray-200 text-lg font-light italic">
                "SmartSpend AI = <span className="text-indigo-300 font-medium">Todoist</span> + <span className="text-emerald-300 font-medium">Walnut</span> + <span className="text-orange-300 font-medium">PriceHistory</span> + <span className="text-purple-300 font-medium">Groww</span> + <span className="text-pink-300 font-medium">AI Financial Advisor</span> — all in one free, secure, India-first web app."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-2 text-gray-500 text-sm"
            >
              <ArrowRight size={16} className="animate-bounce" />
              Scroll down or use the sidebar to explore the full plan
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Zap}
              title="Core Features"
              subtitle="6 powerful modules that make SmartSpend AI a complete personal finance platform"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <FeatureCard key={i} feature={f} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Server}
              title="System Architecture"
              subtitle="4-layer architecture designed for security, performance, and scalability"
            />
            <div className="space-y-4">
              {[
                { layer: "Client Layer", desc: "React SPA + PWA + Future React Native", color: "border-blue-500", icon: Smartphone, items: ["React 18 SPA (Vite)", "PWA for mobile", "Future: React Native"] },
                { layer: "API Gateway Layer", desc: "Cloudflare CDN + WAF + DDoS Protection", color: "border-purple-500", icon: Cloud, items: ["Cloudflare CDN (global)", "WAF + DDoS protection", "Rate limiting + Bot protection"] },
                { layer: "Backend Layer", desc: "Auth Service + Core API + Background Workers", color: "border-emerald-500", icon: Server, items: ["Supabase Auth Service", "Hono.js Core API", "BullMQ Background Workers"] },
                { layer: "Data Layer", desc: "PostgreSQL + Redis Cache + Object Storage", color: "border-amber-500", icon: Database, items: ["Supabase PostgreSQL", "Upstash Redis Cache", "Cloudflare R2 Storage"] },
              ].map((layer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-[#1a1545]/80 backdrop-blur-sm border-l-4 ${layer.color} rounded-r-xl p-5 flex flex-col md:flex-row md:items-center gap-4`}
                >
                  <div className="flex items-center gap-3 md:w-64 shrink-0">
                    <layer.icon size={20} className="text-indigo-400" />
                    <div>
                      <h4 className="text-white font-bold text-sm">{layer.layer}</h4>
                      <p className="text-gray-500 text-xs">{layer.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item, j) => (
                      <span key={j} className="bg-indigo-900/40 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-800/50">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="techstack" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Code}
              title="Tech Stack"
              subtitle="Carefully selected for maximum value — mostly FREE, always secure"
            />
            <div className="space-y-6">
              <TechTable title="Frontend" data={TECH_FRONTEND} icon={Smartphone} />
              <TechTable title="Backend" data={TECH_BACKEND} icon={Server} />
              <TechTable title="Infrastructure & Services" data={TECH_INFRA} icon={Cloud} />
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Shield}
              title="Security Architecture"
              subtitle="5 layers of defense — bank-grade security is our #1 non-negotiable"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SECURITY_LAYERS.map((layer, i) => {
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-[#1a1545]/80 backdrop-blur-sm border ${layer.color} border-opacity-50 rounded-2xl p-5`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={18} className="text-white" />
                      <h4 className="text-white font-bold text-sm">{layer.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {layer.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-xs">
                          <Lock size={10} className="mt-1 text-indigo-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Database Section */}
        <section id="database" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Database}
              title="Database Design"
              subtitle="11 core tables with full RLS, foreign keys, and optimized indexes"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "users", fields: "id, email, phone, name, avatar", rows: "Core", icon: Users },
                { name: "task_lists", fields: "title, type, recurring, due_date", rows: "Tasks", icon: CheckCircle2 },
                { name: "task_items", fields: "name, qty, est/actual price", rows: "Items", icon: ShoppingCart },
                { name: "expenses", fields: "amount, category, payment_method", rows: "Finance", icon: TrendingDown },
                { name: "incomes", fields: "amount, source, type, recurring", rows: "Finance", icon: TrendingUp },
                { name: "assets", fields: "name, type, current/purchase value", rows: "Assets", icon: Package },
                { name: "products", fields: "name, category, image_url", rows: "Catalog", icon: Search },
                { name: "product_prices", fields: "platform, price, mrp, cashback", rows: "Prices", icon: DollarSign },
                { name: "price_history", fields: "product_id, platform, price, date", rows: "History", icon: BarChart3 },
                { name: "price_alerts", fields: "product_id, target_price, active", rows: "Alerts", icon: Bell },
                { name: "user_settings", fields: "currency, theme, budget_limit", rows: "Config", icon: Layers },
              ].map((table, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-xl p-4 hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <table.icon size={14} className="text-indigo-400" />
                      <code className="text-indigo-300 text-sm font-mono font-bold">{table.name}</code>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">{table.rows}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{table.fields}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-2">
                <Shield size={16} /> Row Level Security (RLS)
              </div>
              <p className="text-gray-400 text-xs">Every table has RLS enabled. Users can only SELECT, INSERT, UPDATE, DELETE their own data. Auth checks use <code className="text-emerald-300">auth.uid() = user_id</code>.</p>
            </div>
          </div>
        </section>

        {/* Price Engine Section */}
        <section id="priceengine" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Search}
              title="Price Comparison Engine"
              subtitle="Background scraping across 8+ Indian platforms with intelligent caching"
            />
            <div className="space-y-5">
              <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <GitBranch size={18} className="text-indigo-400" /> How It Works
                </h3>
                <div className="grid md:grid-cols-5 gap-3">
                  {[
                    { step: "1", title: "Check Cache", desc: "Redis (6hr TTL)", icon: "🔴" },
                    { step: "2", title: "Query DB", desc: "Recent data?", icon: "🐘" },
                    { step: "3", title: "Fan-out", desc: "Parallel API calls", icon: "⚡" },
                    { step: "4", title: "Normalize", desc: "Compare & rank", icon: "📊" },
                    { step: "5", title: "Cache & Return", desc: "Store + respond", icon: "✅" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center mx-auto mb-2 text-lg">
                        {s.icon}
                      </div>
                      <p className="text-white text-xs font-bold">{s.title}</p>
                      <p className="text-gray-500 text-xs">{s.desc}</p>
                      {i < 4 && <ChevronRight size={16} className="text-gray-600 mx-auto mt-2 hidden md:block" />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-xl p-5">
                  <h4 className="text-white font-bold text-sm mb-3">Supported Platforms</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Amazon.in", "Flipkart", "JioMart", "BigBasket", "Swiggy Instamart", "Blinkit", "Myntra", "Meesho"].map((p) => (
                      <div key={p} className="flex items-center gap-2 text-gray-300 text-xs bg-indigo-900/20 px-3 py-2 rounded-lg">
                        <ExternalLink size={12} className="text-indigo-400" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-xl p-5">
                  <h4 className="text-white font-bold text-sm mb-3">Scraping Strategy</h4>
                  <ul className="space-y-2">
                    {[
                      "Priority 1: Official APIs (Amazon, Flipkart)",
                      "Priority 2: RSS feeds where available",
                      "Priority 3: Ethical scraping (respect robots.txt)",
                      "Max 1 request/second per domain",
                      "Cache results for 6 hours minimum",
                      "Affiliate agreements for legal compliance"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Engine Section */}
        <section id="ai" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Cpu}
              title="Agentic AI Decision Engine"
              subtitle="Google Gemini-powered agents for smart financial decisions"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { agent: "Purchase Advisor", desc: "Buy / Wait / EMI / Alternative recommendation based on financial profile", icon: ShoppingCart, color: "from-blue-500 to-indigo-600" },
                { agent: "Budget Optimizer", desc: "Analyze spending patterns and suggest category-wise optimizations", icon: PieChart, color: "from-emerald-500 to-teal-600" },
                { agent: "Price Predictor", desc: "Predict future prices based on history and upcoming sale events", icon: TrendingUp, color: "from-purple-500 to-pink-600" },
                { agent: "Savings Recommender", desc: "Personalized savings plan based on income, expenses, and goals", icon: Target, color: "from-amber-500 to-orange-600" },
                { agent: "EMI Calculator", desc: "Find optimal EMI tenure and calculate total interest cost", icon: CreditCard, color: "from-red-500 to-rose-600" },
                { agent: "Net Worth Analyzer", desc: "Track and project net worth growth with asset optimization tips", icon: BarChart3, color: "from-cyan-500 to-blue-600" },
              ].map((agent, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-xl p-5 hover:border-indigo-500/50 transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center mb-3`}>
                    <agent.icon size={20} className="text-white" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{agent.agent}</h4>
                  <p className="text-gray-400 text-xs">{agent.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-4 flex items-center gap-3">
              <Sparkles size={20} className="text-yellow-400 shrink-0" />
              <p className="text-gray-300 text-sm">
                Powered by <span className="text-indigo-300 font-bold">Google Gemini API</span> — Free tier: 60 requests/min, 1,500 requests/day. Responses cached to minimize usage.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Calendar}
              title="Development Roadmap"
              subtitle="16-week plan from setup to public launch — 4 clear phases"
            />
            <div className="space-y-6">
              {ROADMAP_PHASES.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-2xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${phase.color} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>
                      <Rocket size={14} />
                      {phase.phase}: {phase.title}
                    </div>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock size={14} /> {phase.weeks}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.tasks.map((task, j) => (
                      <div key={j} className="flex items-center gap-2 text-gray-300 text-sm py-1">
                        <div className="w-5 h-5 rounded border border-indigo-700/50 flex items-center justify-center shrink-0">
                          {task.includes("🚀") ? "🚀" : <div className="w-2 h-2 rounded-full bg-indigo-600/50" />}
                        </div>
                        {task}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section id="costs" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={IndianRupee}
              title="Cost Estimation"
              subtitle="Start at ₹0/month — scale affordably as you grow"
            />
            <div className="grid md:grid-cols-3 gap-5">
              {COST_TABLE.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`bg-[#1a1545]/80 backdrop-blur-sm border rounded-2xl p-6 ${i === 0 ? "border-emerald-500/50" : "border-indigo-900/50"}`}
                >
                  {i === 0 && (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded-full mb-3 inline-block">
                      RECOMMENDED START
                    </span>
                  )}
                  <h3 className="text-white font-bold text-lg mb-1">{tier.phase}</h3>
                  <p className={`text-3xl font-black mb-4 ${i === 0 ? "text-emerald-400" : "text-indigo-400"}`}>{tier.monthly}<span className="text-sm font-normal text-gray-500">/month</span></p>
                  <div className="space-y-2">
                    {tier.items.map((item, j) => (
                      <div key={j} className="flex items-center justify-between py-1.5 border-b border-gray-800/50">
                        <span className="text-gray-400 text-xs">{item.service}</span>
                        <span className="text-gray-300 text-xs font-medium">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Prompts Section */}
        <section id="prompts" className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={Terminal}
              title="Copy-Paste Ready AI Prompts"
              subtitle="6 agentic prompts to kickstart development — click to copy"
            />
            <div className="grid md:grid-cols-2 gap-4">
              {PROMPTS_DATA.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon={AlertTriangle}
              title="Risk Assessment"
              subtitle="Key risks identified with mitigation strategies"
            />
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { risk: "API rate limits hit", prob: "HIGH", impact: "MEDIUM", fix: "Aggressive caching, request queuing" },
                { risk: "Scraping blocked", prob: "HIGH", impact: "HIGH", fix: "Use official APIs first, rotate user agents" },
                { risk: "Security breach", prob: "LOW", impact: "CRITICAL", fix: "Multi-layer security, encryption, audit" },
                { risk: "Supabase free tier limits", prob: "MEDIUM", impact: "MEDIUM", fix: "Optimize queries, upgrade early" },
                { risk: "User adoption", prob: "HIGH", impact: "HIGH", fix: "Focus on UX, solve real pain points" },
                { risk: "Regulatory (RBI)", prob: "LOW", impact: "HIGH", fix: "Consult fintech lawyer, AA framework" },
              ].map((r, i) => (
                <div key={i} className="bg-[#1a1545]/80 backdrop-blur-sm border border-indigo-900/50 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle size={16} className={r.impact === "CRITICAL" ? "text-red-400" : r.impact === "HIGH" ? "text-orange-400" : "text-yellow-400"} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-sm font-bold">{r.risk}</span>
                    </div>
                    <div className="flex gap-2 mb-1">
                      <span className={`text-xs px-1.5 py-0.5 rounded ${r.prob === "HIGH" ? "bg-red-900/30 text-red-400" : r.prob === "MEDIUM" ? "bg-yellow-900/30 text-yellow-400" : "bg-green-900/30 text-green-400"}`}>P: {r.prob}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${r.impact === "CRITICAL" ? "bg-red-900/50 text-red-300" : r.impact === "HIGH" ? "bg-orange-900/30 text-orange-400" : "bg-yellow-900/30 text-yellow-400"}`}>I: {r.impact}</span>
                    </div>
                    <p className="text-gray-500 text-xs">→ {r.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 rounded-3xl p-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 animate-float">
                <Rocket size={32} />
              </div>
              <h2 className="text-3xl font-black text-white mb-3">Plan Finalized ✅</h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                This plan.md document is your single source of truth. All 10 copy-paste prompts, 
                complete architecture, security specs, database schema, and 16-week roadmap are ready.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 px-5 py-2.5 rounded-xl text-sm font-medium">
                  <CheckCircle2 size={16} /> plan.md — 1,500+ lines
                </div>
                <div className="flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 px-5 py-2.5 rounded-xl text-sm font-medium">
                  <Terminal size={16} /> 6 AI Prompts Ready
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-8">SmartSpend AI — Built with 🇮🇳 for India</p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-12 py-8 border-t border-indigo-900/30">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Sparkles size={12} />
              </div>
              <span className="text-gray-500 text-sm">SmartSpend AI — Project Plan Document</span>
            </div>
            <p className="text-gray-600 text-xs">v1.0.0 • Finalized 2026 • Status: Ready for Development</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600/30 flex items-center justify-center">
          <Icon size={16} className="text-indigo-400" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-white">{title}</h2>
      </div>
      <p className="text-gray-400 text-sm ml-11">{subtitle}</p>
    </motion.div>
  );
}
