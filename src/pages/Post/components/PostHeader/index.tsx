import { Link } from 'react-router-dom'
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatsCircle } from 'phosphor-react'
import { DateFormatter } from '../../../../utils/formatter'
import { IPost } from '../../../Home'
import { PostHeaderContent } from './styles'

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData }: PostHeaderProps){
  const formattedDate = DateFormatter(postData?.created_at)

  return(
    <PostHeaderContent>
      <header>
        <Link to='/'>
          <CaretLeft size={24}/>Voltar
        </Link>
        <a href={postData.html_url}>
          Ver no github<ArrowSquareOut size={24}/>
        </a>
      </header>
      <h1>{postData.title}</h1>
      <ul>
        <li>         
          <GithubLogo/>
         
        </li>
        <li>
          <Calendar/>
          {formattedDate}
        </li>
        <li>
          <ChatsCircle/>
          {postData.comments} comentários
        </li>
      </ul>
    </PostHeaderContent>
  )
}
