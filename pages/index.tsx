import { useState } from 'react';

type FormValues = {
  selectId: string;
  zipCode: string;
};

export default function Web() {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [showtext, setShowtext] = useState(false);

  const handleSubmit = () => {
    //call grapghql api
    setShowtext(true);
    setFname('');
    setLname('');
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
          <button onClick={handleSubmit}>Go</button>
        </form>
        {showtext ? <h4>Full Name is {fName + ' ' + lName}</h4> : <em />}
      </div>
    </>
  );
}
