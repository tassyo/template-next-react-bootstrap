# 📂 `src/components/`

A pasta **`src/components/`** é destinada exclusivamente para componentes globais, altamente reutilizáveis e que podem ser usados em diversas partes da aplicação. Esses componentes têm como objetivo encapsular a lógica e o design de partes importantes da interface, garantindo consistência e modularidade.

---

## 📋 Diretrizes de Uso

1. **Componentes Globais e Reutilizáveis**:
    - Devem ser componentes que possam ser usados em várias partes da aplicação.
    - Exemplo: `Navbar`, `Footer`, `Button`, `Modal`.

2. **Base para Componentes Complexos**:
    - Podem usar outros componentes menores, como ícones de **`ui/icons`**, para construir estruturas completas.
    - Exemplo: Um componente de `Card` que utiliza `ui/icons` para exibir ações.

3. **Não Misturar Componentes Locais**:
    - Componentes específicos de páginas devem ser criados nas respectivas pastas da página e **não** aqui.

---

## 🛠️ Estrutura de Componentes

1. **Componentes de Interface Geral:**
    - **`Button`**: Um botão reutilizável, com suporte a variantes como primário, secundário, etc.
    - **`Modal`**: Um modal acessível para exibição de conteúdo ou ações.

2. **Layout Principal:**
    - **`Navbar`**: Barra de navegação principal.
    - **`Footer`**: Rodapé da aplicação.

3. **Compostos ou Estruturais:**
    - **`Card`**: Componente de cartão reutilizável, configurável para diversos contextos.
    - **`Sidebar`**: Barra lateral para navegação ou ações.
---
