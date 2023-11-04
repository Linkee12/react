import { createRoot } from 'react-dom/client';
import React from 'react';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

function App(){
     return <h1>HelloBello</h1>
}