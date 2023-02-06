import Header from "./components/header"
import Main from "./components/main"
import Navigation from "./components/navigation"
import "./style/style.css"

function App() {

  return (
    <div className="app">
      <div className="content-nav">
        <Navigation photo="./src/image/email.svg" alt="foto do rosto de um homem"  text="ascoisascomoeuvejo@gmail.com"/>
        <Navigation photo="./src/image/link.svg"  text="https://www.linkedin.com/in/alexandro-pluma/" />
        <Navigation photo="./src/image/link.svg"  text="(79) 99937-6517" />
      </div>
      <Header 
        photo="./src/image/eu.jpeg" 
        text="Alexandro Messias Pluma"
        profession="Desenvolvedor Full stack"
       />
      <Main />
    </div>
  )
}

export default App
