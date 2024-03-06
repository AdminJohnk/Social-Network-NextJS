import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const contactArrays = [
  {
    key: '0',
    label: 'Facebook',
    linkDefault: 'https://www.facebook.com/',
    icon: <FaFacebook />
  },
  {
    key: '1',
    label: 'Github',
    linkDefault: 'https://github.com/',
    icon: <FaGithub />
  },
  {
    key: '2',
    label: 'Twitter',
    linkDefault: 'https://twitter.com/',
    icon: <FaTwitter />
  },
  {
    key: '3',
    label: 'Instagram',
    linkDefault: 'https://www.instagram.com/',
    icon: <FaInstagram />
  },
  {
    key: '4',
    label: 'Linkedin',
    linkDefault: 'https://www.linkedin.com/',
    icon: <FaLinkedin />
  }
];
export default contactArrays;
