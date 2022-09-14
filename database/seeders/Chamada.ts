import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
    await Chamada.createMany([
      {
      aulasId: 1, 
      alunosId:1, 
      presenca:'Presente',
     
    }
    ])
  }
}
