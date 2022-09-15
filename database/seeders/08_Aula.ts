import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
      {
      data:new Date(2020, 5 ,30), 
      conteudo:"introduçao ao direito", 
      turmasId:1}
    ])
    
  }
}
