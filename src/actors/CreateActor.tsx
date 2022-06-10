import ActorForm from './ActorForm';

export default function CreateActor() {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm
        model={{
          name: 'Tom Holland',
          dateOfBirth: new Date('1996-06-01T00:00:00'),
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(values);
        }}
      />
    </>
  );
}
