import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { SeachPostContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postsLength: number;
  getPosts: (query?: string) => Promise<void>
}

export function SearchPost({ postsLength, getPosts }: SearchInputProps){
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }
  
  return(
    <SeachPostContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </div>
      <input 
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")} />
    </SeachPostContainer>
  )
}
