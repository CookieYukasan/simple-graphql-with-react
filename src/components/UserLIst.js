import React from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';

const USERS_LIST = gql`
  subscription {
    user {
      id
      name
      email
    }
  }
`;

function UserList() {
  const { data, loading, error } = useSubscription(USERS_LIST);

  if (loading) return <h3>Carregando...</h3>;
  if (error) return error.message;

  return data.user.map(({ id, name, email }) => (
    <li key={id}>
      <h3>
        {name} - {email}
      </h3>
    </li>
  ));
}

export default UserList;
