import { DateTime } from "luxon";
import { BaseModel, belongsTo, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Turma from "./Turma";

export default class TurmaAluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public turmasId: number;

  @column()
  public alunosId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Turma)
  public turmas: BelongsTo<typeof Turma>;
}
