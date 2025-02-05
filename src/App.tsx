import React from 'react';
import { 
  Users, 
  Calendar, 
  HandCoins,
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  MonitorSmartphone,
  Dumbbell
} from 'lucide-react';
import imgUrl from '../assets/mvk-gym-manager-logo.png';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
}

function App() {
  const accentColor = '#2D8A5E'; // A more sophisticated, professional green
  const logo = 
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex items-center gap-12">
            <div className="max-w-3xl flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span style={{ color: accentColor }}>Potencialize</span> sua academia com nossa plataforma
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Gerencie alunos, aulas, pagamentos e muito mais em um único lugar. 
                A solução completa para sua academia crescer.
              </p>
              <button 
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2"
                style={{ 
                  backgroundColor: accentColor,
                  ':hover': { backgroundColor: '#236d4a' }
                }}
                onClick={e =>{
                  const features = document.getElementById('features')  
                  features.scrollIntoView({behavior: "smooth" });
                }}
              >
                Começar agora
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Recursos <span style={{ color: accentColor }}>Principais</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="w-8 h-8" style={{ color: accentColor }} />}
              title="Gestão de Alunos"
              description="Cadastre e gerencie todos os seus alunos, com fichas, medidas e evolução."
            />
            <FeatureCard 
              icon={<HandCoins className="w-8 h-8" style={{ color: accentColor }} />}
              title="Gestão Financeira"
              description="Gerencie suas receitas e despesas de maneira fácil e clara, além de fazer cobranças e baixar recibos."
            />
            <FeatureCard 
              icon={<Calendar className="w-8 h-8" style={{ color: accentColor }} />}
              title="Agendamento de Eventos"
              description="Sistema completo para agendar aulas, controlar frequência e ocupação."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8" style={{ color: accentColor }} />}
              title="Relatórios Detalhados"
              description="Acompanhe o desempenho da sua academia com relatórios e métricas."
            />
            <FeatureCard 
              icon={<MonitorSmartphone className="w-8 h-8" style={{ color: accentColor }} />}
              title="Responsivo"
              description="Acesse de qualquer lugar, em qualquer dispositivo."
            />
            <FeatureCard 
              icon={<Dumbbell className="w-8 h-8" style={{ color: accentColor }} />}
              title="App para os alunos"
              description="Um aplicativo completo para que seus alunos realizem os treinos sem papel."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Planos e <span style={{ color: accentColor }}>Preços</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PriceCard 
              title="Básico"
              price="R$ 199"
              features={[
                "Até 100 alunos",
                "Gestão de matrículas",
                "Controle financeiro básico",
                "Suporte por email"
              ]}
            />
            <PriceCard 
              title="Profissional"
              price="R$ 299"
              featured={true}
              features={[
                "Até 300 alunos",
                "Gestão de matrículas",
                "Controle financeiro completo",
                "Relatórios avançados",
                "Suporte prioritário"
              ]}
            />
            <PriceCard 
              title="Enterprise"
              price="R$ 499"
              features={[
                "Alunos ilimitados",
                "Todas as funcionalidades",
                "API personalizada",
                "Suporte 24/7",
                "Treinamento da equipe"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: accentColor }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Pronto para transformar sua academia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de academias que já estão usando nossa plataforma para crescer.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Agendar demonstração
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                {src}="imgUrl" 
                alt="MvK Gym Logo" 
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">MvK Gym</span>
            </div>
            <div className="text-gray-400">
              © 2024 MvK Devs. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function PriceCard({ title, price, features, featured = false }: PriceCardProps) {
  const accentColor = '#2D8A5E';
  
  return (
    <div className={`
      rounded-xl p-8
      ${featured ? 'transform scale-105' : 'bg-gray-800'}
    `}
    style={{ 
      backgroundColor: featured ? accentColor : undefined
    }}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold mb-6">{price}<span className="text-lg">/mês</span></div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" style={{ color: featured ? 'white' : accentColor }} />
            {feature}
          </li>
        ))}
      </ul>
      <a href="https://wa.me/5571983982572?text=Olá, vim atrav´s do site e quero assinar a pltaforma." target="_blank">
      <button className={`
        w-full py-3 rounded-lg mt-8 font-semibold transition-colors
        ${featured 
          ? 'bg-gray-900 hover:bg-gray-800' 
          : 'text-white hover:brightness-90'}
      `}
     
      style={{ 
        backgroundColor: featured ? undefined : accentColor
      }}>
        Começar agora
      </button>
        </a>
    </div>
  );
}

export default App;
