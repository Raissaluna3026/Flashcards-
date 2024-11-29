
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 4508,
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
    id: 7890,
    question: "Como passar os dados do component pai para o componente filho?",
    answer: "Props",
  },
  {
    id: 9087,
    question: "Como 'dar' memória aos componentes?",
    answer: "hook useState",
  },
  {
    id: 4567,
    question: "como chamamos um elemento de entrada que está completamente sincronizado com o estado do React?",
    answer: "Elemento controlado",
  },

]

function Flashcards() {
  
  const [selectedId, setSelectedId] = useState(null);

  function handleclick(id){
    setSelectedId(id !== selectedId ? id : null);

  }

  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <div key={question.id} 
        className={question.id === selectedId ? "selected" : ""}
        onClick={() => handleclick(question.id)}>
          <p>{question.id === selectedId ? question.answer : question.question}</p>
        </div>
      ))}
    </div>
  )

}
