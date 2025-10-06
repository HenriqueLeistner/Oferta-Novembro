import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const bonuses = [
  {
    icon: "fas fa-book",
    title: "Guia Completo de Bronzeamento",
    description: "E-book com todas as técnicas profissionais para bronzear com segurança e resultados incríveis.",
    value: "R$ 9,90"
  },
  {
    icon: "fas fa-video",
    title: "Masterclass Marquinha Perfeita",
    description: "Vídeo-aulas exclusivas com especialistas ensinando técnicas avançadas de bronzeamento.",
    value: "R$ 12,00"
  },
  {
    icon: "fas fa-spa",
    title: "Receitas de Hidratantes Caseiros",
    description: "Aprenda a fazer seus próprios produtos naturais para prolongar o bronzeado.",
    value: "R$ 4,90"
  },
  {
    icon: "fas fa-utensils",
    title: "Plano Alimentar Pro-Bronze",
    description: "Dieta específica com alimentos que potencializam o bronzeado natural da pele.",
    value: "R$ 8,90"
  },
  {
    icon: "fas fa-clock",
    title: "Cronograma Personalizado",
    description: "Plano de bronzeamento sob medida baseado no seu tipo de pele e objetivo.",
    value: "R$ 6,50"
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Mapa dos Melhores Locais",
    description: "Descubra os pontos ideais para bronzear na sua cidade com avaliações da comunidade.",
    value: "R$ 3,90"
  },
  {
    icon: "fas fa-first-aid",
    title: "Guia SOS Pele Queimada",
    description: "Aprenda a tratar e recuperar rapidamente de queimaduras solares.",
    value: "R$ 5,90"
  },
  {
    icon: "fas fa-tshirt",
    title: "Guia de Trajes para Marquinha",
    description: "Saiba exatamente quais trajes usar para conseguir cada tipo de marquinha.",
    value: "R$ 4,90"
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Calendário Lunar do Bronze",
    description: "Aproveite as fases da lua para potencializar seus resultados de bronzeamento.",
    value: "R$ 3,50"
  },
  {
    icon: "fas fa-comments",
    title: "Grupo VIP no WhatsApp",
    description: "Acesso exclusivo ao grupo com dicas diárias, desafios e suporte em tempo real.",
    value: "R$ 6,60"
  }
];

export default function BonusesSection() {
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
            Bônus Exclusivos Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ao escolher o plano Premium, você recebe <span className="font-bold text-accent">R$ 67,00</span> em conteúdos e ferramentas exclusivas inclusos!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="border border-border shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`bonus-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <i className={`${bonus.icon} text-white text-xl`}></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2" data-testid={`bonus-title-${index}`}>
                        {bonus.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2" data-testid={`bonus-description-${index}`}>
                        {bonus.description}
                      </p>
                      <p className="text-accent font-semibold text-sm" data-testid={`bonus-value-${index}`}>
                        Valor: {bonus.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8" data-testid="bonus-total-value">
            <p className="text-2xl font-bold mb-2">
              Valor Total dos Bônus: <span className="text-accent">R$ 67,00</span>
            </p>
            <p className="text-muted-foreground">
              Tudo isso incluído no Plano Premium por apenas <span className="font-bold text-foreground">R$ 27,90</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
