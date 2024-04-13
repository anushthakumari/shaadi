const FrameComponent2 = ({ text, overlayVisible, overlayStyle }) => {
  return (
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-13xl text-crimson-100 font-montserrat">
          {overlayVisible && (
              <div
                  className="absolute top-0 left-0 h-24 w-24 flex items-start justify-start"
                  style={overlayStyle}
              >
                  <div className="flex flex-col h-full w-full items-start justify-start pt-12 bg-crimson-200 rounded-3xs"></div>
                  <div className="h-12 w-full bg-crimson-200 rounded-3xs"></div>
              </div>
          )}
          <div className="flex-1 inline-block max-w-full z-1 mq800:text-7xl mq450:text-lg">
              {text}
          </div>
      </div>
  );
};


// Set default prop values for the component
FrameComponent2.defaultProps = {
  overlayVisible: true,
  overlayStyle: {},
};

export default FrameComponent2;

