import { SimpleDate } from "./simpleDate";

export interface Experience {
  id: string,
  type: 'job' | 'education',
  subtype: string, //Full-time, Part-time, Internship, Freelance, Degree, Bootcamp, Course, Project
  organization: string, //company, university
  name: string, //position, career, program, proyect
  startDate: SimpleDate,
  endDate: SimpleDate,
  description: string,
  tasks: string[],
  hide: boolean,
}
