orion.attributes.registerAttribute('epic', {
  template: 'orionAttributesEpic',
  previewTemplate: 'orionAttributesEpicColumn',
  getSchema: function (options) {
    return {
      type: String
    };
  },
  valueOut: function () {
    // return Session.get('editor-markdown');
    return document.getElementById('entry-markdown-content').innerText;
  },
});
