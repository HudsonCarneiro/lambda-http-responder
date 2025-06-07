export const handler = async (event) => {
  try {
      console.log("Evento recebido:", JSON.stringify(event));

      const response = {
          statusCode: 200,
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Methods": "*",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              message: "Olá do Lambda! Sua função está funcionando 🚀"
          }),
      };

      return response;
  } catch (error) {
      console.error("Erro:", error);

      return {
          statusCode: 500,
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ error: "Erro interno no servidor" }),
      };
  }
};
