import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import JobItemContent from "./JobItemContent";
import Sidebar, { SidebarTop } from "./Sidebar";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import {
  useActiveJobId,
  useDebounce,
  useJobItemDetails,
  useJobItems,
} from "../lib/hooks";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 250);

  const { jobItemsSliced, isLoadingList, totalNumberOfResults } =
    useJobItems(debouncedSearchText);

  const activeJobId = useActiveJobId();
  const { jobItemDetails, isLoadingDetails } = useJobItemDetails(activeJobId);

  const onSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
            <SortingControls />
          </SidebarTop>

          <JobList
            jobItems={jobItemsSliced}
            isLoadingList={isLoadingList}
            activeJobId={activeJobId}
          />
          <PaginationControls />
        </Sidebar>

        <JobItemContent
          jobItemDetails={jobItemDetails}
          isLoadingDetails={isLoadingDetails}
        />
      </Container>

      <Footer />
    </>
  );
}

export default App;
