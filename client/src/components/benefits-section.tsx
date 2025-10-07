import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "fas fa-calendar-check",
    title: "Planejamento Inteligente",
    description: "Receba lembretes personalizados para seus horários de sol, garantindo exposição solar segura e eficaz."
  },
  {
    icon: "fas fa-chart-line",
    title: "Acompanhamento de Progresso",
    description: "Monitore a evolução do seu bronzeado com fotos comparativas e relatórios detalhados."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Proteção & Segurança",
    description: "Recomendações de FPS ideais baseadas no seu tipo de pele e índice UV do dia."
  },
  {
    icon: "fas fa-sun",
    title: "Dicas Exclusivas",
    description: "Acesso a guias completos sobre técnicas de bronzeamento e cuidados pós-sol."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Interface Intuitiva",
    description: "Design simples e fácil de usar, pensado especialmente para você não perder tempo."
  },
  {
    icon: "fas fa-users",
    title: "Comunidade Ativa",
    description: "Conecte-se com outras usuárias, compartilhe dicas e conquistas na nossa comunidade."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 gradient-text">
            Por Que Escolher o App Marquinha Perfeita?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforme sua rotina de bronzeamento com tecnologia e expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border border-border shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`benefit-card-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${benefit.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3" data-testid={`benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
