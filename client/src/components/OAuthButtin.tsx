import { Button } from "./styles/OAuthButtin";

const TypedButtons = {
  Discord: "https://discord.com/api/oauth2/authorize?client_id=1133384664560705566&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=token&scope=identify",
} as const;

interface OAuthButtonProps {
  readonly type: "Discord";
};

const OAuthButton = ({type}: OAuthButtonProps) => {
  const handleDiscordLogin = () => {
    const oauthWindow = window.open(
      TypedButtons[type],
      '_blank',
      'width=500,height=600'
    );

    const checkOAuthStatus = () => {
      if (oauthWindow?.closed) {
        window.removeEventListener('message', checkOAuthStatus);
        window.close();
      }
    };

    window.addEventListener('message', checkOAuthStatus);
  };

  return (
    <Button onClick={handleDiscordLogin}>Увійти через Discord</Button>
  );
};

export default OAuthButton;
