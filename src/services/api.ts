// const parseQueryParams = (params) =>
//   params
//     ? Object.entries(params).reduce(
//         (res, item, idx, arr) => `${res}${item[0]}=${item[1]}${idx !== arr.length - 1 ? '&' : ''}`,
//         '?'
//       )
//     : '';

interface RequestFunc {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
  query?: object;
  headers?: Record<string, string>;
  isJson?: boolean;
}

interface ApiServiceMethods {
  get(path: string, query?: object): Promise<any>;
  post(path: string, body: object): Promise<any>;
}

class ApiService implements ApiServiceMethods {
  private internalApi = process.env.API_URL;

  private async request({ path, method, body, headers, isJson = true }: RequestFunc): Promise<any> {
    const url = path.startsWith('/') ? `${this.internalApi}${path}` : path;
    const jsonBody = body ? JSON.stringify(body) : null;
    const httpHeaders = new Headers(headers);

    if (isJson) {
      httpHeaders.append('content-type', 'application/json');
    }

    const response = await fetch(url, { method, headers, body: jsonBody });
    const data = await response.json();

    data.status = response.status;

    if (response.status >= 400) {
      return Promise.reject(data);
    }

    return Promise.resolve(data);
  }

  async get(path: string, query?: object): Promise<any> {
    return this.request({ path, method: 'GET', query });
  }

  async post(path: string, body: object): Promise<any> {
    return this.request({ path, method: 'POST', body });
  }
}

const api = new ApiService();

export default api;
