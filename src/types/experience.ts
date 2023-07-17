export interface Experience {
  id: string,
  company: string,
  position: string,
  startDate: string | undefined,
  endDate: string | undefined,
  description: string,
  tasks: string[],
}
