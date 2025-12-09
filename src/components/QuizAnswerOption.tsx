import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { UnderFirstParagraphAd, MidContentAd, InContent5Ad } from "./EzoicAd";

interface QuizAnswerOptionProps {
  emoji: string;
  text: string;
  onSelect: () => void;
  isSelected: boolean;
}

const QuizAnswerOption = ({ emoji, text, isSelected }: QuizAnswerOptionProps) => {
  return (
    <Card 
      className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-custom-lg hover:border-primary ${
        isSelected ? 'border-primary bg-primary/5' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <p className="text-foreground font-medium">{text}</p>
      </div>
    </Card>
  );
};

interface QuizQuestionProps {
  options: Array<{ emoji: string; text: string }>;
  nextPage: string;
  minTime?: number;
  showAds?: boolean;
}

export const QuizQuestion = ({ options, nextPage, minTime = 5, showAds = true }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [canProceed, setCanProceed] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (index: number) => {
    setSelectedOption(index);
    
    // Aguarda tempo mínimo antes de permitir avançar
    if (!canProceed) {
      setTimeout(() => {
        setCanProceed(true);
      }, minTime * 1000);
    }
  };

  const handleNext = () => {
    if (selectedOption !== null && canProceed) {
      navigate(nextPage);
    }
  };

  // Determine ad positions
  const midPoint = Math.floor(options.length / 2);

  return (
    <>
      {/* Ad after intro/question */}
      {showAds && <UnderFirstParagraphAd className="mb-6" />}
      
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <div key={index}>
            <div onClick={() => handleSelect(index)}>
              <QuizAnswerOption
                emoji={option.emoji}
                text={option.text}
                isSelected={selectedOption === index}
                onSelect={() => handleSelect(index)}
              />
            </div>
            
            {/* Mid content ad - between options */}
            {showAds && index === midPoint - 1 && options.length > 3 && (
              <MidContentAd className="my-4" />
            )}
            
            {/* Incontent 5 ad - before last option */}
            {showAds && index === options.length - 2 && options.length > 4 && (
              <InContent5Ad className="my-4" />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleNext}
          disabled={selectedOption === null || !canProceed}
          className="min-w-[200px]"
        >
          {canProceed ? 'Próximo →' : 'Aguarde...'}
        </Button>
      </div>
    </>
  );
};

export default QuizAnswerOption;
