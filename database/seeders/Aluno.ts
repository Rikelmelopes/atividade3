import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {
      nome:'ADS', 
      cpf: 1811359617, 
      matricula:'21114288002',
      email:'nn@gmail.com',
      telefone: 5561984654655,
      cep: 1000000000,
      logradouro:'ceilandia',
      complemento:'norte',
      numero:12,
      bairro:'brasilia'}
    ])
  }
}
