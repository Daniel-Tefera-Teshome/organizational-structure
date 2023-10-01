export class Depart {
    id: number;
    DepartmentName: string;
    Description: string;
    Manager: string;
    children: Depart[] = [];
  
    constructor(depart: any) {
      this.id = depart.id;
      this.DepartmentName = depart.DepartmentName;
      this.Description = depart.Description;
      this.Manager = depart.Manager;
    }
  }