export interface IResponse<T> {
  message: string;
  status: number;
  metadata: T;
}
