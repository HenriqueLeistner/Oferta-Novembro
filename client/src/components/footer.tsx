export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <i className="fas fa-sun text-white"></i>
              </div>
              <span className="font-display font-bold text-lg gradient-text">
                Marquinha Perfeita
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Sua parceira para conquistar o bronzeado dos sonhos com segurança
              e estilo.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Planos</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a
                  href="#pricing-section"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-basic"
                >
                  Plano Básico
                </a>
              </li>
              <li>
                <a
                  href="#pricing-section"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-premium"
                >
                  Plano Premium
                </a>
              </li>
              <li>
                <a
                  href="#bonuses-section"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-bonuses"
                >
                  Bônus Exclusivos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Informações</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <span className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-primary"></i>
                  Garantia de 7 Dias
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <i className="fas fa-lock text-primary"></i>
                  Pagamento Seguro
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <i className="fas fa-infinity text-primary"></i>
                  Acesso Vitalício
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contato@marquinhaperfeita.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  data-testid="footer-email"
                >
                  <i className="fas fa-envelope"></i>
                  contato@marquinhaperfeitaapp.
                  mentemilionario.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-muted-foreground text-xs mb-2">Redes Sociais:</p>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/appmarquinhaperfeita/"
                    className="w-9 h-9 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    data-testid="footer-social-instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; 2025 App Marquinha Perfeita. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
