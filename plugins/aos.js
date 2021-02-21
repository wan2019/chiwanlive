import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({app}) => {
  app.AOS = new AOS.init({ disable: "phone" });
  // app.AOS = new AOS.refresh(); 
};


  // startEvent: 'DOMContentLoaded',
  // startEvent: () => {

  // }

  // startEvent: "load"
