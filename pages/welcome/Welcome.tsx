import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

export default function Welcome() {
  const [personData, setPersonData] = useState({ fName: '', lName: '' });
  const [fullName, setFullName] = useState('');
  const [showtext, setShowtext] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (personData.fName !== '' && personData.lName !== '') {
      const name = await getFullName().then((response) => {
        return response.data;
      });
      setFullName(name.fullName);
      setShowtext(true);
    } else {
      setShowtext(false);
      setFullName('');
      alert('No field can be empty');
    }
  };

  const handleFNameChange = (event) => {
    event.preventDefault();
    setShowtext(false);
    setPersonData({ ...personData, fName: event.target.value });
  };

  const handleLNameChange = (event) => {
    event.preventDefault();
    setShowtext(false);
    setPersonData({ ...personData, lName: event.target.value });
  };

  const GET_PERSON_FULL_NAME = gql`query getfullName($firstName: String!, $lastName: String!) {
    fullName(fName: $firstName, lName: $lastName)
  }
  `;
  const [getFullName, { loading, data }] = useLazyQuery(GET_PERSON_FULL_NAME, {
    variables: {
      firstName: personData.fName,
      lastName: personData.lName,
    },
  });
  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First name"
          value={personData.fName}
          onChange={handleFNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          value={personData.lName}
          onChange={handleLNameChange}
        />
        <button onClick={handleSubmit}>Go</button>
      </form>
      {showtext ? <h2>Hello {fullName}!</h2> : <em />}
    </div>
  );
}
