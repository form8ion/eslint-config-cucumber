module.exports = {
  overrides: [{
    files: '**/*-steps.js',

    rules: {
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Before',
            'After',
            'Given',
            'When',
            'Then'
          ]
        }
      ]
    }
  }]
};
