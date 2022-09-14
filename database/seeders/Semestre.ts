import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {
      nome:'BackEnd', 
      dataInicio:new Date(1992,5,28),
      dataFim:new Date(2021,7,21)
    }
    ])
    
  }
}
