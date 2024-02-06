import type {Knex} from 'knex';

const config: {[key: string]: Knex.Config} = {
    development:{
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'new_password',
            database: 'mysecretdb',
        },
        migrations: {
            directory: './migrations'
        },
    },
    production:{
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'new_password',
            database: 'mysecretdb',
        },
        migrations: {
            directory: './migrations'
        },

    },
}
export default config;