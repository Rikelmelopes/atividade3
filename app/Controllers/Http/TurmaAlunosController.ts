// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";

export default class TurmaAlunosController {
  index() {
    return TurmaAluno.all();
  }

  store({ request }) {
    const dados = request.only(["turmaId", "alunoId"]);
    return TurmaAluno.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return TurmaAluno.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const turmaaluno = await TurmaAluno.findOrFail(id);
    return turmaaluno.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const turmaaluno = await TurmaAluno.findOrFail(id);

    const dados = request.only(["turmaId", "alunoId"]);

    turmaaluno.merge(dados).save();

    return turmaaluno;
  }
}
