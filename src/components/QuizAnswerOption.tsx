import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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
}

export const QuizQuestion = ({ options, nextPage, minTime = 5 }: QuizQuestionProps) => {
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

  return (
    <>
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <div key={index} onClick={() => handleSelect(index)}>
            <QuizAnswerOption
              emoji={option.emoji}
              text={option.text}
              isSelected={selectedOption === index}
              onSelect={() => handleSelect(index)}
            />
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
