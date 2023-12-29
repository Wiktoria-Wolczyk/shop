import { getPinguGif } from "./getPinguGif.js";
import { penguinsProfiles } from "./penguin-list.js";

export const List = () => {
  const listOfPenguins = penguinsProfiles.map((penguin) => (
    <li key={penguin.id}>
      <img src={getPinguGif(penguin.imageId)} alt={penguin.name} />
      <p>{penguin.name}</p>
    </li>
  ));
  return (
    <article>
      <h1>Penguins</h1>
      <ul>{listOfPenguins}</ul>
    </article>
  );
};
