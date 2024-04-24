import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/Kartochka'
import { Header } from './components/Header'
import { MinCard } from './components/MinKartochka'
import { CompetenceCard } from './components/CompetenceCard'
import { CompetencesList } from './components/CompetenceList'
import './App.css'

const competenceData = [
  
  { title: 'Python', description: 'Опыт в разработке программного обеспечения на Python, включая написание скриптов, веб-приложений и анализ данных.', level: 70 },
  { title: 'Java', description: 'Знание основных концепций языка Java и опыт разработки приложений на этой платформе.', level: 15 },
  { title: 'JavaScript', description: 'Опыт разработки интерактивных веб-приложений с использованием JavaScript', level: 30 },
  { title: 'Vue.js', description: 'Опыт разработки интерактивных веб-приложений с использованием Vue.js, включая создание компонентов, маршрутизацию и управление состоянием приложения через Vuex.', level: 50 },
  { title: 'Kotlin', description: ' Знание основных концепций языка Kotlin и опыт его использования для разработки Android-приложений и веб-серверов', level: 40 },
  { title: 'CHATGPT', description: 'Чат-бот с генеративным искусственным интеллектом, разработанный компанией OpenAI.', level: 100 },
  
];

function App() {

  const [showCompetences, setShowCompetences] = useState(false);
  const [filterLevel, setFilterLevel] = useState(null);
  const [competences, setCompetences] = useState(competenceData);
  const [newCompetence, setNewCompetence] = useState({ title: '', description: '', level: 0 });

  const handleToggleCompetences = () => {
    setShowCompetences(!showCompetences);
  };

  const handleFilter = (level) => {
    setFilterLevel(level);
  };

  const handleShowAllCompetences = () => {
    setFilterLevel(null);
  };

  const handleAddCompetence = () => {
    setCompetences([...competences, newCompetence]);
    setNewCompetence({ title: '', description: '', level: 0 });
  };

  const handleDeleteCompetence = (index) => {
    const updatedCompetences = competences.filter((_, i) => i !== index);
    setCompetences(updatedCompetences);
  };

  const filteredCompetences = filterLevel
    ? competences.filter((competence) => {
        if (filterLevel === 'more') {
          return competence.level > 50;
        } else if (filterLevel === 'less') {
          return competence.level < 50;
        }
        return true;
      })
    : competences;


  return (
    
    <>
    
    <Header/>
    <Card name={"Юсупов Илья Арсенович"} src ={"https://steamuserimages-a.akamaihd.net/ugc/1999066441861332533/0799B02406C6834569F5C34A6DDD06FBFEF32D06/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"} text ={"Меня зовут Илья, я не делал домашку, поскольку закрывал долги на учебе, сейчас у меня идет быстрое самостоятельное обучение по тем темам, что я пропустил. Я сдал все свои долги на 5, можете меня поздравить и не кикайте пж с тг беседы, я очень хочу учиться. Еще я патрик-мэн "}/>
    <h1 className='maintext'>Компетенции</h1>
    <MinCard name ={"ChatGPT"} text ={"Я умею превосходно пользоваться ИИ, даже в этих работах он использовался ;D"}/>
    <MinCard name= {"Языки программирования"} text ={"Мне очень нравится Python, также разбираюсь в C#, а вообще туда-сюда - миллинер"}/>
    <MinCard name ={"КЦПТ"} text ={"Я учусь по направлению Информационные систсемы и программирование, 2 курс"}/>
    <MinCard name ={"Навыки"} text ={"Counter-Strkie, недомузыкант, монтаж видео, фотошоп и т.д"}/>
    <h1 className='maintext'>Что я хочу изучить</h1>
    <Card name ={"Профессиональное программирование"} src ={"https://sp-eng.ru/wp-content/uploads/sites/163/2022/05/razrabotka.jpg"} text={"В первую очередь я бы хотел научиться профессиональному программированию, пониманию кода и вообше стать супер пупер восстребованным программистом и работать в гугл за 500 миллиардов долларов ничего не делая"} />
    <Card name ={"Работа в ESOFT"} src ={"https://s.rbk.ru/v1_companies_s3/resized/1200xH/media/trademarks/d91ae1e2-f047-4b83-9680-6f9915fbfe93.jpg"} text={"Но для начала я бы хотел посадить свое дерево проффесионального программиста в Е-софт и после школы программирования, пройдя стажировку (все в мечтах) и уже на 3ьем курсе начать работать в Esoft со своими друзьями Шестаковой Полиной и Шахтариным Павлом. У нас с ними химия программирования, ждем совмесные проекты чтобы на нашей производственной практике показать себя."} />
    <Card name ={"MONEY"} src ={"https://cashkopilka.com/wp-content/uploads/2022/03/aktivnyj-portfel-hyip-min.png"} text={"Стабильный хороший заработок. Я думаю тут без комментариев"} />
    <Card name ={"Друзья"} src ={"https://polotnos.cdnbro.com/posts/61858169-druzia-logotip-26.jpg"} text={"Хочу приобрести новых друзей в ШП"} />
    <Card name ={"Я"} src ={""} text={"Я ПРОСТО ХОЧУ РАБОТАТЬ У ВАС В КОМПАНИИ"} />
    <Card name ={"НЕ"} src ={""} text={"ВОЗЬМИТЕ НА РАБОТУ ПЖ"} />
    <Card name ={"ЗНАЮ"} src ={""} text={"ИЗВИНИТЕ ЧТО Я ТАК ПОЗДНО ДЕЛАЮ ДОМАШКУ Я ЗАКРЫВАЛ СЕССИЮ"} />
    <Card name ={"ЧТО"} src ={""} text={"ЕЩЕ Я ПИСАЛ КУРСОВУЮ И ЗАКРЫЛ ЕЕ НА ПЯТЕРКУ"} />
    <Card name ={"ЕЩЕ"} src ={""} text={"ЕСЛИ ХОТИТЕ Я МОГУ ПОКАЗАТЬ ВАМ"} />
    <Card name ={"НАПИСАТЬ"} src ={""} text={"СПАСИБО ЗА ВНИМАНИЕ"} />
    
    <div className="competences-container">
        <button onClick={handleToggleCompetences}>
          {showCompetences ? 'Скрыть компетенции' : 'Показать компетенции'}
        </button>
        <div>
          <button onClick={() => handleFilter('more')}>Показать компетенции где уровень знания &gt; 50%</button>
          <button onClick={() => handleFilter('less')}>Показать компетенции где уровень знания &lt; 50%</button>
          <button onClick={handleShowAllCompetences}>Показать полный список компонентов</button>
        </div>
        {showCompetences && (
          <div>
            {filteredCompetences.map((competence, index) => (
              <CompetenceCard
                key={index}
                title={competence.title}
                description={competence.description}
                level={competence.level}
                onDelete={() => handleDeleteCompetence(index)}
                className="competence-card"
              />
            ))}
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="Название"
            value={newCompetence.title}
            onChange={(e) => setNewCompetence({ ...newCompetence, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Описание"
            value={newCompetence.description}
            onChange={(e) => setNewCompetence({ ...newCompetence, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Уровень знания"
            value={newCompetence.level}
            onChange={(e) => setNewCompetence({ ...newCompetence, level: parseInt(e.target.value) })}
          />
          <button onClick={handleAddCompetence}>Создать</button>
        </div>
      </div>

    </>
  )
}

export default App
