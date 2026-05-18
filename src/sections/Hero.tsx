import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 18%, #f0fdf4 30%, #ffffff 48%, #f5f3ff 68%, #ede9fe 82%, #ddd6fe 100%)"
      }}
    >
      {/* Sparkle / Star - top right */}
      <div className="absolute top-20 right-10 md:right-24 pointer-events-none">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L26.5 21.5L44 24L26.5 26.5L24 44L21.5 26.5L4 24L21.5 21.5L24 4Z" fill="#6366f1" fillOpacity="0.7"/>
        </svg>
      </div>

      {/* Small sparkle - top left area */}
      <div className="absolute top-36 left-16 pointer-events-none opacity-60">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L11 9L18 10L11 11L10 18L9 11L2 10L9 9L10 2Z" fill="#10b981"/>
        </svg>
      </div>

      {/* Decorative swirl lines - top left */}
      <div className="absolute left-0 top-16 w-40 h-48 pointer-events-none opacity-50">
        <svg viewBox="0 0 160 200" className="w-full h-full" fill="none">
          <path d="M40,180 Q10,140 30,100 Q50,60 20,20" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M60,190 Q30,150 50,110 Q70,70 40,30" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M20,160 Q-10,120 10,80 Q30,40 5,5" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round" fill="none" strokeDasharray="4 6"/>
        </svg>
      </div>

      {/* Geometric hexagon outlines - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-48 md:w-72 pointer-events-none opacity-20">
        <svg viewBox="0 0 280 800" className="w-full h-full" fill="none">
          <polygon points="200,80 240,105 240,155 200,180 160,155 160,105" stroke="#6366f1" strokeWidth="1.5"/>
          <polygon points="230,220 270,245 270,295 230,320 190,295 190,245" stroke="#8b5cf6" strokeWidth="1"/>
          <polygon points="170,380 210,405 210,455 170,480 130,455 130,405" stroke="#6366f1" strokeWidth="1.5"/>
          <polygon points="240,520 280,545 280,595 240,620 200,595 200,545" stroke="#06b6d4" strokeWidth="1"/>
          <polygon points="190,660 230,685 230,735 190,760 150,735 150,685" stroke="#6366f1" strokeWidth="1"/>
        </svg>
      </div>

      {/* Geometric hexagon outlines - left side bottom */}
      <div className="absolute left-0 bottom-40 w-32 pointer-events-none opacity-15">
        <svg viewBox="0 0 120 200" className="w-full h-full" fill="none">
          <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" stroke="#10b981" strokeWidth="1.5"/>
          <polygon points="40,130 75,150 75,190 40,210 5,190 5,150" stroke="#6366f1" strokeWidth="1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-36 pb-10 px-4 text-center">
        {/* Badge */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Soluções em Tecnologia</span>
          <div className="w-10 h-0.5 bg-linear-to-r from-primary to-cyan-500 rounded-full" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6 max-w-3xl">
          Nossa Solução em Software para Simplificar
          <br />
          Suas{" "}
          <span
            className="text-transparent bg-clip-text bg-linear-to-r from-primary to-violet-500"
            style={{ fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Operações
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Desenvolvemos software sob medida e soluções de automação para otimizar
          processos e acelerar o crescimento da sua empresa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            {siteConfig.cta.primary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all bg-white/60 backdrop-blur-sm"
          >
            {siteConfig.cta.secondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-0">
        <div className="relative rounded-t-2xl overflow-hidden shadow-2xl shadow-gray-400/30 border border-gray-200/60 bg-white">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"/>
              <div className="w-3 h-3 rounded-full bg-yellow-400"/>
              <div className="w-3 h-3 rounded-full bg-green-400"/>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 rounded-md h-5 w-48 mx-auto"/>
            </div>
          </div>

          {/* App UI */}
          <div className="flex h-72 md:h-96">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50 border-r border-gray-100 p-4 flex flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-violet-500"/>
                <div className="h-3 w-20 bg-gray-300 rounded"/>
              </div>
              {[{ active: true }, { active: false }, { active: false }, { active: false }, { active: false }].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 px-2 py-2 rounded-lg ${item.active ? "bg-primary/10" : ""}`}>
                  <div className={`w-4 h-4 rounded ${item.active ? "bg-primary" : "bg-gray-200"}`}/>
                  <div className={`h-2.5 rounded ${item.active ? "bg-primary/50 w-20" : "bg-gray-200 w-16"}`}/>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-5 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="h-3 w-32 bg-gray-800 rounded mb-1.5"/>
                  <div className="h-2.5 w-24 bg-gray-300 rounded"/>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-teal-500"/>
                  <div>
                    <div className="h-2.5 w-20 bg-gray-700 rounded mb-1"/>
                    <div className="h-2 w-16 bg-gray-300 rounded"/>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { color: "from-primary to-violet-500", label: "10+", sub: "Projetos ativos" },
                  { color: "from-emerald-400 to-teal-500", label: "98%", sub: "Satisfação" },
                  { color: "from-amber-400 to-orange-500", label: "24h", sub: "Suporte" },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className={`text-lg font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 9
                          ? "linear-gradient(to top, #6366f1, #8b5cf6)"
                          : "linear-gradient(to top, #e0e7ff, #c7d2fe)"
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["S","M","T","W","T","F","S","M","T","F"].map((d, i) => (
                    <span key={i} className="text-[10px] text-gray-400 flex-1 text-center">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel - Recent Projects */}
            <div className="w-56 border-l border-gray-100 p-4 hidden md:block shrink-0">
              <div className="h-3 w-28 bg-gray-700 rounded mb-4"/>
              {[
                { color: "bg-primary", name: "Automação ERP", status: "Ativo", paid: true },
                { color: "bg-emerald-500", name: "E-commerce API", status: "Revisão", paid: false },
                { color: "bg-violet-500", name: "Dashboard BI", status: "Entregue", paid: true },
              ].map((proj, i) => (
                <div key={i} className="flex items-center gap-2 py-2.5 border-b border-gray-50 last:border-0">
                  <div className={`w-6 h-6 rounded-md ${proj.color} shrink-0`}/>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-700 truncate">{proj.name}</div>
                    <div className="text-[10px] text-gray-400">{proj.status}</div>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${proj.paid ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}>
                    {proj.paid ? "Pago" : "Pendente"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
