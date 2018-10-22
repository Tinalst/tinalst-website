import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {ShareModule} from '../share/share.module';
import { HeaderComponent } from './header/header.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { CardComponent } from './card/card.component';
import {PublicModule} from '../public/public.module';
import {ContactComponent} from './contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ShareModule,
        PublicModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        BlackboardComponent,
        AboutComponent,
        SkillsComponent,
        WorksComponent,
        CardComponent,
        ContactComponent
    ]
})
export class HomeModule { }
