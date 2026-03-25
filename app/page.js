import RevealSection from "../components/reveal-section";
import TypewriterText from "../components/typewriter-text";

const whatsappNumber = "554199668767";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Obras", href: "#obras" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  {
    value: "Atendimento no PR",
    label: "Cobertura comercial com foco em obras no Paraná.",
    icon: "map",
  },
  {
    value: "4 soluções-chave",
    label: "Estruturas metálicas, pré-moldados, barracões e lajes.",
    icon: "grid",
  },
  {
    value: "Prazo + execução",
    label: "Decisões orientadas para velocidade, segurança e resultado.",
    icon: "bolt",
  },
];

const services = [
  {
    eyebrow: "Estruturas metálicas",
    title: "Projetos para quem precisa ganhar escala com segurança.",
    description:
      "Executamos estruturas metálicas para galpões, centros de distribuição, ampliações e áreas produtivas com foco em resistência, organização da obra e previsibilidade de prazo.",
    bullets: [
      "Projeto, fabricação e montagem",
      "Obras para comércio, indústria e armazenagem",
      "Solução pensada para crescimento operacional",
    ],
    message: "Quero um orçamento de estrutura metálica com a GM Obras",
    icon: "structure",
  },
  {
    eyebrow: "Pré-moldados",
    title: "Construção mais rápida para acelerar a entrega da sua operação.",
    description:
      "Os sistemas pré-moldados da GM Obras reduzem etapas, melhoram o controle da execução e ajudam empresas que precisam construir rápido sem abrir mão da qualidade estrutural.",
    bullets: [
      "Execução ágil e limpa",
      "Melhor controle de cronograma",
      "Ideal para obras com urgência de entrada em operação",
    ],
    message: "Quero construir rápido com a GM Obras",
    icon: "layers",
  },
  {
    eyebrow: "Barracões e galpões",
    title: "Espaços produtivos desenhados para fluxo, estoque e expansão.",
    description:
      "Desenvolvemos barracões e galpões com foco na rotina real do cliente, considerando armazenagem, logística, circulação de equipamentos e necessidade de ampliação futura.",
    bullets: [
      "Soluções para indústria, armazém e comércio",
      "Estrutura preparada para uso intenso",
      "Acompanhamento técnico durante a execução",
    ],
    message: "Quero falar sobre um barracão/galpão com a GM Obras",
    icon: "warehouse",
  },
  {
    eyebrow: "Lajes pré-moldadas",
    title: "Mais agilidade na obra sem sacrificar acabamento ou desempenho.",
    description:
      "A GM Obras atua com lajes pré-moldadas para obras que buscam produtividade, padronização de execução e excelente aproveitamento do tempo no canteiro.",
    bullets: [
      "Fabricação, fornecimento e montagem",
      "Aplicação em obras de diferentes portes",
      "Solução eficiente para acelerar etapas da construção",
    ],
    message: "Quero orçamento de laje com a GM Obras",
    icon: "slab",
  },
  {
    eyebrow: "Construção de residências",
    title: "Do terreno ao acabamento final com apoio técnico e arquitetônico.",
    description:
      "A GM Obras atua na construção de residências com uma jornada completa, passando pela escrituração do terreno, desenvolvimento de planta, execução da obra e apoio em decoração com arquitetos.",
    bullets: [
      "Suporte desde a regularização e documentação inicial",
      "Projeto, planta e execução com acompanhamento especializado",
      "Decoração e definição de ambientes com apoio de arquitetos",
    ],
    message: "Quero falar sobre construção de residência com a GM Obras",
    icon: "home-build",
  },
  {
    eyebrow: "Reformas",
    title: "Reformas de pequeno, médio e grande porte para diferentes tipos de imóveis.",
    description:
      "Executamos reformas com planejamento, organização e visão prática de obra para imóveis residenciais, comerciais e corporativos, sempre buscando mais funcionalidade, atualização e valorização do espaço.",
    bullets: [
      "Reformas para imóveis residenciais, comerciais e corporativos",
      "Atuação em intervenções pequenas, médias e de grande porte",
      "Execução pensada para melhorar estética, uso e desempenho do imóvel",
    ],
    message: "Quero falar sobre uma reforma com a GM Obras",
    icon: "renovation",
  },
];

const highlights = [
  {
    title: "Planejamento que reduz improviso",
    text: "Cada obra nasce com leitura real de prazo, escopo e capacidade de execução para evitar atrasos e retrabalho.",
    icon: "compass",
  },
  {
    title: "Equipe orientada à entrega",
    text: "A GM Obras trabalha com foco na solução completa: atendimento, organização da obra e clareza comercial.",
    icon: "target",
  },
  {
    title: "Soluções adaptadas à necessidade da obra",
    text: "Cada projeto é pensado de acordo com o uso do espaço, o porte da operação e as exigências técnicas de cada cliente.",
    icon: "spark",
  },
  {
    title: "Qualidade com visão de longo prazo",
    text: "A execução busca resistência, funcionalidade e melhor aproveitamento do investimento para entregar obras mais duráveis e eficientes.",
    icon: "search",
  },
];

const testimonials = [
  {
    quote:
      "Precisávamos de velocidade para colocar a operação em andamento, e a GM Obras passou segurança desde o primeiro contato.",
    author: "Cliente industrial",
  },
  {
    quote:
      "A condução da obra foi objetiva, com linguagem clara e foco total em prazo, estrutura e viabilidade.",
    author: "Cliente comercial",
  },
  {
    quote:
      "A proposta da GM Obras faz sentido para quem precisa construir com mais previsibilidade e menos retrabalho.",
    author: "Cliente de expansão",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Briefing e leitura da operação",
    text: "Mapeamos a necessidade da obra, o uso do espaço e os pontos críticos para propor a melhor solução.",
    icon: "chat",
  },
  {
    step: "2",
    title: "Orçamento e direção técnica",
    text: "Alinhamos investimento, prazos, formato construtivo e prioridade comercial com transparência.",
    icon: "document",
  },
  {
    step: "3",
    title: "Planejamento e execução",
    text: "A obra avança com cronograma, organização de frente de trabalho e acompanhamento constante.",
    icon: "build",
  },
  {
    step: "4",
    title: "Entrega com foco em desempenho",
    text: "O objetivo final é entregar uma estrutura que funcione na rotina do cliente e sustente crescimento.",
    icon: "flag",
  },
];

const faqItems = [
  {
    question: "A GM Obras atende apenas Rio Branco do Sul?",
    answer:
      "Não. A GM Obras atende toda a região Sul e Sudeste do Brasil, mantendo Rio Branco do Sul como base institucional.",
  },
  {
    question: "Quais tipos de obra a GM Obras prioriza?",
    answer:
      "A GM Obras atua com barracões, galpões, estruturas metálicas, pré-moldados, lajes, construção de casas e reformas em geral para clientes residenciais, comerciais e industriais.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "O fluxo principal foi desenhado para WhatsApp, com mensagens prontas por serviço para agilizar o atendimento e levar a conversa para um orçamento real.",
  },
  {
    question: "A GM Obras trabalha com obras rápidas?",
    answer:
      "Sim. A proposta comercial destaca soluções que ajudam a reduzir etapas, organizar melhor o cronograma e acelerar a entrada em operação.",
  },
  {
    question: "A GM Obras aceita carta de consórcio?",
    answer:
      "Sim. A GM Obras aceita carta de consórcio, desde que ela esteja contemplada.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  name: "GM Obras",
  description:
    "Construtora no Paraná com foco em estruturas metálicas, pré-moldados, barracões, galpões e lajes para empresas, comércios e indústrias.",
  areaServed: "Paraná, Brasil",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio Branco do Sul",
    addressRegion: "PR",
    streetAddress: "PR-092, Papanduva",
    addressCountry: "BR",
  },
  email: "engenhariagm51@gmail.com",
  telephone: "+55 41 9966-8767",
  sameAs: [
    "https://web.facebook.com/profile.php?id=61575807191335",
    "https://www.instagram.com/gm_engenhariaart?igsh=Ync4bWFzand4eXVu",
  ],
};

function createWhatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Icon({ name }) {
  const icons = {
    map: <path d="M4 7.5 10 4l4 3 6-3v12.5L14 20l-4-3-6 3V7.5Z M10 4v13M14 7v13" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    grid: <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />,
    bolt: <path d="M13 2 6 12h5l-1 10 8-12h-5l0-8Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    structure: <path d="M4 19h16M7 19V7l5-3 5 3v12M7 10h10M7 14h10" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    layers: <path d="m12 4 8 4-8 4-8-4 8-4Zm-8 8 8 4 8-4M4 16l8 4 8-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    warehouse: <path d="M3 10 12 4l9 6v9a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-9Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    slab: <path d="M4 9h16M6 9V6h12v3M5 9v9h14V9M8 13h8M8 16h5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    "home-build": <path d="M4 11 12 4l8 7v9H4v-9Zm5 9v-5h6v5M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    renovation: <path d="m14 4 6 6M16 2l2 2-9 9-3 1 1-3 9-9ZM4 20h7M14 14l4 4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    compass: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm4-13-2.7 6.3L7 17l2.7-6.3L16 8Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    target: <path d="M12 3v4M21 12h-4M12 21v-4M3 12h4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 0 6 6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    spark: <path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    search: <path d="M11 19a8 8 0 1 1 5.3-14A8 8 0 0 1 11 19Zm10 2-4.35-4.35" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    chat: <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    document: <path d="M8 3h6l5 5v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 0v5h5M9 13h6M9 17h6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    build: <path d="m14 4 6 6M16 2l2 2-9 9-3 1 1-3 9-9ZM5 19h14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    flag: <path d="M6 21V4m0 0h11l-2 3 2 3H6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />,
    whatsapp: <path d="M20 11.5A8.5 8.5 0 0 1 7.4 19L3 20l1.1-4.2A8.5 8.5 0 1 1 20 11.5Zm-4.1 2.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1a5.9 5.9 0 0 1-1.7-1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4l-.7-1.6c-.2-.3-.3-.3-.5-.3h-.4a.8.8 0 0 0-.6.3c-.2.3-.8.8-.8 2s.8 2.2 1 2.4c.1.2 1.5 2.4 3.8 3.2.5.2 1 .3 1.3.4.6.2 1.1.1 1.5.1.5-.1 1.2-.5 1.4-1 .2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />,
  };

  return (
    <span className="icon-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[name] ?? icons.arrow}</svg>
    </span>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="card-topline">
        <Icon name={service.icon} />
        <p className="eyebrow">{service.eyebrow}</p>
      </div>
      <h3>{service.title}</h3>
      <p className="service-copy">{service.description}</p>
      <ul className="service-list">
        {service.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="button button-secondary" href={createWhatsappUrl(service.message)} target="_blank" rel="noreferrer">
        {service.message}
      </a>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">GM</span>
          <span>
            <strong>GM Obras</strong>
            <small>Construção com foco em prazo, estrutura e confiança</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href={createWhatsappUrl("Quero um orçamento da GM Obras")} target="_blank" rel="noreferrer">
          Pedir orçamento
        </a>
      </header>

      <section className="hero section" id="top">
        <RevealSection className="hero-copy">
          <p className="eyebrow">Construtora no Paraná para obras que exigem velocidade e estrutura</p>
          <h1>
            <TypewriterText
              text="Estrutura certa para quem quer construir com agilidade, presença e confiança."
              speed={72}
              startDelay={240}
            />
          </h1>
          <p className="hero-text">
            Soluções em estruturas metálicas, pré-moldados, barracões e lajes para empresas que precisam tirar a obra do papel com mais organização, desempenho e segurança.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={createWhatsappUrl("Quero um orçamento da GM Obras")} target="_blank" rel="noreferrer">
              Quero um orçamento da GM Obras
            </a>
            <a className="button button-ghost" href="#servicos">
              Ver serviços em destaque
            </a>
          </div>

          <div className="hero-points" aria-label="Pontos fortes da GM Obras">
            <span>Estruturas metálicas</span>
            <span>Pré-moldados</span>
            <span>Barracões e galpões</span>
            <span>Lajes pré-moldadas</span>
          </div>
        </RevealSection>

        <RevealSection className="hero-media" delay="0.18s">
          <div className="video-shell">
            <video className="hero-video" autoPlay loop muted playsInline preload="metadata" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23cdbba7'/%3E%3Cstop offset='1' stop-color='%23738b7c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='900' fill='url(%23g)'/%3E%3C/svg%3E">
              <source src="/api/video/video1" type="video/mp4" />
            </video>
          </div>
        </RevealSection>
      </section>

      <section className="trust-strip section">
        <RevealSection className="trust-grid">
          {stats.map((stat) => (
            <div className="trust-card" key={stat.value}>
              <div className="card-topline">
                <Icon name={stat.icon} />
              </div>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </RevealSection>
      </section>

      <section className="section about-section" id="sobre">
        <RevealSection className="section-heading">
          <p className="eyebrow">Quem é a GM Obras</p>
          <h2>Uma construtora preparada para atender com mais clareza, rapidez e visão de operação.</h2>
        </RevealSection>

        <RevealSection className="about-grid" delay="0.12s">
          <div className="about-panel">
            <p>A GM Obras atende empresas, comércios e indústrias que precisam construir com segurança, leitura técnica e acompanhamento próximo do início ao fim da obra.</p>
            <p>O posicionamento foi pensado para valorizar o que mais pesa na decisão do cliente: prazo, organização, solução adequada, resistência estrutural e confiança comercial.</p>
          </div>
          <div className="about-panel emphasis">
            <Icon name="target" />
            <span>Posicionamento principal</span>
            <strong>Obras rápidas com estrutura metálica, pré-moldados e foco em resultado.</strong>
          </div>
        </RevealSection>
      </section>

      <section className="section services-section" id="servicos">
        <RevealSection className="section-heading">
          <p className="eyebrow">Serviços principais</p>
          <h2>Soluções pensadas para entregar agilidade, estrutura e desempenho em cada tipo de obra.</h2>
        </RevealSection>

        <div className="services-grid">
          {services.map((service, index) => (
            <RevealSection key={service.title} delay={`${0.08 * (index + 1)}s`}>
              <ServiceCard service={service} />
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="section highlights-section" id="diferenciais">
        <RevealSection className="section-heading">
          <p className="eyebrow">Por que escolher a GM Obras</p>
          <h2>Diferenciais que reforçam confiança, organização da obra e segurança na tomada de decisão.</h2>
        </RevealSection>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <RevealSection className="highlight-card" key={item.title} delay={`${0.08 * (index + 1)}s`}>
              <div className="card-topline">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="section showcase-section" id="obras">
        <RevealSection className="section-heading">
          <p className="eyebrow">Prova social</p>
          <h2>Espaço para obras, depoimentos e segmentos atendidos de forma mais visual e marcante.</h2>
        </RevealSection>

        <div className="showcase-layout">
          <RevealSection className="gallery-panel">
            <div className="gallery-card large">
              <span>Obra em destaque 01</span>
              <strong>Espaço para foto real de barracão, galpão ou estrutura metálica.</strong>
            </div>
            <div className="gallery-row">
              <div className="gallery-card">
                <span>Obra em destaque 02</span>
                <strong>Imagem de pré-moldado</strong>
              </div>
              <div className="gallery-card">
                <span>Obra em destaque 03</span>
                <strong>Imagem de laje ou montagem</strong>
              </div>
            </div>
          </RevealSection>

          <div className="testimonials-stack">
            {testimonials.map((item, index) => (
              <RevealSection className="testimonial-card" key={item.author + index} delay={`${0.08 * (index + 1)}s`}>
                <div className="card-topline">
                  <Icon name="spark" />
                </div>
                <p>"{item.quote}"</p>
                <strong>{item.author}</strong>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <RevealSection className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Um processo claro para transformar contato em orçamento, execução e entrega.</h2>
        </RevealSection>

        <div className="process-grid">
          {processSteps.map((item, index) => (
            <RevealSection className="process-card" key={item.step} delay={`${0.08 * (index + 1)}s`}>
              <div className="process-step">
                <Icon name={item.icon} />
              </div>
              <span className="process-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="section coverage-section" id="cobertura">
        <RevealSection className="section-heading">
          <p className="eyebrow">Cobertura e presença regional</p>
          <h2>Presença regional com capacidade para atender obras em diferentes localidades e perfis de projeto.</h2>
        </RevealSection>

        <RevealSection className="coverage-card" delay="0.12s">
          <div className="card-topline">
            <Icon name="map" />
          </div>
          <p>A GM Obras se apresenta como uma construtora preparada para atender clientes em toda a região Sul e Sudeste do Brasil, com base institucional em Rio Branco do Sul e atuação orientada para demandas de empresas, comércios, armazéns, indústrias e projetos residenciais.</p>
        </RevealSection>
      </section>

      <section className="section faq-section" id="faq">
        <RevealSection className="section-heading">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Dúvidas respondidas de forma direta para dar mais confiança e acelerar o contato.</h2>
        </RevealSection>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <RevealSection key={item.question} delay={`${0.08 * (index + 1)}s`}>
              <details className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <Icon name="arrow" />
                </summary>
                <p>{item.answer}</p>
              </details>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <RevealSection className="cta-card">
          <div className="card-topline">
            <Icon name="whatsapp" />
            <p className="eyebrow">Vamos tirar sua obra do papel</p>
          </div>
          <h2>Fale com a GM Obras e receba um atendimento mais direto, comercial e preparado para a sua realidade.</h2>
          <p>Se você precisa construir com mais rapidez, mais segurança e mais clareza no processo, o próximo passo é conversar com a GM Obras agora.</p>
          <a className="button button-primary" href={createWhatsappUrl("Quero atendimento e orçamento da GM Obras")} target="_blank" rel="noreferrer">
            Quero atendimento e orçamento da GM Obras
          </a>
        </RevealSection>
      </section>

      <footer className="site-footer">
        <div>
          <strong>GM Obras</strong>
          <p>PR-092, Papanduva, Rio Branco do Sul - PR</p>
          <p>Seg. a Sex., das 09:00 às 18:00</p>
        </div>
        <div>
          <a href="mailto:engenhariagm51@gmail.com">engenhariagm51@gmail.com</a>
          <a href="tel:+554199668767">(41) 9966-8767</a>
          <a href={createWhatsappUrl("Quero um orçamento da GM Obras")} target="_blank" rel="noreferrer">
            WhatsApp GM Obras
          </a>
        </div>
      </footer>
    </main>
  );
}
