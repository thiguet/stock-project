class RouteParser {
    constructor(app) {
        this.app = app;
    }

    parseRoutes() {
        const routes =  require('./routes.js');
        routes.forEach(route => route.registerRoute(this.app));    
    }
}

module.exports = RouteParser;