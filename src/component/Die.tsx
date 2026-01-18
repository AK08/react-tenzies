type DieProps = {
  value: number;
  isHeld: boolean;
  hold: () => void;
};

export default function Die(props: DieProps) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button style={styles} onClick={props.hold}>
      {props.value}
    </button>
  );
}
