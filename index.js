const cluster = require('cluster');
//Using os module to get number of cores
let numCpus = require('os').cpus().length;

//checking if the cluster is Master so that we can create child workers
if(cluster.isMaster){
    //Creating child workers as per number of cores
    for(let i=0;i<numCpus;i++){
        cluster.fork();
    }

    //Listening to exit event of cluster to start new worker if old worker has died
    cluster.on('exit',()=>{
        console.log(`worker with process id ${process.pid} has died`);
        console.log('Starting new Worker');
        cluster.fork();
    })
}
else{
    //If cluster is child worker then require application
    require('./app');
}