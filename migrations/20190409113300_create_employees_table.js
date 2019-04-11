
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('employees');
        if(!tableExists){
            return knex.schema.createTable('Users', function(table) {
            table.increments();
            table.string('user_id').notNullable();
            table.string('first_name').notNullable();
            table.string('last_name').nullable();
            table.enum('gender', ['male', 'female','binary','undefined', 'n/a']);
            
            table.string('email').notNullable();
            table.string('password').notNullable();


            table.index('user_id');
            table.index('first_name');
            table.unique('email');
            table.unique( 'user_id');
            });
            }else{
            console.log('Table already exists');
            }
    } catch (error) {
        console.log(error);
    }
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};
