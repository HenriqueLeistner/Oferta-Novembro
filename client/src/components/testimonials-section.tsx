import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marina Silva",
    text: "Finalmente consegui a marquinha perfeita que sempre quis! O app me ajudou a planejar tudo certinho e os lembretes são perfeitos. Recomendo demais!",
    gradient: "from-primary to-accent"
  },
  {
    name: "Júlia Costa",
    text: "Os bônus do plano Premium são incríveis! O guia de alimentação e as receitas de hidratantes caseiros fizeram toda a diferença no meu bronzeado.",
    gradient: "from-orange-400 to-pink-400"
  },
  {
    name: "Fernanda Santos",
    text: "Nunca achei que um app poderia facilitar tanto minha vida! Agora sei exatamente quando e como tomar sol. A comunidade também é muito acolhedora!",
    gradient: "from-amber-400 to-orange-400"
  },
  {
    name: "Camila Oliveira",
    text: "É motivador ver a evolução semana a semana. Vale cada centavo!",
    gradient: "from-pink-400 to-rose-400"
  },
  {
    name: "Beatriz Almeida",
    text: "Sempre tive medo de queimar a pele, mas com as dicas de FPS do app, consigo bronzear com total segurança. Mudou minha relação com o sol!",
    gradient: "from-rose-400 to-pink-500"
  },
  {
    name: "Larissa Mendes",
    text: "Muito bom! Melhor verão impossivel!",
    gradient: "from-orange-400 to-red-400"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 gradient-text">
            O Que Nossas Usuárias Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Histórias reais de transformação e conquistas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border border-border shadow-lg hover:shadow-xl transition-all duration-300" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient}`}></div>
                    <div>
                      <h4 className="font-bold" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h4>
                      <div className="flex text-yellow-500">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed" data-testid={`testimonial-text-${index}`}>
                    "{testimonial.text}"
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
