import { Component , OnInit} from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data:any;

  dataFilter:string = 'todo';

  resStringAdd:string;
  resStringEdit:string;
  resStringDelete:string;

  producto={
    codigo:null,
    nombre: "",
    descripcion:"",
    proveedor:"",
    precio:null
  }
  Editproducto={
    codigo:null,
    nombre: "",
    descripcion:"",
    proveedor:"",
    precio:null
  }
  showFormAgregar:boolean = false;
  showFormEditar:boolean = false;
  showFiltro:boolean = false;

  constructor(public service:CrudService){ }

  ngOnInit(){
    this.get();
  }
  get(){
    this.service.getData().subscribe((res) =>{
      this.data = res;
    });
  }
  guardar(){
    this.service.add(`codigo=${this.producto.codigo}&nombre=${this.producto.nombre}&descripcion=${this.producto.descripcion}&proveedor=${this.producto.proveedor}&precio=${this.producto.precio}`).subscribe((res) =>{
      this.get();
      this.resStringAdd = res;
      this.emptyForm();
    });
  }  
  editar(){
    this.service.edit(`codigo=${this.Editproducto.codigo}&nombre=${this.Editproducto.nombre}&descripcion=${this.Editproducto.descripcion}&proveedor=${this.Editproducto.proveedor}&precio=${this.Editproducto.precio}`)
    .subscribe((res)=>{
      this.get();
      this.resStringEdit = res;
    });
  }
  eliminar(codigo){
    this.service.delete(`codigo=${codigo}`).subscribe((res)=>{
      console.log(res);
      this.get();
      this.resStringDelete = res;
    });
  }
  cachDataFilter(valueFilter){
    this.dataFilter = valueFilter;
  }
  emptyMesage(){
    this.resStringAdd = null;
    this.resStringEdit = null;
   this.resStringDelete = null;
  }
  emptyForm(){
    this.producto={
      codigo:null,
      nombre: "",
      descripcion:"",
      proveedor:"",
      precio:null
    }
  }
  addDataEdit(codigo:number, nombre:string, descripcion:string, proveedor:string, precio:number){
    this.Editproducto.codigo = codigo;
    this.Editproducto.nombre = nombre;
    this.Editproducto.descripcion = descripcion;
    this.Editproducto.proveedor = proveedor;
    this.Editproducto.precio = precio;
  }

  toggleFormAgregar(){
    this.showFormAgregar = !this.showFormAgregar;
    this.emptyMesage();
  }
  toggleFormEditar(){
    this.showFormEditar = !this.showFormEditar;
    this.emptyMesage();
  }
  toggleFiltro(){
    this.showFiltro = ! this.showFiltro;
  }
  prevent(e){
    e.preventDefault();
    this.guardar();
  }
}
