import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Refs: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Рефы</Title>
      <P className="block-text">
        Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в
        рендер-методе.
      </P>
      <P className="block-text">
        В обычном потоке данных React родительские компоненты могут взаимодействовать с дочерними
        только через пропсы. Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми
        пропсами.Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить
        дочерний элемент, обойдя обычный поток данных.Подлежащий изменениям дочерний элемент может
        быть как React-компонентом, так и DOM-элементом.React предоставляет лазейку для обоих
        случаев.
      </P>
      <Title level={2} className="block-text">
        Когда использовать рефы
      </Title>
      <P className="block-text">Ситуации, в которых использование рефов является оправданным:</P>
      <ul className="block-text">
        <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
        <li>Императивный вызов анимаций.</li>
        <li>Интеграция со сторонними DOM-библиотеками.</li>
      </ul>
      <Title level={2} className="block-text">
        Не злоупотребляйте рефами
      </Title>
      <P className="block-text">
        Возможно, с первого взгляда вам показалось, что рефы применяются, когда нужно решить
        какую-то задачу в вашем приложении «во что бы то ни стало». Если у вас сложилось такое
        впечатление, сделайте паузу и обдумайте, где должно храниться конкретное состояние в
        иерархии компонентов. Часто становится очевидно, что правильным местом для хранения
        состояния является верхний уровень в иерархии
      </P>
      <Title level={2} className="block-text">
        Создание рефов
      </Title>
      <P className="block-text">
        Рефы создаются с помощью React.createRef() и прикрепляются к React-элементам через ref
        атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них
        можно было ссылаться из любой части компонента
      </P>
      <pre>
        <code className="block-code">{`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}`}</code>
      </pre>
      <P className="block-text">
        Обратите внимание, что мы передаём props базовому (родительскому) конструктору:
      </P>
      <pre>
        <code className="block-code">{`constructor(props) {
  super(props);
  this.state = {date: new Date()};
}`}</code>
      </pre>
      <Title level={2} className="block-text">
        Доступ к рефам
      </Title>
      <P className="block-text">
        Когда реф передаётся элементу в методе render, ссылка на данный узел доступна через свойство
        рефа current.
      </P>
      <pre>
        <code className="block-code">{`const node = this.myRef.current;`}</code>
      </pre>
      <P className="block-text">Значение рефа отличается в зависимости от типа узла:</P>
      <ul className="block-text">
        <li>
          Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в
          конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.
        </li>
        <li>
          Когда атрибут ref используется с классовым компонентом, свойство current объекта-рефа
          получает экземпляр смонтированного компонента.
        </li>
        <li>
          <strong>Нельзя использовать ref атрибут с функциональными компонентами</strong>, потому
          что для них не создаётся экземпляров.
        </li>
      </ul>
      <P className="block-text"></P>
      <P className="block-text"></P>
    </div>
  );
};
