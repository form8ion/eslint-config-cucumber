module.exports = {
  overrides: [{
    files: 'test/integration/features/step_definitions/**/*-steps.js',

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
