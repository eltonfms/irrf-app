import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('employees', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar');
    table.string('cpf').notNullable();
    table.decimal('salary').notNullable();
    table.decimal('social_security_discount').notNullable();
    table.integer('number_dependents').unsigned().notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('employees');
}