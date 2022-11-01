import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import Link from 'antd/lib/typography/Link';

export const Keys: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Ключи</Title>
      <P className="block-text">
        Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их
        необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:
      </P>
      <pre>
        <code className="block-code">{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}</code>
      </pre>
      <P className="block-text">
        Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент
        списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:
      </P>
      <pre>
        <code className="block-code">{`const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);`}</code>
      </pre>
      <P className="block-text">
        Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс
        элемента как ключ:
      </P>
      <pre>
        <code className="block-code">{`const todoItems = todos.map((todo, index) =>
  // Делайте так, только если у элементов массива нет заданного ID
  <li key={index}>
    {todo.text}
  </li>
);`}</code>
      </pre>
      <P className="block-text">
        Мы не рекомендуем использовать индексы как ключи, если порядок элементов может поменяться.
        Это негативно скажется на производительности и может вызвать проблемы с состоянием
        компонента. Почитайте статью Робина Покорни (Robin Pokorny), которая объясняет, почему
        индексы-ключи приводят к проблемам. Если вы опустите ключ для элемента в списке, то React по
        умолчанию будет использовать индексы как ключи.
      </P>
      <P className="block-text">
        Вот{' '}
        <Link
          target="_blank"
          href="https://ru.reactjs.org/docs/reconciliation.html#recursing-on-children">
          подробное объяснение о том, почему ключи необходимы
        </Link>
        .
      </P>
    </div>
  );
};
