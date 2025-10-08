import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function OfertaEspecial() {
  const handleCheckout = () => {
    const checkoutUrl =
      import.meta.env.VITE_CHECKOUT_URL_PREMIUM_SPECIAL ||
      import.meta.env.VITE_CHECKOUT_URL_PREMIUM ||
      "https://checkout.example.com/premium-special";
    window.open(checkoutUrl, "_blank");
  };

  useEffect(() => {
    // Previne que o usuário use o botão voltar novamente
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.href);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-accent flex items-center justify-center p-4">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-4 px-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="font-bold text-xl"
            >
              ⚠️ ESPERE! OFERTA EXCLUSIVA ANTES DE SAIR
            </motion.div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Icon */}
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-br from-primary to-accent text-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-xl">
                <i className="fas fa-gift text-5xl"></i>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display font-bold text-3xl lg:text-5xl mb-6 text-center gradient-text">
              Última Chance! Plano Premium por Apenas R$ 10! 🎉
            </h1>

            <p className="text-lg text-muted-foreground text-center mb-8">
              Antes de você sair, queremos te fazer uma proposta irrecusável...
            </p>

            {/* Price Box */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 mb-8 text-white text-center">
              <p className="text-sm uppercase tracking-wider mb-2 text-white/80">
                Oferta Especial de Saída
              </p>
              <div className="mb-4">
                <div className="line-through text-2xl text-white/70 mb-2">
                  De R$ 27,90
                </div>
                <div className="text-6xl font-bold mb-2">R$ 10</div>
                <div className="text-xl">
                  Economize <span className="font-bold">R$ 17,90</span> (64%
                  OFF)
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-lg font-semibold">
                  + R$ 57,90 em Bônus Exclusivos Inclusos!
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-center">
                Tudo Que Você Vai Receber:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-muted/30 rounded-xl p-4">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Acesso Completo ao App</p>
                    <p className="text-sm text-muted-foreground">
                      Planejamento, lembretes e dicas personalizadas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/30 rounded-xl p-4">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">10 Bônus Exclusivos</p>
                    <p className="text-sm text-muted-foreground">
                      Receitas, guias e checklists (R$ 57,90)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/30 rounded-xl p-4">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Comunidade Exclusiva</p>
                    <p className="text-sm text-muted-foreground">
                      Grupo VIP com milhares de usuárias
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/30 rounded-xl p-4">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Suporte Prioritário</p>
                    <p className="text-sm text-muted-foreground">
                      Atendimento rápido quando precisar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/30 rounded-xl p-4">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Acesso Vitalício</p>
                    <p className="text-sm text-muted-foreground">
                      Pague uma vez, use para sempre
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/30 rounded-xl p-4">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 flex-shrink-0"></i>
                  <div>
                    <p className="font-semibold">Garantia de 7 Dias</p>
                    <p className="text-sm text-muted-foreground">
                      100% do dinheiro de volta se não gostar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency */}
            <motion.div
              className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8 text-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-bold text-yellow-900 text-lg mb-2">
                ⏰ ATENÇÃO: Esta Oferta Expira AGORA!
              </p>
              <p className="text-sm text-yellow-800">
                Esta é uma oferta exclusiva de última chance. Se você sair desta
                página, o valor volta para R$ 27,90 e você perde essa
                oportunidade única.
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button
                onClick={handleCheckout}
                className="w-full btn-gradient text-white px-8 py-8 rounded-full font-bold text-2xl shadow-xl hover:scale-105 transition-all duration-300"
              >
                🎉 SIM! Quero o Premium por R$ 10,00
              </Button>
              <div className="text-center">
                <a
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Não, prefiro pagar R$ 27,90 e voltar para a página inicial
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-primary"></i>
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-lock text-primary"></i>
                  <span>Dados Protegidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-medal text-primary"></i>
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
