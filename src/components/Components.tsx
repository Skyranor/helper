import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import Link from 'antd/lib/typography/Link';

export const Components: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Функциональные и классовые компоненты</Title>
      <P className="block-text" strong>
        Проще всего объявить React-компонент как функцию:
      </P>
      <pre>
        <code className="block-code">
          {'function Welcome(props) {\n   return <h1>Привет, {props.name}</h1>;\n}'}
        </code>
      </pre>
      <P className="block-text">
        Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в
        качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты
        «функциональными», так как они буквально являются функциями.
      </P>
      <P className="block-text">
        Ещё компоненты можно определять как
        <Link
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes"
          target="_blank">
          {' '}
          классы ES6
        </Link>
        :
      </P>
      <pre>
        <code className="block-code">
          {
            'class Welcome extends React.Component {\n  render() {\n    <h1>Привет, {this.props.name}</h1>;\n  } \n}'
          }
        </code>
      </pre>
      <P className="block-text">Компонента должна себя вести как чистая функция.</P>
      <span className="block-text">«Чистой» называется функция, которая:</span>
      <ul className="block-text">
        <li>Для одинаковых входных данных всегда возвращает один результат.</li>
        <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
        <li>Не зависит от внешних состояний.</li>
      </ul>
    </div>
  );
};
