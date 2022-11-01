import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.number([rules.unique({ table: "alunos", column: "cpf" })]),
    matricula: schema.string([
      rules.maxLength(20),
      rules.unique({ table: "alunos", column: "matricula" }),
    ]),
    email: schema.string([
      rules.maxLength(100),
      rules.unique({ table: "alunos", column: "email" }),
    ]),
    telefone: schema.string([
      rules.maxLength(15),
      rules.unique({ table: "alunos", column: "telefone" }),
    ]),
    cep: schema.number.optional(),
    logradouro: schema.string.optional([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    numero: schema.string.optional([rules.maxLength(120)]),
    bairro: schema.string.optional([rules.maxLength(100)]),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {};
}
