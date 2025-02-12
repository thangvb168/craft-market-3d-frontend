// Using export {} in the file will make the types available globally in the project.
// This is useful when you want to use the types in multiple files.
export {};

declare global {
  interface IRequest {
    url: string;
    method: string;
    body?: {
      [key: string]: any;
    };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IModelPaginate<T> {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    };
    result: T[];
  }

  interface ILogin {
    _id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }
}
