import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Aula from "./Aula";

export default class Chamada extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public aulasId: number;

  @column()
  public alunosId: number;

  @column()
  public presenca: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Aula)
  public aulas: BelongsTo<typeof Aula>;
}
