import defaultHero from '../../../images/bhamc-hero.jpg';
import beagleBuddy from '../../../images/dog-smiling.png';
import dogGang from '../../../images/dog-gang.png';
import dogOnDock2 from '../../../images/dog-on-dock.png';
import dogAndCat from '../../../images/dog-cat.png';
import dogKidOnDock from '../../../images/dog-kid-on-dock.png';
import dogBeach from '../../../images/dog-beach.png';

export const imageMap = {
  home: {
    src: defaultHero,
    colorContext: 'dark',
    backgroundPosition: 'center',
    title: 'Belle Haven Animal Medical Centre',
  },
  doctors: {
    src: dogBeach,
    colorContext: 'dark',
    backgroundPosition: 'center',
    title: '',
  },
  news: {
    src: beagleBuddy,
    colorContext: 'dark',
    backgroundPosition: 'center',
    title: '',
  },
  'pet-care': {
    src: dogAndCat,
    colorContext: 'dark',
    backgroundPosition: 'bottom',
    title: '',
  },
  careers: {
    src: dogKidOnDock,
    colorContext: 'dark',
    backgroundPosition: 'center',
    title: '',
  },
  links: {
    src: dogOnDock2,
    colorContext: 'dark',
    backgroundPosition: 'center',
    title: '',
  },
  'about-us': {
    src: dogGang,
    colorContext: 'dark',
    backgroundPosition: 'top',
    title: '',
  },
};

export default imageMap;
