import { motion } from "framer-motion";

export default function HowToReceiveSection() {
  const steps = [
    {
      number: "1️⃣",
      title: "Acesso Imediato Após a Compra",
      description:
        "Assim que seu pagamento for confirmado, você receberá um link exclusivo por e-mail para acessar o aplicativo App Marquinha Perfeita. Nada de esperar — o acesso é liberado na hora!",
    },
    {
      number: "2️⃣",
      title: "Instalação Simples (Sem Play Store ou App Store)",
      description:
        "Nosso aplicativo é um PWA (Progressive Web App) — isso significa que você instala direto pelo navegador, em segundos:",
      steps: [
        "Basta abrir o link no seu celular",
        'Tocar em "Adicionar à Tela Inicial"',
        "Pronto! O app vai aparecer como um aplicativo normal no seu celular.",
      ],
      note: "Funciona tanto em Android quanto em iPhone (iOS).",
    },
    {
      number: "3️⃣",
      title: "Use Online ou Offline",
      description:
        "Depois de instalado, você pode usar o app mesmo sem internet — perfeito para levar para a praia ou piscina! Todo o conteúdo fica salvo e disponível a qualquer hora.",
    },
    {
      number: "4️⃣",
      title: "Atualizações Automáticas",
      description:
        "Sempre que novas versões ou conteúdos forem lançados (como receitas, bônus e guias extras), o app será atualizado automaticamente, sem precisar reinstalar.",
    },
  ];

  const summaryItems = [
    "Receba o acesso imediatamente",
    "Instale com 1 clique no celular",
    "Funciona em Android e iPhone",
    "Pode usar até offline",
    "Atualizações automáticas",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 gradient-text">
              📱 Como Vou Receber Meu Aplicativo?
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{step.number}</div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl lg:text-2xl mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    {step.steps && (
                      <ul className="space-y-2 mb-3">
                        {step.steps.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">👉</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.note && (
                      <p className="text-sm font-semibold text-primary">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-10 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6 text-center">
              💎 Resumo:
            </h3>
            <div className="space-y-3">
              {summaryItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-lg text-white/95">✅ {item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
