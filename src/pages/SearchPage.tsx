import { useSearchRestaurant } from "@/api/SearchRestaurantApi";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurant(city);

  if (isLoading) {
    return <span>Loading....</span>;
  }
  if (!results?.data || !city) {
    return <span>No result found</span>;
  }
  return (
    <div>
      {results?.data.map((restaurant) => {
        return (
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="cuisines-list">
              {/* <CuisineFilter
                selectedCuisines={searchState.selectedCuisines}
                onChange={setSelectedCuisines}
                isExpanded={isExpanded}
                onExpandedClick={() =>
                  setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                }
              /> */}
            </div>
            <div id="main-content" className="flex flex-col gap-5">
              {/* <SearchBar
                searchQuery={searchState.searchQuery}
                onSubmit={setSearchQuery}
                placeHolder="Search by Cuisine or Restaurant Name"
                onReset={resetSearch}
            /> */}
              <div className="flex justify-between flex-col gap-3 lg:flex-row">
                <SearchResultInfo
                  total={results.pagination.total}
                  city={city}
                />
                {/* <SortOptionDropdown
                sortOption={searchState.sortOption}
                onChange={(value) => setSortOption(value)}
                /> */}
              </div>

              {/* {results.data.map((restaurant) => (
                <SearchResultCard restaurant={restaurant} />
            ))} */}
              {/* <PaginationSelector
                page={results.pagination.page}
                pages={results.pagination.pages}
                onPageChange={setPage}
            /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
