import {
  faNotesMedical,
  faTooth,
  faHeartPulse,
  faEarListen,
  faEye,
  faDroplet
} from '@fortawesome/free-solid-svg-icons';

const servicesArray = [
  {
    id: 1,
    name: "General Treatment",
    desc: "Comprehensive health check-ups and primary care services tailored to your family's daily wellness needs.",
    icon: faNotesMedical
  },
  {
    id: 2,
    name: "Teeth Whitening",
    desc: "Advanced professional brightening treatments designed to safely remove stains and restore your natural smile.",
    icon: faTooth
  },
  {
    id: 3,
    name: "Heart Surgery",
    desc: "Specialized cardiac procedures performed by expert surgeons using the latest minimally invasive technologies.",
    icon: faHeartPulse
  },
  {
    id: 4,
    name: "Ear Treatment",
    desc: "Expert diagnostic care for hearing loss, infections, and balance disorders to improve your auditory health.",
    icon: faEarListen
  },
  {
    id: 5,
    name: "Vision Problems",
    desc: "Comprehensive eye exams and corrective treatments to address nearsightedness, cataracts, and digital eye strain.",
    icon: faEye
  },
  {
    id: 6,
    name: "Blood Transfusion",
    desc: "Safe and efficient transfusion services following strict clinical protocols to support recovery and vital care.",
    icon: faDroplet
  }
];

export default servicesArray;
