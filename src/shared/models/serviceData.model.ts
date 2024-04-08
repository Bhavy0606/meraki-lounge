// export interface IServiceDataModel {
//     extensions: ISingleServiceDataModel[]
//     color: ISingleServiceDataModel[]
// }

export interface IServiceDataModel {
  [key: string]: Array<ISingleServiceDataModel>;
}
export interface ISingleServiceDataModel {
  rate: string;
  service: string;
  details?: string;
}

// export interface ISingleServiceDataModel{
//   Details: string;
// }
