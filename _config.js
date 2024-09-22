var config = {}

// Update to have your correct username and password
config.mongoURI = {
    //production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    //development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    //test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',

    production: 'mongodb+srv://ramseykhatiti:CRkGnocLCQzYQnWj@ramseycluster.hhyio.mongodb.net/?retryWrites=true&w=majority&appName=RamseyCluster',
    development: 'mongodb+srv://ramseykhatiti:CRkGnocLCQzYQnWj@ramseycluster.hhyio.mongodb.net/?retryWrites=true&w=majority&appName=RamseyCluster',
    test: 'mongodb+srv://ramseykhatiti:CRkGnocLCQzYQnWj@ramseycluster.hhyio.mongodb.net/?retryWrites=true&w=majority&appName=RamseyCluster',
}
module.exports = config;
