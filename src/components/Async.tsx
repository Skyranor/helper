import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Async: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Асинхронные запросы</Title>
      <P className="block-text">
        Большинство веб-приложений работают с данными, которые, как правило, хранятся в базе данных
        (БД). Что получить эти данные приложения обычно используют AJAX, то есть асинхронные запросы
        к серверу. Сервер, получив такой запрос, обращается к БД, а затем возвращает данные обратно
        приложению.
      </P>
      <P className="block-text">Рассмотрим базовые стадии взаимодействия клиент-сервер.</P>
      <P className="block-text">
        Итак, у нас есть клиент. Обычно это программа, которая запрашивает данные по определённом
        протоколу у сервера. Как правило, мы используем протокол HTTPS - это HTTP с шифрованием.
        Сначала клиент создаёт запрос определённого типа: GET, POST, PUT, DELETE и т.д. Также он
        может добавить в запрос какие-то данные, например данные формы, если запрос типа POST или
        PUT. Кроме этого клиент может указать заголовки и параметры запроса. Когда запрос создан,
        клиент посылает его серверу.В ваших приложениях вы всегда будете иметь дело с HTTP
        запросами.
      </P>
      <P className="block-text">
        После того как запрос попал в сеть, он идёт к серверу. Сервер - это тоже программа, только
        на другой машине, которая может быть расположена в любой точке земного шара. Как только
        сервер получил запрос, он начинает его обрабатывать. Сервер получает у запроса всю
        информацию, необходимую для выборки запрошенных данных. Эта информация включает в себя:
      </P>
      <ul className="block-text">
        <li>
          URL - он же путь к запрашиваемому ресурсу. По нему сервер понимает, какой его метод
          обработки запроса должен быть вызван.
        </li>
        <li>
          Заголовки - строки в HTTP-сообщении, содержащие разделённую двоеточием пару
          параметр-значение. Например X-AuthToken: vuaw672387heHh33298Sei92372wi0rsdg836194 -
          заголовок, передающий в запросе токен текущего залогиненного пользователя, он же - токен
          сессии. Заголовки не видны в адресной строке - они не присутствуют в URL.
        </li>
        <li>
          Параметры запроса - пары вида ключ=значение, которые могут быть добавлены в URL после
          знака ?. Если параметров больше одного, они разделяются между собой символом &.
        </li>
      </ul>
      <P className="block-text">
        Стоит упомянуть тот факт, что послав последовательно N запросов, нет гарантии, что ответы
        придут в таком же порядке. Дело в том, что сервер на обработку этих запросов может тратить
        разное количество времени.
      </P>
      <P className="block-text">
        Чтобы выполнить AJAX-запрос к серверу, можете использовать встроенный в браузер метод
        window.fetch или любую AJAX-библиотеку, например Axios или jQuery AJAX.
      </P>
      <P className="block-text">
        Лучшее место для асинхронного запроса в методе componentDidMount.
      </P>
      <P className="block-text">
        Компонент ниже показывает, как в componentDidMount задать внутреннее состояние из результата
        AJAX-запроса. Допустим, наш API возвращает следующий JSON-объект:
      </P>
      <pre>
        <code className="block-code">{`{
  "items": [
    { "id": 1, "name": "Яблоки",  "price": "$2" },
    { "id": 2, "name": "Персики", "price": "$5" }
  ] 
}`}</code>
      </pre>
      <pre>
        <code className="block-code">{`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}`}</code>
      </pre>
      <P className="block-text">Вот эквивалент с хуками:</P>
      <pre>
        <code className="block-code">{`function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}`}</code>
      </pre>
    </div>
  );
};
