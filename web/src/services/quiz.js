import javascript0 from "../assets/Quiz/javascript0.jpg";
import javascript1 from "../assets/Quiz/javascript1.jpg";
import javascript2 from "../assets/Quiz/javascript2.jpg";
import javascript3 from "../assets/Quiz/javascript3.jpg";
import javascript4 from "../assets/Quiz/javascript4.jpg";
import javascript5 from "../assets/Quiz/javascript5.jpg";
import javascript6 from "../assets/Quiz/javascript6.jpg";

export const quiz = [
  {
    id: 0,
    language: "javascript",
    question: javascript0,
    correct: "D",
    explanations:
      "Dentro da função, nós primeiro declaramos a variável name usando a palavra-chave var. Isso significa que a variavel é elevada(hoisted) (O espaço na memória é separado durante a fase de criação) com o valor padrão undefined, até que chegue na linha onde definimos a variável. Ainda não definimos a variável na linha onde tentamos usar colocar no log o valor da variável name, portanto ela ainda tem o valor undefined. Variáveis com a palavra-chave let (e const) são elevadas, mas diferente de var, não são inicializadas. Elas não estão acessíveis antes da linha em que as declaramos (ou inicializamos). Esse é um conceito chamado de temporal dead zone. Quando tentamos acessar essas variáveis antes de serem declaradas, o JavaScript lança um ReferenceError.",
    answers: [
      {
        id: "A",
        answer: "`Lydia` e `undefined`",
      },
      {
        id: "B",
        answer: "`Lydia` e `ReferenceError`",
      },
      {
        id: "C",
        answer: "`ReferenceError` e `21`",
      },
      {
        id: "D",
        answer: "`undefined` e `ReferenceError`",
      },
    ],
  },
  {
    id: 1,
    language: "javascript",
    question: javascript1,
    correct: "C",
    explanations:
      "Por causa da fila de eventos em JavaScript, a callback de `setTimeout` é chamada <i>depois</i> do laço ter sido executado. Já que a variável `i` no primeiro laço foi declarada usando a palavra-chave `var`, seu valor era global. Durante o laço, incrementamos o valor de `i` por `1` em cada repetição, usando o operador unário `++`. Quando a callback de `setTimeout` foi chamada, `i` valia `3`. No segundo laço, a variável i foi declarada usando a palavra-chave `let`: Variáveis declaradas com `let` (e `const`) só são acessíveis nos escopos de seus blocos (um bloco é qualquer código entre `{ }`). Durante cada repetição do laço, `i` vai ter um novo valor, e cada valor tem seu escopo dentro do laço.",
    answers: [
      {
        id: "A",
        answer: "`0 1 2` e `0 1 2`",
      },
      {
        id: "B",
        answer: "`0 1 2` e `3 3 3`",
      },
      {
        id: "C",
        answer: "`3 3 3` e `0 1 2`",
      },
    ],
  },
  {
    id: 2,
    language: "javascript",
    question: javascript2,
    correct: "B",
    explanations:
      "Perceba que o valor de `diameter` é uma função normal, enquanto que o valor de `perimeter` é uma arrow function. Com arrow functions, a palavra-chave `this` faz referência ao escopo atual em que está inserida, diferente de funções normais! Isso significa que quando nós chamamos `perimeter`, ela não faz referência ao objeto <i>shape</i>, mas ao seu escopo atual (por exemplo, <i>window</i>). Não há `radius` fora de <i>shape</i>, então retorna `undefined`.",
    answers: [
      {
        id: "A",
        answer: "`20` e `62.83185307179586`",
      },
      {
        id: "B",
        answer: "`20` e `NaN",
      },
      {
        id: "C",
        answer: "`20` e `63`",
      },
      {
        id: "D",
        answer: "`NaN` e `63`",
      },
    ],
  },
  {
    id: 3,
    language: "javascript",
    question: javascript3,
    correct: "A",
    explanations:
      "O operador unário `+` tenta converter um operando para um número. `true` é `1`, e `false` é `0`. A string `'Lydia'` tem valor truthy*. O que estamos realmente perguntando é Esse valor truthy é falsy?. Isso retorna `false`.",
    answers: [
      {
        id: "A",
        answer: "`1` and `false`",
      },
      {
        id: "B",
        answer: "`false` and `NaN`",
      },
      {
        id: "C",
        answer: "`false` and `false`",
      },
    ],
  },
  {
    id: 4,
    language: "javascript",
    question: javascript4,
    correct: "A",
    explanations:
      "No JavaScript, todas chaves dos objetos são strings (a não ser que sejam um símbolo). Ainda que não possamos <i>digitá-las</i> como strings, elas são sempre convertidas para string sob o capô. JavaScript interpreta afirmações. Quando usamos a notação de colchetes, ele vê o colchete de abertura `[` e continua lendo até encontrar o colchete que o fecha `]`. Só então vai avaliar e rodar as afirmações. `mouse[bird.size]`: Primeiro avalia `bird.size`, que é `small`. `mouse[small]` retorna `true` .Por outro lado, com a notação de ponto `.`, isso não acontece. `mouse` não tem uma chave chamada `bird`, o que significa que `mouse.bird` é `undefined`. Então, pedimos pelo `size` usando a notação de ponto: `mouse.bird.size`. Uma vez que `mouse.bird` é `undefined`, estamos realmente pedindo `undefined.size`. Isso não é válido, e irá gerar um erro similar a `Cannot read property size of undefined`.",
    answers: [
      {
        id: "A",
        answer: "`mouse.bird.size` não é válido",
      },
      {
        id: "B",
        answer: "`mouse[bird.size]` não é válido",
      },
      {
        id: "C",
        answer: "`mouse[bird[size]]` não é válido`",
      },
      {
        id: "D",
        answer: "Todos são válidos",
      },
    ],
  },
  {
    id: 5,
    language: "javascript",
    question: javascript5,
    correct: "A",
    explanations:
      "Em JavaScript, todos objetos interagem por <i>referência</i> quando os colocamos um igual ao outro. Primeiro, a variável `c` guarda o valor de um objeto. Depois, declaramos `d` com a mesma referencia que `c` tem para o objeto.",
    answers: [
      {
        id: "A",
        answer: "`Hello`",
      },
      {
        id: "B",
        answer: "`Hey`",
      },
      {
        id: "C",
        answer: "`undefined`",
      },
      {
        id: "D",
        answer: "`ReferenceError`",
      },
    ],
  },
  {
    id: 6,
    language: "javascript",
    question: javascript6,
    correct: "C",
    explanations:
      "`new Number()` é uma funcção construtura padrão do JavaScript. Ainda que parece com um número, não é realmente um número: Tem um monte de funções extras e é um objeto. Quando usamos o operador `==`, só conferimos se ambas tem o mesmo <i>valor</i>. Ambas tem o valor de `3`, então retorna `true`. Contudo, quando usamos o operador `===`, ambos valor <i>e</i> tipo tem de ser o mesmo. E não são: `new Number()` não é um número, é um **objeto**. Ambos retornam `false`.",
    answers: [
      {
        id: "A",
        answer: "`true` `false` `true`",
      },
      {
        id: "B",
        answer: "`false` `false` `true`",
      },
      {
        id: "C",
        answer: "`true` `false` `false`",
      },
      {
        id: "D",
        answer: "`false` `true` `true`",
      },
    ],
  },
];
