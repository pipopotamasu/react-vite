module.exports = {
  rules: {
    'no-template-literals': {
      meta: {
        type: "problem",
        docs: {
          description: "test"
        },
        fixable: "code",
        schema: []
    },
      create: function (context) {
        console.log('context', context);
        return {
          FunctionDeclaration(node) {
            console.log('function declaration', node);

            if (node.params) {
              node.params.forEach((param) => {
                console.log('param', param);
                if (!param.typeAnnotation) {
                  context.report({
                    node,
                    message: "Missing any type",
                    fix(fixer) {
                        return fixer.insertTextAfter(param, ": any");
                    }
                  });
                }
              })
            }
          }
        };
      },
    },
  },
};
