
export interface Workflow {
  name: string,
  id: string,
  flowId: string,
  itemId: string,
  memo: string,
  nodes: any[],
  connections: string
  isStart: 0|1,
}

export interface WorkflowNode { 
  id: string;
  name: string;
  isJointly: 0|1;
  isCurrentNode: 0|1;
  label: string;
  [k: string]: any
}

export interface WorkflowNodeRaw {
  nextNodes: string;
  currentNodeInstId: string;
  name: string;
  prevNodes: string;
  isCurrentNode: 0|1;
  id: string;
}


export interface WorkflowData {
  edges: {
    id: string;
    source: string;
    target: string;
    [key: string]: any;
  }[]
  nodes: WorkflowNode[]
}

export interface WorkflowOper {
  operId: string;
  operName: string;
}

