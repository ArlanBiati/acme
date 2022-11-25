import theme from '@theme/theme';

import { Ionicons, Octicons, Fontisto } from '@expo/vector-icons';

import { UserProps } from '@screens/User';

import {
  Container,
  AvatarContainer,
  Avatar,
  Name,
  UserName,
  Description,
  Social,
  Followers,
  NumberFollowers,
  NumberFollowings,
  NumberFavorites,
  Following,
  Favorites,
  Medias,
  Organization,
  OrganizationName,
  Localization,
  LocalizationName,
  Email,
  AddressMail,
  Site,
  WebSite,
  Twitter,
  UserNameTwitter,
} from './styles';
import { useRoute } from '@react-navigation/native';

export function UserCard() {
  const route = useRoute();

  const { user } = route.params as UserProps;

  return (
    <Container>
      <AvatarContainer>
        {user.avatar_url ? (
          <Avatar source={{ uri: `${user.avatar_url}` }} />
        ) : (
          <Ionicons name="ios-person-outline" size={180} />
        )}
      </AvatarContainer>

      <Name>{user.name}</Name>
      <UserName>@{user.login}</UserName>
      <Description>{user.bio}</Description>
      <Social>
        <Followers>
          <Ionicons name="people" size={25} />
          <NumberFollowers>{user.followers} Seguidores</NumberFollowers>
        </Followers>

        <Following>
          <Ionicons name="heart-outline" size={25} />
          <NumberFollowings>{user.following} Seguindo</NumberFollowings>
        </Following>

        <Favorites>
          <Ionicons name="star-outline" size={25} />
          <NumberFavorites>100 Favoritos</NumberFavorites>
        </Favorites>
      </Social>

      <Medias>
        <Organization>
          <Octicons
            name="organization"
            size={20}
            style={{ color: theme.colors.red[500] }}
          />
          <OrganizationName>
            {user.company ? user.company : 'Sem organização'}
          </OrganizationName>
        </Organization>

        <Localization>
          <Ionicons
            name="locate-outline"
            size={20}
            style={{ color: theme.colors.red[500] }}
          />
          <LocalizationName>{user.location}</LocalizationName>
        </Localization>

        <Email>
          <Fontisto
            name="email"
            size={20}
            style={{ color: theme.colors.red[500] }}
          />
          <AddressMail>arlan.gustavo.biati@gmail.com</AddressMail>
        </Email>

        <Site>
          <Ionicons
            name="bookmark-outline"
            size={20}
            style={{ color: theme.colors.red[500] }}
          />
          <WebSite>{user.blog}</WebSite>
        </Site>

        <Twitter>
          <Fontisto
            name="twitter"
            size={20}
            style={{ color: theme.colors.red[500] }}
          />
          <UserNameTwitter>
            {user.twitter_username ? user.twitter_username : 'Não possui'}
          </UserNameTwitter>
        </Twitter>
      </Medias>
    </Container>
  );
}
