import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Router: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Router</Title>
      <P className="block-text">
        В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к
        приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является
        модуль react-router, который содержит основной функционал по работе с маршрутизацией. Однако
        если мы собираемся работать в браузере, то нам также надо использовать модуль
        react-router-dom.
      </P>
      <pre>
        <code className="block-code">{`npm i react-router-dom`}</code>
      </pre>
      <P className="block-text">
        После установки нужно импортировать BrowserRouter, Routes, Route:
      </P>
      <pre>
        <code className="block-code">{`import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';`}</code>
      </pre>
      <P className="block-text">
        Вместо рендеринга компонента App мы рендерим компонент Router. Компонент Router передает
        информацию о текущем местоположении всем дочерним элементам, вложенным в него. Его следует
        использовать один раз и поместить рядом с корнем дерева компонентов:
      </P>
      <pre>
        <code className="block-code">{`render(
  <Router>
    <App />
  </Router>, document.getElementById("root")
);`}</code>
      </pre>
      <P className="block-text">
        Компонент-оболочка для любых маршрутов, которые мы хотим отобразить, называется Routes.
        Внутри Routes мы будем использовать компонент Route для каждой страницы, которую хотим
        отобразить.
      </P>
      <pre>
        <code className="block-code">{`import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Products, Contact } from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about"  element={<About />} />
        <Route  path="/events"  element={<Events />}  />
        <Route  path="/products"  element={<Products />}  />
        <Route  path="/contact"  element={<Contact />}  />
      </Routes>
    </div>
  );
}`}</code>
      </pre>
      <P className="block-text">
        Эти маршруты сообщают Router, какой компонент отображать при изменении положения окна.
        Каждый компонент Route имеет свойства path и element. Когда расположение браузера совпадает
        с path, отобразится element. Если местоположение равно /, маршрутизатор отобразит компонент
        Home. Если расположение является /products, маршрутизатор отобразит компонент Products.
      </P>
      <P className="block-text">
        У react-router-dom есть компонент Link, который мы можем использовать для создания ссылок
        для браузера
      </P>
      <pre>
        <code className="block-code">{`import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
        <nav>
          <Link to="about">About</Link>
          <Link to="events">Events</Link>
          <Link to="products">Products</Link>
          <Link to="contact">Contact Us</Link>
       </nav>
    </div>
  );
}`}</code>
      </pre>
      <P className="block-text">
        Если мы вводим несуществующий маршрут, например highway, нужно отобразить компонент
        Whoops404. Мы будем использовать * как значение пути, а компонент — как элемент:
      </P>
      <pre>
        <code className="block-code">{`function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about"  element={<About />} />
        <Route  path="/events"  element={<Events />}  />
        <Route  path="/products"  element={<Products />}  />
        <Route  path="/contact"  element={<Contact />}  />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}`}</code>
      </pre>
      <P className="block-text">
        Мы также можем отображать значение маршрута, который мы посетили, используя значение
        местоположения. Поскольку мы живем в мире, где есть хуки React, используем хук. В компоненте
        Whoops404 создадим переменную с именем location, которая возвращает значение текущего
        местоположения (то есть свойство с информацией о том, на какую страницу вы перешли). Затем
        используем значение location.pathname для рендеринга посещаемого маршрута:
      </P>
      <pre>
        <code className="block-code">{`export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
        `}</code>
      </pre>
      <P className="block-text">
        Если мы введем в журнал location, то сможем исследовать этот объект дальше.
      </P>
      <P className="block-text">
        Router используется один раз и включает в себя все компоненты, которые будут использовать
        маршрутизацию. Все компоненты Route должны быть обернуты компонентом Routes, который
        выбирает компонент для рендеринга на основе текущего местоположения окна. Компоненты Link
        могут использоваться для облегчения навигации.
      </P>
    </div>
  );
};
