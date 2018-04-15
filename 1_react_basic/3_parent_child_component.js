// 부모와 자식을 렌더링하는 예제입니다.
// props는 ChildLayout에 적용된 것처럼 값으로 넘길 수 있습니다.
// {, } 사이의 구문은 '자바스크립트 표현식'이라고 해서,
// {, } 사이의 구문이 해석된 값으로 변환됩니다.
class App extends Component {
  render() {
    const ROOT_URL = "http://myLink.com/";

    return (
      <ParentLayout>
        <ChildLayout link={ROOT_URL + "link1"} title="타이틀입니다." />
      </ParentLayout>
    );
  }
}

// 위와 동일
// Javascript의 Array의 map 함수를 사용한 예시입니다.
class App extends Component {
  render() {
    const ROOT_URL = "http://myLink.com/";
    const LINKS = { "hello", "hi", "olah", "an-nyong" };
    return (
      <ParentLayout>
        LINKS.map(function callback(elem) {
          return <ChildLayout link={ROOT_URL + elem} title={elem} />;
        })
      </ParentLayout>
    );
  }
}

// 위와 동일
// es6의 템플릿 문자열을 활용한 예시입니다.
class App extends Component {
  render() {
    const ROOT_URL = "http://myLink.com/";
    const LINKS = { "hello", "hi", "olah", "an-nyong" };
    return (
      <ParentLayout>
        LINKS.map(function callback(elem) {
          return <ChildLayout link=`${ROOT_URL}elem` title={elem} />;
        })
      </ParentLayout>
    );
  }
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------


// 클래스로 컴포넌트를 표현할 수 있습니다.
// 이 때는 render 메소드가 필요합니다.
// 1. 클래스는 this가 있고,
// 함수는 this가 없습니다.
//
// 2. 클래스는 render 메소드의 return에 jsx를 반환해야 하고,
// 함수는 jsx를 리턴하기만 하면 됩니다.
// jsx는 js 내에서 표현하는 DOM 요소들을 일컫습니다. (컴포넌트도 HTML처럼 렌더링 가능)
// jsx를 사용하지 않는 방법도 있는데 가독성이 너무 안좋습니다 :X
class ParentLayout extends Component {
  render() {
    // 보통은 <div>로 묶으면 편합니다.
    // this.props.children은 태그 하위에 오는 요소들을 의미합니다.
    //
    // ex:
    // <ParentLayout>
    //    <ChildLayout />
    // </ParentLayout>
    // 이면, <ChildLayout /> 하나가 children 으로 주어집니다.
    return (
      <div className="parent">
        { this.props.children }
      </div>
    );
  }
}

// 함수로도 컴포넌트를 표현할 수 있습니다.
// 함수형 컴포넌트라고 불리는 이것은, this가 없고, state도 없습니다.
//
// 1. 아래는 es6의 const 키워드로 함수 표현식을 상수에 할당했습니다.
//
// 2. 아래는 es6의 arrow function을 사용하였습니다.
// 이것은 function ChildLayout() {} 와 동일합니다.
const ChildLayout = ({ link, title }) => {
    // 위의 {link, title}은 아래와 동일한 구문입니다.
    //
    // es6의 비구조화 할당(object destructuring)입니다.
    // 참고 (MDN): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // const { link, title } = props;

    return (
      <div className="child">
        <a href={link}>{title}</a>
      </div>
    );
  }
}

// 더 줄이면 아래와 같이 가능합니다.
// 함수형 컴포넌트는 스스로 상태를 가지지 않게 하기 위해 사용하고,
// 성능에 이점이 있습니다.
// 자세한 내용은 => '컨테이너와 컴포넌트' 를 검색해보세요 :-)
//
// const ChildLayout = ({ link, title }) = (
//  <div>
//    <a href={link}>{title}</a>
//  </div>
// )
//
