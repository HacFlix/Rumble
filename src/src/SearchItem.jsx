function SearchItem({ title, link, displayLink, snippet, pagemap }) {
  console.log();
  return (
    <div className="search-item">
      <h1>
        <img src={pagemap?.cse_image?.[0]?.src || "/earth.svg"} alt="" />
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h1>
      <h2 className="display-link">{displayLink}</h2>
      <div className="desc">{snippet}</div>
    </div>
  );
}
export default SearchItem;
