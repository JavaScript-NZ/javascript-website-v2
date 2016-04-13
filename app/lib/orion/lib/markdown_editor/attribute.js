orion.attributes.registerAttribute('markdown', {
  template: 'orionAttributesMarkdown',
  previewTemplate: 'orionAttributesMarkdownColumn',
  getSchema: function (options) {
    return {type: String};
  },
  valueOut: function () {
    debugger;
    return simplemde.value();
  }
});
