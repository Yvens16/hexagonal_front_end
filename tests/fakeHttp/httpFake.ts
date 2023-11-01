import { Http } from '../../framework/output/httpClient/repository/Http';
import { productListMock } from '../fixtures/products';


export const httpFake: Http = {
    get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        if (params && params.id) {
            return await productListMock.find((product) => product.id === params.id);
        }
        const response = await productListMock;
        return response;
    },
    post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await productListMock;
        return response;
    },
    put: async <T>(path: string, params?: Record<string, any>, config?: any) => { },
    delete: async <T>(path: string, params?: any, config?: any) => { }
};