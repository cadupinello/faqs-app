import { faker } from "@faker-js/faker";

const tags = ["principal", "segundo", "terceiro"];
const icons = [
  "https://cdn.icon-icons.com/icons2/41/PNG/128/datamonitor_taskmanager_monitordedatos_6939.png",
];

export const generateFaqs = Array.from({ length: 20 }).map(() => ({
  id: faker.datatype.uuid(), // Gera um UUID aleatório
  question: faker.helpers.arrayElement([
    "gerenciar a conta",
    "configurar senha",
    "alterar email",
    "consultar saldo",
    "baixar extrato",
  ]), // Seleciona uma pergunta aleatória da lista
  answer: faker.lorem.paragraph(), // Gera um parágrafo aleatório
  image: faker.helpers.arrayElement(icons), // Seleciona um ícone aleatório da lista de URLs
  tags: faker.helpers.arrayElements(tags), // Seleciona um ou mais tags aleatórios da lista de tags
}));
