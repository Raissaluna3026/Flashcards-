
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 3456,
    question: "Em que linguagem o React é baseado?",
    answer: "JavaScript",
  },
  {
    id: 1234,
    question: "Quais são os blocos de construção dos aplicativos React??",
    answer: "Componentes",
  },
  {
    id: 2345,
    question: "Qual o nome da sintaxe que usamos para descrever a UI no react?",
    answer: "JSX",
  },
  {
    id: 3456,
    question: "Como passar os dados do component pai para o componente filho?",
    answer: "Props",
  },
  {
    id: 3456,
    question: "Como 'dar' memória aos componentes?",
    answer: "hook useState",
  },
  {
    id: 4567,
    question: "como chamamos um elemento de entrada que está completamente sincronizado com o estado do React?",
    answer: "Elemento controlado",
  },

]

function Flashcards(){
  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <div>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  )

}
