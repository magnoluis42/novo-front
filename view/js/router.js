export class Router{

    routes = {}

    add(routeName, url){
        this.route[routeName] = url
    }

    route(event){

        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle(){
        const {pathname} = window.location
        const route = this.routes[pathname]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML(html)
        })
    }
}