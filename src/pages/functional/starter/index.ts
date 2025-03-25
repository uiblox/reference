import h from 'hyperscript';
import hh from 'hyperscript-helpers'


type DistpatchType = (msg: string, model: number) => void
type UpdateType = (msg: string, model: number) => number
type ViewType = (dispatch: DistpatchType, model: number) => HTMLElement
const { div, button } = hh(h)

const initModel: number = 0


function view(dispatch: DistpatchType, model: number) {
    return div([
        div({className: 'mv2'}, `Count: ${model}`),
        button({className: 'pv1 ph2 mr2', onclick: () => dispatch('plus', model)}, '+'),
        button({className: 'pv1 ph2',  onclick: () => dispatch('minus', model)}, '-'),
    ])
}

function app(initModel: number, update: UpdateType, view:ViewType, node: HTMLElement | null) {
    let model = initModel;
    let currentView = view(dispatch, model)
    node?.appendChild(currentView)

    function dispatch(msg: string, model: number) {
        model = update(msg, model)
        const updatedView = view(dispatch, model)
        node?.replaceChild(updatedView, currentView)
        currentView = updatedView
    }
}

function update(msg: string, model: number)  {
    switch (msg) {
        case 'plus':
            return model + 1
            break
        case 'minus':
            return model - 1
            break
        default:
            return model
            break; 
    }
}

const rootNode = document.getElementById('app')

app(initModel, update, view, rootNode)