export type Project = {
  name: string;
  label: string;
  color: string;
  url: string;
  thumbnail: string;
  description: string;
  techs: string[];
  progress: number;
}

type CheckErrors = Record<string, {criteria: string; message: string}>;
type CrudType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type InputItem = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea',
  value: string;
  required: boolean;
  error: boolean;
  errorMessage: string;
  checkErrors: CheckErrors;
}

export type Button = {
  name: string;
  label: string;
  func: 'crud' | 'navigate';
  color?: string;
  hoveringColor?: string;
  route?: string;
  crudType?: CrudType;
  keyDown?: string;
}