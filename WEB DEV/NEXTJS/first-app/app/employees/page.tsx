import axios from "axios"

async function getEmployees() {
  const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
  console.log(response.data);
  return response.data;
}

interface Employee{
  id: number,
  employee_name:string,
  employee_salary: number,
  employee_age :number,
  profile_image : string
}

export default async function Posts(){

  const employees = await getEmployees();

  return <div>

    {employees.data.map((e :Employee)=>(
        <div key={e.id}>
          {e.employee_name} ---{e.employee_salary}
        </div>
      )
    )}

  </div>
}