import h from 'hyperscript';
import hh from 'hyperscript-helpers'

const { div, button } = hh(h)

const initModel: number = 0

function view( model: number) {
    return div([
        div({className: 'mv2'}, `Count: ${model}`),
        button({className: 'pv1 ph2 mr2', onclick: () => { (update("plus", model)) }}, '+'),
        button({className: 'pv1 ph2',  onclick: () => { (update("minus", model)) }}, '-'),
    ])
}


function update(msg: string, model: number)  {
   switch (msg) {
        case 'plus':
            return model + 1
        case 'minus':
            return model - 1
        default:
            return model
    }
}


const rootNode = document.getElementById('app')
rootNode?.appendChild(view(initModel))
