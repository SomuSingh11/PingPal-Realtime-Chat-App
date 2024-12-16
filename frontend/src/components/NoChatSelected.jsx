const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              {/* <MessageSquare className="w-8 h-8 text-primary " /> */}
              <span className="size-12">
                <img src="/ping.png" />
              </span>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to PingPal!</h2>
        <p className="text-base-content/60">
          Your conversations, your way. Choose a chat from the sidebar and let’s
          ping away!
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;