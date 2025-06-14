# API Notas

API REST para gerenciamento de notas com autenticação JWT e documentação Swagger.

## Deploy na Render

### Variáveis de Ambiente Necessárias:

```
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
NODE_ENV=production
```

### Configurações na Render:

1. **Build Command**: `npm install`
2. **Start Command**: `npm start`
3. **Node Version**: 18.x ou superior
4. **Environment**: Node

### Endpoints:

- **Health Check**: `GET /`
- **API**: `GET /api/*`
- **Documentação**: `GET /api-docs`

### Banco de Dados:

Configure MongoDB Atlas ou outro provedor MongoDB e adicione a string de conexão na variável `MONGO_URI`.

### Recursos Implementados:

- ✅ Graceful shutdown
- ✅ CORS configurado
- ✅ Tratamento de erros
- ✅ Health check endpoint
- ✅ Documentação Swagger
- ✅ Configuração de produção
