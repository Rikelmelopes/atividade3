import { DateTime } from "luxon";
import {
  BaseModel,
  belongsTo,
  BelongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Chamada from "./Chamada";
import Turma from "./Turma";

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public data: Date;

  @column()
  public conteudo: string;

  @column()
  public turmasId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Chamada)
  public chamadas: HasMany<typeof Chamada>;

  @belongsTo(() => Turma)
  public turmas: BelongsTo<typeof Turma>;
}
