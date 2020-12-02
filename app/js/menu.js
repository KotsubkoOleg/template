import { TweenMax } from 'gsap'

const Menu = () => {
  console.log('menu')
  TweenMax.to(".js-test", 0.3, { rotateZ: "-360deg"}, 3);
}

export default Menu
