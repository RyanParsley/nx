import { TargetConfiguration } from '@nx/devkit';
import useSourceMap from './use-source-map';

/* eslint-disable-next-line */
export interface TargetProps {
  projectRoot: string;
  targetName: string;
  targetConfiguration: TargetConfiguration;
}

export function Target(props: TargetProps) {
  const sourceMap = useSourceMap(props.projectRoot);
  return (
    <div>
      <h3 className="text-lg pl-3">{props.targetName}</h3>
      {Object.entries(props.targetConfiguration).map(([key, value]) => {
        if (typeof value === 'string') {
          return (
            <div
              className="pl-6"
              title={JSON.stringify(
                sourceMap[`targets.${props.targetName}.${key}`]
              )}
            >
              <span className="font-medium">{key}</span>: <code>{value}</code>
            </div>
          );
        } else if (Array.isArray(value)) {
          return (
            <div className="pl-6">
              <span className="font-medium">{key}</span>:{' '}
              <code>{value.join(', ')}</code>
            </div>
          );
        } else {
        }
      })}
    </div>
  );
}

export default Target;
