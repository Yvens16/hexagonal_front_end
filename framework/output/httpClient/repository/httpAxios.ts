import axios from 'axios';
import { Http } from './Http';

const headers = {
    'Content-Type': 'application/json'
};

export const httpAxios: Http = {
    get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await axios.get(path, { ...config, params: params, headers });
        return response.data as T;
    },
    post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await axios.post(path, { ...params }, { ...config, headers });
        return response.data as T;
    },
    put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await axios.put(path, { ...params }, { ...config, headers });
        return response.data as T;
    },
    delete: async <T>(path: string, params?: any, config?: any) => {
        const response = await axios.delete(path, { ...config, params: params, headers });
        return response.data as T;
    }
};


// De cette manière lorsque l'on veut changer le client
// Il suffit de créer un nouveau fichier httpClient.ts qui va implémenter l'interface Http
// Et de remplacer tous les imports de httpAxios par httpClient


// Example:
// Before
// import { httpAxios } from '../adapters/httpAxios';

// After
// import { httpFetch as httpAxios } from '../adapters/httpFetch';

// Ou
// remplacer l'import directment

// Ou
// Modifier l'implementation de httpAxios directement dans ce fichier


