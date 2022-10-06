// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {
  index() {
    return Disciplina.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "cursoId"]);
    return Disciplina.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Disciplina.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const discplina = await Disciplina.findOrFail(id);
    return discplina.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const discplina = await Disciplina.findOrFail(id);

    const dados = request.only(["nome", "cursoId"]);

    discplina.merge(dados).save();

    return discplina;
  }
}
