export default function Item(props) {
  return (
    <li>
      <a target="_blank" href={props.link}>
        <img src={props.img} />
        <p className="item-name">{props.name}</p>
      </a>
    </li>
  );
}
