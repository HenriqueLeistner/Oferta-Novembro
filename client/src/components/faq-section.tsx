import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O aplicativo funciona offline?",
    answer:
      "Sim! Depois de instalado, você pode usar o aplicativo mesmo sem conexão com a internet. Todo o conteúdo fica salvo no seu celular, perfeito para levar para a praia ou piscina onde nem sempre tem sinal.",
  },
  {
    question: "Como faço para instalar o aplicativo?",
    answer:
      'É super simples! Após a compra, você recebe um link por e-mail. Basta abrir no celular e tocar em "Adicionar à Tela Inicial". O app vai aparecer como qualquer outro aplicativo no seu celular. Funciona em Android e iPhone.',
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, você tem garantia de 7 dias. Se não gostar do aplicativo, devolvemos 100% do seu dinheiro sem perguntas. Além disso, o acesso é vitalício - pague uma vez e use para sempre, sem mensalidades.",
  },
  {
    question: "Vou receber atualizações do aplicativo?",
    answer:
      "Sim! Todas as atualizações são automáticas e gratuitas. Sempre que lançarmos novos conteúdos, receitas ou funcionalidades, eles serão adicionados automaticamente ao seu app sem custo adicional.",
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer:
      "Não! O aplicativo foi criado para ser super simples e intuitivo. Se você sabe usar Instagram ou WhatsApp, vai conseguir usar o app da Marquinha Perfeita sem problemas.",
  },
  {
    question: "Qual a diferença entre o plano Básico e Premium?",
    answer:
      "O Básico tem planejamento de horários, lembretes e dicas básicas. Já o Premium inclui tudo do Básico MAIS acesso à comunidade exclusiva, suporte prioritário e 10 bônus exclusivos no valor de R$ 57,90 (receitas, guias, checklists e muito mais).",
  },
  {
    question: "O app ensina a se proteger do sol?",
    answer:
      "Com certeza! A segurança é nossa prioridade. O app tem um guia completo sobre proteção solar inteligente - como usar protetor do jeito certo sem perder o bronzeado e evitar danos à pele.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 gradient-text">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o aplicativo Marquinha Perfeita
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
}
