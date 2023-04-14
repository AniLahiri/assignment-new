import Head from 'next/head';

type FormValues = {
  selectId: string;
  zipCode: string;
};

export default function Web() {
  return (
    <>
      <div>
        <h1>Typography</h1>
        <div>
          <h6>H6 THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</h6>
          <p>This a a paragraph</p>
        </div>
        <h2>Form Controls</h2>
        <div>
          <h3>Link</h3>
        </div>
      </div>
    </>
  );
}
