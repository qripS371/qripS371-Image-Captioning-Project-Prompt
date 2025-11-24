export enum AnalysisMode {
  SHORT = 'SHORT',
  DETAILED = 'DETAILED',
  TAGS = 'TAGS'
}

export interface AnalysisResult {
  text: string;
  mode: AnalysisMode;
  timestamp: number;
}

export interface ImageFile {
  file: File;
  previewUrl: string;
  base64: string;
  mimeType: string;
}