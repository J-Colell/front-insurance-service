import { Component,signal, inject, OnInit, OnDestroy  } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout-shell',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
    MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatMenuModule
  ],
  styleUrls: ['./layout-shell.component.css'] ,
  styles: [`
    .container { height: 100vh; }
    .sidenav  { width: 260px; }
    .content  { padding: 16px; }
    .toolbar  { position: sticky; top: 0; z-index: 2; }
    .app-title{ margin-left: 8px; font-weight: 600; }`],
    template: `

     <mat-toolbar color="primary" class="topbar">
      <img src="/assets/img/BPOrigin.png" alt="Borrell & Piñol" class="logo">

      <!-- Navegación horizontal (desktop) -->
      <nav class="nav-desktop">
        <a mat-button routerLink="/home" routerLinkActive="mat-mdc-button-focus-overlay" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
        <a mat-button routerLink="/products" routerLinkActive="mat-mdc-button-focus-overlay">Productos</a>
        <a mat-button routerLink="/" routerLinkActive="mat-mdc-button-focus-overlay" [routerLinkActiveOptions]="{exact:true}">Número de compañia</a>
        <a mat-button routerLink="/" routerLinkActive="mat-mdc-button-focus-overlay" [routerLinkActiveOptions]="{exact:true}">FAQ’S</a>
        <a mat-button routerLink="/" routerLinkActive="mat-mdc-button-focus-overlay" [routerLinkActiveOptions]="{exact:true}">Equipo</a>
        <a mat-button routerLink="/" routerLinkActive="mat-mdc-button-focus-overlay" [routerLinkActiveOptions]="{exact:true}">Sobre nosotros</a>
        <!--<a mat-button routerLink="/admin" routerLinkActive="mat-mdc-button-focus-overlay">Admin</a>-->
      </nav>

      <span class="spacer"></span>
       <!-- Menú hamburguesa (móvil) -->
      <div class="nav-mobile">
        <button mat-icon-button [matMenuTriggerFor]="menu"  aria-label="Abrir menú" class="menu-button"><mat-icon>menu</mat-icon></button>
        <mat-menu #menu="matMenu" xPosition="before" yPosition="below" >
          <button mat-menu-item routerLink="/inicio">Iniciar Sesión / Registrarse</button>
          <button mat-menu-item routerLink="/products">Quienes Somos</button>
          <button mat-menu-item routerLink="/admin">Empresas</button>
        </mat-menu>
      </div>
    </mat-toolbar>
  `
})
export class LayoutShellComponent implements OnInit, OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  opened = signal(false);

  private mq?: MediaQueryList;
  private onChange = (e: MediaQueryListEvent) => this.opened.set(e.matches);

  ngOnInit() {
    if (this.isBrowser) {
      this.mq = window.matchMedia('(min-width: 992px)');
      this.opened.set(this.mq.matches);
      this.mq.addEventListener('change', this.onChange);
    } else {
      this.opened.set(false);
    }
  }

  ngOnDestroy() {
    if (this.mq) this.mq.removeEventListener('change', this.onChange);
  }

  toggle() { this.opened.update(v => !v); }

  closeOnMobile() {
    if (this.isBrowser && this.mq && !this.mq.matches) this.opened.set(false);
  }
}