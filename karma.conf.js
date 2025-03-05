module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        failFast: true // Detiene las pruebas al primer fallo
      },
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/task-management-system'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcov' }, // Mejora la integración con herramientas de análisis de cobertura
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN, // Reduce la salida de logs
    autoWatch: false, // Desactivado para evitar pruebas innecesarias en desarrollo
    browsers: ['ChromeHeadless'], // Usa Chrome sin UI para pruebas más rápidas
    singleRun: true, // Se ejecuta una vez y termina, útil en CI/CD
    restartOnFileChange: false // Evita reinicios innecesarios en CI/CD
  });
};
