function StudentNestedPage({params}: {params: {student_nested: string}}) {
  return(<div>
    <h1>Student Nested Page</h1>
    <p>Student ID: {params.student_nested}</p>
  </div>
  )
}
export default StudentNestedPage