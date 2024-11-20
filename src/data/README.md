# 📂 `src/data/`

A pasta **`src/data/`** serve para armazenar dados estáticos ou mocks utilizados em fluxos de integração ou simulação. Esses dados podem ser temporários (durante o desenvolvimento) ou permanentes (como listas estáticas). O objetivo é centralizar e organizar esses dados para facilitar seu uso e manutenção.

---

## 🧩 Tipos de Dados Armazenados

### **1. Dados Mockados**
Arquivos contendo simulações de respostas de endpoints ou fluxos temporários que ainda não possuem integração real.

#### **Exemplo: Mock de Usuários**
`users.mock.ts`
```ts
export const users = [
  { id: 1, name: "João Silva", email: "joao@email.com" },
  { id: 2, name: "Maria Oliveira", email: "maria@email.com" },
];
```
---

### **2. Dados Estáticos**
Arquivos com informações constantes que não mudam com frequência e são usadas em várias partes da aplicação.

#### **Exemplo: Estados Brasileiros**
`states.ts`
```ts
export const states = [
  { code: "AC", name: "Acre" },
  { code: "AL", name: "Alagoas" },
  { code: "AM", name: "Amazonas" },
  { code: "BA", name: "Bahia" },
  { code: "CE", name: "Ceará" },
  // Outros estados...
];
```