import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

export default function Welcome() {
  const [personData, setPersonData] = useState({ fName: "", lName: "" });
  const [fullName, setFullName] = useState("");
  const [showtext, setShowtext] = useState(false);

  const handleSubmit = () => {
    if (personData.fName !== "" && personData.lName !== "") {
      setFullName(getFullName());
      setShowtext(true);
    } else {
      setShowtext(false);
      setFullName("");
      alert("No field can be empty");
    }
  };

  const handleFNameChange = (event) => {
    setShowtext(false);
    setPersonData({ ...personData, fName: event.target.value });
  };

  const handleLNameChange = (event) => {
    setShowtext(false);
    setPersonData({ ...personData, lName: event.target.value });
  };

  function getFullName() {
    const GET_PERSON_FULL_NAME = gql`
      query fullName($firstName: String, $lastName: String) {
        fullName(fName: $firstName, lName: $lastName)
      }
    `;
    const { loading, error, data } = useQuery(GET_PERSON_FULL_NAME, {
      variables: {
        firstName: personData.fName,
        lastName: personData.lName,
      },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          onChange={handleFNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={handleLNameChange}
        />
        <button type="submit">Go</button>
      </form>
      {showtext ? <h4>Hello {fullName}!</h4> : <em />}
    </div>
  );
}
