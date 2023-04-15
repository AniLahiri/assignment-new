import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from '@apollo/client';

export default function Welcome() {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [fullName, setFullName] = useState('');
  const [showtext, setShowtext] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fName !== '' && lName !== '') {
      setFullName(getFullName());
      setShowtext(true);
    } else {
      setShowtext(false);
      alert('No field can be empty');
    }
  };

  const handleFNameChange = (event) => {
    setShowtext(false);
    setFname(event.target.value);
  };

  const handleLNameChange = (event) => {
    setShowtext(false);
    setLname(event.target.value);
  };

  const GET_PERSON_FULL_NAME = gql`
  query getPersonFullName($firstName: String!, $lastName: String!) {
    person(firstName: $firstName, lastName: $lastName) {
      name
    }
  }
`;

  const getFullName = () => {
    const { loading, error, data } = useQuery(GET_PERSON_FULL_NAME, {
      variables: { firstName: fName, lastName: lName },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={fName}
          onChange={handleFNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lName}
          onChange={handleLNameChange}
        />
        <button type="submit">Go</button>
      </form>
      {showtext ? <h4>Hello {fullName}!</h4> : <em />}
    </div>
  );
}
