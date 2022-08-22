module.exports = {
  // Определяет глобальные переменные среды
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Набор правил для расширения базовых правил линтера
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  //
  overrides: [
  ],
  // Параметры для JavaScript
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  //Сторонние плагины
  plugins: [
    'vue',
  ],
  // Правила, которые переопределяют (дополняют) базовые или расширенные правила линтера
  rules: {
    // Общие настройки
    'no-console': 'error',
    'no-debugger': 'error',
    // Правила для секции <template>
    // Проверка порядка атрибутов
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': false
    }],
    // Проверка на максимальное количество атрибутов в строке
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    // Проверка на самозакрывающийся тег или компонент
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    // Проверка последовательного отступа в шаблоне <template>
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    // Проверка регистра для стиля именования компонентов в шаблоне
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': true,
    }],
    // Проверка нерегулярных пробелов
    'vue/no-irregular-whitespace': ['error', {
      'skipStrings': true,
      'skipComments': false,
      'skipRegExps': false,
      'skipTemplates': false,
      'skipHTMLAttributeValues': false,
      'skipHTMLTextContents': false
    }],
    // Правила для секции <script>
    // Проверка на определенный регистр для имени компонента
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    // Проверка имени компонента — оно должно соответствовать имени файла, в котором он находится
    'vue/match-component-file-name': ['error', {
      'extensions': ['vue'],
      'shouldMatchCase': false
    }],
    // Порядок свойств в компонентах
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    // Проверка  запятых
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }]
  },
};
