1. input 박스의 사용자의 입력에 따라 title을 변경하는 것을 구현한다면 어떻게?

2. 사용자의 입력이 필요하므로, `<input type=text />` 이 필요합니다. 아래는 기본 틀!
    ```js
    render() {
      return (
        <div>
          <Title title={ this.props.title } />
          <input type="text" />
        </div>
      )
    }
    ```

3. 완성!

    ```js
    export default class Header extends React.Component {
      constructor() {
        super();
        this.state = {title: "Welcome to React Tutorial!"};
      }

      onInputChange(e) {
        this.setState({title: e.target.value});
      }

      render() {
        return (
          <div>
            <Title title={this.state.title} />
            <input type="text" value={this.state.title} onChange={this.onInputChange.bind(this)} />
          </div>
        );
      }
    }
    ```
