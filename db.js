const config = require('./knexfile');
const knex = require('knex')(config.development);




(async() =>{
    try{
        const version = await knex.raw("SELECT VERSION()");
        console.log(version[0][0]);
    }catch(error){
        console.log(error);
    }
})();





/* knex.raw("SELECT VERSION()").then(
    (version)=>{
        console.log(version[0][0])
    }
).catch(error=>{
    console.log(error); throw error;
}).finally(()=>{
    knex.destroy();
}) */