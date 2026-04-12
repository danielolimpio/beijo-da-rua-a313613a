/**
 * Ad Placeholder Component (Google AdSense)
 * 
 * These components serve as empty placeholders.
 * Google AdSense auto ads are loaded via the script in index.html
 * and will automatically place ads in optimal positions.
 */

interface AdPlaceholderProps {
  className?: string;
}

// All ad components return null — AdSense auto ads handle placement
export const TopOfPageAd = ({ className }: AdPlaceholderProps) => null;
export const UnderPageTitleAd = ({ className }: AdPlaceholderProps) => null;
export const BottomOfPageAd = ({ className }: AdPlaceholderProps) => null;
export const SidebarAd = ({ className }: AdPlaceholderProps) => null;
export const SidebarMiddleAd = ({ className }: AdPlaceholderProps) => null;
export const SidebarBottomAd = ({ className }: AdPlaceholderProps) => null;
export const SidebarFloating1Ad = ({ className }: AdPlaceholderProps) => null;
export const SidebarFloating2Ad = ({ className }: AdPlaceholderProps) => null;
export const UnderFirstParagraphAd = ({ className }: AdPlaceholderProps) => null;
export const UnderSecondParagraphAd = ({ className }: AdPlaceholderProps) => null;
export const MidContentAd = ({ className }: AdPlaceholderProps) => null;
export const LongContentAd = ({ className }: AdPlaceholderProps) => null;
export const LongerContentAd = ({ className }: AdPlaceholderProps) => null;
export const LongestContentAd = ({ className }: AdPlaceholderProps) => null;
export const InContent5Ad = ({ className }: AdPlaceholderProps) => null;

const EzoicAd = () => null;
export default EzoicAd;
