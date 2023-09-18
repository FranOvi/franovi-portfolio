import { SimpleDate } from "./simpleDate";

export interface Experience {
  id: string,
  type: 'job' | 'education',
  organization: string, //company, university
  name: string, //position, career, program, proyect
  startDate: SimpleDate,
  endDate: SimpleDate,
  description: string,
  tasks: string[],
}
/*
organization? Universidad Centroamericana
name Systems Engineering

organization? Bee Business Suite
name Intern Jr. Developer
*/
