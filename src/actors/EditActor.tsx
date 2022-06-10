import ActorForm from './ActorForm';

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: 'Tom Holland',
          dateOfBirth: new Date('1996-06-01T00:00:00'),
          pictureURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(values);
        }}
      />
    </>
  );
}
