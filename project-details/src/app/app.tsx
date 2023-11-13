// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Target from './target';
import useProject from './use-project';

import useSourceMap from './use-source-map';

export function App() {
  const projectName = 'large-pkg1';
  const projectRoot = 'packages/large-pkg1';
  const sourceMap = useSourceMap(projectRoot);
  const project = useProject(projectName);

  return (
    <div className="m-2">
      <h1 className="text-2xl">{project.name}</h1>
      <div>
        <h2 className="text-xl">Targets</h2>
        {Object.entries(project.targets ?? {}).map(([targetName, target]) =>
          Target({
            targetName: targetName,
            targetConfiguration: target,
            projectRoot,
          })
        )}
      </div>
    </div>
  );
}

export default App;
