module.exports = {
  "extends": ["standard"],
  'plugins': [
    'babel',
    'standard'
  ],
  "env": {
    "jest": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
}