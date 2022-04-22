import { validators, errors } from "commons";
const { validateToken, validateString, validateBoolean } = validators;
const { ClientError, ServerError } = errors;

export default function (token, noteId) {
  validateToken(token);

  return fetch(`http://localhost:8080/api/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    const { status } = res;

    if (status === 204) return;
    else if (status >= 400 && status < 500)
      return res.json().then((payload) => {
        const { error: message } = payload;

        throw new ClientError(message);
      });
    else if (status >= 500)
      return res.json().then((payload) => {
        const { error: message } = payload;
        throw new ServerError(message);
      });
    else {
      console.log(res, status);
    }
  });
}
