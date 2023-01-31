module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '#types': './src/@types',
            '#assets': './src/assets',
            '#assets/*': './src/assets/*',
            '#components': './src/components',
            '#hooks': './src/hooks',
            '#routes': './src/routes',
            '#screens': './src/screens',
            '#screens/*': './src/screens/*',
            '#theme': './src/theme',
            '#utils': './src/utils',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.svg'],
        },
      ],
    ],
  };
};
