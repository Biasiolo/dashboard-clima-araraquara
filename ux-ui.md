Documento UX/UI - Projeto Dashboard de Sustentabilidade
Estrutura do Site
1. Header e Menu de Navegação:
Sobre: Informações sobre o propósito do site, sua missão e detalhes sobre os recursos oferecidos.
Como Usar: Guia passo a passo sobre como utilizar as funcionalidades do dashboard.
Faça sua Doação: Informações sobre como os usuários podem contribuir financeiramente para a manutenção e aprimoramento do serviço.
2. Corpo do Site:
Input de Localização:

Um campo de entrada para que os usuários possam inserir sua localização (cidade, país, coordenadas, etc.).
Botão "Submit" para iniciar a busca de informações.
Resultado da Busca:

Qualidade do ar na localização.
Temperatura atual.
Incidência de luz solar naquele momento.
Cálculo estimado de quanto energia solar uma placa geraria naquele momento com base nos dados de luz solar.
Estatísticas de Potencial de Geração de Energia Solar:

Gráficos e visualizações que mostram o potencial de geração de energia solar naquela localidade ao longo do tempo.
Google Earth Engine API Integration:

Utilização da Google Earth Engine API para oferecer funcionalidades adicionais relacionadas a dados geoespaciais.
Possíveis recursos incluem visualizações tridimensionais do terreno, análises de mudanças ao longo do tempo, entre outros.
Plugins Necessários
Google Maps API:

Para converter a localização inserida pelo usuário em coordenadas geográficas.
Air Quality API:

Para obter dados em tempo real sobre a qualidade do ar na localidade especificada.
Solar API:

Para obter dados sobre a incidência de luz solar na localidade especificada.
Plugin de Cálculo de Geração de Energia Solar:

Desenvolvimento de um plugin customizado para calcular a quantidade estimada de energia solar gerada com base nos dados recebidos.
Google Earth Engine API Client:

Para integração com a Google Earth Engine e acesso a funcionalidades geoespaciais.
Recursos Necessários
Servidor Backend:

Implementação de um servidor Node.js com Express.js para lidar com as solicitações do usuário e integrações com as APIs.
Banco de Dados MongoDB:

Armazenamento de dados do usuário, configurações e resultados de consultas.
Frontend ReactJS:

Desenvolvimento da interface do usuário com ReactJS para uma experiência de usuário dinâmica e interativa.
Sass/SCSS para Estilização:

Utilização de um pré-processador de CSS para facilitar a estilização e manutenção do código.
Ferramentas de Controle de Versão:

Utilização do Git para controle de versão e colaboração eficiente no desenvolvimento.
Ambiente de Desenvolvimento Local:

Configuração de um ambiente de desenvolvimento local com Node.js, npm ou Yarn e outras dependências.
Este documento fornece uma visão geral da estrutura, plugins e recursos necessários para o projeto do Dashboard de Sustentabilidade. As etapas de desenvolvimento podem ser adaptadas conforme necessário com base em feedbacks e descobertas ao longo do processo.