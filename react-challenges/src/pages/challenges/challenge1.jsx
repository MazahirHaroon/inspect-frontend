export default function ExampleChallenge() {
  // This demonstrates a simple JSX output (also useful for 'what's the output?' style questions)
  const a = [1, 2, 3].map((n) => n * 2);
  return (
    <div>
      <h3>Example challenge</h3>
      <p>Computed array: {JSON.stringify(a)}</p>
    </div>
  );
}
