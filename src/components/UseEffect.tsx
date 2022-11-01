import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const UseEffect: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">UseEffect</Title>
      <P className="block-text">
        Для использования методов жизненного цикла в функциональных компонентах предназначек хук
        useEffect.
      </P>
      <P className="block-text">Хук позволяет использовать 3 метода жизненного цикла:</P>
      <ul className="block-text">
        <li>componentDidMount()</li>
        <li>componentDidUpdate(prevProps, prevState)</li>
        <li>componentWillUnmount()</li>
        <P className="block-text">
          UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог
          componentDidMount).
        </P>
        <P className="block-text"></P>
      </ul>
      <pre>
        <code className="block-code">{`useEffect (() => { }, [])`}</code>
      </pre>
      <P className="block-text">
        UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с
        зависимостью (или несколькими) (аналог componentDidUpdate).
      </P>
      <pre>
        <code className="block-code">{` useEffect ( () => { }, [name])`}</code>
      </pre>
      <P className="block-text">
        UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог
        componentDidMount + componentDidUpdate).
      </P>
      <pre>
        <code className="block-code">{`useEffect ( () => { } )`}</code>
      </pre>
      <P className="block-text">
        UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию
        (аналог componentWillUnmount).
      </P>
      <pre>
        <code className="block-code">{`useEffect ( () => {
  return () => {};
})`}</code>
      </pre>
    </div>
  );
};
