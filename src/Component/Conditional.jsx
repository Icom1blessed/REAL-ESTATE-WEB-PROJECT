function Conditional() {
  const truthy_1 = "girl";
  //   const truthy = true;

  //   if (truthy) {
  //     return <If />;
  //   }
  //   return <div>{truthy ? <If /> : <Else />}</div>;
  //   if (truthy_1 == "boy") {
  //     return <If />;
  //   }

  //   return (
  //     <>
  //       <Else />
  //     </>
  //   );

  return <>{truthy_1 === "girl" ? <If /> : <Else />}</>;
}

const If = () => {
  return (
    <>
      <h1>I am a falsy Statement in the If Component</h1>
    </>
  );
};

const Else = () => {
  return (
    <>
      <h1>I am a Truthy Statement in the Else Component</h1>
    </>
  );
};

export default Conditional;
