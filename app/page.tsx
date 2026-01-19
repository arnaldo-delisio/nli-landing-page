"use client";

import { useEffect, useState } from "react";

const ROTATING_WORDS = [
  "data",
  "sales",
  "operations",
  "marketing",
  "customers",
  "inventory",
  "team",
  "analytics",
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen gradient-mesh">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center relative overflow-hidden">
        {/* Badge */}
        <div className="inline-block mb-6 px-5 py-2 glass-card rounded-full glow-pulse">
          <span className="gradient-text text-sm font-medium tracking-wide uppercase">
            Natural Language Business Intelligence
          </span>
        </div>

        {/* Main Headline with Rotating Word */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Talk with your{" "}
          <span
            className={`rotating-word transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">
          Stop switching between tools. Start asking questions.
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Get instant answers from all your business systems through natural
          conversation—no dashboards, no SQL, no waiting.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a
            href="https://cal.com/arnaldodelisio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white font-semibold rounded-lg neon-button"
          >
            Book Your Discovery Call (30 min) →
          </a>
          <a
            href="#examples"
            className="px-8 py-4 glass-card text-white font-semibold rounded-lg border border-white/20 hover:border-orange-400/50 transition-all"
          >
            See Examples
          </a>
        </div>

        {/* Friction-reducing copy under CTA */}
        <p className="text-sm text-gray-400">
          No commitment • Free consultation • See if NLI is right for you
        </p>

        {/* Trust signals under CTA */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-400">
          <div className="flex items-center glass-card px-4 py-2 rounded-full">
            <span className="text-green-400 mr-2">🔒</span>
            SOC 2 Compliant
          </div>
          <div className="flex items-center glass-card px-4 py-2 rounded-full">
            <span className="text-green-400 mr-2">✓</span>
            GDPR Ready
          </div>
          <div className="flex items-center glass-card px-4 py-2 rounded-full">
            <span className="text-green-400 mr-2">🛡️</span>
            Your infrastructure
          </div>
          <div className="flex items-center glass-card px-4 py-2 rounded-full">
            <span className="text-green-400 mr-2">🔐</span>
            End-to-end encryption
          </div>
        </div>

        {/* Demo Video Placeholder */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="glass-card rounded-2xl overflow-hidden aspect-video relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-amber-400/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 glow-pulse group-hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg font-medium">Watch 90-second demo</p>
                <p className="text-gray-500 text-sm mt-2">See NLI in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Social Proof */}
      <section className="py-8 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wide">
            Trusted by forward-thinking operators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-gray-300 font-semibold text-lg">
              Early-stage pilot companies
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">Fast implementation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-2xl">🔒</span>
              <span className="font-medium">Secure by design</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            The Problem
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Your business data is scattered across:
            </p>

            <ul className="space-y-2 mb-8 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Stripe (payments & revenue)
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Salesforce/HubSpot (CRM & deals)
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Shopify/databases (products & orders)
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Google Analytics (traffic & behavior)
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Notion/Airtable (operations)
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Spreadsheets (everything else)
              </li>
            </ul>

            <div className="glass-card p-6 rounded-lg mb-6">
              <p className="text-gray-300 mb-4">
                Every time you need an answer, you:
              </p>
              <ol className="space-y-2 text-gray-300">
                <li>1. Open 3-5 different tools</li>
                <li>2. Export data to spreadsheets</li>
                <li>3. Manually combine and analyze</li>
                <li>4. 15-30 minutes later... maybe get an answer</li>
              </ol>
            </div>

            <p className="text-lg text-gray-300 mb-2">
              You do this <strong className="text-white">10-20 times per day</strong>.
            </p>
            <p className="text-2xl font-bold gradient-text">
              That's 3-5 hours wasted. Every single day.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
            The Solution
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Natural Language Intelligence for your business.
          </p>

          <div className="max-w-3xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 rounded-xl bento-card">
                <div className="text-4xl mb-4">🔗</div>
                <p className="text-gray-300">
                  We connect Claude Desktop to all your systems.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl bento-card">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-300">
                  You ask questions in plain English.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl bento-card">
                <div className="text-4xl mb-4">⚡</div>
                <p className="text-gray-300">You get instant answers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section - Bento Grid */}
      <section id="examples" className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Ask Anything
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExampleCard
              title="Sales Intelligence"
              examples={[
                "Which deals are stuck in demo for over 2 weeks?",
                "Show me our sales velocity this quarter vs last",
                "Who are our highest-value customers?",
              ]}
            />
            <ExampleCard
              title="Operations Intelligence"
              examples={[
                "Which projects are over budget and behind schedule?",
                "Show me team capacity across all active projects",
                "What's blocking our Q1 launch?",
              ]}
            />
            <ExampleCard
              title="E-commerce Intelligence"
              examples={[
                "What's our revenue this month?",
                "Which products have the best margins?",
                "Show me customer cohort retention",
              ]}
            />
            <ExampleCard
              title="Marketing Intelligence"
              examples={[
                "What's our CAC by channel?",
                "Which campaigns drove the most revenue?",
                "Show me conversion rates by traffic source",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="Discovery Call"
              description="We understand your business, your tools, your questions"
            />
            <StepCard
              number="2"
              title="Custom Integration"
              description="We connect your systems and build your intelligence layer (1-2 weeks)"
            />
            <StepCard
              number="3"
              title="Install & Train"
              description="We set up Claude Desktop integration and train your team"
            />
            <StepCard
              number="4"
              title="Start Asking"
              description="Your entire team gets instant answers from all your data"
            />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            What You Get
          </h2>

          <ul className="space-y-4">
            <BenefitItem text="Custom orchestration backend for your business" />
            <BenefitItem text="3-5 data sources connected (CRM, payments, analytics, etc.)" />
            <BenefitItem text="Domain-specific intelligence (we understand your metrics)" />
            <BenefitItem text="Claude Desktop integration (familiar interface)" />
            <BenefitItem text="Team training & documentation" />
            <BenefitItem text="30 days of support" />
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pilot Program
          </h2>

          <div className="glass-card gradient-border p-8 rounded-2xl mb-8 relative overflow-hidden">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-amber-400/10"></div>

            {/* Urgency badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg glow-pulse">
                ⚡ Only 3 spots remaining
              </span>
            </div>

            <div className="mb-4 mt-4 relative">
              <span className="inline-block px-4 py-2 glass-card text-orange-300 text-sm font-semibold rounded-full mb-4">
                Pilot Program (First 5 Clients)
              </span>
            </div>

            <div className="text-5xl md:text-6xl font-bold text-white mb-4 relative">
              $5,000
              <span className="text-2xl font-normal text-gray-400">
                {" "}
                one-time
              </span>
            </div>

            {/* Add value comparison */}
            <p className="text-sm text-gray-500 line-through mb-6 relative">
              Regular price: $15,000
            </p>

            <p className="text-lg text-gray-300 mb-8 relative">
              ✓ Delivered in 1-2 weeks
              <br />
              ✓ No recurring costs
              <br />
              ✓ Full ownership of your backend
              <br />✓ 30 days of support included
            </p>

            <a
              href="https://cal.com/arnaldodelisio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white font-semibold rounded-lg neon-button relative"
            >
              Claim Your Spot →
            </a>

            <p className="text-xs text-gray-400 mt-4 relative">
              🔥 2 pilot clients already onboarded
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Who This Is For
          </h2>

          <div className="glass-card p-8 rounded-xl mb-8 bento-card">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Ideal Customer:
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Company size: 10-100 employees</li>
              <li>• Revenue: $1M-$20M</li>
              <li>• Data scattered across 3+ tools</li>
              <li>• Decision makers tired of dashboard paralysis</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-xl bento-card">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Perfect for:
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                • E-commerce brands drowning in Shopify/Stripe data
              </li>
              <li>• SaaS companies needing operational visibility</li>
              <li>• Agencies managing multiple client systems</li>
              <li>
                • Professional services tracking projects & revenue
              </li>
              <li>
                • Any business where &quot;just checking the numbers&quot; takes 30
                minutes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            FAQ
          </h2>

          <div className="space-y-6">
            <FAQItem
              question="What if we don't use Claude Desktop?"
              answer="We include setup help. Takes 5 minutes to install."
            />
            <FAQItem
              question="Is our data secure?"
              answer="Your backend runs on your infrastructure. Data never leaves your control."
            />
            <FAQItem
              question="What data sources do you support?"
              answer="Stripe, Shopify, Salesforce, HubSpot, PostgreSQL, Supabase, Airtable, Google Analytics, and more. We build custom connectors as needed."
            />
            <FAQItem
              question="How is this different from Tableau/Power BI?"
              answer="No dashboards to build. No SQL to learn. 1-2 week setup vs 3-6 months. Natural language, not clicking through pre-built reports."
            />
            <FAQItem
              question="What if our question isn't pre-programmed?"
              answer="Our domain intelligence layer understands business contexts. Claude can reason about your data and answer novel questions."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card gradient-border p-12 rounded-2xl relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-amber-400/10"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative">
              Ready to Stop Hunting for Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative">
              Book a 30-minute discovery call. We'll discuss your specific needs
              and show you what's possible.
            </p>

            <a
              href="https://cal.com/arnaldodelisio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white font-semibold rounded-lg neon-button relative"
            >
              Schedule Your Free Strategy Call →
            </a>

            <p className="text-sm text-gray-400 mt-4 relative">
              No commitment • 30 minutes • Free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; 2026 Natural Language Intelligence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Component: Example Card
function ExampleCard({
  title,
  examples,
}: {
  title: string;
  examples: string[];
}) {
  return (
    <div className="glass-card p-6 rounded-xl bento-card group">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <ul className="space-y-3">
        {examples.map((example, index) => (
          <li key={index} className="flex items-start text-gray-300 group-hover:text-white transition-colors">
            <span className="text-orange-400 mr-2">→</span>
            <span>&quot;{example}&quot;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component: Step Card
function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xl font-bold rounded-full mb-4 glow-pulse group-hover:scale-110 transition-transform">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// Component: Benefit Item
function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start text-lg text-gray-300 glass-card p-4 rounded-lg group hover:border-orange-400/50 transition-all">
      <span className="text-green-400 text-2xl mr-3">✓</span>
      <span className="group-hover:text-white transition-colors">{text}</span>
    </li>
  );
}

// Component: FAQ Item
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="glass-card p-6 rounded-xl group hover:border-orange-400/50 transition-all">
      <h3 className="text-lg font-semibold mb-2 text-white">{question}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{answer}</p>
    </div>
  );
}
