export const User = ({ user }) => {
  console.log(name);

  return (
    <>
    <hr/>
      <h2>User Component...</h2>
      <h1>Age: {user.age}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
    </>
  );
};
