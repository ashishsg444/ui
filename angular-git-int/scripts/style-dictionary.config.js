import StyleDictionary from 'style-dictionary';

const config = {
  // source: ['tokens/core.json'], // your JSON file path local run
  source: ['ui/angular-git-int/tokens/core.json'], // your JSON file path server run
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/styles/tokens/', // output folder
      files: [
        {
          destination: '_core.scss', // output file
          format: 'scss/variables',
        },
      ],
    },
  },
};
// StyleDictionary.extend({
//   source: ['tokens/core.json'], // your JSON file path
//   platforms: {
//     scss: {
//       transformGroup: 'scss',
//       buildPath: 'src/styles/tokens/', // output folder
//       files: [
//         {
//           destination: '_core.scss', // output file
//           format: 'scss/variables',
//         },
//       ],
//     },
//   },
// }).buildAll();
new StyleDictionary(config).buildAllPlatforms();
