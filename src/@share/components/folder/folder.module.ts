// Angular Imports
import { NgModule } from '@angular/core';
import { MatRippleModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';

// This Module's Components
import { FolderComponent } from './folder.component';

@NgModule({
  imports: [MatRippleModule, MatInputModule, CommonModule],
  declarations: [FolderComponent],
  exports: [FolderComponent]
})
export class FolderModule {}
