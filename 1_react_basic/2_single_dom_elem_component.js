class Layout extends Component {
  render() {
    // 보통은 <div>로 묶으면 편합니다.
    // 필요 없는 div가 생성되는 게 싫으시면,
    // 상위 컴포넌트로 묶어주면 됩니다.
    return (
      <div>
        <h1>It's working</h1>
        <h1>It's working</h1>
      </div>
    );
  }
}
