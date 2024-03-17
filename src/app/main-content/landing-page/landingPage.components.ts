import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <app-navbar class="navbar"></app-navbar>
        <h1 class='fontRaleway'>SAKURA RAMEN</h1>
        <h2 class='fontRaleway'>THE BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ['./landingPage.components.scss']
})

export class LandingPageComponents {}