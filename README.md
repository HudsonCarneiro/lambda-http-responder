# lambda-http-responder

Função AWS Lambda simples que recebe requisições HTTP e responde com um JSON.  
Este projeto foi desenvolvido como parte do trabalho da disciplina **Arquitetura Cloud**.

##  Objetivo

Demonstrar o uso de uma função AWS Lambda integrada com API Gateway, configurada com CORS, capaz de receber e processar requisições HTTP.  
A função serve como um endpoint básico de API pública.

## Funcionalidade

A função `lambda-http-responder`:

- Recebe requisições HTTP (GET, POST, OPTIONS).
- Lê o corpo da requisição (se houver).
- Lê parâmetros de URL (query string).
- Retorna uma resposta JSON com essas informações.

Configurada com CORS para permitir requisições de qualquer origem.

---

## Tecnologias utilizadas

- AWS Lambda
- AWS API Gateway
- Node.js 18.x
- JavaScript

---

## Entrada esperada

- Requisições HTTP via API Gateway:
  - Métodos: **GET**, **POST**, **OPTIONS**
  - Content-Type: `application/json` (para POST com body)

### Exemplo de chamada POST:

```bash
curl -X POST https://<sua-api-url> \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria", "idade": 30}'

