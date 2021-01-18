import axios, { AxiosInstance } from 'axios';
import { Exception } from '~types/models';
import { Strings } from '~constants';

const BASE_URL = 'https://600160ad08587400174daa06.mockapi.io/api/';
const TIMEOUT = 20000;

let instance: AxiosInstance;

const getInstance = async (): Promise<AxiosInstance> => {
  if (!instance) {
    instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
      timeout: TIMEOUT,
    });

    instance.interceptors.response.use(
      async (response) => {
        console.log('API RESPONSE', response);
        return response.data;
      },
      async (error) => {
        const errorObj = await parseAxiosError(error);
        return Promise.reject(errorObj);
      }
    );
  }

  return instance;
};

const parseAxiosError = async (error: any): Promise<Exception> => {
  let message = Strings.error.unknown;
  let statusCode;
  if (!!error.isAxiosError) {
    const { response } = error;
    if (response) {
      const { status } = response;
      statusCode = status;
      if (status === 401) {
        message = Strings.error.unauthorized;
      } else if (status >= 500 && status <= 599) {
        message = Strings.error.server;
      } else {
        message = Strings.error.unknown;
      }
    } else {
      message = Strings.error.network;
    }
  }

  return { name: '', message, isApiError: true, statusCode };
};

const api = {
  get: async (url: string) => {
    try {
      const instance = await getInstance();
      return instance.get(url);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  put: async (url: string, data?: any) => {
    try {
      const instance = await getInstance();
      return instance.put(url, data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const GET = api.get;

export const PUT = api.put;

export default api;
