// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professore from "App/Models/Professore";

export default class ProfessoresController {
  index() {
    return Professore.all();
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "salario",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);
    return Professore.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Professore.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const professore = await Professore.findOrFail(id);
    return professore.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const professore = await Professore.findOrFail(id);

    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "salario",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);

    professore.merge(dados).save();

    return professore;
  }
}
