import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [jobItems, setJobItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onSearchTextChange = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (!searchText) return;
    if (searchText !== "react") return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}&limit=7`
        );
        const data = await response.json();

        console.log(data);
        setJobItems(data.jobItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <>
      <Background />

      <Header searchText={searchText} onSearchTextChange={onSearchTextChange} />

      <Container jobItems={jobItems} />

      <Footer />
    </>
  );
}

export default App;
