export default function UserAdapter(data: any): User {
  return {
    id: data.id,
    name: data.name,
    lastName: data.lastName,
    fullName: data.name + ' ' + data.lastName,
    email: data.email
  };
}
