"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const typescript_1 = __importDefault(require("typescript"));
const rule = utils_1.ESLintUtils.RuleCreator.withoutDocs({
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
                node.params.forEach((param) => {
                    if (!param['typeAnnotation']) {
                        const parserServices = utils_1.ESLintUtils.getParserServices(context);
                        const type = parserServices.getTypeAtLocation(param);
                        if (type.flags === typescript_1.default.TypeFlags.Any) {
                            context.report({
                                node,
                                messageId: 'missingAnyType',
                                fix(fixer) {
                                    return fixer.insertTextAfter(param, ': any');
                                },
                            });
                        }
                    }
                });
            },
            FunctionExpression(node) {
                node.params.forEach((param) => {
                    if (!param['typeAnnotation']) {
                        const parserServices = utils_1.ESLintUtils.getParserServices(context);
                        const type = parserServices.getTypeAtLocation(param);
                        if (type.flags === typescript_1.default.TypeFlags.Any) {
                            context.report({
                                node,
                                messageId: 'missingAnyType',
                                fix(fixer) {
                                    return fixer.insertTextAfter(param, ': any');
                                },
                            });
                        }
                    }
                });
            },
            ArrowFunctionExpression(node) {
                node.params.forEach((param) => {
                    if (!param['typeAnnotation']) {
                        const parserServices = utils_1.ESLintUtils.getParserServices(context);
                        const type = parserServices.getTypeAtLocation(param);
                        if (type.flags === typescript_1.default.TypeFlags.Any) {
                            context.report({
                                node,
                                messageId: 'missingAnyType',
                                fix(fixer) {
                                    return fixer.insertTextAfter(param, ': any');
                                },
                            });
                        }
                    }
                });
            },
        };
    },
});
module.exports = {
    rules: {
        'no-template-literals': rule,
    },
};
