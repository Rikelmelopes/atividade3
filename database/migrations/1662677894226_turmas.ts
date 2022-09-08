import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'turmas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.integer('professores_id').unsigned().references("id").inTable("cursos").notNullable()
      table.integer('semestres_id').unsigned().references("id").inTable("professores").notNullable()
      table.integer('disciplinas_id').unsigned().references("id").inTable("disciplinas").notNullable()
      table.integer('salas_id').unsigned().references("id").inTable("salas").notNullable()
      table.string('turno' ,1).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
