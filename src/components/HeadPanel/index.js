import React, {useState} from 'react'
import { Button } from 'semantic-ui-react'
import Qq from './Qq'
import qqq from './qqq'

const content = [
  {
    tab: "react",
    content:
      <Qq/>
  },
  {
    tab: "Node.js",
    content:
      "Node.js는 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있다"
  },
  {
    tab: "javascript",
    content:
      "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 사이드 네트워크 프로그래밍에도 사용되고 있다."
  }
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export default function HeadPanel({ currentUser }) {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => contentChange(index)}>{section.tab}</button>
      ))}
      <br />
      <br />
      {contentItem.content}
    </div>
  );
}
