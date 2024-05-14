import Button from "../Button/Button";
import { Menu } from "../Data";
import introImg from "../../assets/restauranfood.jpg";
import "./Main.css";

function Main() {
  const menuItem = Menu.map((item) => {
    return (
      <div className="menuShot" key={item.title}>
        <img src={item.image} alt="" />
        <div className="item-name">
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
        <p>{item.description}</p>
        <p>{item.order}</p>
      </div>
    );
  });

  return (
    <div>
      <section className="section-intro">
        <div className="intro-wrapper">
          <div className="intro">
            <h1 className="restoName">
              Little Lemon
              <span>Chicago</span>
            </h1>
            <p>
              we are a family owned mediterranean restaurant, focused on
              traditional receipes served with a modern twist
            </p>
            <Button>Reserve a Table</Button>
          </div>
          <div className="img-wrapper">
            <img class="restaurant-img" src={introImg} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="special-weeks">
          <h2>This weeks specials</h2>
          <Button>online Menu</Button>
        </div>
      </section>

      <section>
        <div className="menu-wrapper">{menuItem}</div>
      </section>
    </div>
  );
}

export default Main;
