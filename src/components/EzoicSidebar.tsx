interface EzoicSidebarProps {
  children: React.ReactNode;
}

/**
 * Sidebar wrapper — ads are handled by Google AdSense auto ads
 */
const EzoicSidebar = ({ children }: EzoicSidebarProps) => {
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
};

export default EzoicSidebar;
