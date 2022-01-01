export function getStoredCourse(): number | null {
  const course = localStorage.getItem("course")
  return course ? Number(course) : null
}
