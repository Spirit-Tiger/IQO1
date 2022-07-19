import React from 'react'
import styled from 'styled-components';
import { postAPI } from '../../services/PostService';

const Market = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5);

  return (
    <MarketContainer>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>Error</h3>}
        {posts?.map(post=><div>{[post.id,post.title,post.body]}</div>)}
    </MarketContainer>
  )
}

export default Market;

const MarketContainer = styled.div`
    font-size: 1em;
    margin: 50px; 
    color: white;
`;