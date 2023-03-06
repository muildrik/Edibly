module.exports = function(app) {

    const routes = {

        load() {

            const {readdirSync} = require('fs')
            const {resolve} = require('path')        
            const routes_dir = resolve(__dirname, 'routes')

            readdirSync(routes_dir).forEach(route_file => {
                try {
                    app.use('/api', require(resolve(routes_dir, route_file)))
                } catch (error) {
                    console.log(`Encountered Error initializing routes from ${route_file}`)
                    console.log(error);
                }
            })
        }
    }

    return routes
}