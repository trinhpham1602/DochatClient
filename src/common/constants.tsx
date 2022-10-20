import facebookIcon from '../assets/images/facebookIcon.png';
import instagramIcon from '../assets/images/instagramIcon.png';

type LoginOption = {
  iconURL: string;
  type: string;
};

export const loginOptions: Array<LoginOption> = [
  {
    iconURL: facebookIcon,
    type: 'facebook',
  },
  {
    iconURL: instagramIcon,
    type: 'instagram',
  },
];
