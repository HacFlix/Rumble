import SearchInput from "../SearchInput";

function Home() {
  return (
    <div className="container">
      <div className="logo">
        <span>R</span>
        <span>u</span>
        <span>m</span>
        <span>B</span>
        <span>l</span>
        <span>e</span>
      </div>
      <p className="about">The LightWeight Search Engine</p>
      <SearchInput buttons={true} />
    </div>
  );
}
export default Home;
