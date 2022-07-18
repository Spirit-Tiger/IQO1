function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0, position:'absolute'}}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#F5C752" />
            <stop offset="85.56%" stopColor="#E68446" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;
  