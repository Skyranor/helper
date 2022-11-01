import React, { useState } from 'react';
import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { Button } from 'antd';

export const State: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="site-layout-content">
      <Title className="title">State</Title>
      <P className="block-text">
        State (состояние) в React – это объект простого JS, позволяющий отслеживать данные
        компонента. Состояние компонента может меняться. Смена состояния компонента зависит от
        функциональности приложения. Изменения могут основываться на ответе от пользователя, новых
        сообщениях с сервера, ответа сети и т.д.
      </P>
      <P className="block-text">
        Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения
        состояния компонента необходимо делать внутри компонента – инициализация и обновление
        состояния компонента.
      </P>
      <pre>
        <code className="block-code">
          {`class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = { username: 'johndoe' }
  }
  render() {
    return (
      <div> { this.state.username } </div>
    )
  }
}`}
        </code>
      </pre>
      <P className="block-text">
        Единственный допустимый способ обновления состояния компонента – через setState().
      </P>
      <P className="block-text">Так нельзя менять состояние: this.state.username='Mark'.</P>
      <P className="block-text">1 способ изменить state:</P>
      <pre>
        <code className="block-code">{`this.setState({username:'Mark'});`}</code>
      </pre>
      <P className="block-text">2 способ изменить state:</P>
      <pre>
        <code className="block-code">{`this.setState(() => ({ username: 'Mark' }))`}</code>
      </pre>
      <P className="block-text">
        В функциональных компонентах state создается с помощью хука useState()
      </P>
      <P className="block-text">
        Чтобы воспользоваться им, необходимо импортировать useState из 'react':
      </P>
      <pre>
        <code className="block-code">{`import {useState} from 'react';`}</code>
      </pre>
      <P className="block-text">
        Хук useState() принимается в качестве параметра первоначальное значение для переменной, а
        возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.
      </P>
      <P className="block-text">
        При объявлении state часто используют деструктурирующее присваивание:
      </P>
      <pre>
        <code className="block-code">{`const [name, setName] = useState('Mark');`}</code>
      </pre>
      <P className="block-text">
        Примером работы со state является счётчик, который изменяется при нажатии на кнопку.
      </P>
      <div className="counter">
        <Button size="large" shape="round" type="primary" onClick={() => setCount(count - 1)}>
          -1
        </Button>
        <span>{count}</span>
        <Button size="large" shape="round" type="primary" onClick={() => setCount(count + 1)}>
          +1
        </Button>
      </div>
      <P className="block-text">Код имеет следующий вид:</P>
      <pre>
        <code className="block-code">{`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
    <button" onClick={() => setCount(count - 1)}>-1</button>
    <p>Счётчик: {count}</p>
    <button " onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`}</code>
      </pre>
    </div>
  );
};
