1. state는 컴포넌트의 내부 변수, 즉 컴포넌트의 개인적인 값에 사용됩니다. 컴포넌트 외부와는 연관이 없는 값을 다룰 때 사용합니다. 그렇지 않은 용도에는 props가 사용됩니다. props는 HTML의 태그의 속성과 유사합니다. JSX 코드에 아래와 같은 문법으로 값을 전달하는 경우, 자동으로 객체로 변환되고 내부에 값이 담겨, 대상 컴포넌트의 this.props로 전달됩니다.

    1. Layout 컴포넌트 예시
    ```js
    import React from "react";

    import Header from "./Header";
    import Footer from "./Footer";

    export default class Layout extends React.Component {
      constructor() {
        super();
        this.state = { title: "Welcome to React Tutorial!" };
      }

      render() {
        setTimeout(() => {
          this.setState({ title: "리액트 튜토리얼에 오신 것을 환영합니다!"});
        }, 2000);
        return (
          <div>
            <Header title = {this.state.title} />
            <Footer />
          </div>
        );
      }
    }
    ```

    2. Header 컴포넌트
    ```js
    import React from "react";

    import Title from "./Header/Title.js"

    export default class Header extends React.Component {
      render() {
        return (
          <Title title={ this.props.title } />
        )
      }
    }
    ```

    3. Title 컴포넌트
    ```js
    import React from "react";

    export default class Title extends React.Component {
      render() {
        return (
          <h1>{this.props.title}</h1>
        )
      }
    }
    ```
