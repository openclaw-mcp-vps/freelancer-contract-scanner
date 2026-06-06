export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Contract Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Contracts for{' '}
          <span className="text-[#58a6ff]">Dangerous Clauses</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your freelance contract and our AI flags IP ownership traps, non-competes, payment risks, and liability issues — before you sign.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $9/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            ['IP Ownership', 'Who owns your work?'],
            ['Non-Competes', 'Are you locked out?'],
            ['Payment Terms', 'When do you get paid?'],
            ['Liability', 'What are you liable for?'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            ['1', 'Upload PDF', 'Drop your contract PDF into the secure scanner.'],
            ['2', 'AI Analysis', 'Our AI reads every clause and scores risk levels.'],
            ['3', 'Get Report', 'Receive a detailed report with flagged issues and plain-English explanations.'],
          ].map(([step, title, desc]) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract scans',
              'IP ownership detection',
              'Non-compete flagging',
              'Payment terms analysis',
              'Liability risk scoring',
              'Plain-English summaries',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'Is my contract data kept private?',
              'Yes. Contracts are processed securely and never stored or shared. Each scan is ephemeral.',
            ],
            [
              'What file formats are supported?',
              'We support PDF files. Most contracts are sent as PDFs, so this covers the vast majority of use cases.',
            ],
            [
              'Is this legal advice?',
              'No. This tool highlights risky clauses for your awareness. Always consult a qualified attorney for legal decisions.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs py-8 border-t border-[#21262d]">
        &copy; {new Date().getFullYear()} Freelancer Contract Scanner. Not legal advice.
      </footer>
    </main>
  );
}
