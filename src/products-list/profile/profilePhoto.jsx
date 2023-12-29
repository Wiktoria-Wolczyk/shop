
import penguinImage from "./superpenguin.jpg";

export function ProfilePhoto() {
  return <img src={penguinImage} alt="penguin" className="penguin" style={{width:"500", height:"350"}} />;
}
