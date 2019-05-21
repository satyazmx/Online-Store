import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [ MatCardModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            MatMenuModule,
            MatBadgeModule
          ],

  exports:[ MatCardModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            MatMenuModule,
            MatBadgeModule
          ]
})
export class MaterialmoduleModule { }
