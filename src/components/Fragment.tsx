import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Fragment: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Фрагменты</Title>
      <P className="block-text">
        Возврат нескольких элементов из компонента является распространённой практикой в React.
        Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.
      </P>
      <pre>
        <code className="block-code">{`render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}`}</code>
      </pre>

      <P className="block-text">
        Возврат списка дочерних элементов из компонента — распространённая практика. Рассмотрим
        пример на React:
      </P>
      <pre>
        <code className="block-code">{`class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}`}</code>
      </pre>
      <P className="block-text">
        &lt; Columns /&gt; должен вернуть несколько элементов &lt;td&gt;, чтобы HTML получился
        валидным. Если использовать div как родительский элемент внутри метода render() компонента
        &lt;Columns /&gt;, то HTML окажется невалидным.
      </P>
      <pre>
        <code className="block-code">{`class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Привет</td>
        <td>Мир</td>
      </div>
    );
  }
}`}</code>
      </pre>
      <P className="block-text">Результатом вывода &lt;Table /&gt; будет:</P>
      <pre>
        <code className="block-code">{`<table>
  <tr>
    <div>
      <td>Привет</td>
      <td>Мир</td>
    </div>
  </tr>
</table>`}</code>
      </pre>
    </div>
  );
};
