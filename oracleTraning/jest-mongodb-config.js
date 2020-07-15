module.exports = {
    mongodbMemoryServerOptions:{
        instance: {
            dbName:'jest'
        },
        binary:{
            version:'4.0.2',//Version of the mongodb
            skipMD5:true
        },
        autoStart:false
    }
}