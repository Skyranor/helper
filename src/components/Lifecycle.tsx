import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Lifecycle: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Методы жизненного цикла</Title>
      <P className="block-text" strong>
        Основные методы жизненного цикла:
      </P>
      <span className="block-text">1. constructor ()</span>
      <span className="block-text">
        Обычно в React конструкторы используются только для двух целей:
      </span>
      <div className="block-text">
        <ul>
          <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
          <li>Привязка методов обработчика событий к экземпляру.</li>
        </ul>
      </div>
      <pre>
        <code className="block-code">{`constructor(props) {
  super(props);
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}`}</code>
      </pre>
      <span className="block-text">2. render ()</span>
      <P className="block-text">Рендеринг компонента. Отдает JSX.</P>
      <pre>
        <code className="block-code">{`render () {
  return (
  <div>'Hello'</div>
  )
}`}</code>
      </pre>
      <span className="block-text">3. componentDidMount()</span>
      <P className="block-text">
        componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево).
        Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к
        DOM-элементам.
      </P>
      <pre>
        <code className="block-code">{`componentDidMount()`}</code>
      </pre>
      <span className="block-text">4. componentDidUpdate(prevProps, prevState)</span>
      <P className="block-text">
        Вызывается после обновления компонента. В качестве парапметров передаются старые значения
        объектов: props и state.
      </P>
      <pre>
        <code className="block-code">{`componentDidUpdate(prevProps, prevState) {
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}`}</code>
      </pre>
      <span className="block-text">5. componentWillUnmount()</span>
      <P className="block-text">
        Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных
        запросов, таймеров.
      </P>
      <pre>
        <code className="block-code">{`componentWillUnmount() {
  alert("The component named Header is about to be unmounted.");
}`}</code>
      </pre>
      <P className="block-text">
        Для использования методов жизненного цикла в функциональных компонентах предназначек хук
        useEffect.
      </P>
    </div>
  );
};
