/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function sum(a: number, b: number): number
export interface ClientOptions {
  /** Server Addr, e.g. address:port[,address:port],...] */
  serverAddr: string
  /** Namespace/Tenant */
  namespace: string
  /** AppName */
  appName?: string
  /** Username for Auth */
  username?: string
  /** Password for Auth */
  password?: string
}
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
export interface NacosServiceInstance {
  /** Instance Id */
  instanceId?: string
  /** Ip */
  ip: string
  /** Port */
  port: number
  /** Weight, default 1.0 */
  weight?: number
  /** Healthy or not, default true */
  healthy?: boolean
  /** Enabled ot not, default true */
  enabled?: boolean
  /** Ephemeral or not, default true */
  ephemeral?: boolean
  /** Cluster Name, default 'DEFAULT' */
  clusterName?: string
  /** Service Name */
  serviceName?: string
  /** Metadata, default '{}' */
  metadata?: Record<string, string>
}
/** ConfigReq for [`ConfigFilter`] */
export interface NacosConfigReq {
  /** DataId */
  dataId: string
  /** Group */
  group: string
  /** Namespace/Tenant */
  namespace: string
  /** Content */
  content: string
  /** Content's Encrypted Data Key. */
  encryptedDataKey: string
}
/** ConfigResp for [`ConfigFilter`] */
export interface NacosConfigResp {
  /** DataId */
  dataId: string
  /** Group */
  group: string
  /** Namespace/Tenant */
  namespace: string
  /** Content */
  content: string
  /** Content's Encrypted Data Key. */
  encryptedDataKey: string
}
/** Client api of Nacos Config. */
export class NacosConfigClient {
  /** Build a Config Client. */
  constructor(clientOptions: ClientOptions, configFilter?: (err: Error | null, arg0?: NacosConfigReq | undefined | null, arg1?: NacosConfigResp | undefined | null) => any | undefined | null)
  /**
   * Get config's content.
   * If it fails, pay attention to err
   */
  getConfig(dataId: string, group: string): Promise<string>
  /**
   * Get NacosConfigResponse.
   * If it fails, pay attention to err
   */
  getConfigResp(dataId: string, group: string): Promise<NacosConfigResponse>
  /**
   * Publish config.
   * If it fails, pay attention to err
   */
  publishConfig(dataId: string, group: string, content: string): Promise<boolean>
  /**
   * Remove config.
   * If it fails, pay attention to err
   */
  removeConfig(dataId: string, group: string): Promise<boolean>
  /**
   * Add NacosConfigChangeListener callback func, which listen the config change.
   * If it fails, pay attention to err
   */
  addListener(dataId: string, group: string, listener: (err: Error | null, value: NacosConfigResponse) => any): Promise<void>
}
/** Client api of Nacos Naming. */
export class NacosNamingClient {
  /** Build a Naming Client. */
  constructor(clientOptions: ClientOptions)
  /**
   * Register instance.
   * If it fails, pay attention to err
   */
  registerInstance(serviceName: string, group: string, serviceInstance: NacosServiceInstance): Promise<void>
  /**
   * Deregister instance.
   * If it fails, pay attention to err
   */
  deregisterInstance(serviceName: string, group: string, serviceInstance: NacosServiceInstance): Promise<void>
  /**
   * Batch register instance, improve interaction efficiency.
   * If it fails, pay attention to err
   */
  batchRegisterInstance(serviceName: string, group: string, serviceInstances: Array<NacosServiceInstance>): Promise<void>
  /**
   * Get all instances by service and group. default cluster=[], subscribe=true.
   * If it fails, pay attention to err
   */
  getAllInstances(serviceName: string, group: string, clusters?: Array<string> | undefined | null, subscribe?: boolean = true): Promise<Array<NacosServiceInstance>>
  /**
   * Select instances whether healthy or not. default cluster=[], subscribe=true, healthy=true.
   * If it fails, pay attention to err
   */
  selectInstances(serviceName: string, group: string, clusters?: Array<string> | undefined | null, subscribe?: boolean = true, healthy?: boolean = true): Promise<Array<NacosServiceInstance>>
  /**
   * Select one healthy instance. default cluster=[], subscribe=true.
   * If it fails, pay attention to err
   */
  selectOneHealthyInstance(serviceName: string, group: string, clusters?: Array<string> | undefined | null, subscribe?: boolean = true): Promise<NacosServiceInstance>
  /**
   * Add NacosNamingEventListener callback func, which listen the instance change.
   * If it fails, pay attention to err
   */
  subscribe(serviceName: string, group: string, clusters: Array<string> | undefined | null, listener: (err: Error | null, value: Array<NacosServiceInstance>) => any): Promise<void>
}
