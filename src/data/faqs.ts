import { faker } from "@faker-js/faker";

const tags = ["principal", "segundo", "terceiro"];

export const generateFaqs = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  question: faker.helpers.arrayElement([
    "gerenciar a conta",
    "configurar senha",
    "alterar email",
    "consultar saldo",
    "baixar extrato",
  ]),
  answer: faker.lorem.paragraph(),
  image: faker.image.url(),
  tags: faker.helpers.arrayElements(tags),
}));
