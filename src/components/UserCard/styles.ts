import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
})`
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 16px;

  padding: 40px 26px;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 200px;
  width: 60%;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.red[500]};
`;

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[600]};

  margin-bottom: 7px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-bottom: 10px;
`;

export const Social = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Followers = styled.View`
  align-items: center;
`;

export const NumberFollowers = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  font-style: italic;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const NumberFollowings = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  font-style: italic;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const NumberFavorites = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  font-style: italic;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Following = styled.View`
  align-items: center;
`;

export const Favorites = styled.View`
  align-items: center;
`;

export const Medias = styled.View`
  margin-top: 50px;
`;

export const Organization = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OrganizationName = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-left: 10px;
`;

export const Localization = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const LocalizationName = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-left: 10px;
`;

export const Email = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const AddressMail = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-left: 10px;
`;

export const Site = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const WebSite = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-left: 10px;
`;

export const Twitter = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const UserNameTwitter = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-left: 10px;
`;
