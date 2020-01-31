module.exports = {
  plugins: ['cucumber'],

  overrides: [{
    files: 'test/integration/**/features/step_definitions/**/*-steps.js',

    rules: {
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Before',
            'BeforeAll',
            'After',
            'AfterAll',
            'Given',
            'When',
            'Then'
          ]
        }
      ],
      'prefer-arrow-callback': 'off',
      'cucumber/no-arrow-functions': 'error',
      'func-names': 'off'
    }
  }]
};
