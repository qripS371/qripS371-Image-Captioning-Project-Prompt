import React, { useState } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ResultPanel from './components/ResultPanel';
import { ImageFile, AnalysisMode, AnalysisResult } from './types';
import { generateImageCaption } from './services/geminiService';
import { PROMPTS } from './constants';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
  const [mode, setMode] = useState<AnalysisMode>(AnalysisMode.SHORT);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelected = (image: ImageFile) => {
    setSelectedImage(image);
    setResult(null); // Reset result on new image
    setError(null);
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);

    try {
      const promptText = PROMPTS[mode];
      const generatedText = await generateImageCaption(
        selectedImage.base64,
        selectedImage.mimeType,
        promptText
      );

      setResult({
        text: generatedText,
        mode: mode,
        timestamp: Date.now()
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50 selection:bg-blue-500/30">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Error Notification */}
        {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008h-.008v-.008z" />
                </svg>
                <span>{error}</span>
                <button onClick={() => setError(null)} className="ml-auto hover:text-white">&times;</button>
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-180px)] min-h-[600px]">
          
          {/* Left Column: Image Area */}
          <div className="flex flex-col h-full">
             <ImageUploader 
                onImageSelected={handleImageSelected}
                selectedImage={selectedImage}
                isLoading={isLoading}
             />
          </div>

          {/* Right Column: Controls & Result */}
          <div className="flex flex-col h-full">
            <ResultPanel 
                result={result}
                mode={mode}
                setMode={setMode}
                onGenerate={handleGenerate}
                isImageSelected={!!selectedImage}
                isLoading={isLoading}
            />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;