module.exports = {
  parser: "babel-eslint",
  "rules": {
    "semi": 2
  },
  "parserOptions": {
    "ecmaFeatures": {
      "globalReturn": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false,
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "react",
    "jsx-a11y"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".json"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ],
    "react": {
      "pragma": "React",
      "version": "15.0"
    },
    "propWrapperFunctions": [
      "forbidExtraProps",
      "exact",
      "Object.freeze"
    ]
  },
};