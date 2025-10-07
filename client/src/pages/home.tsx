import HeroSection from "@/components/hero-section";
import ProblemsSolutionsSection from "@/components/problems-solutions-section";
import BenefitsSection from "@/components/benefits-section";
import PricingSection from "@/components/pricing-section";
import HowToReceiveSection from "@/components/how-to-receive-section";
import BonusesSection from "@/components/bonuses-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToPlans = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCheckout = (plan: "basic" | "premium") => {
    // Configure these URLs with your actual checkout links
    const checkoutUrls = {
      basic:
        import.meta.env.VITE_CHECKOUT_URL_BASIC ||
        "https://checkout.example.com/basic",
      premium:
        import.meta.env.VITE_CHECKOUT_URL_PREMIUM ||
        "https://checkout.example.com/premium",
    };
    window.open(checkoutUrls[plan], "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <i className="fas fa-sun text-white text-lg"></i>
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                Marquinha Perfeita
              </span>
            </div>
            <Button
              onClick={scrollToPlans}
              className="btn-gradient text-white px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300"
              data-testid="nav-cta-button"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </motion.nav>

      <HeroSection onScrollToPlans={scrollToPlans} />
      <ProblemsSolutionsSection />
      <BenefitsSection />
      <PricingSection onCheckout={handleCheckout} />
      <HowToReceiveSection />
      <BonusesSection />
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 lg:p-16 text-white">
              <h2 className="font-display font-bold text-3xl lg:text-5xl mb-6">
                Pronta para Conquistar a Marquinha Perfeita?
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Junte-se a milhares de mulheres que já transformaram seu
                bronzeado
              </p>
              <div className="flex justify-center items-center mb-8">
                <Button
                  onClick={scrollToPlans}
                  className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
                  data-testid="cta-button"
                >
                  Ver Planos
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Acesso Vítalicio</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border-2 border-primary/20">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-br from-primary to-accent text-white w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <i className="fas fa-shield-alt text-3xl"></i>
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4 gradient-text">
                  E Se Eu Não Gostar do Aplicativo?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Sem problemas! Você tem nossa
                </p>
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full shadow-lg">
                  <p className="text-2xl font-bold">🛡️ Garantia de 7 Dias</p>
                </div>
              </div>
              <div className="mt-8 space-y-4 text-center">
                <p className="text-base lg:text-lg text-foreground leading-relaxed">
                  Se você não ficar completamente satisfeita com o aplicativo
                  nos primeiros 7 dias, devolvemos{" "}
                  <span className="font-bold text-primary">
                    100% do seu dinheiro
                  </span>
                  , sem perguntas e sem complicação.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Simples assim! Você não tem nada a perder e uma marquinha
                  perfeita a ganhar.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
