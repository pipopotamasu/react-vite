const path = require('path');

module.exports = {
  process(_, sourcePath, __) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
