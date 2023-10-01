import { Component, OnInit } from '@angular/core';
import { Department } from 'src/Department';
import { Depart } from 'src/Departs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { ServiceService } from '../service/service.service';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  rootNodes: Depart[] = [];
  departs: Department[] = [];
  hierarchicalData: Depart[] = [];

  constructor(private service: ServiceService) {
      //this.dataSource.data = this.hierarchicalData;
  }


  /* Changes the Flat JSON Server data to Nested JSON server data  */

  ngOnInit() {

    this.service.GetAll().subscribe((res:any) => {
      this.dataSource.data = this.buildTree("", res);
      console.log(this.dataSource.data);
    });

  }

  buildTree(name: string, nodes: any[]): any[] {
    const children = [];
    
    for (const node of nodes) {
      if (node.Manager == name) {
        const childrenNodes = this.buildTree(node.DepartmentName, nodes);
        if (childrenNodes.length > 0) {
          node.children = childrenNodes;
        }
        children.push(node);
      }
    }
    this.hierarchicalData = children;
    //console.log(children);
    return children;
  }

  /* Flat Tree Structure Using Angular Material */

  private _transformer = (node: Department, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.DepartmentName,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}