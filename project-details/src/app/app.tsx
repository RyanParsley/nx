// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import useSourceMap from './use-source-map';

export function App() {
  const sourceMap = useSourceMap();

  return <div>{JSON.stringify(sourceMap)}</div>;
}

export default App;
