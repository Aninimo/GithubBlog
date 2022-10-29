import { useCallback, useEffect, useState } from 'react'
import { api } from "../../lib/axios"
import { Profile } from './components/Profile'
import { Post } from './components/Post'
import { SearchPost } from '../../components/SearchPost'

import { HomeContainer, HomeContent, PostList } from './styles'

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  
  user: {
    login: string;
  };
}

export function Home(){
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query ?? ""}repo:Aninimo/GithubBlog`
        );

        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);
  
  return(
    <HomeContainer>
      <Profile/>
      <SearchPost postsLength={posts.length} getPosts={getPosts}/>
        {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <PostList>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
      </PostList>
      )}
    </HomeContainer>
  )
}
