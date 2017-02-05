/**
 * Created by user on 5.2.17.
 */
var config = {
    user: 'dshulgin2',
    database: 'appdb',
    password: process.env.PGPASSWORD,
    host: 'localhost', // Server hosting the postgres database
};

var knex = require('knex')({
    client: 'pg',
    connection: config,
    pool: { min: 0, max: 10 }
});


//knex.select().from('company').timeout(1000);


// knex('company').insert({name: 'testName', age: 29, address: "testAddress", salary: 2000})
//     .then(function (output) {
//         console.log(output);
//     });
