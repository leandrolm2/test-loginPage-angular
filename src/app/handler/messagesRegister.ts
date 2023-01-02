type ErrorMensagens = {
    401: string;
    403: string;
}

type SuccessMensagens = {
    200: string;
}

export const ErrorMensagens: ErrorMensagens = {
    "401": "Missing Argument",
    "403": "username has been taken for someone"
}

export const SuccessMensagens: SuccessMensagens = {
    "200": "user has been created"
}