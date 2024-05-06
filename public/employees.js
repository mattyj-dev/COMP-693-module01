let matthew = 'Matthew Juleson';
let amy = 'Amy Juleson';
let joseph = 'Joseph Juleson';
let amol = 'Amol Shookup';
let cody = 'Cody Pendant';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, matthew), /*#__PURE__*/React.createElement("li", null, amy), /*#__PURE__*/React.createElement("li", null, joseph), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, cody));
ReactDOM.render(element, document.getElementById('content'));