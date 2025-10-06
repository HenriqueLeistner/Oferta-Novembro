import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import appMockupImage from "@assets/ChatGPT_Image_5_de_out._de_2025__20_36_47-removebg-preview_1759707578884.png";

interface HeroSectionProps {
  onScrollToPlans: () => void;
}

export default function HeroSection({ onScrollToPlans }: HeroSectionProps) {
  return (
    <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6 text-white leading-tight">
              Conquiste a<br/>
              <span className="font-serif italic">Marquinha Perfeita</span><br/>
              O Ano Todo! ☀️
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              O aplicativo definitivo para acompanhar seu bronzeado, receber dicas personalizadas e conquistar aquela marquinha dos sonhos com segurança.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={onScrollToPlans}
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid="hero-cta-button"
              >
                Ver Planos
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-400 to-rose-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-pink-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-orange-400"></div>
              </div>
              <div className="text-white">
                <div className="font-bold">+5.000 usuárias</div>
                <div className="text-sm text-white/80">já conquistaram a marquinha perfeita</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="float-animation relative">
              <img 
                src={appMockupImage} 
                alt="App Marquinha Perfeita mockup showing interface" 
                className="w-64 lg:w-80 drop-shadow-2xl" 
                data-testid="hero-app-mockup"
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="hsl(20, 100%, 98%)"/>
        </svg>
      </div>
    </section>
  );
}
