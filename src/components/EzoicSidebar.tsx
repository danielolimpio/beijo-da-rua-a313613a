import { SidebarAd, SidebarMiddleAd, SidebarBottomAd, SidebarFloating1Ad, SidebarFloating2Ad } from "./EzoicAd";

interface EzoicSidebarProps {
  children: React.ReactNode;
}

/**
 * Sidebar wrapper with Ezoic ads integrated
 * Order (top to bottom):
 * - sidebar (104) - topo
 * - [content: categories, etc]
 * - sidebar_middle_1 (105) - meio
 * - [more content]
 * - sidebar_bottom (106) - acima do rodapé
 * - sidebar_floating_1 (107) - flutuante 1
 * - sidebar_floating_2 (108) - flutuante 2
 */
const EzoicSidebar = ({ children }: EzoicSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Sidebar Top Ad */}
      <SidebarAd />
      
      {/* Original Sidebar Content */}
      {children}
      
      {/* Sidebar Middle Ad */}
      <SidebarMiddleAd />
      
      {/* Sidebar Bottom Ad */}
      <SidebarBottomAd />
      
      {/* Floating Ads - hidden on mobile for better UX */}
      <div className="hidden md:block sticky top-24 space-y-6">
        <SidebarFloating1Ad />
        <SidebarFloating2Ad />
      </div>
      
      {/* Mobile floating ads - show only one */}
      <div className="md:hidden">
        <SidebarFloating1Ad />
      </div>
    </div>
  );
};

export default EzoicSidebar;
