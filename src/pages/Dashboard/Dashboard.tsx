
import './Dashboard.css' // import custom styles
import { useProjectRoutes } from '../../hooks/useGetProjects'
export function Dashboard() {
  const data = useProjectRoutes()
  console.log(data)
  // const handleFinish = (values: any) => {
  //   console.log('Received values of form: ', values)
  // }

  return <div className="login-wrapper">Dashboard</div>
}
