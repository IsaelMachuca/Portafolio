import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Services/GitHub/github.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../Services/Api/api.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'] 
})
export class ProyectosComponent implements OnInit {
  repos: any[] = [];
  proyectos: any[] = [];


  constructor(private githubService: GithubService,private apiService: ApiService) {} 
  ngOnInit(): void {
    this.cargarRepositorios();
    this.obtenerProyectos();
 
  }
  cargarRepositorios(): void {
    this.githubService.getAllRepos().subscribe(
      (repos) => {
        this.repos = repos;
      },
      (error) => {
        console.error('Error al obtener repositorios:', error);
      }
    );
  }


  obtenerProyectos(): void {
    this.apiService.getProjects().subscribe(data => {
      this.proyectos = Object.values(data).map((proyecto: any) => {
        return {
          image_url: proyecto.Image_Url || '', 
          nombre: proyecto.Nombre || '', 
          page_url: proyecto.Page_Url || '', 
          descripcion: proyecto.Descripcion || '', 
          lenguajes: proyecto.Lenguajes.map((lenguaje: any) => ({
            nombre: lenguaje.Nombre,
            imageUrl: lenguaje.imageUrl
          })) || [] 
        };
      });
    });
  }

  getLanguageIconUrl(language: string): string {
    switch (language.toLowerCase()) {
      case 'c#':
        return 'https://cdn3d.iconscout.com/3d/free/thumb/free-c-sharp-9294854-7577997.png?f=webp';
      case 'llvm':
        return 'https://e7.pngegg.com/pngimages/528/38/png-clipart-clang-llvm-gnu-compiler-collection-c-llvm-c-google-chrome.png';
      case 'javascript':
        return 'https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp';
      case 'typescript':
        return 'https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-9294849-7577992.png';
      case 'HTML':
        return 'https://i.ibb.co/m9rTs1T/Logo-HTML3-D.png';
      case 'Css':
        return 'https://i.ibb.co/W2998cB/Logo-Css3-D.png';
      // Reemplaza 'URL_DEL_ICONO_C_PLUS_PLUS' con la URL real del icono de C++
      default:
        return 'https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp'; // URL de un icono por defecto si el lenguaje no tiene un icono específico
    }
  }
}
