function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model)
    let rootNode = createElement(currentView)
    node.appendChild(rootNode)
    function dispatch(msg) {
        model = update(msg, model)
        const updateView = view(dispatch, model)
        const patches = diff(currentView, updateView)
        rootNode = patch(rootNode, patches)
        currentView = updateView
    }
}