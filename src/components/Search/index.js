import { Fragment, useContext, useEffect } from "react";
import AppContext from "../context/AppProvider";
import Icon from "../Icon";
import SearchModal from "../SearchModal";
import Button from "../Button";

const Search = () => {
  const { handleModal } = useContext(AppContext)

  return (
    <Fragment>
      <Button className="Search" onClick={handleModal}>
        <Icon className="fa-regular fa-magnifying-glass Search-icon" />
        Search
      </Button>
      <SearchModal />
    </Fragment>
  )
}

export default Search;