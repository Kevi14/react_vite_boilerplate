import { useEffect, useState, lazy } from 'react';
import data from '../../otherApps.json';
interface ProjectRoute {
  name: string;
  path: string;
  protected: boolean;
  element: JSX.Element;
}

interface ProjectRouteData {
  name: string;
  path: string;
  protected: boolean;
  element: string;
}

export function useProjectRoutes(): ProjectRoute[] {
  const [routes, setRoutes] = useState<ProjectRoute[]>([]);

  useEffect(() => {
    // Load the data from the JSON file and map it to ProjectRoute objects
    const projectRoutesData = data as { data: ProjectRouteData[] };

    if (!projectRoutesData.data || projectRoutesData.data.length === 0) {
      setRoutes([]);
      return;
    }

    const projectRoutes = projectRoutesData.data.map((routeData) => ({
      name: routeData.name,
      path: routeData.path,
      protected: routeData.protected,
      element: <LazyComponentWithLoader component={routeData.element} />,
    }));

    setRoutes(projectRoutes);
  }, []);

  return routes;
}

interface LazyComponentWithLoaderProps {
  component: string;
}

function LazyComponentWithLoader(props: LazyComponentWithLoaderProps) {
 
  const Component = lazy(() => import(/* @vite-ignore */props.component));
  return <Component />;
}