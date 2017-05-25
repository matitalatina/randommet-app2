const copyConfig = require('@ionic/app-scripts/config/copy.config.js');

copyConfig.copyExternalLibraries = {
  src: [
    '{{ROOT}}/node_modules/particles.js/particles.js',
    '{{ROOT}}/node_modules/velocity-animate/velocity.min.js',
    '{{ROOT}}/node_modules/jquery/dist/jquery.slim.min.js'
  ],
  dest: '{{WWW}}/libs'
};

module.exports = copyConfig;