// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters =
['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
let points = 0;
let actualQuestion = 0;
let delegation = 0;

// perguntas
const questions = [
  {
    question: 'Who are you, dear delegate?',
    answers: [
      {
        answer: 'Amanda Santos',
        correct: true,
      },
      {
        answer: 'Ana Flávia Firmino',
        correct: true,
      },
      {
        answer: 'Ana Gabriela Barbosa',
        correct: true,
      },
      {
        answer: 'Carolina Nunes',
        correct: true,
      },
      {
        answer: 'Davi Fausto',
        correct: true,
      },
      {
        answer: 'Edson Luiz',
        correct: true,
      },
      {
        answer: 'Filipe Campos',
        correct: true,
      },
      {
        answer: 'Flávio Jorge de Santana',
        correct: true,
      },
      {
        answer: 'Grazielly Feitosa',
        correct: true,
      },
      {
        answer: 'Helena Campos',
        correct: true,
      },
      {
        answer: 'Isa Medeiros',
        correct: true,
      },
      {
        answer: 'João Anísio',
        correct: true,
      },
      {
        answer: 'João Guilherme',
        correct: true,
      },
      {
        answer: 'João Victor Andrade',
        correct: true,
      },
      {
        answer: 'Koda',
        correct: true,
      },
      {
        answer: 'Letícia Maria',
        correct: true,
      },
      {
        answer: 'Lissa França',
        correct: true,
      },
      {
        answer: 'Lucca Samir',
        correct: true,
      },
      {
        answer: 'Luís Guilherme Revoredo',
        correct: true,
      },
      {
        answer: 'Luna Cavalcanti',
        correct: true,
      },
      {
        answer: 'Maria Beatriz Regis',
        correct: true,
      },
      {
        answer: 'Maria Eduarda Aguiar',
        correct: true,
      },
      {
        answer: 'Marina Neres',
        correct: true,
      },
      {
        answer: 'Mateus Mesquita',
        correct: true,
      },
      {
        answer: 'Miguel Lucas Paiva',
        correct: true,
      },
      {
        answer: 'Ravi Almeida',
        correct: true,
      },
      {
        answer: 'Sarah Ximenes',
        correct: true,
      },
      {
        answer: 'Sofia Celina',
        correct: true,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer.answer;

    answerTemplate.setAttribute('data-answer', answer.answer);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      const resposta = this.getAttribute('data-answer');
      checkAnswer(resposta);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(resposta) {
  if (resposta === "Amanda Santos") {
    delegation = "Federal Republic of Nigeria";
  } else if (resposta === "Ana Flávia Firmino") {
    delegation = "Republic of Colombia";
  } else if (resposta === "Ana Gabriela Barbosa") {
    delegation = "Federative Republic of Brazil";
  } else if (resposta === "Carolina Nunes") {
    delegation = "Republic of the Philippines";
  } else if (resposta === "Davi Fausto") {
    delegation = "Kingdom of Saudi Arabia";
  } else if (resposta === "Edson Luiz") {
    delegation = "Massachusetts Institute of Technology (MIT)";
  } else if (resposta === "Filipe Campos") {
    delegation = "Meta Platforms, Inc.";
  } else if (resposta === "Flávio Jorge de Santana") {
    delegation = "Google LLC";
  } else if (resposta === "Grazielly Feitosa") {
    delegation = "Islamic Republic of Pakistan";
  } else if (resposta === "Helena Campos") {
    delegation = "United Mexican States";
  } else if (resposta === "Isa Medeiros") {
    delegation = "Russian Federation";
  } else if (resposta === "João Anísio") {
    delegation = "Tencent Holdings Ltd.";
  } else if (resposta === "João Guilherme") {
    delegation = "State of Israel";
  } else if (resposta === "João Victor Andrade") {
    delegation = "United States of America";
  } else if (resposta === "Koda") {
    delegation = "Kingdom of Thailand";
  } else if (resposta === "Letícia Maria") {
    delegation = "Republic of India";
  } else if (resposta === "Lissa França") {
    delegation = "Centre for the Study of Existential Risk (CSER)";
  } else if (resposta === "Lucca Samir") {
    delegation = "Kaspersky Lab";
  } else if (resposta === "Luís Guilherme Revoredo") {
    delegation = "Republic of South Africa";
  } else if (resposta === "Luna Cavalcanti") {
    delegation = "Republic of Türkiye";
  } else if (resposta === "Maria Beatriz Regis") {
    delegation = "Islamic Republic of Iran";
  } else if (resposta === "Maria Eduarda Aguiar") {
    delegation = "Republic of Estonia";
  } else if (resposta === "Marina Neres") {
    delegation = "Ukraine";
  } else if (resposta === "Mateus Mesquita") {
    delegation = "Republic of Serbia";
  } else if (resposta === "Miguel Lucas Paiva") {
    delegation = "Federal Republic of Germany";
  } else if (resposta === "Ravi Almeida") {
    delegation = "People's Republic of China";
  } else if (resposta === "Sarah Ximenes") {
    delegation = "International Criminal Police Organization (Interpol)";
  } else if (resposta === "Sofia Celina") {
    delegation = "United Kingdom of Great Britain and Northern Ireland";
  }

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = delegation;

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
