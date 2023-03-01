import javascript from "../assets/svg/javascript.svg";
import java from "../assets/svg/java.svg";
import php from "../assets/svg/php.svg";
import react from "../assets/svg/react.svg";
import reactnative from "../assets/svg/reactnative.svg";
import htmlcss from "../assets/images/htmlcss.png";
import news from "../assets/svg/news.svg";

import frontend from "../assets/images/frontend.png";
import backend from "../assets/images/backend.png";

import watchingvideo from "../assets/svg/watchingvideo.svg";
import videoproject from "../assets/svg/videoproject.svg";
import quiz from "../assets/svg/quiz.svg";
import articles from "../assets/svg/articles.svg";

export const typeOfActivities = [
  {
    id: 0,
    name: "Videos Gerais",
    image: watchingvideo,
    type: "video",
  },
  {
    id: 1,
    name: "Videos de Projetos",
    image: videoproject,
    type: "videoproject",
  },
  {
    id: 2,
    name: "Quiz / Testes",
    image: quiz,
    type: "quiz",
  },
  {
    id: 3,
    name: "Artigos Interessantes",
    image: articles,
    type: "articles",
  },
];

export const typeOfTopics = [
  {
    id: 0,
    name: "Frontend",
    image: frontend,
  },
  {
    id: 1,
    name: "Backend",
    image: backend,
  },
];

export const topics = [
  {
    id: 1,
    name: "Javascript",
    image: javascript,
    topics: [
      {
        id: 0,
        type: "video",
        language: "english",
        title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
        description:
          "Este vídeo oferece um tutorial abrangente sobre JavaScript para iniciantes, abrangendo conceitos básicos como variáveis, funções, objetos e muito mais.",
        link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        image: "W6NZfCO5SIk",
      },
      {
        id: 1,
        type: "video",
        language: "english",
        title: "JavaScript Promises In 10 Minutes",
        description:
          "Neste vídeo, você aprenderá como usar promessas em JavaScript, uma funcionalidade que permite trabalhar com assincronismo de maneira mais eficiente e limpa.",
        link: "https://www.youtube.com/watch?v=DHvZLI7Db8E",
        image: "DHvZLI7Db8E",
      },
      {
        id: 2,
        type: "video",
        language: "english",
        title: "10 JavaScript Projects in 1 Hour - Coding Challenge",
        description:
          "Este vídeo apresenta uma série de projetos práticos de JavaScript que você pode criar para melhorar suas habilidades de codificação.",
        link: "https://www.youtube.com/watch?v=8GPPJpiLqHk",
        image: "8GPPJpiLqHk",
      },
      {
        id: 3,
        type: "video",
        language: "english",
        title: "Jake Archibald: In the Loop - JSConf.Asia",
        description:
          "Este vídeo oferece dicas e truques para depurar erros em JavaScript, incluindo a utilização da console do navegador e do VS Code.",
        link: "https://www.youtube.com/watch?v=cCOL7MC4Pl0",
        image: "cCOL7MC4Pl0",
      },
      {
        id: 4,
        type: "video",
        language: "portuguese",
        title: "O que o JavaScript é capaz de fazer? - Curso JavaScript",
        description:
          "Este vídeo é um curso completo de JavaScript em português, incluindo desde os fundamentos até tópicos mais avançados, como programação assíncrona e manipulação de DOM.",
        link: "https://www.youtube.com/watch?v=Ptbk2af68e8",
        image: "Ptbk2af68e8",
      },
      {
        id: 5,
        type: "video",
        language: "portuguese",
        title: "Curso Javascript Completo (6 Horas)",
        description:
          "Neste Curso de Javascript Completo vamos aprender todos os conceitos importantes dessa linguagem de programação fantástica.  São 20 aulas de Javascript completas. Esse curso de javascript grátis tem conteúdo de curso pago e didática fácil de compreender.",
        link: "https://www.youtube.com/watch?v=McKNP3g6VBA",
        image: "McKNP3g6VBA",
      },
      {
        id: 6,
        type: "video",
        language: "portuguese",
        title: "APRENDA JAVASCRIPT EM 10 MINUTOS",
        description:
          "Este vídeo você vai aprender javascript e seus principais conceitos em apenas 10 minutos.",
        link: "https://www.youtube.com/watch?v=RvcRxEeJqi8",
        image: "RvcRxEeJqi8",
      },
      {
        id: 7,
        type: "video",
        language: "portuguese",
        title: "Guia de estudo JavaScript em 2023!",
        description:
          "Este vídeo é um guia de estudos para o ano de 2023 sobre javascript e os principais conceitos que você deve dominar.",
        link: "https://www.youtube.com/watch?v=EDotqZwJ4aA",
        image: "EDotqZwJ4aA",
      },
      {
        id: 8,
        type: "videoproject",
        language: "english",
        title: "E-Commerce JavaScript Tutorial - Shopping Cart from Scratch",
        description:
          "Aprenda a criar um carrinho de supermercado na linguagem de Javascript",
        link: "https://www.youtube.com/watch?v=023Psne_-_4",
        image: "023Psne_-_4",
      },
      {
        id: 9,
        type: "videoproject",
        language: "portuguese",
        title: "Como criar uma Pokedex com HTML, CSS e JavaScript",
        description: "Aprenda a criar uma Pokedex com HTML, CSS e JavaScript",
        link: "https://www.youtube.com/watch?v=SjtdH3dWLa8",
        image: "SjtdH3dWLa8",
      },
      {
        id: 10,
        type: "videoproject",
        language: "english",
        title: "Self-Driving Car with JavaScript Course",
        description:
          "Aprenda a criar uma rede neural utilizando Javascript para fazer um simulador de carro onde ele irá dirigir sozinho, aprendendo com seus erros.",
        link: "https://www.youtube.com/watch?v=Rs_rAxEsAvI",
        image: "Rs_rAxEsAvI",
      },
      {
        id: 11,
        type: "videoproject",
        language: "portuguese",
        title: "Mini projetos javascript (Iniciantes) - 03 SLIDESHOW",
        description:
          "Aprenda a como criar um slideshow com ações para retroceder e avançar. Utilizará alguns recursos do javascript, como por exemplo, funções do tipo arrow, template string, manipulação de elementos HTML no DOM.",
        link: "https://www.youtube.com/watch?v=csNYVAS2ex8",
        image: "csNYVAS2ex8",
      },
      {
        id: 12,
        type: "article",
        language: "english",
        title: "RoadMap for JavaScript",
        description:
          "O site https://roadmap.sh/javascript é um guia completo e detalhado sobre o caminho a ser seguido para aprender JavaScript. Ele apresenta um roadmap (mapa de aprendizado) que inclui vários tópicos relacionados ao JavaScript, como fundamentos, programação assíncrona, manipulação de DOM, estrutura de dados e algoritmos, testes e muito mais. O guia é dividido em três seções principais: Iniciante, Intermediário e Avançado. Cada seção contém uma lista de tópicos que o usuário deve aprender, juntamente com recursos recomendados para cada tópico, como livros, cursos on-line, tutoriais em vídeo e artigos. O site também inclui uma seção de Ferramentas e Recursos, que lista uma série de ferramentas úteis e recursos que podem ser usados ​​para ajudar no aprendizado e na prática do JavaScript.",
        resume:
          "Em resumo, o https://roadmap.sh/javascript é um recurso valioso para quem deseja aprender JavaScript, pois apresenta um caminho claro e organizado para o aprendizado, além de fornecer recursos úteis para ajudar no processo.",
        link: "https://roadmap.sh/javascript",
      },
      {
        id: 13,
        type: "article",
        language: "portuguese",
        title: "Entendendo Promises em JavaScript",
        description:
          "O artigo Entendendo Promises em JavaScript do blog GeekHunter trata do conceito de Promises em JavaScript. O autor explica que as Promises são um mecanismo para lidar com tarefas assíncronas em JavaScript, permitindo que o código continue executando enquanto espera por uma operação assíncrona, como uma requisição de rede ou uma operação de E/S. O artigo começa explicando como criar uma Promise e como lidar com seus estados, que podem ser pendente, resolvida ou rejeitada. O autor também explica como encadear várias Promises para executar operações em sequência e como lidar com erros em Promises. O autor enfatiza a importância de entender Promises em JavaScript, já que elas são amplamente utilizadas em bibliotecas e frameworks populares, como o React e o Node.js. O artigo é uma leitura útil para qualquer pessoa que esteja começando a trabalhar com JavaScript e queira entender como lidar com tarefas assíncronas de forma eficiente.",
        resume:
          "Entendendo Promises em JavaScript por Diego Rangel: Este artigo explica o conceito de Promises em JavaScript, incluindo como trabalhar com Promises para lidar com tarefas assíncronas e como encadear múltiplas Promises para executar operações em sequência",
        link: "https://blog.geekhunter.com.br/entendendo-promises-em-javascript/",
      },
      {
        id: 14,
        type: "article",
        language: "portuguese",
        title: "Entenda a diferença entre Var, Let e Const no JavaScript",
        description:
          "O artigo Entenda a diferença entre Var, Let e Const no JavaScript do blog da Alura aborda as diferenças entre as palavras-chave Var, Let e Const em JavaScript. O autor explica que essas palavras-chave são usadas para declarar variáveis em JavaScript, mas cada uma delas tem um comportamento diferente em relação ao escopo e à mutabilidade. O autor começa explicando a palavra-chave Var, que é a forma antiga de declarar variáveis em JavaScript. Ele explica que as variáveis declaradas com Var têm escopo de função e podem ser reatribuídas em qualquer lugar do código. Em seguida, o autor explica a palavra-chave Let, que é uma forma mais moderna de declarar variáveis em JavaScript. Ele explica que as variáveis declaradas com Let têm escopo de bloco e não podem ser redeclaradas no mesmo escopo.  Por fim, o autor explica a palavra-chave Const, que é usada para declarar constantes em JavaScript. Ele explica que as constantes declaradas com Const também têm escopo de bloco e não podem ser reatribuídas depois de declaradas. O autor enfatiza que entender as diferenças entre Var, Let e Const é importante para escrever um código JavaScript claro e eficiente. O artigo é uma leitura útil para qualquer pessoa que esteja começando a trabalhar com JavaScript e queira entender as melhores práticas para declarar variáveis.",
        resume:
          "Entenda a diferença entre Var, Let e Const no JavaScript por Rafael Cruz: Este artigo explica as diferenças entre as palavras-chave Var, Let e Const em JavaScript, incluindo como elas afetam o escopo de suas variáveis e como escolher a palavra-chave correta para cada situação.",
        link: "https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript",
      },
      {
        id: 15,
        type: "article",
        language: "portuguese",
        title: "O que é JavaScript e como funciona?",
        description:
          "Neste artigo, você vai conhecer o que é JavaScript, para que serve e como utilizá-lo. Quando você está pesquisando sobre o mercado de programação é muito comum se deparar com o nome JavaScript. E não é à toa, essa linguagem está presente em toda a Web e você provavelmente lida com ela diariamente enquanto usa seu navegador (e até mesmo fora dele!",
        resume:
          "O que é JavaScript e como funciona? Este artigo é uma introdução ao JavaScript, explicando sua história, como ele funciona no navegador e como começar a programar em JavaScript.",
        link: "https://www.alura.com.br/artigos/javascript?gclid=CjwKCAiAxvGfBhB-EiwAMPakqoh_K0W1gsoHJ4lcWbKw9r2FfZ9WOlDLVoqdlBLuHBvyd_oTfSkInxoCKz8QAvD_BwE",
      },
    ],
  },
  {
    id: 2,
    name: "Java",
    image: java,
    topics: [
      {
        id: 0,
        type: "video",
        language: "english",
        title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
        description:
          "Este vídeo oferece um tutorial abrangente sobre JavaScript para iniciantes, abrangendo conceitos básicos como variáveis, funções, objetos e muito mais.",
        link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        image: "W6NZfCO5SIk",
      },
      {
        id: 1,
        type: "videoproject",
        language: "english",
        title: "E-Commerce JavaScript Tutorial - Shopping Cart from Scratch",
        description:
          "Aprenda a criar um carrinho de supermercado na linguagem de Javascript",
        link: "https://www.youtube.com/watch?v=023Psne_-_4",
        image: "023Psne_-_4",
      },
      {
        id: 2,
        type: "article",
        language: "portuguese",
        title: "O que é JavaScript e como funciona?",
        description:
          "Neste artigo, você vai conhecer o que é JavaScript, para que serve e como utilizá-lo. Quando você está pesquisando sobre o mercado de programação é muito comum se deparar com o nome JavaScript. E não é à toa, essa linguagem está presente em toda a Web e você provavelmente lida com ela diariamente enquanto usa seu navegador (e até mesmo fora dele!",
        resume:
          "O que é JavaScript e como funciona? Este artigo é uma introdução ao JavaScript, explicando sua história, como ele funciona no navegador e como começar a programar em JavaScript.",
        link: "https://www.alura.com.br/artigos/javascript?gclid=CjwKCAiAxvGfBhB-EiwAMPakqoh_K0W1gsoHJ4lcWbKw9r2FfZ9WOlDLVoqdlBLuHBvyd_oTfSkInxoCKz8QAvD_BwE",
      },
    ],
  },
  {
    id: 3,
    name: "PHP",
    image: php,
  },
  {
    id: 4,
    name: "REACT",
    image: react,
  },
  {
    id: 5,
    name: "REACT Native",
    image: reactnative,
  },
  {
    id: 6,
    name: "HTML-CSS",
    image: htmlcss,
  },
];
