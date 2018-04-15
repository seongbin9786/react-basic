1. State와 Props는 왜 필요할까?
    1. React는 State와 Props가 변경되는 시점에 컴포넌트를 다시 렌더링하게 됩니다.
    2. (1)에 따라서, State와 Props가 변경되지 않는다면 다시 렌더링하지 않습니다.
    3. Props는 단방향 바인딩으로, 상위 컴포넌트에서 하위 컴포넌트로만 전달됩니다.
    4. Props의 전달은 <ChildLayout name={name} /> 등으로 전달할 수 있습니다.
    5. Props는 하위 컴포넌트에서 props 객체 내부에서 이름으로 접근할 수 있습니다.
    6. State는 클래스 기반 컴포넌트만 가질 수 있는 객체로, 리액트는 State 값이 변경될 때 마다
       다시 렌더링하게 됩니다.
    7. State는 Javascript 객체답게 key-value로 저장합니다. (ex) this.state = { hello: 'world' };
    8. ```js
      constructor(props) {
        super(props);
        // super(props) 이후 코드에서 this.state 로 값 할당이 가능합니다.
        // 다른 코드에서는 this.setState({ hello: 'world' }) 와 같이 사용해야 합니다.
      }
      ```
    9.
