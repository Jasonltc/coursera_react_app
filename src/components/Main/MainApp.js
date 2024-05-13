import Button from "../Button/Button";
import { Menu } from "../Data";
import "./Main.css";

function Main() {
  const menuItem = Menu.map((item) => {
    return (
      <div className="menuShot">
        <img></img>
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
        <p>{item.description}</p>
        <p>{item.order}</p>
      </div>
    );
  });

  return (
    <div>
      <section>
        <div>
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
        <div>
          <img></img>
        </div>
      </section>

      <section>
        <div>
          <h2>This weeks specials</h2>
          <Button>online Menu</Button>
        </div>
      </section>

      <section>{menuItem}</section>
    </div>
  );
}

export default Main;
