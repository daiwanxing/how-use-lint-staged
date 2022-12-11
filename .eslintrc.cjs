const vueRules = {
    "vue/multi-word-component-names": ["off"],
    "vue/require-default-prop": ["off"],
    "vue/v-on-event-hyphenation": ["off"],
    "vue/html-self-closing": [
        "error",
        {
            html: {
                void: "any",
                // 一些内置的非自闭合的html标签禁止自闭合
                normal: "never",
                // 组件总是允许自闭合
                component: "always",
            },
        },
    ],
};

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        Cmsv6Player: "readonly",
        BMapGLLib: "readonly",
        BMapGL: "readonly",
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        js: "espree",
        ecmaVersion: 2021,
        sourceType: "module",
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        // prettier必须放置最后一个，确保能覆盖其他的规则
        "prettier",
    ],

    rules: {
        // 让eslint去运行prettier, 对于不符合prettierrc文件中的rule的code进行warning
        "prettier/prettier": "warn",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        // 以下是由linter处理的代码块logic的相关规则
        "no-console": [
            "warn",

            {
                allow: ["warn", "error"],
            },
        ],
        ...vueRules,
    },
    plugins: ["prettier"],
};
