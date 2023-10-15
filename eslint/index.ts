import { ESLintUtils } from '@typescript-eslint/utils';

const rule = ESLintUtils.RuleCreator.withoutDocs({
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'test',
    },
    messages: { missingAnyType: 'Missing any type' },
    fixable: 'code',
    schema: [],
  },
  create: function (context) {
    console.log('context', context);
    return {
      FunctionDeclaration(node) {
        console.log('function declaration', node);

        if (node.params.length > 0) {
          node.params.forEach((param) => {
            console.log('param', param);
            if (!param['typeAnnotation']) {
              context.report({
                node,
                messageId: 'missingAnyType',
                fix(fixer) {
                  return fixer.insertTextAfter(param, ': any');
                },
              });
            }
          });
        }
      },
      ArrowFunctionExpression(node) {
        if (node.params.length > 0) {
          node.params.forEach((param) => {
            console.log('param', param);
            if (!param['typeAnnotation']) {
              context.report({
                node,
                messageId: 'missingAnyType',
                fix(fixer) {
                  return fixer.insertTextAfter(param, ': any');
                },
              });
            }
          });
        }
      },
    };
  },
});

module.exports = {
  rules: {
    'no-template-literals': rule,
  },
};
