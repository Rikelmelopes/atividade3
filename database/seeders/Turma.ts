import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {
      nome:'Ads0028937', 
      professoresId:1,
      disciplinasId:5,
      semestresId:5,
      salasId:1,
      turno:'noturno'
    
    }
    ])
  }
}
