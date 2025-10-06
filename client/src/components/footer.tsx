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
              <span className="font-display font-bold text-lg gradient-text">Marquinha Perfeita</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Sua parceira para conquistar o bronzeado dos sonhos com segurança e estilo.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Planos</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-basic">Básico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-premium">Premium</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-compare">Comparar Planos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-help">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-faq">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-contact">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-link-privacy">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" data-testid="footer-social-instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" data-testid="footer-social-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" data-testid="footer-social-tiktok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" data-testid="footer-social-whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Contato:</p>
              <p className="text-sm font-semibold" data-testid="footer-email">contato@marquinhaperfeita.com</p>
              <p className="text-sm font-semibold" data-testid="footer-phone">(11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 App Marquinha Perfeita. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
