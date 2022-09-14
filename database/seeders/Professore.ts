import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professore from 'App/Models/Professore'

export default class extends BaseSeeder {
  public async run () {
    await Professore.createMany([
      {
      nome:'Rogerio ceni', 
      cpf: 1811359619, 
      matricula:'21114290042',
      salario:'4200.00',
      email:'nn@gmail.com',
      telefone:'40028922' ,
      cep: 1000000000,
      logradouro:'ceilandia',
      complemento:'norte',
      numero:'12',
      bairro:'brasilia'
      }
    ])
  }
}
 