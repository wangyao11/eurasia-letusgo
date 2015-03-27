System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:jquery/jquery@2.1.3",
    "lodash": "github:lodash/lodash@3.6.0",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@1.11.5",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "sizzle": "github:jquery/jquery@2.1.3/sizzle/dist/sizzle"
  }
});