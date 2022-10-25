function SearchIcon() {
  return (
    <svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={27} height={27} fill="url(#pattern0)" fillOpacity="0.6" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_4_1245" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_4_1245"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SearchIcon;
