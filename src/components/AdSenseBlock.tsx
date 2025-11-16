const AdSenseBlock = () => {
  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-3xl min-h-[280px] bg-muted/30 border border-border rounded-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">Espaço para Google AdSense</p>
          <p className="text-xs mt-2">[data-ad-client] [data-ad-slot]</p>
        </div>
      </div>
    </div>
  );
};

export default AdSenseBlock;
