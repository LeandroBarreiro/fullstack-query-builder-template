import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        { name: "Typescritp" },
        { name: "Github" },
        { name: "Git" },
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind" },
        { name: "Banco de dados" },
        { name: "Nest.js" },
        { name: "Next.js" },
        { name: "ZOD" },
    ]);
};
