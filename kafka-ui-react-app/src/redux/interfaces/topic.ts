export type TopicName = string;

export enum CleanupPolicy {
  Delete = 'delete',
  Compact = 'compact',
}

export interface TopicConfig {
  name: string;
  value: string;
  defaultValue: string;
}

export interface TopicConfigByName {
  byName: {
    [paramName: string]: TopicConfig;
  };
}

export interface TopicReplica {
  broker: number;
  leader: boolean;
  inSync: true;
}

export interface TopicPartition {
  partition: number;
  leader: number;
  replicas: TopicReplica[];
}

export interface TopicCustomParamOption {
  name: string;
  defaultValue: string;
}

export interface TopicDetails {
  partitionCount?: number;
  replicationFactor?: number;
  replicas?: number;
  segmentSize?: number;
  inSyncReplicas?: number;
  segmentCount?: number;
  underReplicatedPartitions?: number;
}

export interface Topic {
  name: TopicName;
  internal: boolean;
  partitions: TopicPartition[];
}

export interface TopicMessage {
  partition: number;
  offset: number;
  timestamp: number;
  timestampType: string;
  key: string;
  headers: Record<string, string>;
  content: string;
}

export interface TopicFormCustomParam {
  name: string;
  value: string;
}

export interface TopicFormCustomParams {
  byIndex: { [paramIndex: string]: TopicFormCustomParam };
  allIndexes: string[];
}

export interface TopicWithDetailedInfo extends Topic, TopicDetails {
  config?: TopicConfig[];
}

export interface TopicsState {
  byName: { [topicName: string]: TopicWithDetailedInfo };
  allNames: TopicName[];
  messages: TopicMessage[];
}

export interface TopicFormFormattedParams {
  [name: string]: string;
}

export interface TopicFormData {
  name: string;
  partitions: number;
  replicationFactor: number;
  minInSyncReplicas: number;
  cleanupPolicy: string;
  retentionMs: number;
  retentionBytes: number;
  maxMessageBytes: number;
  customParams: TopicFormCustomParams;
}
