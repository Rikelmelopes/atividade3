import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome:'BackEnd', cursoId:1}
    ])
    
    // Write your database queries inside the run method
  }
}
