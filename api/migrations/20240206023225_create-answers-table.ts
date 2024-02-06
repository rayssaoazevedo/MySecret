import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('answers', (table) => {
        table.uuid('id').primary();
        table.string('answer').notNullable();
        table.uuid('userIdFK').notNullable().references('userId').inTable('users');
        table.uuid('questionIdFK').notNullable().references('questionId').inTable('questions');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('answers');
}

