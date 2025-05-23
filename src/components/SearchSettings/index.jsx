import { SEARCH_LINKS } from "./constants"
import { SearchTip, SearchWithCounts, SettingsPanel } from "./styles"

import basic_circle_info from "@assets/icons/basic-636-circle-info.svg"

const SearchSettings = ({ total_results }) => {
  return (
    <>
      <SettingsPanel>
        <h3>Search Results</h3>
        <SearchWithCounts>
          {SEARCH_LINKS.map((link, index) => (
            <li key={index + link} active={index === 0}>
              {link}
              <span>{total_results[index] ?? 0}</span>
            </li>
          ))}
        </SearchWithCounts>
      </SettingsPanel>
      <SearchTip>
        <img src={basic_circle_info} alt="basic_circle_info" />
        Tip: You can use the 'y:' filter to narrow your results by year.
        Example: 'star wars y:1977'.
      </SearchTip>
    </>
  )
}
export default SearchSettings
