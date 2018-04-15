class Layout extends Component {
  render() {
    // 오류 발생!
    // 컴포넌트는 반드시 하나의 DOM 요소를 반환해야 합니다.
    // 이 때, DOM 요소가 자식 요소를 갖고 있는지 여부는 상관이 없습니다.
    return (
      <h1>It's working</h1>
      <h1>It's working</h1>
    );
  }
}
