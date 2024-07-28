import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/biograph.js';
import { FooterContainer, FooterWrapper, SocialMediaIcons, SocialMediaIcon, Copyright } from './styles.js';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
        © 2024 Hasib Iqbal. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;