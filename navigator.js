let observers = []
let current_route = ''

const update_route = (route) => {
    current_route = route;
    console.log(current_route)
    update_observers();
}

const subscribe = (fn) => {
    observers.push(fn)
}

const notify = (observer) => {
    observer(current_route)
}

const update_observers = () => {
    observers.forEach(observer => notify(observer))
}


