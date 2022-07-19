import TotalBalance from "components/Dashboard/TotalBalance";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { postAPI } from "../../services/PostService";
import MarketList from "./MarketList";
import SearchIcon from "images/search_icon.png";

const Market = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);

  return (
    <MarketContainer>
      {/* {isLoading && <h3>Loading...</h3>}
        {error && <h3>Error</h3>}
        {posts?.map(post=><div>{[post.id,post.title,post.body]}</div>)} */}
      <TotalBalance />
      <FlexContainer>
        <MarketHeader>
          <FormattedMessage id="market_header" />
        </MarketHeader>
        <SearchBarContainer>
          <SearchBar placeholder="Search crypto" />
          <img src={SearchIcon} />
        </SearchBarContainer>
      </FlexContainer>
      <MarketList />
    </MarketContainer>
  );
};

export default Market;

const MarketContainer = styled.div`
  color: white;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 76px 0 44px 0;
`;

const MarketHeader = styled.h2`
  font-weight: 600;
  font-size: 32px;
  margin:0;
`;

const SearchBarContainer = styled.div`
 position: relative;
  img {
    position: absolute;
    top: 7px;
    right: 24px;
  }
`;

const SearchBar = styled.input`
  width: 266px;
  height: 36px;
  border: 1px solid #848484;
  border-radius: 10px;
  background-color: #12181e;
  font-weight: 300;
  font-size: 12px;
  color: white;
  padding-left: 24px;
 
`;
