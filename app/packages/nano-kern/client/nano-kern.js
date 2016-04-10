
NanoKern = function (element, kernTable) {
  var text = element.innerHTML;
  var split = text.split('');

  var elements = '';

  for (var i=0; i<split.length; i++) {
    elements += ('<span>' + split[i] + '</span>');
  }

  element.innerHTML = elements;

  var children = element.children;
  for (var c=0; c<kernTable.length; c++) {
    children[c].style.displayName = 'inline-block';
    children[c].style.marginLeft = kernTable[c] + 'px';
  }
};
