import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const problems = [
  "Você passa horas no sol e mesmo assim não vê resultado.",
  "Fica com manchas, vermelhidão ou descasca nos dias seguintes.",
  "Não sabe quanto tempo deve ficar exposta ao sol sem se queimar.",
  "Compra vários produtos caríssimos que prometem milagres e não funcionam.",
  "Nunca sabe o que levar pra praia ou piscina e acaba esquecendo itens essenciais.",
  "Sente-se insegura porque nunca consegue manter aquele bronzeado dourado por mais de uma semana."
];

const solutions = [
  {
    icon: "✅",
    title: "Checklist da Marquinha Perfeita",
    description: "Tenha em mãos uma lista completa de tudo o que você precisa levar e preparar antes de se expor ao sol — sem esquecer de nada e garantindo o melhor resultado possível."
  },
  {
    icon: "🌤",
    title: "Calendário de Exposição ao Sol",
    description: "Descubra os horários ideais e o tempo certo de exposição para cada tipo de pele. O segredo para bronzear sem se queimar!"
  },
  {
    icon: "🍯",
    title: "Receitas de Bronzeamento Caseiro",
    description: "Aprenda fórmulas naturais e seguras para potencializar seu bronzeado — usando ingredientes simples que você tem em casa."
  },
  {
    icon: "🧴",
    title: "Guia de Proteção Inteligente",
    description: "Saiba exatamente como proteger sua pele sem impedir o bronze. O equilíbrio perfeito entre segurança e resultado."
  },
  {
    icon: "🛍",
    title: "Lista de Produtos Baratinhos Que Funcionam",
    description: "Pare de gastar com produtos caros e aprenda quais opções acessíveis realmente entregam resultado — testadas e aprovadas!"
  },
  {
    icon: "🧘‍♀️",
    title: "Roteiro de Alongamentos na Praia",
    description: "Prepare o corpo e melhore a circulação antes do banho de sol — o segredo das mulheres que bronzeiam de forma uniforme e duradoura."
  }
];

const results = [
  "Conseguir o bronzeado dos sonhos sem se queimar.",
  "Economizar dinheiro com produtos caros que não funcionam.",
  "Aprender uma rotina segura e eficaz de exposição ao sol.",
  "Manter o bronze bonito por muito mais tempo.",
  "Sentir-se confiante e radiante com o resultado."
];

export default function ProblemsSolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Problems Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
            🌞 As Dores Que Te Impedem da Marquinha Perfeita
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 text-left bg-background/80 p-4 rounded-lg border border-red-200/50"
              >
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-base lg:text-lg text-foreground">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div 
          className="mt-20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8 text-center gradient-text">
            💡 As Soluções Que Você Vai Encontrar Dentro do Aplicativo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-primary/20 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{solution.icon}</div>
                      <div>
                        <h3 className="font-display font-bold text-lg mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-10 border-2 border-primary/20">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8 gradient-text">
              ✨ Resultado Final
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Ao usar o Aplicativo Marquinha Perfeita, você vai:
            </p>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-left bg-background/80 p-4 rounded-lg"
                >
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base lg:text-lg font-medium text-foreground">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
