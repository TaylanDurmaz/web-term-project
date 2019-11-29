export const CONFIGURATION = {
  API_URL: "http://127.0.0.1:5000/",
  WITH_CREDENTIALS: false,
  TOKEN_TYPE: "JWT"
};

class RequestService {
  xmlFetch = config => {
    const URL = CONFIGURATION.API_URL + config.path;

    return new Promise((resolve, reject) => {
      const xmlHttpRequest = new XMLHttpRequest();

      xmlHttpRequest.onload = () => {
        const { status, response } = xmlHttpRequest;

        let parsedResponse;
        try {
          parsedResponse = JSON.parse(response);
        } catch (error) {
          parsedResponse = response;
        }

        switch (parseInt(status / 100, 10)) {
          case 2:
            resolve(parsedResponse);
            break;
          case 4:
            reject(parsedResponse);
            break;
          case 5:
            reject(
              new Error(
                `Status: ${status}, Please contact with the backend system`
              )
            );
            break;
          default:
            reject(new Error(`Unknown status! Status:${status}`));
        }
      };

      xmlHttpRequest.open(config.method, URL);
      xmlHttpRequest.withCredentials = CONFIGURATION.WITH_CREDENTIALS;

      if (config.sendToken)
        xmlHttpRequest.setRequestHeader(
          "Authorization",
          `${window.localStorage.getItem("jwt")}`
        );

      if (config.body) {
        const { body } = config;
        // TEMPORARY
        if (body instanceof FormData) {
          xmlHttpRequest.send(body);
        } else if (typeof body === "object") {
          xmlHttpRequest.setRequestHeader("Content-type", "application/json");

          xmlHttpRequest.send(JSON.stringify(body));
        } else {
          xmlHttpRequest.send(body);
        }
      } else {
        xmlHttpRequest.send();
      }
    });
  };
}

export default new RequestService();
