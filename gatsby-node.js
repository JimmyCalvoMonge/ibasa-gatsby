exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-animated-numbers/,
              use: loaders.null(),
            },
            {
                test: /react-owl-carousel/,
                use: loaders.null(),
              },
          ],
        },
      })
    }
  }