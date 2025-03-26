import h from 'hyperscript';
import hh from 'hyperscript-helpers'

const { div, button } = hh(h)

const initModel: number = 0

// pure function
function view(dispatch, model: number) {
    return div([
        div({className: 'mv2'}, `Count: ${model}`),
        button({className: 'pv1 ph2 mr2', onclick: () => dispatch("plus")}, '+'),
        button({className: 'pv1 ph2',  onclick: () => dispatch("minus")}, '-'),
    ])
}

// pure function
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

// impure function due to the mutations
function app(initModel, update, view, node) {
    let model = initModel
    let currentView = view(dispatch, model)
    node.appendChild(currentView)
    function dispatch(msg) {
        model = update(msg, model)
        const updatedView = view(dispatch, model)
        node.replaceChild(updatedView, currentView)
        currentView = updatedView
    }
}


const rootNode = document.getElementById('app')

app(initModel, update, view, rootNode)
