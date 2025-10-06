import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PricingSectionProps {
  onCheckout: (plan: 'basic' | 'premium') => void;
}

export default function PricingSection({ onCheckout }: PricingSectionProps) {
  return (
    <section id="pricing-section" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 gradient-text">
            Escolha Seu Plano Perfeito
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invista em você e conquiste a marquinha dos sonhos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <Card className="rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300" data-testid="basic-plan-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="font-display font-bold text-2xl mb-2" data-testid="basic-plan-title">Plano Básico</h3>
                  <p className="text-muted-foreground mb-6">Perfeito para começar sua jornada</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-foreground" data-testid="basic-plan-price">R$ 10</span>
                    <span className="text-muted-foreground">,00</span>
                  </div>
                  <Button 
                    onClick={() => onCheckout('basic')}
                    variant="outline"
                    className="w-full border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                    data-testid="basic-plan-button"
                  >
                    Começar com Básico
                  </Button>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-primary text-xl mt-1"></i>
                    <span>Planejamento de horários de sol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-primary text-xl mt-1"></i>
                    <span>Lembretes personalizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-primary text-xl mt-1"></i>
                    <span>Dicas básicas de bronzeamento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-primary text-xl mt-1"></i>
                    <span>Calculadora de FPS</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <Card className="rounded-3xl shadow-2xl relative border-3 border-primary overflow-hidden" data-testid="premium-plan-card">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-xs font-bold tracking-wider z-10">
                MAIS POPULAR
              </div>
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="font-display font-bold text-2xl mb-2 gradient-text" data-testid="premium-plan-title">Plano Premium</h3>
                  <p className="text-muted-foreground mb-6">A escolha das experientes</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-foreground" data-testid="premium-plan-price">R$ 27</span>
                    <span className="text-muted-foreground">,90</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6" data-testid="premium-bonus-value">+ R$ 67,00 em bônus exclusivos</p>
                  <Button 
                    onClick={() => onCheckout('premium')}
                    className="w-full btn-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                    data-testid="premium-plan-button"
                  >
                    Garantir Premium Agora
                  </Button>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-4 text-center">Tudo do Básico, mais:</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-star text-accent text-xl mt-1"></i>
                    <span>Acompanhamento fotográfico ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-star text-accent text-xl mt-1"></i>
                    <span>Relatórios detalhados de progresso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-star text-accent text-xl mt-1"></i>
                    <span>Acesso à comunidade exclusiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-star text-accent text-xl mt-1"></i>
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-star text-accent text-xl mt-1"></i>
                    <span className="font-semibold">+ 10 Bônus Exclusivos (R$ 67,00)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
