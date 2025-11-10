import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface QuizOptionProps {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

const QuizOption = ({ title, description, href, icon }: QuizOptionProps) => {
  return (
    <Link to={href} className="block group">
      <Card className="p-6 hover:shadow-custom-lg transition-all duration-300 hover:border-primary cursor-pointer h-full">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {icon && <div className="mb-3 text-primary">{icon}</div>}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" size={20} />
        </div>
      </Card>
    </Link>
  );
};

export default QuizOption;
