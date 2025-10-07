import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const bonuses = [
  {
    icon: "fas fa-check-circle",
    title: "Checklist da Marquinha Perfeita",
    description: "Um passo a passo simples e prático para seguir antes, durante e depois de pegar sol.",
    value: "R$ 4,90"
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Calendário de Exposição ao Sol",
    description: "Um cronograma com os melhores horários e dias para tomar sol sem prejudicar a pele.",
    value: "R$ 6,50"
  },
  {
    icon: "fas fa-leaf",
    title: "Receitas de Bronzeamento Caseiro",
    description: "Misturinhas naturais (com cenoura, beterraba, óleo de coco, etc.) para potencializar o bronze.",
    value: "R$ 7,90"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Guia de Proteção Inteligente",
    description: "Dicas de como usar protetor solar do jeito certo sem perder o bronzeado.",
    value: "R$ 5,90"
  },
  {
    icon: "fas fa-tag",
    title: "Lista de Produtos Baratinhos que Funcionam",
    description: "Sugestões acessíveis de óleos, cremes e loções que ajudam na marquinha.",
    value: "R$ 4,50"
  },
  {
    icon: "fas fa-dumbbell",
    title: "Roteiro de Alongamentos na Praia",
    description: "Exercícios simples para deixar o corpo mais relaxado e a marquinha ainda mais bonita.",
    value: "R$ 3,90"
  },
  {
    icon: "fas fa-blender",
    title: "Receitas Detox Pós-Sol",
    description: "Bebidas rápidas para hidratar e recuperar a pele depois de um dia de sol.",
    value: "R$ 5,50"
  },
  {
    icon: "fas fa-medal",
    title: "Mini-Guia de Pós-Bronze",
    description: "Como manter a marquinha por mais tempo com cuidados diários.",
    value: "R$ 6,90"
  },
  {
    icon: "fas fa-umbrella-beach",
    title: "Checklist de Itens para Praia/Piscina",
    description: "Lista pronta para não esquecer nada (biquíni certo, canga, chapéu, óculos, protetor, etc.).",
    value: "R$ 3,90"
  },
  {
    icon: "fas fa-trophy",
    title: "Desafio 7 Dias da Marquinha Perfeita",
    description: "Um pequeno desafio com tarefas diárias para acelerar os resultados e engajar a leitora.",
    value: "R$ 8,00"
  }
];

export default function BonusesSection() {
  return (
    <section id="bonuses-section" className="py-20 bg-background">
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
            Ao escolher o plano Premium, você recebe <span className="font-bold text-accent">R$ 57,90</span> em conteúdos e ferramentas exclusivas inclusos!
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
              Valor Total dos Bônus: <span className="text-accent">R$ 57,90</span>
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
