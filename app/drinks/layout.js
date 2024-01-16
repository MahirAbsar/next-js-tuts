const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-lg">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
