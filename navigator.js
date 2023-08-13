let observers = []
let current_route = ''

const update_route = (route) => {
    current_route = route;
    update_observers();
}

const subscribe = (fn) => {
    observers.push(fn)
}

const notify = (observer) => {
    console.log(observer)
    observer(current_route)
}

const update_observers = () => {
    observers.forEach(observer => notify(observer))
}



// export default update_route;