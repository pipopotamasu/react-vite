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
    return {
      FunctionDeclaration(node) {
        if (node.params.length > 0) {
          node.params.forEach((param) => {
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
      FunctionExpression(node) {
        if (node.params.length > 0) {
          node.params.forEach((param) => {
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
          if (node.params.length === 1) {
            // const first = context.getSourceCode().getFirstToken(node, node.async ? 1 : 0);
            // const before = context.getSourceCode().getTokenBefore(first);
            // console.log('first', first);
            // console.log('before', before);
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
          } else {
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
