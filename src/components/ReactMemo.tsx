import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import Link from 'antd/lib/typography/Link';

export const ReactMemo: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">React.memo</Title>
      <pre>
        <code className="block-code">{`const MyComponent = React.memo(function MyComponent(props) {
  /* рендер с использованием пропсов */
});`}</code>
      </pre>
      <P className="block-text">
        React.memo — это{' '}
        <Link target="_blank" href="https://ru.reactjs.org/docs/higher-order-components.html">
          компонент высшего порядка
        </Link>
        .
      </P>
      <P className="block-text">
        Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть
        его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем
        самым результат. Это значит, что React будет использовать результат последнего рендера,
        избегая повторного рендеринга.
      </P>
      <P className="block-text">
        React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в
        React.memo и использует{' '}
        <Link href="https://ru.reactjs.org/docs/hooks-state.html" target="_blank">
          useState
        </Link>
        ,{' '}
        <Link href="https://ru.reactjs.org/docs/hooks-reference.html#usereducer" target="_blank">
          useReducer
        </Link>{' '}
        или{' '}
        <Link href="https://ru.reactjs.org/docs/hooks-reference.html#usecontext" target="_blank">
          useContext
        </Link>
        , он будет повторно рендериться при изменении состояния или контекста.
      </P>
      <P className="block-text">
        По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите
        контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго
        аргумента.
      </P>
      <pre>
        <code className="block-code">{`function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);`}</code>
      </pre>
      <P className="block-text">
        Этот метод предназначен только для{' '}
        <Link href="https://ru.reactjs.org/docs/optimizing-performance.html" target="_blank">
          <b>оптимизации производительности</b>
        </Link>
        . Не полагайтесь на него, чтобы «предотвратить» рендер, так как это может привести к
        ошибкам.
      </P>
    </div>
  );
};
