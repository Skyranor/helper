import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Form: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Работа с формами</Title>
      <P className="block-text">
        В React мы можем использовать все стандартные элементы форм, которые есть в html, однако
        здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с
        формами в React.
      </P>
      <pre>
        <code className="block-code">{`class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
              
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
  }
              
  handleSubmit(e) {
    e.preventDefault();
    alert("Имя: " + this.state.name);
  }
              
  render() {
     return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Имя:</label><br />
          <input type="text" value={this.state.name} onChange={this.onChange}/>
        </p>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
              
ReactDOM.render(<UserForm />,
  document.getElementById("app")
)`}</code>
      </pre>
      <P className="block-text">
        Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:
      </P>
      <pre>
        <code className="block-code">{`this.state = {name: ""};`}</code>
      </pre>
      <P className="block-text">
        При определении поля ввода каждое поле связывается с определенным значением в state:
      </P>
      <pre>
        <code className="block-code">{`<input type="text" value={this.state.name} onChange={this.onChange} />`}</code>
      </pre>
      <P className="block-text">
        Так, источником значения для поля ввода имени является объект this.state.name.
      </P>
      <P className="block-text">
        Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с
        помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши
        клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет
        доступно только для чтения.
      </P>
      <P className="block-text">
        Суть каждого обработчика заключается в изменении значений в this.state:
      </P>
      <pre>
        <code className="block-code">{`onChange(e) {
  var val = e.target.value;
  this.setState({name: val});
}`}</code>
      </pre>
      <P className="block-text">
        С помощью e.target.value получаем введенное значение. После обновления новое значение
        this.state.name отобразится в поле ввода.
      </P>
    </div>
  );
};
