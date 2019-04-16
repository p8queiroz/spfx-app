'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
require("./config/environment.config");
var webpack = require('webpack');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      generatedConfiguration.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            'appUrl': JSON.stringify(process.env.appUrl),
            'APIUrl': JSON.stringify(process.env.APIUrl)
          }
        })
      )
      return generatedConfiguration;
    }
  });
  
build.initialize(gulp);







