let matthew = 'Matthew Juleson'
let amy = 'Amy Juleson'
let joseph = 'Joseph Juleson'
let amol = 'Amol Shookup'
let cody = 'Cody Pendant'


const element = (
<ul style={{'color': 'blue', 'fontSize': '24px'}}>
<li>{matthew}</li>
<li>{amy}</li>
<li>{joseph}</li>
<li>{amol}</li>
<li>{cody}</li>

</ul>
)
ReactDOM.render(element, document.getElementById('content'))