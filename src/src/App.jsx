import React, { useState } from 'react';

function App() {
  const [quoteRequest, setQuoteRequest] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    fetch('https://api.emailjs.com/api/v1.0/email/send',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_xxxxxxx',
        template_id: 'template_xxxxxxx',
        user_id: 'xxxxxxx',
        template_params: {
          to_email: 'soluçõesquanticasconsulting@gmail.com',
          from_name: quoteRequest.name,
          from_email: quoteRequest.email,
          subject: 'Pedido de Orçamento',
          message: `Serviço solicitado: ${quoteRequest.service}\n\nMensagem: ${quoteRequest.message}`,
        },
      }),
    })
      .then(() => alert('O seu pedido foi enviado com sucesso!'))
      .catch((err) => alert('Erro ao enviar o seu pedido.'));
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 md:p-6 flex items-center justify-between sticky top-0 z-10">
        <div className="text-xl md:text-2xl font-bold text-gray-800">Sandra Cristina Lourenço</div>
        <nav className="flex space-x-4">
          <a href="#servicos" className="text-gray-600 hover:text-gray-800 transition-colors">Serviços</a>
          <a href="#orcamento" className="text-gray-600 hover:text-gray-800 transition-colors">Orçamento</a>
          <a href="#contato" className="text-gray-600 hover:text-gray-800 transition-colors">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-cover bg-center h-screen flex items-center justify-center relative bg-[url('https://source.unsplash.com/random/1600x900/?education')]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10 text-center px-6 max-w-2xl mx-auto">
          <img
            src="https://i.imgur.com/HNj7vYg.jpg"
            alt="Foto de Sandra Cristina Lourenço"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Especialista em Educação Digital e IA</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Mais de 20 anos de experiência em formação, gestão de projetos e transformação digital.
          </p>
          <a
            href="#orcamento" 
            className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg mb-4">
            Sou uma especialista em Educação Digital e Inteligência Artificial com mais de 20 anos de experiência em formação, gestão de projetos educativos e transformação digital. Autora do e-book <strong>"Inteligência Artificial na Educação: Ferramentas para Estudantes"</strong> e criadora da plataforma <strong>"Competências Digitais 1º CEB"</strong>.
          </p>
          <p className="text-lg mb-4">
            Pioneira na formação em IA Generativa em Portugal, desenvolvi programas para Administração Pública, Recursos Humanos e setor educativo. Tenho experiência em capacitação de profissionais em dois continentes e implementação de soluções tecnológicas inovadoras.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Formação em Inteligência Artificial</h3>
              <p className="text-gray-600 mb-4">Capacitação em ferramentas de IA para otimização de processos educativos e administrativos.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">€50/hora</span>
                <button
                  onClick={() =>
                    setQuoteRequest((prev) => ({
                      ...prev,
                      service: 'Formação em Inteligência Artificial',
                    }))
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Gestão de Projetos Educativos</h3>
              <p className="text-gray-600 mb-4">Desenvolvimento e implementação de programas formativos com metodologias inovadoras.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">€50/hora</span>
                <button
                  onClick={() =>
                    setQuoteRequest((prev) => ({
                      ...prev,
                      service: 'Gestão de Projetos Educativos',
                    }))
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Educação Digital e Tecnologias</h3>
              <p className="text-gray-600 mb-4">Criação de recursos educativos digitais e gestão de ambientes virtuais de aprendizagem.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">€50/hora</span>
                <button
                  onClick={() =>
                    setQuoteRequest((prev) => ({
                      ...prev,
                      service: 'Educação Digital e Tecnologias',
                    }))
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="orcamento" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Solicite um Orçamento Personalizado</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={quoteRequest.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={quoteRequest.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <select
              name="service"
              value={quoteRequest.service}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="Formação em Inteligência Artificial">Formação em Inteligência Artificial</option>
              <option value="Gestão de Projetos Educativos">Gestão de Projetos Educativos</option>
              <option value="Educação Digital e Tecnologias">Educação Digital e Tecnologias</option>
            </select>
            <textarea
              name="message"
              placeholder="Detalhes do projeto ou mensagem adicional"
              value={quoteRequest.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
            >
              Enviar Pedido
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white p-6 mt-12">
        <div className="flex justify-center space-x-4">
          <a href="mailto:sandracplourenco@gmail.com" className="text-gray-600 hover:text-gray-800">
            sandracplourenco@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/sandracristinalourenco" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-center text-gray-600 mt-4">
          © 2025 Sandra Cristina Lourenço. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
