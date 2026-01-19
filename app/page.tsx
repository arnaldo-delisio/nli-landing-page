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
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300 max-w-4xl mx-auto">
          Ask questions in plain English.<br />
          Get answers in seconds.<br />
          <span className="text-gray-400 text-xl mt-2 block">No dashboards. No SQL. No 30-minute data hunts.</span>
        </h2>

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
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
              The Problem
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              "What's our revenue this month?"
            </h2>

            <p className="text-2xl text-gray-300 mb-12">
              Simple question. 30 minutes to answer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-8 rounded-xl text-center bento-card">
                <div className="text-5xl font-bold gradient-text mb-2">6+</div>
                <p className="text-gray-400">Different tools<br />with your data</p>
              </div>
              <div className="glass-card p-8 rounded-xl text-center bento-card">
                <div className="text-5xl font-bold gradient-text mb-2">20x</div>
                <p className="text-gray-400">Questions asked<br />per day</p>
              </div>
              <div className="glass-card p-8 rounded-xl text-center bento-card">
                <div className="text-5xl font-bold gradient-text mb-2">3-5hrs</div>
                <p className="text-gray-400">Wasted daily<br />hunting data</p>
              </div>
            </div>

            <p className="text-xl text-gray-400">
              You're not building your business.<br />
              <span className="text-white font-semibold">You're building spreadsheets.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
              The Solution
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              One interface.<br />
              All your answers.
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-8 rounded-xl bento-card text-center">
                <div className="text-5xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
                <p className="text-gray-400">
                  Stripe. Shopify. CRM.<br />All your tools.
                </p>
              </div>
              <div className="glass-card p-8 rounded-xl bento-card text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-2">Ask</h3>
                <p className="text-gray-400">
                  Plain English.<br />No SQL required.
                </p>
              </div>
              <div className="glass-card p-8 rounded-xl bento-card text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Get Answers</h3>
                <p className="text-gray-400">
                  Seconds, not hours.<br />Always accurate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section - Bento Grid */}
      <section id="examples" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
              Real Questions. Real Answers.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Just ask.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-xl bento-card">
              <div className="gradient-text text-sm font-bold mb-4 uppercase tracking-wider">Sales</div>
              <p className="text-gray-300 text-lg mb-3">
                "Which deals are stuck for 2+ weeks?"
              </p>
              <p className="text-gray-300 text-lg mb-3">
                "Show me our close rate vs last quarter"
              </p>
              <p className="text-gray-300 text-lg">
                "Who are our top 10 customers?"
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl bento-card">
              <div className="gradient-text text-sm font-bold mb-4 uppercase tracking-wider">Revenue</div>
              <p className="text-gray-300 text-lg mb-3">
                "What's our MRR growth this month?"
              </p>
              <p className="text-gray-300 text-lg mb-3">
                "Which products have best margins?"
              </p>
              <p className="text-gray-300 text-lg">
                "Show me customer retention by cohort"
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl bento-card">
              <div className="gradient-text text-sm font-bold mb-4 uppercase tracking-wider">Operations</div>
              <p className="text-gray-300 text-lg mb-3">
                "Which projects are over budget?"
              </p>
              <p className="text-gray-300 text-lg mb-3">
                "Show me team capacity this week"
              </p>
              <p className="text-gray-300 text-lg">
                "What's blocking our Q1 launch?"
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl bento-card">
              <div className="gradient-text text-sm font-bold mb-4 uppercase tracking-wider">Marketing</div>
              <p className="text-gray-300 text-lg mb-3">
                "What's our CAC by channel?"
              </p>
              <p className="text-gray-300 text-lg mb-3">
                "Which campaigns drove revenue?"
              </p>
              <p className="text-gray-300 text-lg">
                "Show me conversion by traffic source"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live in 2 weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StepCard
              number="1"
              title="Discovery"
              description="30-min call. We map your data sources."
            />
            <StepCard
              number="2"
              title="Build"
              description="We connect everything. 1-2 weeks."
            />
            <StepCard
              number="3"
              title="Deploy"
              description="Install Claude Desktop. Train your team."
            />
            <StepCard
              number="4"
              title="Ask Away"
              description="Instant answers. All day. Every day."
            />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
              What's Included
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Everything you need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BenefitItem text="Custom backend built for your business" />
            <BenefitItem text="3-5 data sources connected" />
            <BenefitItem text="Domain intelligence included" />
            <BenefitItem text="Claude Desktop integration" />
            <BenefitItem text="Team training & docs" />
            <BenefitItem text="30 days support" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card gradient-border p-12 rounded-2xl relative overflow-hidden">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-amber-400/10"></div>

            {/* Urgency badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg glow-pulse">
                ⚡ Only 3 spots left
              </span>
            </div>

            <div className="mb-2 mt-4 relative">
              <span className="text-orange-300 text-sm font-semibold uppercase tracking-wider">
                Pilot Program
              </span>
            </div>

            <div className="text-6xl md:text-7xl font-bold text-white mb-2 relative">
              $5,000
            </div>

            <p className="text-gray-500 line-through mb-8 relative">
              Regular: $15,000
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 relative text-gray-300">
              <div>✓ 1-2 week delivery</div>
              <div>✓ No recurring fees</div>
              <div>✓ You own it</div>
              <div>✓ 30 days support</div>
            </div>

            <a
              href="https://cal.com/arnaldodelisio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white font-bold text-lg rounded-lg neon-button relative"
            >
              Claim Your Spot →
            </a>

            <p className="text-sm text-gray-400 mt-6 relative">
              🔥 2 companies already onboarded
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">
              Is This You?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Built for operators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-xl bento-card">
              <h3 className="text-xl font-bold gradient-text mb-6">
                Company Profile
              </h3>
              <div className="space-y-3 text-gray-300 text-lg">
                <p>10-100 employees</p>
                <p>$1M-$20M revenue</p>
                <p>Data in 3+ systems</p>
                <p>Tired of dashboard hell</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl bento-card">
              <h3 className="text-xl font-bold gradient-text mb-6">
                You're a fit if:
              </h3>
              <div className="space-y-3 text-gray-300 text-lg">
                <p>E-commerce / DTC brand</p>
                <p>B2B SaaS company</p>
                <p>Agency or services firm</p>
                <p>"Checking the numbers" = 30 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Questions?
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="Is our data secure?"
              answer="Yes. Your backend runs on your infrastructure. We never see your data."
            />
            <FAQItem
              question="What tools can you connect?"
              answer="Stripe, Shopify, Salesforce, HubSpot, PostgreSQL, Airtable, Google Analytics. Custom connectors on request."
            />
            <FAQItem
              question="How is this different from Tableau?"
              answer="No dashboards. No SQL. Ask questions, get answers. 1-2 weeks vs 3-6 months."
            />
            <FAQItem
              question="Can it answer unprogrammed questions?"
              answer="Yes. Claude reasons about your data. Not just pre-built queries."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card gradient-border p-12 rounded-2xl relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/10 to-amber-400/10"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative leading-tight">
              Stop hunting.<br />
              Start asking.
            </h2>

            <p className="text-xl text-gray-300 mb-8 relative">
              30-minute call. See if we're a fit.
            </p>

            <a
              href="https://cal.com/arnaldodelisio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 text-white font-bold text-lg rounded-lg neon-button relative"
            >
              Book Discovery Call →
            </a>

            <p className="text-sm text-gray-400 mt-6 relative">
              Free • No commitment • 30 minutes
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
    <div className="glass-card p-6 rounded-xl bento-card group text-center">
      <span className="text-green-400 text-3xl block mb-3">✓</span>
      <span className="text-gray-300 group-hover:text-white transition-colors text-lg">{text}</span>
    </div>
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
