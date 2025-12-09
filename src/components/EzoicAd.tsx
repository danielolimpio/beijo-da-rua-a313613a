interface EzoicAdProps {
  placeholderId: number;
  className?: string;
}

/**
 * Ezoic Ad Placeholder Component
 * 
 * Placeholder IDs:
 * 101 - top_of_page
 * 102 - under_page_title
 * 103 - bottom_of_page
 * 104 - sidebar
 * 105 - sidebar_middle_1
 * 106 - sidebar_bottom
 * 107 - sidebar_floating_1
 * 108 - sidebar_floating_2
 * 109 - under_first_paragraph
 * 110 - under_second_paragraph
 * 111 - mid_content
 * 112 - long_content (800+ words)
 * 113 - longer_content (1200+ words)
 * 114 - longest_content (1800+ words)
 * 115 - incontent_5
 */
const EzoicAd = ({ placeholderId, className = "" }: EzoicAdProps) => {
  return (
    <div 
      id={`ezoic-pub-ad-placeholder-${placeholderId}`}
      className={`ezoic-ad my-6 ${className}`}
    />
  );
};

export default EzoicAd;

// Named exports for specific ad placements
export const TopOfPageAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={101} className={className} />
);

export const UnderPageTitleAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={102} className={className} />
);

export const BottomOfPageAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={103} className={className} />
);

export const SidebarAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={104} className={className} />
);

export const SidebarMiddleAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={105} className={className} />
);

export const SidebarBottomAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={106} className={className} />
);

export const SidebarFloating1Ad = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={107} className={className} />
);

export const SidebarFloating2Ad = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={108} className={className} />
);

export const UnderFirstParagraphAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={109} className={className} />
);

export const UnderSecondParagraphAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={110} className={className} />
);

export const MidContentAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={111} className={className} />
);

export const LongContentAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={112} className={className} />
);

export const LongerContentAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={113} className={className} />
);

export const LongestContentAd = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={114} className={className} />
);

export const InContent5Ad = ({ className }: { className?: string }) => (
  <EzoicAd placeholderId={115} className={className} />
);
