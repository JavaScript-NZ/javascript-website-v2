if (Meteor.isClient) {
  SimpleMDE = require('SimpleMDE');
  Template.orionAttributesMarkdown.onRendered(function () {
    simplemde = new SimpleMDE(
      {
        element: document.getElementById('markdown-editor'), 
        tabSize: 4, 
        spellChecker: false, 
        toolbarGuideIcon: false,
        toolbar: [
          'bold', 'italic', 'strikethrough', '|',
          'heading',
          {
            name: "heading-smaller",
            action: SimpleMDE.toggleHeadingSmaller,
            className: "fa fa-minus-circle",
            title: "Smaller Heading",
          },
          {
            name: "heading-bigger",
            action: SimpleMDE.toggleHeadingBigger,
            className: "fa fa-plus-circle",
            title: "Larger Heading",
          }, '|',
          'code', 'quote', 'table', 'unordered-list', 'ordered-list', '|',
          'clean-block', 'link', 'image', 'horizontal-rule', '|',
          'preview', 'guide'],
        status: ['lines', 'words']                                                                                
      });
    simplemde.value(this.data.value);
  });
  Template.orionAttributesMarkdownColumn.helpers({
    preview: function () {
      var value = this.value;
      return s(value).prune(20).value();
    }
  });
}
