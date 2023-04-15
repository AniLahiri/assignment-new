import { useState } from 'react';

export default function Welcome() {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [showtext, setShowtext] = useState(false);
  var str = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fName !== '' && lName !== '') {
      //call grapghql api
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

  return (
    <div>
      <h4 className="text-emerald-900">hch</h4>
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
      {showtext ? <h4>Hello {fName + ' ' + lName}</h4> : <em />}
    </div>
  );
}
