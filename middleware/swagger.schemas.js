export const notaSchemas = {
  Nota: {
    type: "object",
    required: ["title", "description"],
    properties: {
      _id: {
        type: "string",
        description: "ID único da nota",
        example: "507f1f77bcf86cd799439011",
      },
      title: {
        type: "string",
        description: "Título da nota",
        example: "Reunião de equipe",
      },
      description: {
        type: "string",
        description: "Descrição detalhada da nota",
        example: "Discutir objetivos do próximo sprint",
      },
    },
  },
  NotaInput: {
    type: "object",
    required: ["title", "description"],
    properties: {
      title: {
        type: "string",
        description: "Título da nota",
        example: "Reunião de equipe",
      },
      description: {
        type: "string",
        description: "Descrição detalhada da nota",
        example: "Discutir objetivos do próximo sprint",
      },
    },
  },
  ErrorResponse: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "Mensagem de erro",
        example: "Erro interno do servidor",
      },
    },
  },
  DeleteResponse: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "Mensagem de confirmação",
        example: "Nota deleted",
      },
    },
  },
};
