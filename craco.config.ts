const path = require('path');

module.exports = {
	webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
	eslint: {
		configure: {
			extends: 'react-app',
			rules: {
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'react/prop-types': 'off',
				'react/display-name': 'off',
			},
		},
	},
};
export {}
