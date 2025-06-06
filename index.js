exports.handler = async (event) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
    };

    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: "Pré-verificação CORS OK" }),
        };
    }

    let requestBody = {};
    if (event.body) {
        try {
            requestBody = JSON.parse(event.body);
        } catch (err) {
            console.error("Erro ao parsear body:", err);
        }
    }

    const response = {
        message: "Requisição recebida com sucesso!",
        method: event.httpMethod,
        path: event.path,
        requestBody: requestBody,
        queryParams: event.queryStringParameters,
    };

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(response),
    };
};

