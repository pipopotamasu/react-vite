// FunctionDeclaration
function foo1(hogehoge, fugafuga) {
  return 'bar';
}

function foo2({ hoge }, { fuga }) {
  return 'bar';
}

const arrayObjFunc = [{ key: function (num) { return num + 1 } }];

// ArrowFunctionExpression
//// more than 1 param
const bar1 = (aaaaaa: any, bbbbbb: any) => {};

const bar2 = ({ aaaaa }: any, { bbbbbb }: any) => {};

const bar3 = async ({ aaaaa }: any, { bbbbbb }: any) => {};

const arrayObjArrowFunc = [{ key: (num) => num + 1 }];

// type Bar3 = (firstArg: string, secondArg: string) => void
// const bar3: Bar3 = (firstArg, secondArg) => {};


//// just 1 param
// https://github.com/mysticatea/eslint-plugin/blob/master/lib/rules/arrow-parens.js
// const bar4 = async cccccc => {};
// const bar5 = dddddd => {};
// const bar6 = (eeeeee) => {};
// const bar7 = ( ffffff ) => {};
// const bar8 = ({
//   hoge,
//   fuga
// }) => {};
