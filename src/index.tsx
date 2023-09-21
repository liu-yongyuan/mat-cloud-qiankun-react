import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './pages/app/app';

let root: Root | null = null;
function render(props: { container: Element }) {
  root = createRoot(props.container.querySelector('#micro-react-qiankun')!);
  root.render(<App />);
}

export async function bootstrap(props: Record<string, any>) {
  console.log('bootstrap', props);
}

export async function mount(props: { container: Element }) {
  render(props);
}

export async function unmount() {
  if (!root) {
    return;
  }
  root.unmount();
  root = null;
}
