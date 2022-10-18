import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Sala from "./Sala";
import Disciplina from "./Disciplina";
import Semestre from "./Semestre";
import Professore from "./Professore";
import TurmaAluno from "./TurmaAluno";
import Aula from "./Aula";

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public professoresId: number;

  @column()
  public semestresId: number;

  @column()
  public disciplinasId: number;

  @column()
  public salasId: number;

  @column()
  public turno: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Sala)
  public salas: BelongsTo<typeof Sala>;

  @belongsTo(() => Disciplina)
  public disciplinas: BelongsTo<typeof Disciplina>;

  @belongsTo(() => Semestre)
  public semetres: BelongsTo<typeof Semestre>;

  @belongsTo(() => Professore)
  public professores: BelongsTo<typeof Professore>;

  @hasMany(() => TurmaAluno)
  public turmaAlunos: HasMany<typeof TurmaAluno>;

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>;
}
