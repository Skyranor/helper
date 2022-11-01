import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Context = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Context</Title>
      <P className="block-text">
        Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая
        через пропсы.
      </P>
      <P className="block-text">Создать контекст:</P>
      <pre>
        <code className="block-code">{`const MyContext = React.createContext(defaultValue);`}</code>
      </pre>
      <ul className="block-text">
        <li>defaultValue - дефолтное значение или объект для получения через контекст</li>
      </ul>
      <P className="block-text">
        Вызывая React.createContext мы получаем объект, который содержит два компонента:
      </P>
      <P className="block-text">
        1. Компонент Provider. Благодаря ему все дочерние компоненты могут получать значения,
        которые мы ему передаем.
      </P>
      <pre>
        <code className="block-code">{`<MyContext.Provider value={value}> </MyContext.Provider>`}</code>
      </pre>
      <P className="block-text">
        Компонент Provider принимает проп value, который будет передан во все компоненты,
        использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider
        может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты
        Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.
      </P>
      <P className="block-text">
        2. Компонент Consumer - это React-компонент, который подписывается на изменения контекста.
      </P>
      <P className="block-text">
        Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее
        значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен
        ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента
        Provider. Если такого компонента Provider не существует, аргумент value будет равен значению
        defaultValue, которое было передано в createContext().
      </P>
      <pre>
        <code className="block-code">{`<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}</code>
      </pre>
      <P className="block-text">
        Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове
        React.createContext и возвращает текущее значение контекста для этого контекста.
      </P>
      <P className="block-text">
        Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над
        вызывающим компонентом в дереве.
      </P>
      <pre>
        <code className="block-code">{`const value = useContext(MyContext);`}</code>
      </pre>
      <P className="block-text">
        Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения
        контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью
        мемоизации.
      </P>
      <P className="block-text">Контекст лучше всего создавать в отдельном файле.</P>
    </div>
  );
};
