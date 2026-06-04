# 🧠 PLAN.MD — SmartSpend AI: Agentic Personal Finance & Smart Shopping Platform

> **Version:** 1.0.0-draft  
> **Status:** FINALIZED FOR DEVELOPMENT  
> **Date:** 2026  
> **Target Market:** India-first, Global-ready  
> **Codename:** SmartSpend AI

---

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [What We Want to Achieve](#3-what-we-want-to-achieve)
4. [Core Features Breakdown](#4-core-features-breakdown)
5. [System Architecture](#5-system-architecture)
6. [Tech Stack — Final Selection](#6-tech-stack--final-selection)
7. [Frontend Architecture](#7-frontend-architecture)
8. [Backend Architecture](#8-backend-architecture)
9. [Database Design](#9-database-design)
10. [Security Architecture](#10-security-architecture)
11. [API & Integration Layer](#11-api--integration-layer)
12. [Price Comparison Engine](#12-price-comparison-engine)
13. [Payment & Balance Monitoring](#13-payment--balance-monitoring)
14. [Asset Tracking System](#14-asset-tracking-system)
15. [AI/Agentic Decision Engine](#15-aiagentic-decision-engine)
16. [Deployment Strategy](#16-deployment-strategy)
17. [Development Phases & Roadmap](#17-development-phases--roadmap)
18. [Cost Estimation](#18-cost-estimation)
19. [Prompt-Ready Agentic AI Templates](#19-prompt-ready-agentic-ai-templates)
20. [Risk Assessment](#20-risk-assessment)
21. [Success Metrics](#21-success-metrics)

---

## 1. EXECUTIVE SUMMARY

**SmartSpend AI** is an India-first, agentic AI-powered personal finance web application that combines:

- ✅ Daily task management (groceries, dailies, bills)
- ✅ Real-time price ecosystem tracking
- ✅ Expense monitoring & income vs. expense analytics
- ✅ Cross-platform product comparison (Flipkart, Amazon, Swiggy, Netflix, etc.)
- ✅ Affordability engine (EMI suggestions, alternative product recommendations)
- ✅ UPI / Credit Card / Debit Card integration (optional real-time balance monitoring)
- ✅ Asset tracking (OLX listings, salary, investments as variable assets)
- ✅ Redirect-based affiliate/shopping links to major Indian e-commerce platforms

All built with **highest security standards**, using **free/affordable backend solutions**.

---

## 2. PROBLEM STATEMENT

Indian consumers lack a **single unified platform** that:

- Tracks daily expenses alongside income
- Compares prices across multiple e-commerce platforms in real-time
- Advises whether a purchase is affordable or suggests alternatives (EMI, cheaper products)
- Monitors assets (salary, OLX listings, investments) holistically
- Provides actionable financial intelligence without expensive subscriptions

**Current tools are fragmented:** You need separate apps for budgeting (Walnut), price comparison (PriceHistory), task management (Todoist), and asset tracking (Excel sheets).

**SmartSpend AI unifies everything into one secure, intelligent platform.**

---

## 3. WHAT WE WANT TO ACHIEVE

### 3.1 Primary Goals

| # | Goal | Priority |
|---|------|----------|
| 1 | Reliable, secure web application | 🔴 CRITICAL |
| 2 | Daily task management (groceries, bills, dailies) | 🔴 CRITICAL |
| 3 | Price ecosystem tracking & comparison | 🔴 CRITICAL |
| 4 | Income vs. Expense dashboard | 🔴 CRITICAL |
| 5 | Affordability engine (can you buy this?) | 🟡 HIGH |
| 6 | EMI / alternative product suggestions | 🟡 HIGH |
| 7 | Redirect links to Flipkart, Amazon, Netflix, Swiggy, etc. | 🟡 HIGH |
| 8 | Asset tracking (OLX, salary, investments) | 🟡 HIGH |
| 9 | UPI/Credit/Debit card integration | 🟢 OPTIONAL |
| 10 | Real-time balance monitoring | 🟢 OPTIONAL |

### 3.2 Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Security | Bank-grade encryption (AES-256, TLS 1.3) |
| Availability | 99.9% uptime |
| Response Time | < 200ms for UI, < 2s for price comparison |
| Cost | Free tier for MVP, < ₹5,000/month at scale |
| Scalability | Support 10K → 1M users |
| Compliance | RBI data guidelines, GDPR-ready |

---

## 4. CORE FEATURES BREAKDOWN

### 4.1 📝 Task Management Module

```
FEATURE: Daily Task Tracker
├── Create daily shopping lists (groceries, dailies, bills)
├── Recurring task templates (weekly groceries, monthly bills)
├── Smart categorization (Food, Transport, Entertainment, Bills)
├── Mark as purchased with actual price entry
├── Auto-calculate total spend per list
├── Share lists with family members
└── Location-based reminders (near grocery store = reminder)
```

### 4.2 💰 Expense & Income Tracker

```
FEATURE: Financial Dashboard
├── Income Sources
│   ├── Primary salary (monthly/variable)
│   ├── Freelance income
│   ├── Rental income
│   ├── Investment returns
│   └── Side hustles
├── Expense Categories
│   ├── Fixed (Rent, EMI, Insurance, Subscriptions)
│   ├── Variable (Groceries, Transport, Dining)
│   ├── Discretionary (Shopping, Entertainment)
│   └── Emergency
├── Analytics
│   ├── Monthly income vs expense ratio
│   ├── Category-wise breakdown (pie/bar charts)
│   ├── Trend analysis (3/6/12 month)
│   ├── Savings rate calculator
│   └── Budget alerts & notifications
└── Reports
    ├── Monthly financial summary
    ├── Tax-ready expense reports
    └── Export to CSV/PDF
```

### 4.3 🔍 Price Comparison Engine

```
FEATURE: Cross-Platform Price Tracker
├── Search product across platforms
│   ├── Amazon.in
│   ├── Flipkart
│   ├── Myntra
│   ├── JioMart
│   ├── BigBasket
│   ├── Swiggy Instamart
│   ├── Blinkit
│   └── Meesho
├── Price History Graph (30/60/90 days)
├── Price Drop Alerts
├── Best Deal Finder (lowest price + cashback)
├── Redirect links to purchase (affiliate integration)
├── Coupon/Offer aggregation
└── "Should I buy now?" AI recommendation
```

### 4.4 🧮 Affordability Engine

```
FEATURE: Purchase Advisor
├── Input: Product you want to buy
├── Check against current balance/income
├── Decision Tree:
│   ├── ✅ AFFORDABLE → "Go ahead, here's the best deal"
│   ├── ⚠️ STRETCH → "You can, but it impacts savings by X%"
│   ├── 🔄 EMI OPTION → "Available EMIs: 3/6/9/12 months at X%"
│   ├── 🔽 ALTERNATIVE → "Similar products at lower price"
│   └── ❌ NOT AFFORDABLE → "Save ₹X/month to buy in Y months"
├── EMI Calculator (with interest)
├── Impact on monthly budget visualization
└── Comparable product suggestions with ratings
```

### 4.5 📦 Asset Tracker

```
FEATURE: Net Worth Dashboard
├── Physical Assets
│   ├── OLX/Quikr listed items (track resale value)
│   ├── Vehicles (depreciating asset tracking)
│   ├── Electronics & gadgets
│   └── Jewelry/Gold (live gold price API)
├── Financial Assets
│   ├── Bank balances (manual/API)
│   ├── Mutual Funds (via MFCentral API)
│   ├── Stocks (NSE/BSE live)
│   ├── Fixed Deposits
│   ├── PPF/EPF
│   └── Crypto (optional)
├── Variable Assets
│   ├── Salary (current + projected)
│   ├── Freelance pipeline
│   └── Expected bonuses
├── Liabilities
│   ├── Loans (Home, Car, Personal, Education)
│   ├── Credit card dues
│   └── Pending EMIs
└── Net Worth = Total Assets - Total Liabilities
```

### 4.6 🔗 Platform Redirects & Integrations

```
FEATURE: Smart Shopping Hub
├── E-Commerce
│   ├── Amazon.in → affiliate redirect
│   ├── Flipkart → affiliate redirect
│   ├── Myntra → affiliate redirect
│   ├── Meesho → redirect
│   └── JioMart → redirect
├── Food & Grocery
│   ├── Swiggy / Swiggy Instamart
│   ├── Zomato
│   ├── Blinkit
│   ├── BigBasket
│   └── Zepto
├── Entertainment & Subscriptions
│   ├── Netflix
│   ├── Amazon Prime
│   ├── Hotstar
│   ├── Spotify
│   └── YouTube Premium
├── Bills & Recharges
│   ├── Electricity (state-wise)
│   ├── Mobile recharge
│   ├── DTH
│   └── Gas
└── Resale / Second-hand
    ├── OLX
    ├── Quikr
    └── Facebook Marketplace
```

---

## 5. SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  React SPA   │  │  PWA Mobile  │  │  (Future)    │              │
│  │  + Tailwind  │  │  Web App     │  │  React Native│              │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘              │
│         └─────────────────┼─────────────────┘                       │
│                           │ HTTPS/WSS                                │
├───────────────────────────┼─────────────────────────────────────────┤
│                    API GATEWAY LAYER                                  │
│  ┌────────────────────────┴────────────────────────────┐            │
│  │          Cloudflare (CDN + WAF + DDoS)              │            │
│  │          + Rate Limiting + Bot Protection            │            │
│  └────────────────────────┬────────────────────────────┘            │
├───────────────────────────┼─────────────────────────────────────────┤
│                    BACKEND LAYER                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐          │
│  │  Auth Service│  │  Core API    │  │  Price Engine    │          │
│  │  (Supabase)  │  │  (Node.js)   │  │  (Background     │          │
│  │              │  │  Express/Hono │  │   Workers)       │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────────┘          │
│         │                 │                  │                       │
├─────────┼─────────────────┼──────────────────┼──────────────────────┤
│                    DATA LAYER                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐          │
│  │  Supabase    │  │  Redis       │  │  S3/R2 Storage   │          │
│  │  PostgreSQL  │  │  (Upstash)   │  │  (Cloudflare R2) │          │
│  └──────────────┘  └──────────────┘  └──────────────────┘          │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                    EXTERNAL SERVICES                                 │
│  ┌────────┐ ┌────────┐ ┌─────────┐ ┌────────┐ ┌──────────┐        │
│  │Scraper │ │Payment │ │Gold API │ │Stock   │ │AI/LLM    │        │
│  │APIs    │ │Gateway │ │         │ │Market  │ │(Gemini)  │        │
│  └────────┘ └────────┘ └─────────┘ └────────┘ └──────────┘        │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 6. TECH STACK — FINAL SELECTION

### 6.1 Frontend Stack

| Component | Technology | Cost | Justification |
|-----------|-----------|------|---------------|
| **Framework** | React 18+ (Vite) | FREE | Industry standard, huge ecosystem |
| **Language** | TypeScript | FREE | Type safety, fewer bugs |
| **Styling** | Tailwind CSS 4 | FREE | Rapid UI development |
| **UI Components** | shadcn/ui | FREE | Beautiful, accessible, customizable |
| **State Management** | Zustand | FREE | Lightweight, simple |
| **Data Fetching** | TanStack Query (React Query) | FREE | Caching, background refetch |
| **Charts** | Recharts / Chart.js | FREE | Financial dashboards |
| **Forms** | React Hook Form + Zod | FREE | Validation, performance |
| **Routing** | React Router v7 | FREE | SPA navigation |
| **PWA** | Vite PWA Plugin | FREE | Mobile-like experience |
| **Icons** | Lucide React | FREE | Consistent icon set |
| **Animations** | Framer Motion | FREE | Smooth transitions |

### 6.2 Backend Stack

| Component | Technology | Cost | Justification |
|-----------|-----------|------|---------------|
| **Runtime** | Node.js 20+ | FREE | JavaScript everywhere |
| **Framework** | Hono.js | FREE | Ultra-fast, edge-ready |
| **Alternative** | Express.js | FREE | If Hono is too new for team |
| **API Style** | REST + WebSocket | FREE | Real-time updates |
| **Validation** | Zod | FREE | Shared schemas with frontend |
| **ORM** | Drizzle ORM | FREE | Type-safe, lightweight |
| **Auth** | Supabase Auth | FREE (50K MAU) | Google/Phone OTP/Email |
| **Background Jobs** | BullMQ + Redis | FREE | Price scraping cron jobs |
| **Serverless Option** | Cloudflare Workers | FREE (100K/day) | Edge computing |

### 6.3 Database & Storage

| Component | Technology | Cost | Justification |
|-----------|-----------|------|---------------|
| **Primary DB** | Supabase PostgreSQL | FREE (500MB) | Relational, RLS, real-time |
| **Cache** | Upstash Redis | FREE (10K/day) | Session, price cache |
| **File Storage** | Cloudflare R2 | FREE (10GB) | Receipt images, exports |
| **Search** | PostgreSQL Full-Text | FREE | Product search |
| **Backup DB (Scale)** | PlanetScale / Neon | FREE tier | If Supabase limits hit |

### 6.4 DevOps & Infrastructure

| Component | Technology | Cost | Justification |
|-----------|-----------|------|---------------|
| **Frontend Hosting** | Cloudflare Pages | FREE | Global CDN, fast |
| **Backend Hosting** | Railway.app / Render | FREE (500hrs) | Container hosting |
| **Alternative Host** | Fly.io | FREE (3 shared VMs) | If Railway limits hit |
| **Domain** | Cloudflare Registrar | ~₹700/year | Cheapest .com domains |
| **SSL** | Cloudflare (auto) | FREE | TLS 1.3 |
| **CI/CD** | GitHub Actions | FREE | Auto deploy on push |
| **Monitoring** | Sentry (free tier) | FREE | Error tracking |
| **Analytics** | Plausible (self-host) | FREE | Privacy-friendly |
| **Uptime** | BetterStack (free) | FREE | Uptime monitoring |

### 6.5 External APIs & Services

| Service | API/Source | Cost | Purpose |
|---------|-----------|------|---------|
| **Price Comparison** | Custom scraper + APIs | FREE | Background price fetching |
| **Amazon Prices** | Amazon Product Advertising API | FREE | Product data + affiliate |
| **Flipkart Prices** | Flipkart Affiliate API | FREE | Product data + affiliate |
| **Gold Prices** | GoldAPI.io / MetalpriceAPI | FREE tier | Live gold rates |
| **Stock Prices** | Yahoo Finance API (unofficial) | FREE | NSE/BSE data |
| **Currency** | ExchangeRate-API | FREE (1500/mo) | Currency conversion |
| **AI/LLM** | Google Gemini API | FREE (60 RPM) | Smart recommendations |
| **SMS/OTP** | MSG91 / Twilio | Pay-per-use | Phone auth (₹0.15/SMS) |
| **UPI Integration** | Razorpay / Cashfree | 0% on UPI | Payment gateway |
| **Email** | Resend | FREE (100/day) | Transactional emails |

---

## 7. FRONTEND ARCHITECTURE

### 7.1 Folder Structure

```
src/
├── app/                          # App-level config
│   ├── App.tsx                   # Root component
│   ├── router.tsx                # Route definitions
│   └── providers.tsx             # Context providers
├── assets/                       # Static assets
├── components/                   # Shared UI components
│   ├── ui/                       # shadcn/ui primitives
│   ├── layout/                   # Header, Sidebar, Footer
│   ├── charts/                   # Chart components
│   └── shared/                   # Common components
├── features/                     # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── widgets/
│   ├── tasks/                    # Daily task management
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── store/
│   ├── expenses/                 # Income & expense tracker
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── store/
│   ├── price-compare/            # Price comparison engine
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   ├── affordability/            # Purchase advisor
│   │   ├── components/
│   │   ├── hooks/
│   │   └── engine/
│   ├── assets/                   # Asset tracker
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   └── shopping-hub/             # Redirect links
│       ├── components/
│       └── data/
├── hooks/                        # Global custom hooks
├── lib/                          # Utility libraries
│   ├── api.ts                    # API client (axios/fetch)
│   ├── supabase.ts               # Supabase client
│   └── utils.ts                  # Helper functions
├── stores/                       # Global Zustand stores
│   ├── authStore.ts
│   ├── themeStore.ts
│   └── notificationStore.ts
├── types/                        # Global TypeScript types
└── styles/                       # Global styles
```

### 7.2 Key Pages / Routes

```
/                        → Landing page (public)
/login                   → Login (Google, Phone OTP, Email)
/register                → Registration
/dashboard               → Main dashboard (protected)
/tasks                   → Daily task manager
/tasks/new               → Create new shopping list
/expenses                → Expense tracker
/expenses/add            → Add expense/income
/compare                 → Price comparison search
/compare/:productId      → Product comparison detail
/advisor                 → Affordability checker
/assets                  → Asset tracker dashboard
/assets/add              → Add new asset
/shop                    → Shopping hub (redirect links)
/settings                → User settings
/profile                 → User profile
/reports                 → Financial reports
```

### 7.3 State Management Strategy

```typescript
// Zustand Store Example — Expense Store
interface ExpenseStore {
  // State
  expenses: Expense[];
  incomes: Income[];
  categories: Category[];
  filters: FilterOptions;
  
  // Actions
  addExpense: (expense: NewExpense) => Promise<void>;
  addIncome: (income: NewIncome) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
  setFilters: (filters: Partial<FilterOptions>) => void;
  
  // Computed
  totalExpenses: () => number;
  totalIncome: () => number;
  savingsRate: () => number;
  categoryBreakdown: () => CategorySummary[];
}
```

---

## 8. BACKEND ARCHITECTURE

### 8.1 API Structure

```
api/
├── src/
│   ├── index.ts                  # Entry point
│   ├── app.ts                    # Hono app setup
│   ├── middleware/
│   │   ├── auth.ts               # JWT verification
│   │   ├── rateLimit.ts          # Rate limiting
│   │   ├── cors.ts               # CORS config
│   │   ├── logger.ts             # Request logging
│   │   └── security.ts           # Security headers
│   ├── routes/
│   │   ├── auth.routes.ts        # /api/auth/*
│   │   ├── tasks.routes.ts       # /api/tasks/*
│   │   ├── expenses.routes.ts    # /api/expenses/*
│   │   ├── incomes.routes.ts     # /api/incomes/*
│   │   ├── products.routes.ts    # /api/products/*
│   │   ├── compare.routes.ts     # /api/compare/*
│   │   ├── assets.routes.ts      # /api/assets/*
│   │   ├── advisor.routes.ts     # /api/advisor/*
│   │   └── reports.routes.ts     # /api/reports/*
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── task.service.ts
│   │   ├── expense.service.ts
│   │   ├── priceEngine.service.ts
│   │   ├── affordability.service.ts
│   │   ├── asset.service.ts
│   │   └── ai.service.ts
│   ├── workers/                  # Background jobs
│   │   ├── priceScraper.ts       # Cron: every 6 hours
│   │   ├── priceAlerts.ts        # Check price drops
│   │   ├── balanceChecker.ts     # Optional: balance API
│   │   └── reportGenerator.ts    # Weekly reports
│   ├── db/
│   │   ├── schema.ts             # Drizzle schema
│   │   ├── migrations/           # DB migrations
│   │   └── seed.ts               # Seed data
│   ├── utils/
│   │   ├── encryption.ts         # AES-256 encryption
│   │   ├── validators.ts         # Zod schemas
│   │   └── helpers.ts
│   └── types/
│       └── index.ts
├── package.json
├── tsconfig.json
└── drizzle.config.ts
```

### 8.2 API Endpoints

```
AUTH
  POST   /api/auth/register          # Register user
  POST   /api/auth/login             # Login (email/phone)
  POST   /api/auth/google            # Google OAuth
  POST   /api/auth/otp/send          # Send OTP
  POST   /api/auth/otp/verify        # Verify OTP
  POST   /api/auth/refresh           # Refresh token
  POST   /api/auth/logout            # Logout

TASKS
  GET    /api/tasks                   # Get all task lists
  POST   /api/tasks                   # Create task list
  GET    /api/tasks/:id               # Get task list detail
  PUT    /api/tasks/:id               # Update task list
  DELETE /api/tasks/:id               # Delete task list
  POST   /api/tasks/:id/items        # Add item to list
  PUT    /api/tasks/:id/items/:itemId # Update item
  DELETE /api/tasks/:id/items/:itemId # Delete item
  PATCH  /api/tasks/:id/items/:itemId/complete  # Mark purchased

EXPENSES
  GET    /api/expenses                # List expenses (filtered)
  POST   /api/expenses               # Add expense
  PUT    /api/expenses/:id           # Update expense
  DELETE /api/expenses/:id           # Delete expense
  GET    /api/expenses/summary       # Monthly summary
  GET    /api/expenses/categories    # Category breakdown
  GET    /api/expenses/trends        # Trend data

INCOMES
  GET    /api/incomes                # List incomes
  POST   /api/incomes               # Add income
  PUT    /api/incomes/:id           # Update income
  DELETE /api/incomes/:id           # Delete income

PRICE COMPARISON
  GET    /api/compare/search?q=      # Search products
  GET    /api/compare/:productId     # Get price across platforms
  GET    /api/compare/:productId/history  # Price history
  POST   /api/compare/alerts         # Set price alert
  GET    /api/compare/deals          # Today's best deals
  GET    /api/compare/redirect/:platform/:productId  # Redirect to buy

AFFORDABILITY ADVISOR
  POST   /api/advisor/check          # Check if affordable
  GET    /api/advisor/emi/:amount    # EMI options
  GET    /api/advisor/alternatives   # Alternative products
  POST   /api/advisor/ai-suggest     # AI recommendation

ASSETS
  GET    /api/assets                  # All assets
  POST   /api/assets                  # Add asset
  PUT    /api/assets/:id             # Update asset
  DELETE /api/assets/:id             # Delete asset
  GET    /api/assets/networth        # Net worth calculation
  GET    /api/assets/olx-track       # OLX listing tracker
  GET    /api/assets/gold-price      # Live gold price
  GET    /api/assets/stock/:symbol   # Stock price

REPORTS
  GET    /api/reports/monthly        # Monthly report
  GET    /api/reports/annual         # Annual report
  GET    /api/reports/export/csv     # Export CSV
  GET    /api/reports/export/pdf     # Export PDF
```

---

## 9. DATABASE DESIGN

### 9.1 Entity Relationship Diagram (Simplified)

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────────┐
│    users     │     │   task_lists      │     │   task_items      │
├──────────────┤     ├──────────────────┤     ├──────────────────┤
│ id (uuid) PK │────<│ id (uuid) PK     │────<│ id (uuid) PK     │
│ email        │     │ user_id FK       │     │ list_id FK       │
│ phone        │     │ title            │     │ name             │
│ name         │     │ type (grocery/   │     │ quantity         │
│ avatar_url   │     │   bills/daily)   │     │ estimated_price  │
│ created_at   │     │ recurring        │     │ actual_price     │
│ updated_at   │     │ due_date         │     │ is_purchased     │
│ encrypted_pin│     │ status           │     │ category         │
└──────────────┘     │ created_at       │     │ platform_link    │
       │             └──────────────────┘     │ purchased_at     │
       │                                       └──────────────────┘
       │
       │          ┌──────────────────┐     ┌──────────────────┐
       ├─────────<│   expenses       │     │   incomes         │
       │          ├──────────────────┤     ├──────────────────┤
       │          │ id (uuid) PK     │     │ id (uuid) PK     │
       │          │ user_id FK       │────>│ user_id FK       │
       │          │ amount           │     │ amount           │
       │          │ category         │     │ source           │
       │          │ description      │     │ type (salary/    │
       │          │ date             │     │   freelance/etc) │
       │          │ payment_method   │     │ is_recurring     │
       │          │ receipt_url      │     │ date             │
       │          │ is_recurring     │     │ created_at       │
       │          │ created_at       │     └──────────────────┘
       │          └──────────────────┘
       │
       │          ┌──────────────────┐     ┌──────────────────┐
       ├─────────<│   assets         │     │   price_alerts    │
       │          ├──────────────────┤     ├──────────────────┤
       │          │ id (uuid) PK     │     │ id (uuid) PK     │
       │          │ user_id FK       │────>│ user_id FK       │
       │          │ name             │     │ product_id FK    │
       │          │ type (physical/  │     │ target_price     │
       │          │  financial/      │     │ is_active        │
       │          │  variable)       │     │ created_at       │
       │          │ category         │     └──────────────────┘
       │          │ current_value    │
       │          │ purchase_value   │     ┌──────────────────┐
       │          │ platform (OLX/   │     │  products         │
       │          │  bank/stock)     │     ├──────────────────┤
       │          │ external_link    │     │ id (uuid) PK     │
       │          │ notes            │     │ name             │
       │          │ last_updated     │     │ category         │
       │          │ created_at       │     │ image_url        │
       │          └──────────────────┘     │ amazon_price     │
       │                                   │ flipkart_price   │
       │          ┌──────────────────┐     │ jiomart_price    │
       └─────────<│ user_settings    │     │ amazon_url       │
                  ├──────────────────┤     │ flipkart_url     │
                  │ id (uuid) PK     │     │ jiomart_url      │
                  │ user_id FK       │     │ last_scraped     │
                  │ currency (INR)   │     │ created_at       │
                  │ theme            │     └──────────────────┘
                  │ notifications    │
                  │ budget_limit     │     ┌──────────────────┐
                  │ created_at       │     │  price_history    │
                  └──────────────────┘     ├──────────────────┤
                                           │ id PK            │
                                           │ product_id FK    │
                                           │ platform         │
                                           │ price            │
                                           │ recorded_at      │
                                           └──────────────────┘
```

### 9.2 Row Level Security (RLS) — Supabase

```sql
-- Every table has RLS enabled
-- Users can only access their own data

-- Example: expenses table
CREATE POLICY "Users can view own expenses"
ON expenses FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own expenses"
ON expenses FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own expenses"
ON expenses FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own expenses"
ON expenses FOR DELETE
USING (auth.uid() = user_id);
```

---

## 10. SECURITY ARCHITECTURE

### 🔒 HIGHEST PRIORITY — SECURITY FIRST

#### 10.1 Authentication & Authorization

```
SECURITY LAYER 1: Authentication
├── Supabase Auth (battle-tested, open-source)
├── JWT tokens (short-lived: 15 min access, 7 day refresh)
├── Google OAuth 2.0 (PKCE flow)
├── Phone OTP (SMS via MSG91)
├── Email magic links
├── Optional: Biometric (WebAuthn/FIDO2)
└── Multi-factor authentication (TOTP)

SECURITY LAYER 2: Authorization
├── Row Level Security (RLS) on ALL tables
├── Role-based access (user, premium, admin)
├── API key scoping per service
└── Resource ownership validation
```

#### 10.2 Data Encryption

```
SECURITY LAYER 3: Encryption
├── At Rest
│   ├── AES-256 encryption for sensitive fields
│   ├── Supabase encrypts DB at rest (default)
│   ├── Financial data double-encrypted
│   └── PIN/passwords: bcrypt + salt (12 rounds)
├── In Transit
│   ├── TLS 1.3 everywhere
│   ├── HSTS headers
│   ├── Certificate pinning (mobile)
│   └── Cloudflare SSL termination
└── Application Level
    ├── Client-side encryption for sensitive inputs
    ├── Encrypted local storage (IndexedDB)
    └── Zero-knowledge architecture for financial data
```

#### 10.3 Infrastructure Security

```
SECURITY LAYER 4: Infrastructure
├── Cloudflare WAF (Web Application Firewall)
├── DDoS protection (Cloudflare free tier)
├── Rate limiting (100 req/min per user)
├── Bot protection (Cloudflare Turnstile — FREE)
├── CSP headers (Content Security Policy)
├── CORS whitelist (only our domains)
├── SQL injection prevention (parameterized queries via ORM)
├── XSS prevention (React auto-escapes + CSP)
├── CSRF tokens on all mutations
└── Security headers (Helmet.js)
```

#### 10.4 Compliance & Privacy

```
SECURITY LAYER 5: Compliance
├── RBI Data Localization (all financial data in India)
├── GDPR-ready (data export, deletion)
├── No financial data shared with third parties
├── Audit logs for all financial operations
├── Data retention policies (configurable)
├── Right to deletion (account purge)
└── Privacy-first analytics (no cookies tracking)
```

#### 10.5 API Security

```
SECURITY LAYER 6: API Protection
├── API key rotation every 90 days
├── Request signing (HMAC-SHA256)
├── Input validation (Zod schemas on every endpoint)
├── Output sanitization
├── Pagination limits (max 100 items)
├── Query complexity limits
├── Timeout enforcement (30s max)
└── Error messages: generic (no stack traces in prod)
```

---

## 11. API & INTEGRATION LAYER

### 11.1 Price Comparison Data Sources

| Platform | Data Method | Rate | Reliability |
|----------|------------|------|-------------|
| Amazon.in | Product Advertising API (PA-API 5.0) | FREE (with affiliate) | ⭐⭐⭐⭐⭐ |
| Flipkart | Flipkart Affiliate API | FREE (with affiliate) | ⭐⭐⭐⭐ |
| JioMart | Web scraping (Puppeteer) | FREE | ⭐⭐⭐ |
| BigBasket | Web scraping (Cheerio) | FREE | ⭐⭐⭐ |
| Swiggy Instamart | Web scraping | FREE | ⭐⭐ |
| Myntra | Web scraping | FREE | ⭐⭐⭐ |
| Meesho | Web scraping | FREE | ⭐⭐ |

### 11.2 Background Scraping Architecture

```
┌─────────────────────────────────────────────────┐
│              PRICE ENGINE (Background)           │
│                                                   │
│  ┌─────────┐     ┌──────────┐     ┌───────────┐ │
│  │ Cron Job │────>│ Job Queue│────>│ Scraper   │ │
│  │ (6 hrs)  │     │ (BullMQ) │     │ Workers   │ │
│  └─────────┘     └──────────┘     │ (Parallel) │ │
│                                    └─────┬─────┘ │
│                                          │       │
│  ┌─────────────┐     ┌──────────────┐    │       │
│  │ Price Alert  │<────│ Redis Cache  │<───┘       │
│  │ Notifier     │     │ (6hr TTL)    │            │
│  └─────────────┘     └──────────────┘            │
│         │                    │                    │
│         ▼                    ▼                    │
│  ┌─────────────┐     ┌──────────────┐            │
│  │ Push/Email   │     │ PostgreSQL   │            │
│  │ Notification │     │ price_history│            │
│  └─────────────┘     └──────────────┘            │
└─────────────────────────────────────────────────┘
```

### 11.3 Scraper Strategy (Legal & Ethical)

```
APPROACH: Hybrid API + Scraping
├── Priority 1: Use official APIs (Amazon PA-API, Flipkart Affiliate)
├── Priority 2: Use RSS feeds where available
├── Priority 3: Ethical scraping with:
│   ├── Respect robots.txt
│   ├── Rate limit: max 1 request/second per domain
│   ├── User-Agent identification
│   ├── Cache results for 6 hours minimum
│   ├── No personal data scraping
│   └── Only public product pages
├── Fallback: Use third-party price APIs
│   ├── PriceAPI.net (free tier)
│   └── ScraperAPI (1000 free credits)
└── Legal: Affiliate agreements where possible
```

---

## 12. PRICE COMPARISON ENGINE

### 12.1 How It Works

```
USER SEARCHES: "Samsung Galaxy S24"
         │
         ▼
┌─────────────────────┐
│  1. Check Redis     │ ← Cached result? Return immediately
│     Cache           │
└─────────┬───────────┘
          │ Cache miss
          ▼
┌─────────────────────┐
│  2. Query Database  │ ← Recent data (< 6hrs)? Return it
│     (price_history) │
└─────────┬───────────┘
          │ Stale or not found
          ▼
┌─────────────────────┐
│  3. Fan-out to      │
│     all platforms    │
│  ┌─────┐ ┌────────┐ │
│  │Amzn │ │Flipkart│ │  ← Parallel requests
│  │ API │ │  API   │ │
│  └──┬──┘ └───┬────┘ │
│  ┌──┴──┐ ┌───┴────┐ │
│  │JioMr│ │BigBskt │ │  ← Parallel scraping
│  │Scrpe│ │ Scrape │ │
│  └──┬──┘ └───┬────┘ │
│     └────┬───┘      │
└──────────┼──────────┘
           ▼
┌─────────────────────┐
│  4. Normalize &     │
│     Compare         │
│  - Unify product    │
│  - Calculate best   │
│  - Add cashback     │
│  - Apply coupons    │
└─────────┬───────────┘
          ▼
┌─────────────────────┐
│  5. Store + Cache   │
│  - Save to DB       │
│  - Cache in Redis   │
│  - Return to user   │
└─────────────────────┘
```

### 12.2 Product Comparison Response Format

```json
{
  "product": {
    "name": "Samsung Galaxy S24 Ultra 256GB",
    "category": "Electronics > Smartphones",
    "image": "https://...",
    "rating": 4.5
  },
  "prices": [
    {
      "platform": "Amazon",
      "price": 129999,
      "mrp": 144999,
      "discount": "10%",
      "cashback": 2000,
      "effectivePrice": 127999,
      "inStock": true,
      "deliveryDays": 2,
      "url": "/api/compare/redirect/amazon/B0xxx",
      "lastUpdated": "2026-01-15T10:30:00Z"
    },
    {
      "platform": "Flipkart",
      "price": 126999,
      "mrp": 144999,
      "discount": "12%",
      "cashback": 0,
      "effectivePrice": 126999,
      "inStock": true,
      "deliveryDays": 3,
      "url": "/api/compare/redirect/flipkart/xxx",
      "lastUpdated": "2026-01-15T10:30:00Z"
    }
  ],
  "bestDeal": {
    "platform": "Flipkart",
    "effectivePrice": 126999,
    "savings": 18000
  },
  "priceHistory": {
    "lowest": 119999,
    "highest": 144999,
    "average": 132000,
    "trend": "declining",
    "recommendation": "WAIT — Price has been dropping. Expected to reach ₹1,19,999 in next sale."
  },
  "affordability": {
    "canAfford": true,
    "impactOnBudget": "23% of monthly income",
    "emiOptions": [
      { "months": 3, "emi": 43500, "interest": 0 },
      { "months": 6, "emi": 22167, "interest": 2.5 },
      { "months": 12, "emi": 11583, "interest": 5 }
    ]
  }
}
```

---

## 13. PAYMENT & BALANCE MONITORING (OPTIONAL)

### 13.1 UPI / Card Integration

```
OPTION A: Read-Only Balance (Account Aggregator Framework)
├── RBI-licensed Account Aggregator (AA)
├── Finvu / Setu / OneMoney APIs
├── User consents via AA framework
├── Read-only access to:
│   ├── Bank balance
│   ├── Transaction history
│   └── Credit card statements
├── Compliance: RBI Account Aggregator guidelines
└── Cost: ₹1-5 per consent session

OPTION B: Manual Entry (Recommended for MVP)
├── User manually enters balances
├── Periodic reminders to update
├── Transaction import via SMS parsing (local)
├── Bank statement CSV upload
└── Cost: FREE

OPTION C: UPI Payment Links (For purchases)
├── Razorpay / Cashfree / PayU
├── Generate UPI payment links
├── 0% transaction fee on UPI
├── Track payments within app
└── Cost: FREE (UPI) / 2% (Cards)
```

### 13.2 Recommended Approach

```
MVP Phase:    OPTION B (Manual entry + CSV upload)
Phase 2:      OPTION C (UPI payment links for tracked purchases)
Phase 3:      OPTION A (Account Aggregator — requires NBFC license partnership)
```

---

## 14. ASSET TRACKING SYSTEM

### 14.1 Asset Categories & Valuation

```
PHYSICAL ASSETS (Depreciating)
├── Electronics
│   ├── Purchase price → Manual entry
│   ├── Current value → Depreciation formula
│   │   └── Value = Purchase × (1 - depreciation_rate) ^ years
│   └── Market value → OLX/Quikr listing price (if listed)
├── Vehicles
│   ├── Purchase price → Manual entry
│   ├── Current value → Auto depreciation (15%/year)
│   └── Insurance value → Manual entry
├── Jewelry/Gold
│   ├── Weight in grams → Manual entry
│   ├── Current value → Live gold API × weight
│   └── Making charges → One-time entry
└── Real Estate
    ├── Purchase price → Manual entry
    ├── Current value → Manual / API estimates
    └── Rental income → Tracked as income

FINANCIAL ASSETS (Variable)
├── Bank Accounts
│   ├── Balance → Manual / Account Aggregator
│   └── Interest rate → Manual
├── Mutual Funds
│   ├── NAV → AMFI API (free)
│   ├── Units → Manual
│   └── Current value → NAV × units
├── Stocks
│   ├── Price → Yahoo Finance / NSE API
│   ├── Quantity → Manual
│   └── Current value → Price × quantity
├── Fixed Deposits
│   ├── Principal → Manual
│   ├── Interest rate → Manual
│   └── Maturity value → Calculated
├── PPF/EPF
│   ├── Balance → Manual
│   └── Interest → Government rate
└── Crypto (Optional)
    ├── Holdings → Manual
    └── Price → CoinGecko API (free)

VARIABLE ASSETS (Income-based)
├── Salary
│   ├── Monthly CTC → Manual
│   ├── In-hand → Calculated
│   └── Annual projection → CTC × 12
├── Freelance Income
│   ├── Pipeline → Manual entry
│   ├── Confirmed → Manual
│   └── Projected → Average of last 6 months
└── Expected Bonuses
    ├── Amount → Manual/estimated
    └── Date → Manual
```

### 14.2 OLX Tracking Integration

```
OLX ASSET TRACKER
├── User adds OLX listing URL
├── Background worker checks periodically:
│   ├── Listing still active?
│   ├── Price changed?
│   ├── Views/responses (if API available)
│   └── Similar items' prices (market value)
├── Notifications:
│   ├── "Your phone listing got a price drop suggestion"
│   ├── "Similar items selling for ₹X — consider updating price"
│   └── "Listing expired — relist?"
└── Asset value auto-updates based on listing status
```

---

## 15. AI/AGENTIC DECISION ENGINE

### 15.1 Agentic AI Architecture

```
┌─────────────────────────────────────────────────┐
│           AGENTIC AI DECISION ENGINE             │
│                                                   │
│  ┌───────────────────────────────────────────┐   │
│  │           Google Gemini API               │   │
│  │         (Free: 60 RPM, 1500 RPD)         │   │
│  └───────────────────┬───────────────────────┘   │
│                      │                           │
│  ┌──────────┐  ┌─────┴─────┐  ┌──────────────┐ │
│  │ Purchase │  │ Budget    │  │ Savings      │ │
│  │ Advisor  │  │ Optimizer │  │ Recommender  │ │
│  │ Agent    │  │ Agent     │  │ Agent        │ │
│  └──────────┘  └───────────┘  └──────────────┘ │
│                                                   │
│  ┌──────────┐  ┌───────────┐  ┌──────────────┐ │
│  │ Price    │  │ EMI       │  │ Net Worth    │ │
│  │ Predictor│  │ Calculator│  │ Analyzer     │ │
│  │ Agent    │  │ Agent     │  │ Agent        │ │
│  └──────────┘  └───────────┘  └──────────────┘ │
└─────────────────────────────────────────────────┘
```

### 15.2 AI Use Cases

```
1. PURCHASE ADVISOR
   Input: Product + User's financial data
   Output: Buy/Wait/EMI/Alternative recommendation
   
   Prompt: "Given user's monthly income of ₹{income}, 
   expenses of ₹{expenses}, savings of ₹{savings}, 
   and desire to buy {product} at ₹{price}, 
   provide a financial recommendation."

2. BUDGET OPTIMIZER
   Input: Monthly expense history
   Output: Category-wise optimization suggestions
   
   Prompt: "Analyze expense pattern: {categories with amounts}. 
   Suggest where to cut spending to save ₹{target_savings}."

3. PRICE PREDICTOR
   Input: Product price history
   Output: Buy now vs. wait recommendation
   
   Prompt: "Given price history: {prices_over_time}, 
   upcoming sale events: {sale_calendar}, 
   should user buy now or wait?"

4. SAVINGS RECOMMENDER
   Input: Income, expenses, goals
   Output: Personalized savings plan
   
   Prompt: "User earns ₹{income}, spends ₹{expenses}. 
   Goals: {goals_with_amounts_and_dates}. 
   Create a savings plan."
```

---

## 16. DEPLOYMENT STRATEGY

### 16.1 Infrastructure Setup

```
PRODUCTION DEPLOYMENT
├── Frontend
│   ├── Build: Vite → static assets
│   ├── Host: Cloudflare Pages
│   ├── CDN: Cloudflare (auto)
│   ├── Domain: smartspend.in (Cloudflare Registrar)
│   └── Deploy: GitHub push → auto-deploy
├── Backend
│   ├── Build: TypeScript → Node.js
│   ├── Host: Railway.app (free tier)
│   ├── Alternative: Render.com / Fly.io
│   ├── Region: Mumbai (ap-south-1)
│   └── Deploy: Docker → Railway auto-deploy
├── Database
│   ├── Primary: Supabase (Mumbai region)
│   ├── Cache: Upstash Redis (Mumbai)
│   ├── Storage: Cloudflare R2
│   └── Backup: Daily automated (Supabase)
└── Background Workers
    ├── Host: Railway.app (same container)
    ├── Cron: node-cron
    └── Queue: BullMQ + Upstash Redis
```

### 16.2 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy SmartSpend

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test
      - run: npm run lint
  
  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: cloudflare/pages-action@v1
  
  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: railwayapp/deploy-action@v1
```

### 16.3 Environment Variables

```bash
# Frontend (.env)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
VITE_API_BASE_URL=https://api.smartspend.in

# Backend (.env)
DATABASE_URL=postgresql://...
SUPABASE_SERVICE_KEY=eyJ...
UPSTASH_REDIS_URL=redis://...
GEMINI_API_KEY=AIza...
AMAZON_AFFILIATE_TAG=smartspend-21
AMAZON_ACCESS_KEY=AKIAx...
AMAZON_SECRET_KEY=xxx...
FLIPKART_AFFILIATE_ID=xxx
RAZORPAY_KEY_ID=rzp_live_xxx
RAZORPAY_KEY_SECRET=xxx
MSG91_AUTH_KEY=xxx
ENCRYPTION_KEY=xxx (32 bytes hex)
JWT_SECRET=xxx
```

---

## 17. DEVELOPMENT PHASES & ROADMAP

### Phase 1: MVP Foundation (Weeks 1-4)

```
SPRINT 1 (Week 1-2): Setup & Auth
├── [ ] Project scaffolding (Vite + React + Tailwind)
├── [ ] Supabase setup (DB, Auth, RLS)
├── [ ] Backend setup (Hono.js + Drizzle)
├── [ ] Authentication (Google OAuth + Email)
├── [ ] User profile CRUD
├── [ ] Basic responsive layout (sidebar, header)
├── [ ] Landing page
└── [ ] CI/CD pipeline (GitHub Actions)

SPRINT 2 (Week 3-4): Core Features
├── [ ] Task list management (CRUD)
├── [ ] Expense tracker (CRUD + categories)
├── [ ] Income tracker (CRUD)
├── [ ] Dashboard with basic charts
├── [ ] Monthly summary view
└── [ ] Mobile-responsive design
```

### Phase 2: Price Engine & Shopping (Weeks 5-8)

```
SPRINT 3 (Week 5-6): Price Comparison
├── [ ] Amazon PA-API integration
├── [ ] Flipkart API integration
├── [ ] Product search UI
├── [ ] Price comparison view
├── [ ] Redirect/affiliate links
├── [ ] Redis caching layer
└── [ ] Background price scraper (BullMQ)

SPRINT 4 (Week 7-8): Smart Features
├── [ ] Price history tracking & charts
├── [ ] Price drop alerts
├── [ ] Affordability checker
├── [ ] EMI calculator
├── [ ] Alternative product suggestions
├── [ ] Shopping hub (all platform links)
└── [ ] Notification system
```

### Phase 3: AI & Assets (Weeks 9-12)

```
SPRINT 5 (Week 9-10): Asset Tracker
├── [ ] Asset CRUD (physical, financial, variable)
├── [ ] Net worth calculator
├── [ ] Gold price API integration
├── [ ] Stock price API integration
├── [ ] OLX listing tracker
├── [ ] Depreciation calculator
└── [ ] Asset dashboard with charts

SPRINT 6 (Week 11-12): AI Integration
├── [ ] Gemini API integration
├── [ ] Purchase advisor AI agent
├── [ ] Budget optimization suggestions
├── [ ] Price prediction engine
├── [ ] Smart savings recommendations
├── [ ] AI-powered insights dashboard
└── [ ] PWA setup (offline support)
```

### Phase 4: Polish & Launch (Weeks 13-16)

```
SPRINT 7 (Week 13-14): Security & Performance
├── [ ] Security audit
├── [ ] Penetration testing
├── [ ] Performance optimization
├── [ ] Lighthouse score > 90
├── [ ] Load testing (k6)
├── [ ] Error monitoring (Sentry)
└── [ ] Rate limiting & WAF rules

SPRINT 8 (Week 15-16): Launch
├── [ ] Beta testing (50 users)
├── [ ] Bug fixes from beta
├── [ ] Documentation
├── [ ] SEO optimization
├── [ ] App Store (PWA listing)
├── [ ] Marketing landing page
└── [ ] 🚀 PUBLIC LAUNCH
```

### Phase 5: Post-Launch (Ongoing)

```
FUTURE FEATURES
├── [ ] Account Aggregator integration (RBI-compliant balance check)
├── [ ] UPI payment tracking
├── [ ] Family/shared budgets
├── [ ] Investment recommendations
├── [ ] Tax optimization suggestions
├── [ ] WhatsApp bot for quick expense entry
├── [ ] Voice-based expense entry
├── [ ] React Native mobile app
├── [ ] Subscription management (Netflix, Spotify tracking)
└── [ ] Bill splitting (Splitwise-like)
```

---

## 18. COST ESTIMATION

### 18.1 MVP Phase (0-1000 users) — ₹0/month

| Service | Plan | Cost |
|---------|------|------|
| Cloudflare Pages | Free | ₹0 |
| Supabase | Free (500MB, 50K MAU) | ₹0 |
| Upstash Redis | Free (10K commands/day) | ₹0 |
| Cloudflare R2 | Free (10GB) | ₹0 |
| Railway.app | Free (500hrs/month) | ₹0 |
| GitHub Actions | Free (2000 min/month) | ₹0 |
| Sentry | Free (5K errors/month) | ₹0 |
| Gemini API | Free (60 RPM) | ₹0 |
| Domain | .in domain | ~₹500/year |
| **TOTAL** | | **~₹42/month** |

### 18.2 Growth Phase (1K-10K users) — ~₹3,000/month

| Service | Plan | Cost |
|---------|------|------|
| Cloudflare Pages | Free | ₹0 |
| Supabase | Pro ($25/month) | ~₹2,100 |
| Upstash Redis | Pay-as-you-go | ~₹200 |
| Railway.app | Hobby ($5/month) | ~₹420 |
| Cloudflare R2 | Pay-as-you-go | ~₹100 |
| SMS (OTP) | ~1000 SMS/month | ~₹150 |
| **TOTAL** | | **~₹3,000/month** |

### 18.3 Scale Phase (10K-100K users) — ~₹15,000/month

| Service | Plan | Cost |
|---------|------|------|
| Supabase | Pro + compute | ~₹5,000 |
| Railway.app | Team plan | ~₹2,500 |
| Upstash Redis | Pro | ~₹2,000 |
| Cloudflare R2 + Workers | Usage-based | ~₹1,500 |
| SMS/Notifications | Volume | ~₹2,000 |
| Monitoring stack | Various | ~₹2,000 |
| **TOTAL** | | **~₹15,000/month** |

---

## 19. PROMPT-READY AGENTIC AI TEMPLATES

### 🤖 Copy-Paste Ready Prompts for Development

#### PROMPT 1: Generate Supabase Schema

```
Create a complete Supabase PostgreSQL schema for a personal finance app with these tables:
- users (id, email, phone, name, avatar_url, encrypted_pin, created_at, updated_at)
- task_lists (id, user_id, title, type ENUM grocery/bills/daily/custom, is_recurring, recurrence_pattern, due_date, status, created_at)
- task_items (id, list_id, name, quantity, unit, estimated_price, actual_price, is_purchased, category, platform_link, purchased_at, created_at)
- expenses (id, user_id, amount, category, sub_category, description, date, payment_method ENUM cash/upi/credit/debit, receipt_url, is_recurring, task_item_id nullable, created_at)
- incomes (id, user_id, amount, source, type ENUM salary/freelance/rental/investment/bonus/other, is_recurring, recurrence_pattern, date, created_at)
- assets (id, user_id, name, type ENUM physical/financial/variable, category, current_value, purchase_value, purchase_date, platform, external_link, depreciation_rate, notes, last_updated, created_at)
- products (id, name, category, image_url, description, created_at)
- product_prices (id, product_id, platform ENUM amazon/flipkart/jiomart/bigbasket/myntra/meesho, price, mrp, discount_percent, cashback, url, in_stock, last_scraped, created_at)
- price_history (id, product_id, platform, price, recorded_at)
- price_alerts (id, user_id, product_id, target_price, is_active, triggered_at, created_at)
- user_settings (id, user_id, currency default INR, theme, notification_preferences JSONB, monthly_budget_limit, created_at)

Include:
1. All foreign key constraints
2. Proper indexes for performance
3. Row Level Security (RLS) policies for every table
4. Enum types
5. Updated_at triggers
6. UUID primary keys using gen_random_uuid()
```

#### PROMPT 2: Generate Backend API

```
Create a complete Hono.js backend API in TypeScript with:

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
11. Drizzle ORM integration with the schema above
12. Background worker setup for price scraping (every 6 hours)

Tech: Hono.js, Drizzle ORM, Zod, Supabase client, BullMQ
```

#### PROMPT 3: Generate Frontend Dashboard

```
Create a React + TypeScript + Tailwind CSS dashboard with:

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
9. Empty states with illustrations
```

#### PROMPT 4: Generate Price Comparison Engine

```
Build a price comparison service in Node.js/TypeScript that:

1. Takes a product search query
2. Searches across: Amazon (PA-API), Flipkart (Affiliate API), JioMart (scrape), BigBasket (scrape)
3. Normalizes results into a unified format: { platform, name, price, mrp, discount, cashback, effectivePrice, url, image, inStock, deliveryDays, rating }
4. Caches results in Redis (6-hour TTL)
5. Stores price history in PostgreSQL
6. Generates affiliate redirect URLs
7. Calculates best deal considering price + cashback + delivery
8. Provides price history graph data
9. Supports price drop alerts
10. Uses Puppeteer for scraping with stealth plugin
11. Handles rate limiting and retries
12. Returns error gracefully if a platform fails
```

#### PROMPT 5: Generate Affordability Engine

```
Create an affordability analysis engine in TypeScript that:

INPUT:
- Product price
- User's monthly income
- User's monthly fixed expenses
- User's variable expenses (last 3 months average)
- Current savings
- Existing EMIs

PROCESSING:
1. Calculate disposable income = income - fixed expenses - avg variable expenses
2. Calculate savings rate = disposable income / income
3. Check if product price < disposable income (can buy outright)
4. If not, calculate EMI options (3, 6, 9, 12, 18, 24 months)
5. EMI formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1)
6. Check if EMI fits within disposable income
7. Query for alternative products (same category, lower price)
8. Calculate impact on monthly budget
9. Generate recommendation using AI (Gemini API)

OUTPUT:
- affordability: "AFFORDABLE" | "STRETCH" | "EMI_RECOMMENDED" | "NOT_AFFORDABLE"
- bestEmiOption: { months, emi, interest, totalCost }
- alternatives: Product[]
- budgetImpact: { savingsRateBefore, savingsRateAfter, monthlyImpact }
- aiRecommendation: string
```

#### PROMPT 6: Generate Asset Tracker

```
Build an asset tracking system in React + TypeScript that:

1. Asset form with dynamic fields based on asset type:
   - Physical: name, category, purchase price, purchase date, depreciation rate, condition, platform (OLX listing URL optional)
   - Financial: name, type (MF/stock/FD/PPF/crypto), quantity/units, purchase price, current price (auto-fetch), institution
   - Variable: name, type (salary/freelance/bonus), amount, frequency, expected date

2. Net worth dashboard:
   - Total assets value (auto-calculated)
   - Total liabilities
   - Net worth = assets - liabilities
   - Asset allocation pie chart
   - Month-over-month net worth line chart
   - Top 5 assets by value
   - Depreciating assets alert

3. Live price integrations:
   - Gold: fetch from GoldAPI.io
   - Stocks: fetch from Yahoo Finance
   - Mutual Funds: fetch from AMFI API
   - Crypto: fetch from CoinGecko

4. OLX tracker:
   - Input listing URL
   - Background check every 24 hours
   - Alert if listing removed/price changed
   - Suggest market value based on similar items
```

#### PROMPT 7: Generate Security Middleware

```
Create a comprehensive security middleware stack for Hono.js:

1. Helmet-like security headers:
   - Content-Security-Policy
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection
   - Strict-Transport-Security
   - Referrer-Policy

2. Rate limiter:
   - 100 requests/minute per authenticated user
   - 20 requests/minute for unauthenticated
   - 5 requests/minute for auth endpoints (login/register)
   - Use Upstash Redis for distributed rate limiting
   - Return 429 with Retry-After header

3. CORS:
   - Whitelist: smartspend.in, localhost:5173
   - Allow credentials
   - Proper preflight handling

4. Request validation:
   - Sanitize all string inputs (XSS prevention)
   - Validate Content-Type
   - Max body size: 1MB
   - Query parameter validation

5. Auth middleware:
   - Verify Supabase JWT
   - Extract user_id
   - Check token expiry
   - Handle refresh flow

6. Audit logger:
   - Log all financial mutations (create/update/delete)
   - Store: user_id, action, resource, timestamp, IP
   - Don't log sensitive data (passwords, tokens)

7. Encryption utility:
   - AES-256-GCM for sensitive fields
   - Key from environment variable
   - Encrypt: financial data, personal identifiers
   - Decrypt on read (middleware or service level)
```

#### PROMPT 8: Generate Complete Docker Setup

```
Create a Docker setup for the SmartSpend backend:

1. Dockerfile:
   - Multi-stage build (builder + production)
   - Node.js 20 Alpine
   - Non-root user
   - Health check endpoint
   - Proper signal handling (SIGTERM)

2. docker-compose.yml:
   - Backend service
   - PostgreSQL (for local dev)
   - Redis (for local dev)
   - Volume mounts for persistence
   - Environment variables
   - Network isolation

3. .dockerignore
4. Health check endpoint (/health)
5. Graceful shutdown handling
```

#### PROMPT 9: Full-Stack Feature — Shopping List to Purchase Tracking

```
Build an end-to-end feature: Smart Shopping List

FRONTEND:
1. Create shopping list UI (name, category: grocery/daily/other)
2. Add items with: name, quantity, estimated price
3. For each item, show "Compare Prices" button
4. Price comparison modal showing prices across platforms
5. "Buy" button redirects to cheapest platform (affiliate link)
6. After purchase, mark as bought with actual price
7. Auto-create expense entry from purchased items
8. Show savings (estimated vs actual)

BACKEND:
1. CRUD API for lists and items
2. Price comparison endpoint per item
3. Expense auto-creation on item purchase
4. Weekly spending report from shopping lists

DATABASE:
1. task_lists table with items
2. Link items to expenses on purchase
3. Track price comparison history

This should work on mobile (responsive design).
```

#### PROMPT 10: Platform Redirect & Affiliate System

```
Build a platform redirect system that:

1. Maintains a registry of supported platforms:
   {
     amazon: { baseUrl: "https://amazon.in", affiliateTag: "smartspend-21", trackingParam: "tag" },
     flipkart: { baseUrl: "https://flipkart.com", affiliateId: "xxx", trackingParam: "affid" },
     swiggy: { baseUrl: "https://swiggy.com", deepLink: true },
     netflix: { baseUrl: "https://netflix.com" },
     olx: { baseUrl: "https://olx.in" }
     // ... etc
   }

2. Redirect endpoint: GET /api/redirect/:platform/:productId
   - Append affiliate parameters
   - Track click (user_id, platform, product, timestamp)
   - 302 redirect to platform
   - Handle deep links for mobile

3. Shopping hub page:
   - Grid of platform cards with logos
   - Category tabs (Shopping, Food, Entertainment, Bills, Resale)
   - Search across platforms
   - Recent redirect history
   - "Deals of the Day" section

4. Click analytics dashboard (admin):
   - Clicks per platform
   - Revenue from affiliates
   - Top clicked products
```

---

## 20. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| API rate limits hit | HIGH | MEDIUM | Aggressive caching, request queuing |
| Scraping blocked by platforms | HIGH | HIGH | Use official APIs first, rotate user agents |
| Supabase free tier limits | MEDIUM | MEDIUM | Optimize queries, upgrade early |
| Security breach | LOW | CRITICAL | Multi-layer security, encryption, audit |
| AI API costs spike | MEDIUM | LOW | Cache AI responses, rate limit per user |
| Payment integration complexity | MEDIUM | HIGH | Start with manual entry, add APIs later |
| Data accuracy (prices) | MEDIUM | MEDIUM | Multiple sources, user reporting |
| Regulatory (RBI) | LOW | HIGH | Consult fintech lawyer, AA framework |
| Team scaling | MEDIUM | MEDIUM | Clean architecture, documentation |
| User adoption | HIGH | HIGH | Focus on UX, solve real pain points |

---

## 21. SUCCESS METRICS

### 21.1 Technical KPIs

| Metric | Target |
|--------|--------|
| Page load time | < 2 seconds |
| API response time | < 200ms (p95) |
| Uptime | 99.9% |
| Lighthouse score | > 90 |
| Build size | < 500KB gzipped |
| Test coverage | > 80% |
| Zero critical vulnerabilities | Always |

### 21.2 Business KPIs

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Registered users | 100 | 1,000 | 5,000 | 25,000 |
| DAU | 20 | 200 | 1,000 | 5,000 |
| Expenses tracked/day | 50 | 500 | 5,000 | 25,000 |
| Price comparisons/day | 20 | 200 | 2,000 | 10,000 |
| Affiliate clicks/day | 10 | 100 | 1,000 | 5,000 |
| Revenue (affiliate) | ₹0 | ₹5,000 | ₹50,000 | ₹2,00,000 |

---

## 📌 FINAL CHECKLIST BEFORE DEVELOPMENT

- [ ] Supabase project created (Mumbai region)
- [ ] Cloudflare account setup
- [ ] GitHub repository initialized
- [ ] Amazon Affiliate account approved
- [ ] Flipkart Affiliate account approved
- [ ] Gemini API key obtained
- [ ] Razorpay test account (for future UPI)
- [ ] MSG91 account (for OTP)
- [ ] Domain registered (smartspend.in)
- [ ] Team roles assigned
- [ ] Development environment documented
- [ ] Security review checklist created
- [ ] Design system (Figma) finalized
- [ ] User stories written in GitHub Issues

---

## 🎯 ONE-LINE SUMMARY

> **SmartSpend AI** = Todoist + Walnut + PriceHistory + Groww + AI Financial Advisor — all in one free, secure, India-first web app.

---

*This document is the single source of truth for the SmartSpend AI project. All development decisions should reference this plan.*

**Document Version:** 1.0.0  
**Last Updated:** 2026  
**Status:** ✅ FINALIZED FOR DEVELOPMENT
