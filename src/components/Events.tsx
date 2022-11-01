import { default as P } from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

export const Events: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Обработка событий</Title>
      <P className="block-text">
        События в React именуются в стиле camelCase вместо нижнего регистра. С JSX вы передаёте
        функцию как обработчик события вместо строки.
      </P>
      <pre>
        <code className="block-code">{`<button onClick={activateLasers}>
  Активировать лазеры
</button>`}</code>
      </pre>
      <P className="block-text">
        Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув
        false. Нужно явно вызвать preventDefault. Например, в обычном HTML для отмены отправки формы
        (действие по умолчанию) можно написать:
      </P>
      <pre>
        <code className="block-code">{`function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
}`}</code>
      </pre>
      <P className="block-text">
        В приведённом выше коде e — это синтетическое событие. React определяет синтетические
        события в соответствии со спецификацией W3C, поэтому не волнуйтесь о кроссбраузерности.
        События React работают не совсем как нативные.
      </P>
      <P className="block-text">
        Если вы пользуетесь экспериментальным синтаксисом общедоступных полей классов, вы можете
        использовать его, чтобы правильно привязать колбэки:
      </P>
      <pre>
        <code className="block-code">{`class LoggingButton extends React.Component {
  // Такой синтаксис гарантирует, что this привязан к handleClick.
  // Предупреждение: это экспериментальный синтаксис
  handleClick = () => {
    console.log('значение this:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Нажми на меня
      </button>
    );
  }
}`}</code>
      </pre>
      <P className="block-text">Такой синтаксис доступен в Create React App по умолчанию.</P>
      <P className="block-text">
        Если вы не пользуетесь синтаксисом полей, можете попробовать стрелочные функции в колбэке:
      </P>
      <pre>
        <code className="block-code">{`class LoggingButton extends React.Component {
  handleClick() {
    console.log('значение this:', this);
  }

  render() {
    // Такой синтаксис гарантирует, что this привязан к handleClick.
    return (
      <button onClick={() => this.handleClick()}>
        Нажми на меня
      </button>
    );
  }
}`}</code>
      </pre>
      <P className="block-text">
        Проблема этого синтаксиса в том, что при каждом рендере LoggingButton создаётся новый
        колбэк. Чаще всего это не страшно. Однако, если этот колбэк попадает как проп в дочерние
        компоненты, эти компоненты могут быть отрендерены снова. Мы рекомендуем делать привязку в
        конструкторе или использовать синтаксис полей классов, чтобы избежать проблем с
        производительностью.
      </P>
      <Title level={2}>Передача аргументов в обработчики событий</Title>
      <P className="block-text">
        Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например,
        если id — это идентификатор строки, можно использовать следующие варианты:
      </P>
      <pre>
        <code className="block-code">{`<button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
<button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>`}</code>
      </pre>
      <P className="block-text">
        В обоих случаях аргумент e, представляющий событие React, будет передан как второй аргумент
        после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но
        с bind любые последующие аргументы передаются автоматически.
      </P>

      <Title level={2} className="block-text">
        Популярные обработчики событий: onClick, onChange
      </Title>
      <P className="block-text">Существует множество поддерживаемых событий, вот общий список:</P>

      <div className="block-text">
        <ul>
          <li>Буфер обмена: onCopy, onCut, onPaste</li>
          <li>
            Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate
          </li>
          <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
          <li>Фокусировка: onFocus, onBlur</li>
          <li>Форма: onChange, onInput, onSubmit</li>
          <li>
            Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit,
            onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave,
            onMouseMove, onMouseOut, onMouseOver, onMouseUp
          </li>
          <li>Выделение: onSelect</li>
          <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
          <li>UI: onScroll</li>
          <li>Колёсико мышки: onWheel</li>
          <li>
            Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted,
            onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay,
            onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend,
            onTimeUpdate, onVolumeChange, onWaiting
          </li>
          <li>Изображение: onLoad, onError</li>
          <li>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration</li>
          <li>Переход: onTransitionEnd</li>
        </ul>
      </div>
    </div>
  );
};
