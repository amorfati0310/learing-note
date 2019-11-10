(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{212:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"뷰-테스트-알아보기-01"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-테스트-알아보기-01","aria-hidden":"true"}},[t._v("#")]),t._v(" 뷰 테스트 알아보기 01")]),t._v(" "),a("p",[t._v("안녕하세요 요즘 testCode에 관심이 많습니다."),a("br"),t._v("\n특히 tdd에 관심이 있어서 적용을 해보고 싶어서 도구들을 학습해보려 합니다 :ㅇ"),a("br"),t._v("\ntest -> 코드가 spec 정의 후 코드를 짜게 강제 한 다는 점에서 spec 정의 명확히 하지 않고 바로 코딩부터 들어가는 안 좋은 습관이 있는 제게 좀 많은 약을 주지 않을까 생각해봤습니다 "),a("br")]),t._v(" "),a("h3",{attrs:{id:"목차"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#목차","aria-hidden":"true"}},[t._v("#")]),t._v(" 목차")]),t._v(" "),a("ol",[a("li",[t._v("Why Test")]),t._v(" "),a("li",[t._v("Vue Test Getting Started")]),t._v(" "),a("li",[t._v("Vue Cli 사용 및 Vuex Test Basic")]),t._v(" "),a("li",[t._v("2번째 글에서 앞으로 알아보고 적용할 것들 소개")])]),t._v(" "),a("h4",{attrs:{id:"_01-why-test-도구-학습"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-why-test-도구-학습","aria-hidden":"true"}},[t._v("#")]),t._v(" 01. why test 도구 학습")]),t._v(" "),a("p",[t._v("앞서 말했지만 다시 한 번 정리하면")]),t._v(" "),a("ul",[a("li",[t._v("TDD 잘 학습 (리팩토링 및 명세 잘 짜고 코딩하는 습관 기르기 위해서)")])]),t._v(" "),a("h4",{attrs:{id:"_02-vue-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-vue-test","aria-hidden":"true"}},[t._v("#")]),t._v(" 02 Vue Test")]),t._v(" "),a("p",[t._v("오늘 저희가 학습할 내용은 Vue Test Utils 라이브러리 입니다 "),a("br")]),t._v(" "),a("p",[t._v("Vue 공식 라이브러리들은 선택지가 하나 밖에 없는게 장점이자 단점인 듯합니다. 이런 면에서 입문자들이게는 근데 참 좋은 프레임워크 같습니다.")]),t._v(" "),a("p",[t._v("(한놈판 일단 팹시다 👊)")]),t._v(" "),a("h6",{attrs:{id:"_02-01-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-01-started","aria-hidden":"true"}},[t._v("#")]),t._v(" 02-01 started")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/vuejs/vue-test-utils-getting-started\ncd vue-test-utils-getting-started\nnpm install\n\n")])])]),a("p",[t._v("고대로 예제 Repo를 clone 해와서 test를 돌려봅시다. "),a("code",[t._v("npm test")]),t._v(" "),a("br"),t._v("\ncounter.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n    <div>\n      <span class="count">{{ count }}</span>\n      <button @click="increment">Increment</button>\n    </div>\n  `')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/test-utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Counter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./counter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Counter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now mount the component and you have the wrapper")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"renders the correct markup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toContain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<span class=\"count\">0</span>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it's also easy to check for the existence of elements")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"has a button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button should increment the count"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" button "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("test Code를 살펴보면 mount, shallowMount 로 컴포넌트를 리턴한 인스턴스를\n"),a("code",[t._v("wrapper")]),t._v("로 이름 붙여서 api들을 접근합니다.")]),t._v(" "),a("p",[t._v("이벤트에는 "),a("code",[t._v("trigger")]),t._v("로 상태 변화를 줄 수도 있고\n"),a("code",[t._v("vm")]),t._v(" viewModel에 약자인 vm 프로퍼티에 접근해서 data속성 값을 비교할 수도 있습니다.")]),t._v(" "),a("h5",{attrs:{id:"_02-02-example-살펴보며-공부한-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-02-example-살펴보며-공부한-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 02-02 example 살펴보며 공부한 API")]),t._v(" "),a("ul",[a("li",[t._v("mount")]),t._v(" "),a("li",[t._v("shallowMount")]),t._v(" "),a("li",[t._v("find")]),t._v(" "),a("li",[t._v("vm")]),t._v(" "),a("li",[t._v("toContain")]),t._v(" "),a("li",[t._v("html")]),t._v(" "),a("li",[t._v("trigger")]),t._v(" "),a("li",[t._v("propsData")])]),t._v(" "),a("h5",{attrs:{id:"mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/api/#mount",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mount"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("렌더링 된 뷰 구성요서가 포함된 Wrapper를 만듭니다.")]),t._v(" "),a("h5",{attrs:{id:"shallowmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shallowmount","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/api/#shallowmount",target:"_blank",rel:"noopener noreferrer"}},[t._v("shallowMount"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Mount, ShallowMount 두 API 모두다 Wrapper를 반환하고")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Component , {Optipns} parameter로 받는다.\n{Optipns}:\ncontext, slots, attatchToDocument, Stub, Mock....\n\n자세한 부분은 아래 링크에서 살펴봅시다\n\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/api/options.html#context",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mounting Optionis"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("둘의 차이는 어떤 것일까?\n공통점 : Wapper contins mounted and rendered Vue component\n차이: 스텁된 하위 구성요소")]),t._v(" "),a("p",[t._v("stub 사전으로 보면 남은 부분, 몽당 연필")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/53225300/the-difference-between-vue-test-utils-mount-and-shallowmount",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverFlow-what-is-difference"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Shallow , stub 말 그대로 일 부분만 모든 구성요소가 렌더링 되지 않아서")]),t._v(" "),a("ol",[a("li",[t._v("다른 컴포넌트로 전이되지도 않고")]),t._v(" "),a("li",[t._v("성능상 이점도 있고")]),t._v(" "),a("li",[t._v("고로 단위 테스트에서 주로 ShallowMount를 쓴다고 합니다")])]),t._v(" "),a("blockquote",[a("p",[t._v("나머지 살펴본 API")])]),t._v(" "),a("ul",[a("li",[t._v("find")]),t._v(" "),a("li",[t._v("vm")]),t._v(" "),a("li",[t._v("toContain")]),t._v(" "),a("li",[t._v("html")]),t._v(" "),a("li",[t._v("trigger")]),t._v(" "),a("li",[t._v("propsData")])]),t._v(" "),a("p",[t._v("이 부분도 하나 하나 다뤄보려 했지만 뭐 사실 testCode나 예제 문서를 보면 바로 알만한 것들이여서 넘어가도록 하겠다.")]),t._v(" "),a("h3",{attrs:{id:"_3-vue-cli-사용-및-vuex-test-basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-cli-사용-및-vuex-test-basic","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Vue Cli 사용 및 Vuex Test Basic")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Test Utils"),a("OutboundLink")],1),t._v("\nVue-CLI 공식 플러그인 으로서")])]),t._v(" "),a("p",[a("code",[t._v("npm install -g @vue/cli")]),t._v(" vue cli 성치 후\n"),a("code",[t._v("vue create <projectName>")])]),t._v(" "),a("p",[t._v("Manual 설정으로 들어가서 unit-test - jest 관련 설정을 입력하자")]),t._v(" "),a("div",{staticClass:"language-package.json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// package.json\n "test:unit": "vue-cli-service test:unit"\n')])])]),a("p",[t._v("기본 설정이 이렇게 되어 있는데 "),a("code",[t._v("test")]),t._v(" | "),a("code",[t._v("start")]),t._v("는 npm run 을 안 붙여도 되는 명령어이고\n나중에 unitTest 이후로 추가되면 나눌 필요가 있겠지만 ...\n"),a("code",[t._v('test: vue-cli-service test:unit --watch"')]),t._v(" 이렇게 개발을 하는 게 좋을 것 같다 👐")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://vue-test-utils.vuejs.org/guides/getting-started.html\n\n")])])]),a("ul",[a("li",[t._v("추가적으로 __test 폴더에 따로 있는 것보다\n같은 폴더에 있으면 component 경로 접근이 편한데")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// package.json testMatch에 부분을 이렇게 수정해주면 된다.\n "<rootDir>/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)",\n\n')])])]),a("p",[t._v("또 CLI 기반으로 default로 설치했어도\n"),a("code",[t._v("vue add @vue/unit-jest")]),t._v(" 로 plugin을 추가해줌으로서 쉽게 설정들을 추가해줄 수 있다.")]),t._v(" "),a("h4",{attrs:{id:"custom-mount함수-만들어서-사용하기-component-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-mount함수-만들어서-사용하기-component-option","aria-hidden":"true"}},[t._v("#")]),t._v(" custom mount함수 만들어서 사용하기 (Component, Option)")]),t._v(" "),a("p",[t._v("추가적으로 reference 로 걸어놓은 aligator에서 소개하는 부분에서 매번 vue 생성자에 접근해서 다시 인스턴스를 만들어주는 형태인데\n이런 부분을 함수로 만들어놓으면 꾀 좋은 util로 기능을 할 것 이다 😄")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponentWithProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propsData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    propsData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" headingData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponentWithProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FancyHeading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" styleData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headingData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPropertyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styleData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styleData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toEqual")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이렇게 자주쓰이는 Component, propsData를 받아서 $el로 반환하면 디버깅 하기 용이하다")]),t._v("\n")])])]),a("p",[t._v("VueX Test 공부 부족 및 글이 너무 길어 질 것 같아 다음으로 넘기겠습니다. 다음에 또 봐요 안녕")]),t._v(" "),a("h4",{attrs:{id:"다음글에서-앞으로-알아보고-적용할-것들-소개"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다음글에서-앞으로-알아보고-적용할-것들-소개","aria-hidden":"true"}},[t._v("#")]),t._v(" 다음글에서 앞으로 알아보고 적용할 것들 소개")]),t._v(" "),a("ul",[a("li",[t._v("라이브러리에서 사용되고 있는 것들 보고 살펴보고 좋다고 생각되는 것 사례 들고 적용하기")]),t._v(" "),a("li",[t._v("잘 모르는 용어 찾아보고 공부하기 Stub, (Route | Store, Slot Test ...)")]),t._v(" "),a("li",[t._v("Vuex Test")])]),t._v(" "),a("h4",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://alligator.io/vuejs/testing-vue-with-jest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("aligator-vue-test"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);