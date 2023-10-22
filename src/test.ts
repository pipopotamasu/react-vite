// FunctionDeclaration
function foo1(firstArg, secondArg) {
  return 'bar';
}


const arrayObjFunc = [{ key: function (num) { return num + 1 } }];

// ArrowFunctionExpression
//// more than 1 param
const bar1 = (firstArg, secondArg) => {};

const arrayObjArrowFunc = [{ key: (num) => num + 1 }];

type Bar2 = (firstArg: string, secondArg: string) => void
const bar2: Bar2 = (firstArg, secondArg) => {};


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
