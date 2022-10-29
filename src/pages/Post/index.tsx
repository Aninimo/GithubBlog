import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IPost } from '../Home'
import { PostHeader } from './components/PostHeader'
import { PostContent } from './components/PostContent'

import { PostContainer, PostCard } from './styles'

export function Post(){
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/Aninimo/GithubBlog/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData])

  useEffect(() => {
    getPostDetails();
  }, []);
  
  return(
    <PostContainer>
      <PostCard>
        <PostHeader postData={postData}/>
      </PostCard>
      <PostContent content={postData.body}/>
    </PostContainer>
  )
}
