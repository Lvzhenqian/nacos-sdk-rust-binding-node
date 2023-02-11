/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function sum(a: number, b: number): number
export interface NacosConfigResponse {
  /** Namespace/Tenant */
  namespace: string
  /** DataId */
  dataId: string
  /** Group */
  group: string
  /** Content */
  content: string
  /** Content's Type; e.g. json,properties,xml,html,text,yaml */
  contentType: string
  /** Content's md5 */
  md5: string
}
/** Client api of Nacos Config. */
export class NacosConfigClient {
  constructor(serverAddr: string, namespace: string, appName: string, username?: string | undefined | null, password?: string | undefined | null)
  /** Get a NacosConfigResponse from server. */
  getConfig(dataId: string, group: string): NacosConfigResponse
  /** Add a NacosConfigChangeListener callback func, which listen the config change. */
  addListener(dataId: string, group: string, listener: (err: Error | null, value: NacosConfigResponse) => any): void
}
