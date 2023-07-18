const Search = ({className, color, width, height}: SVGImageProps) => {
  return (
    <svg className={className} width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8" stroke="#2C2C2C" strokeWidth="2"/>
      <rect x="13" y="15.4141" width="2" height="9" rx="1" transform="rotate(-45 13 15.4141)" fill="#2C2C2C"/>
    </svg>
  );
};
  
export default Search;
  