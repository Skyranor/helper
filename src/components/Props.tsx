import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Props: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Props</Title>
      <P className="block-text">
        То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.
      </P>
      <P className="block-text">
        Функциональные компоненты свойства принимают в качестве аргумента.
      </P>
      <P className="block-text">Props представляют собой объект, содержащие свойства.</P>
      <P className="block-text">Обратиться к ним можно - props.имя-свойства.</P>
      <P className="block-text">Props - только для чтения.</P>
      <pre>
        <code className="block-code">
          function Welcome(props) {'{\n  return <h1>Привет, {props.name}</h1>;\n}'}
        </code>
      </pre>
      <P className="block-text">
        Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью
        this.props.имя-свойства.
      </P>
      <pre>
        <code className="block-code">
          {
            'class Welcome extends React.Component{\n  render() {\n    h1>Привет, {this.props.name}</h1>;\n  }\n}'
          }
        </code>
      </pre>
      <P className="block-text">Элементы могут описывать и наши собственные компоненты:</P>
      <pre>
        <code className="block-code">const element = &lt;Welcome name="Алиса" /&gt;</code>
      </pre>
      <P className="block-text">
        Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в
        один объект и передаёт их нашему компоненту. Этот объект называется «пропсы».
      </P>
      <P className="block-text">Например, этот компонент выведет «Привет, Алиса» на страницу:</P>
      <pre>
        <code className="block-code">
          {`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(element, document.getElementById('root'));
            `}
        </code>
      </pre>
      <ol className="block-text">
        <li>Мы передаём React-элемент &lt;Welcome name="Алиса"/&gt; в ReactDOM.render().</li>
        <li>React вызывает наш компонент Welcome с пропсами {`{name: 'Алиса'}`} .</li>
        <li>
          Наш компонент Welcome возвращает элемент {`<h1>Привет, Алиса</h1>`} в качестве результата.
        </li>
        <li>
          React DOM делает минимальные изменения в DOM, чтобы получилось {`<h1>Привет, Алиса</h1>`}.
        </li>
      </ol>
      <P className="block-text">
        Компонент никогда не должен что-то записывать в свои пропсы— вне зависимости от того,
        функциональный он или классовый.
      </P>
    </div>
  );
};
