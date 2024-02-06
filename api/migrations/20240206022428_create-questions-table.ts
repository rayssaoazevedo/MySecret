import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('questions', (table) => {
        table.uuid('questionId').primary();
        table.string('question').notNullable();
        table.uuid('userIdFK').notNullable().references('userId').inTable('users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('questions');
}

