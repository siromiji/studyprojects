'use client';
import { useState } from 'react';

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>안녕, React! 👋</h1>
      <p>이건 Next.js App Router로 만든 첫 페이지야.</p>
      <Counter />
    </main>
  );
}

function Counter() {
  const [n, setN] = useState(0);
  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={() => setN(n + 1)}>
        클릭하면 숫자 올라감: {n}
      </button>
    </div>
  );
}