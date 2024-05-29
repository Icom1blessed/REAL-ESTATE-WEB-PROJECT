function Events() {
  const takeAshot = () => {
    alert("He Scored the Goal");
  };
  const takeTheShotWithTheParenthesis = () => {
    alert("He Scored the goal with the Parenthesis");
  };
  const takeAnotherShot = (a, b) => {
    alert(
      `He took the shot but missed the Goal, so the score line is 0 - ${a + b}`
    );
  };
  const takeApenalty = () => {
    alert("Wow, He Just missed a Golden Opportunity to take the Lead");
  };
  return (
    <div>
      <button onClick={takeAshot}>Shoot</button>
      <button onClick={() => takeTheShotWithTheParenthesis()}>
        Shoot with the parenthesis
      </button>
      <button onClick={() => takeAnotherShot(1, 2)}>take another shot</button>
      <button onMouseOver={takeApenalty}>penalty</button>
    </div>
  );
}

export default Events;
