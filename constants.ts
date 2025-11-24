import { AnalysisMode } from './types';

export const APP_NAME = "Visionary AI";

export const PROMPTS = {
  [AnalysisMode.SHORT]: "Generate a concise, single-sentence caption for this image.",
  [AnalysisMode.DETAILED]: "Provide a detailed visual description of this image. Describe the subject, setting, colors, lighting, and any text visible.",
  [AnalysisMode.TAGS]: "Analyze this image and return a list of 10 relevant SEO tags or keywords, separated by commas."
};

export const GEMINI_MODEL = "gemini-2.5-flash"; // Excellent multimodal capabilities