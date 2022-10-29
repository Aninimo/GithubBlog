import { useCallback, useEffect, useState } from 'react'
import { Buildings, GithubLogo, Users, ArrowSquareOut } from 'phosphor-react'
import { api } from '../../../../lib/axios'

import { ProfileContainer, Profilecontent } from './styles'

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile(){
  const[profileData,setProfileData] = useState<ProfileData>({} as Profile)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/Aninimo`);

      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);
  
  return(
    <ProfileContainer>   
      <img src={profileData.avatar_url}/>
      
      <div>
        <header>
          <h1>{profileData.name}</h1>
          <a href={profileData.html_url}>
           Github <ArrowSquareOut size={32}/>
          </a>
        </header>
          <p>{profileData.bio}</p>
        
        <ul>
          <li>
           <GithubLogo/> {profileData.login}
          </li>
          <li>
            <Buildings/>
            {profileData?.compamy}
          </li>
          <li>
            <Users/>
            {profileData.followers} Seguidores
          </li>
        </ul>
      </div>
    </ProfileContainer>
  )
}
